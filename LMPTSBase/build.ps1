param(
    [Parameter(Mandatory=$False)][System.Boolean]$tsskip=0, # skips typescript compilation if set to anything but 0
    [Parameter(Mandatory=$False)][System.String]$file="", # file to run with node
    [Parameter(Mandatory=$False)][System.String]$tsconfig="", # tsconfig.json location
    [Parameter(Mandatory=$False)][System.Boolean]$strict=0, # enable --strict compiler option?
    [Parameter(Mandatory=$False)][System.Boolean]$s=0
)

try {

$PreviousColor = $Host.UI.RawUI.ForegroundColor # Store previous foreground color, so we can restore it
$Host.UI.RawUI.ForegroundColor = 'Green'
Write-Output 'Lmaxplay TS-Node build script v1.0.2' 'Licensed under the MIT License' 'Copyright 2022 Lmaxplay' # TODO Update this bit to be more informative
$Host.UI.RawUI.ForegroundColor = $PreviousColor # Restore the previous foreground color

# TypeScript compilation
if ($tsskip) {
    Write-Output 'Skipping TypeScript compiler due to arguments'
} else {
    $sw = [Diagnostics.Stopwatch]::StartNew()
    Write-Output 'Running TypeScript compiler tsc'
    if ($tsconfig -eq "") {
        $tsconfig = "tsconfig.json"
    }
    if($strict) {
        $strictstring = '--strict'; # Enable strict mode, so add --strict to the arguments
    } else {
        $strictstring = ''; # Don't enable strict mode, thus leave it empty
    }

    $tsctime = Measure-Command {tsc -p "$tsconfig" $strictstring | Out-Default} # Run TypeScript compile
    $tsctimes = $tsctime.Seconds.ToString() + "." + $tsctime.Milliseconds.ToString()
    Write-Output 'TypeScript compile complete' "Compile took $tsctimes seconds"
}

# Setting up the filepath
if($file -eq "" -or $file -eq "default") {
    $appstring = 'app.js';
} else {
    $appstring = $file
}

# Actually running node.js
Write-Output "Running js file $appstring using node.js" "";
node "$appstring"
Write-Output "node.js exited with code $LastExitCode" # Print exit code

} catch {
    Write-Output "An error occured" "$Error"
}
