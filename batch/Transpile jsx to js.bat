cd ..

REM Capture the current directory
set "currentDir=%cd%"

call npx babel src/jsx --out-dir src/babelJSFiles

setlocal enabledelayedexpansion

REM Specify the directory relative to the current directory
set "directory=%currentDir%\src\babelJSFiles"

REM Debug: Print the directory path
echo Directory: %directory%

REM Change to the specified directory
pushd "%directory%"

REM Loop through all .js files in the directory and its subdirectories
for /r "%directory%" %%f in (*.js) do (
    REM Adds a blank line to the end of the file
    echo. >> "%%f"
)

REM Return to the original directory
popd

REM Change back to the original directory
cd /d "%currentDir%"

echo Blank lines added to all .js files in %directory%

echo If there are no errors, press Enter to continue...
pause

xcopy /e /i /y "%directory%\" "%currentDir%\src\js"
rmdir /s /q "%directory%"
