cd ..

call npx webpack --config webpack.config.js

REM Append a blank line at the end of the file
(echo. >> "dist\js\main.bundle.min.js")

echo Blank line added to main.bundle.min.js
pause
