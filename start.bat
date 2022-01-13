@echo off

@"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"

choco upgrade chocolatey

choco install --confirm git

git clone https://github.com/JoaoMunhoz01/Controle-De-Gastos.git

cd Controle-De-Gastos

cd Api-Banco-Postgres
start /b startAPI.bat

cd ..

cd Front
start /b startFront.bat

cd ..

start /b chrome http://localhost:2002