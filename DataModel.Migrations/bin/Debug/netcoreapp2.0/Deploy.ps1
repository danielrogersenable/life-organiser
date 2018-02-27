param(
    $AssemblyName = "DataModel.Migrations",

    $AssemblyFile = "$AssemblyName.dll",

    $StartupAssemblyFile = $AssemblyFile,

    $DependenciesFile = "$AssemblyName.deps.json",

    [string[]]
    $AdditionalProbingPaths = $null,

    $FrameworkVersion = "2.0.0",

    $TargetMigration = "",

    $RootNamespace = $AssemblyName,

    $DbContextName = "AppDbContext",

    $DotNetExePath = "C:\Program Files\dotnet\dotnet.exe"
)

Set-StrictMode -Version Latest

$DotNetExeArgs =
    "exec",
    "--depsfile", $DependenciesFile,
    "--additionalprobingpath", "$env:USERPROFILE\.nuget\packages",
    "--additionalprobingpath", "C:\Program Files\dotnet\sdk\NuGetFallbackFolder"

if ($AdditionalProbingPaths) {
    foreach ($Path in $AdditionalProbingPaths) {
        $DotNetExeArgs += "--additionalprobingpath", $Path
    }
}

$DotNetExeArgs +=
    "--fx-version", $FrameworkVersion,
    ".\ef.dll", "database", "update", $TargetMigration,
    "--verbose",
    "--no-color",
    "--assembly", $AssemblyFile,
    "--startup-assembly", $StartupAssemblyFile,
    "--root-namespace", $AssemblyName,
    "--context", $DbContextName

Write-Host "$DotNetExePath $DotNetExeArgs"

& $DotNetExePath $DotNetExeArgs
