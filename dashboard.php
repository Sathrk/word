<?php
// /storage/emulated/0/s/dashboard.php

// Initialize the session
session_start();

// Check if the user is logged in, if not then redirect him to login page
if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dashboard</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .welcome-message {
            padding: 30px;
            text-align: center;
        }
        .logout-btn {
            display: inline-block;
            padding: 10px 20px;
            background-color: #dc3545;
            color: white;
            text-decoration: none;
            border-radius: 4px;
            margin-top: 20px;
            transition: background-color 0.3s;
        }
        .logout-btn:hover {
            background-color: #c82333;
        }
        .wrapper {
            width: 500px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="welcome-message">
            <h1>Welcome, **<?php echo htmlspecialchars($_SESSION["username"]); ?>**!</h1>
            <p>You have successfully logged in to the Stock Website Dashboard.</p>
            <a href="logout.php" class="logout-btn">Log Out</a>
        </div>
    </div>
</body>
</html>