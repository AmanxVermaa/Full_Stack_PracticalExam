# Full_Stack_PracticalExam

PRACTICAL TASK: MINI USER API (40 MINUTES)

OBJECTIVE  
Create a simple backend API using Express that demonstrates routing, middleware, and basic authentication.

------------------------------------------------------------

INSTRUCTIONS

Build a Node.js + Express application with the following features:

------------------------------------------------------------

1. SERVER SETUP

- Create an Express server  
- Run on port 3000  
- Create a route:

GET / → return "Server Running"

------------------------------------------------------------

2. USER ROUTES

Create a /users API with the following:

GET /users  
Return all users  

POST /users  
Add a new user  

DELETE /users/:id  
Delete a user by ID  

Use this structure for user data:

{
  name: "Sample Name",
  email: "sample@email.com"
}

You can store data in a simple array:

let users = [];

IMPORTANT CONDITIONS:

- Do not allow duplicate emails  
- If name or email is missing, return an error message  
- While deleting, if user not found → return "User not found"

------------------------------------------------------------

3. MIDDLEWARE

Create a custom middleware that:

- Runs on every request  
- Logs the message:

Request received at: CURRENT_TIME  

ADDITIONAL CONDITION:

- Also log request method and URL  
  Example: GET /users

------------------------------------------------------------

4. LOGIN ROUTE (BASIC AUTHENTICATION)

Create a route:

POST /login

Input:

email  
password  

Check with hardcoded values:

email: admin@gmail.com  
password: 1234  

Output:

If correct → "Login Success"  
If incorrect → "Invalid Credentials"

ADDITIONAL CONDITION:

- If email or password is missing → return "All fields required"

------------------------------------------------------------

5. RESPONSE FORMAT

All responses should be in JSON format like:

{
  message: "Operation successful",
  time: "current time"
}

------------------------------------------------------------

6. BONUS CHALLENGE (OPTIONAL)

- Add a new route:

GET /users/:id  

Return only that specific user  

If not found → return "User not found"

------------------------------------------------------------

NOTES

- Keep code clean and properly structured  
- Use express.json() middleware  
- No frontend required  
- Test using Postman or browser  

------------------------------------------------------------

EXPECTED OUTCOME

A working Express API with:

- Functional routes  
- Proper error handling  
- Middleware logging with method and URL  
- Basic login system  
- Clean JSON responses  

------------------------------------------------------------
