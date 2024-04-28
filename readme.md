# To Run
- Clone the repo
- create the .env file with the following info
```
PORT=5000
mongodbConnectionString="<Your mongo db connection string"
jwtSecret="" 
```
- U can generate ur jwtsecret with following commnad `$ openssl rand -base64 32` in bash
- install the dependencies by navigating to the folder `backend` and `fronend` with the command `npm i`
- To run the backned and frondend server navigate to the respective folder and use the command `npm run dev`
