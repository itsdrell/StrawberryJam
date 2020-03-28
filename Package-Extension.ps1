# if it cant find vsce do this: npm install -g vsce

Set-Location (Split-Path $MyInvocation.MyCommand.Path)
Invoke-Expression -Command "vsce package"

# helpful links 
# https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions
# https://code.visualstudio.com/api/references/extension-manifest