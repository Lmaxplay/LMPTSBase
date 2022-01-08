param(
    [Parameter(Mandatory=$False)][System.Boolean][System.Int32]$tsskip=0,
    [Parameter(Mandatory=$False)][System.String]$file="",
    [Parameter(Mandatory=$False)][System.String]$tsconfig=""
)
Write-Output 'Lmaxplay TS-Run v1.0, all rights reserved, Licensed under the MIT License'
if ($tsskip) {
    Write-Output 'Skipping TypeScript compile due to arguments'
} else {
    Write-Output 'Running TypeScript compile'
    if ($tsconfig -eq "") {
        $tsconfig = "tsconfig.json"
    }
    tsc -p "$tsconfig" # Run TypeScript compile
    Write-Output 'TypeScript compile complete'
}
Write-Output 'Running node application'
if($file -eq "") {
    node app.js #Run app.js
} else {
    Write-Output "Running file $($file) using NodeJS"
    node "$($args[0])" #Run first argument
}
