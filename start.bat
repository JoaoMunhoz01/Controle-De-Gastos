@echo off

git clone https://github.com/JoaoMunhoz01/Controle-De-Gastos.git

cd Controle-De-Gastos

cd Api-Banco-Postgres

set PGUSER=postgres
set PGPASSWORD=postgres

createdb -U postgres -h localhost -p 5432 controlegastos

start /b startAPI.bat


cd ..

cd Front
start /b startFront.bat

cd ..

start /b chrome http://localhost:2002