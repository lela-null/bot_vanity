echo off
title Vanity [Bot]
cls
echo Restart delay for Vanity [Bot]
timeout /t 3
cls
nodemon --ignore memory/ --ignore disabled/ --ignore config/
pause
