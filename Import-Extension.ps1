param
(
    $extensionFileName = "StrawberryJam-0.0.1.vsix"
)

# this is what we need to run
# code --install-extension my-extension-0.0.1.vsix

Set-Location (Split-Path $MyInvocation.MyCommand.Path)

$expression = "code --install-extension $extensionFileName"
Invoke-Expression -Command $expression