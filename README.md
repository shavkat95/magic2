# magic2

# to start the db: 
"mkdir db/volume"
"docker-compose up" 
while in root-dir
(with docker installed & running)

# start backend:
"cd backend"
"npm install"
"node app.js"

# start frontend:
set up backend_url in frontend/env.js
"cd frontend"
"npm run dev"

