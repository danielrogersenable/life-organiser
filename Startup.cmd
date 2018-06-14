set batchPath=%~dp0

start powershell -NoExit -Command "$Host.UI.RawUI.WindowTitle='Auth API'; Set-Location \"%batchPath%"; Set-Location \"src/TaskApi\"; dotnet watch run"
start powershell -NoExit -Command "$Host.UI.RawUI.WindowTitle='Auth API'; Set-Location \"%batchPath%"; Set-Location \"src/Web.Ui\"; npm start"
