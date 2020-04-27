echo off
title Core [Bot]
cls
echo Restart delay for Bot Core
timeout /t 3
cls
nodemon --ignore memory/ --ignore disabled/ --ignore config/
pause
