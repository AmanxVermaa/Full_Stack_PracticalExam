const express = require("express");
const app = express();
const PORT = 3000;

let users = [];

app.use(express.json());

app.use((req, res, next) => {
    console.log("Request received at:", new Date().toLocaleString());
    console.log(req.method, req.url);
    next();
});


// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Server Running",
        time: new Date().toLocaleString()
    });
});


//USERS ROUTES

// Get all users
app.get("/users", (req, res) => {
    res.json({
        message: "Users fetched successfully",
        users: users,
        time: new Date().toLocaleString()
    });
});


// Add new user
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.json({
            message: "Name and email required",
            time: new Date().toLocaleString()
        });
    }

    // check duplicate email
    let existingUser = users.find((user) => user.email === email);

    if (existingUser) {
        return res.json({
            message: "Email already exists",
            time: new Date().toLocaleString()
        });
    }

    let newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.json({
        message: "User added successfully",
        user: newUser,
        time: new Date().toLocaleString()
    });
});


// Delete user
app.delete("/users/:id", (req, res) => {
    let id = parseInt(req.params.id);

    let userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
        return res.json({
            message: "User not found",
            time: new Date().toLocaleString()
        });
    }

    users.splice(userIndex, 1);

    res.json({
        message: "User deleted successfully",
        time: new Date().toLocaleString()
    });
});


// LOGIN ROUTE

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.json({
            message: "All fields required",
            time: new Date().toLocaleString()
        });
    }

    if (email === "admin@gmail.com" && password === "1234") {
        return res.json({
            message: "Login Success",
            time: new Date().toLocaleString()
        });
    } else {
        return res.json({
            message: "Invalid Credentials",
            time: new Date().toLocaleString()
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});