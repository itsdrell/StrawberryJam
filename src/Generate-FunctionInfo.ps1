<#


#>

param
(
    [string] $GuidePath = "D:\Projects\Strawberry\Strawberry\Run_Win32\Data\StrawberryGuide.txt",
    [string] $OutputPath = "DefinedFunctionDefinitions.ts"
)

#-----------------------------------------------------------------------------------
# Local Globals
#-----------------------------------------------------------------------------------
[string] $script:ResultContent = ""

#-----------------------------------------------------------------------------------
# Local functions
#-----------------------------------------------------------------------------------
function script:Get-StringsFromFile()
{
    param
    (
        [string] $path
    )

    Write-Output -InputObject (Get-Content -Path $path)
}

function script:Parse-Guide()
{
    param
    (
        $Content
    )

    for([int] $lineIndex = 0; $lineIndex -lt $Content.Length; $lineIndex++)
    {
        $currentLine = $Content[$lineIndex]
        if($currentLine.Contains('['))
        {
            while($currentLine.Contains(']') -eq $false)
            {
                $lineIndex = (Parse-Function -Index ($lineIndex + 1) -Content $Content)
                $currentLine = $Content[$lineIndex]
                Add-ContentToResult -whatToAdd "`r`n"
            }
        }
    }
}

function script:Parse-Function()
{
    param
    (
        [int] $Index,
        $Content
    )

    # parse the first line breaking up the FunctionName(signature)
    [string] $currentLine = $Content[$Index]
    Handle-FunctionName -Line $currentLine
    Handle-Signature -Line $currentLine
    
    [int] $linesRead = 1
    $currentLine = $Content[$Index + $linesRead]
    while(($currentLine -ne "") -and ($currentLine.Contains("]") -eq $false))
    {
        $currentLine = $currentLine.Trim()

        # HACK: just doing for v1, pls figure a better solution later
        # ' break the string because we are outputing with ' ' instead of " "
        $currentLine = $currentLine.Replace("'","")

        #Write-Host "Current Line: " $currentLine

        # if it starts with - descrption
        if($currentLine[0] -eq "-")
        {
            Handle-Description -Line $currentLine
        }
        
        # if it starts with * its param
        if($currentLine[0] -eq "*")
        {
            Handle-Param -Line $currentLine
        }

        # if it starts with < its return
        if($currentLine[0] -eq "<")
        {
            Handle-ReturnValue -Line $currentLine
        }
        
        $linesRead++
        $currentLine = $Content[$Index + $linesRead]
    }

    Write-Output -InputObject ($Index + $linesRead)
}

function script:Handle-FunctionName()
{
    param 
    (
        [string] $Line
    )

    $trimmedString = $Line.Trim()

    $endPoint = $trimmedString.IndexOf("(")
    $functionName = $trimmedString.Substring(0, $endPoint)
    Write-Host $functionName

    # Add to file
    $content = ("var temp = new FunctionDefinition('{0}');" -f $functionName)
    Add-ContentToResult -whatToAdd $content
}

function script:Handle-Signature
{
    param 
    (
        [string] $Line
    )

    $start = $Line.IndexOf("(") + 1
    $end = $Line.IndexOf(")")
    $signature = $Line.Substring($start, $end - $start)
    
    if($signature -eq "()")
    {
        $signature = ""
        return
    }
    Write-Host $signature
    
    #add to file
    $content = ("temp.AddSignature('{0}');" -f $signature)
    Add-ContentToResult -whatToAdd $content
}

function script:Handle-Description
{
    param 
    (
        [string] $Line
    )
    
    $description = $Line.Substring(2, $Line.Length - 2)
    Write-Host "desc: $description"

    # add to file
    $content = ("temp.AddSummary('{0}');" -f $description)
    Add-ContentToResult -whatToAdd $content
}

function script:Handle-Param
{
    param 
    (
        [string] $Line
    )

    $param = $Line.Substring(2, $Line.Length - 2)
    Write-Host "param: $param"

    $content = ("temp.AddParam('{0}');" -f $param)
    Add-ContentToResult -whatToAdd $content
}

function script:Handle-ReturnValue
{
    param 
    (
        [string] $Line
    )

    $returnValue = $Line.Substring(2, $Line.Length - 2)
    Write-Host "return: $returnValue"

    $content = ("temp.AddReturn('{0}');" -f $returnValue)
    Add-ContentToResult -whatToAdd $content
}

function script:Add-ContentToResult
{
    param 
    (
        [string] $whatToAdd
    )

    $script:ResultContent += ($whatToAdd + "`r`n")
}

function script:Put-HeaderInResult
{
    $header = "import { FunctionDefinition } from './FunctionDefinition'; `r`n`r`nfunction CreateAllDefinitions() `r`n{ `r`n "
    Add-ContentToResult -whatToAdd $header
}

function script:Put-FooterInResult
{
    $footer = "} `r`n`r`nexport {CreateAllDefinitions};"
    Add-ContentToResult -whatToAdd $footer
}

function script:Put-ContentInFile
{
    $currentDir = Split-Path $script:MyInvocation.MyCommand.Path 
    $fullPath = "$currentDir\$OutputPath"
    Write-Host "Putting the file here: $fullPath"
    Set-Content -Path $fullPath -Value $script:ResultContent
}


#-----------------------------------------------------------------------------------
# Start of script
#-----------------------------------------------------------------------------------
Write-Host "Starting"
script:Put-HeaderInResult
Parse-Guide -Content (Get-StringsFromFile -path $GuidePath)
script:Put-FooterInResult
script:Put-ContentInFile



#  var temp = new FunctionDefinition("");
#  temp.AddSummary("");
#  temp.AddSignature("");
#  temp.AddParam("");
#  temp.AddParam("");
#  temp.AddParam("");
#  temp.AddParam("");
#  temp.AddParam("");