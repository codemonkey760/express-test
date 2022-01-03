## express-test

Messin' around with express.js

### Database Setup
1 Install a mysql server and start it (I used version 8.0)

2 Create a database for this application and remember its name `{database_name}`

3 Create a user `{user_name}` for this application and grant it all privileges to `{database_name}`

4 Open a terminal and set the working dir to `{project_root}/database`

5 Run the command `mysql -h localhost -p -u {user_name} {database_name} < setup.sql` be prepared to enter the password

6 Run the command `mysql -h localhost -p -u {user_name} {database_name} < seed.sql` be prepared to enter the password

7 Update the `.env` file with the relevant database values so that the application can connect to the database
