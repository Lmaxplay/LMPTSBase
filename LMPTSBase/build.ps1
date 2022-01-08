param(
    [Parameter(Mandatory=$False)][System.Boolean][System.Int32]$tsskip=0, # skips typescript compilation if set to anything but 0
    [Parameter(Mandatory=$False)][System.String]$file="", # file to run with node
    [Parameter(Mandatory=$False)][System.String]$tsconfig="", # tsconfig.json location
    [Parameter(Mandatory=$False)][System.Boolean][System.Int32]$strict=0 # enable --strict compiler option?
)

Write-Output 'Lmaxplay TS-Node build script v1.0, all rights reserved, Licensed under the MIT License' # TODO Update this bit to be more informative

# TypeScript compilation
if ($tsskip) {
    Write-Output 'Skipping TypeScript compiler due to arguments'
} else {
    Write-Output 'Running TypeScript compiler tsc'
    if ($tsconfig -eq "") {
        $tsconfig = "tsconfig.json"
    }
    if($strict) {
        $strictstring = '--strict';
    } else {
        $strictstring = '';
    }

    tsc -p "$tsconfig" $strictstring --allowJs # Run TypeScript compile
    Write-Output 'TypeScript compile complete'
}

# Setting up the filepath
if($file -eq "") {
    $appstring = 'app.js';
} else {
    $appstring = $file
}

# Actually running NodeJS
Write-Output "Running node application using js file $file";
node "$appstring"
