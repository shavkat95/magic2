FOR /f "tokens=*" %%i IN ('docker ps -q') DO docker stop %%i

docker system prune --volumes -f

docker container prune -f

docker image prune -f

@REM docker stop my_project-db-1

@REM docker stop my_project-backend-1

@REM docker rm my_project-db-1

@REM docker rm my_project-backend-1

docker-compose -f ./docker-compose.yml up -d

cd backend

node app.js

pause
