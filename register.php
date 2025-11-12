<?php
// /storage/emulated/0/s/register.php

// Start session
session_start();

// Check if the user is already logged in, if so redirect to dashboard
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] === true) {
    header("location: dashboard.php");
    exit;
}

// Include database configuration
require_once "config.php";

// Define variables and initialize with empty values
$username = $email = $password = "";
$username_err = $email_err = $password_err = "";

// Processing form data when form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // 1. Validate Username
    if (empty(trim($_POST["username"]))) {
        $username_err = "Please enter a username.";
    } else {
        // Prepare a select statement to check if username already exists
        $sql = "SELECT id FROM users WHERE username = :username";
        
        if ($stmt = $pdo->prepare($sql)) {
            // Bind variables to the prepared statement as parameters
            $stmt->bindParam(":username", $param_username, PDO::PARAM_STR);
            
            // Set parameters
            $param_username = trim($_POST["username"]);
            
            // Attempt to execute the prepared statement
            if ($stmt->execute()) {
                if ($stmt->rowCount() == 1) {
                    $username_err = "This username is already taken.";
                } else {
                    $username = trim($_POST["username"]);
                }
            } else {
                echo "Oops! Something went wrong. Please try again later.";
            }
            
            // Close statement
            unset($stmt);
        }
    }
    
    // 2. Validate Email
    if (empty(trim($_POST["email"]))) {
        $email_err = "Please enter an email.";
    } else {
        // Simple email format validation (can be more complex with filter_var)
        $email = trim($_POST["email"]);
    }

    // 3. Validate Password
    if (empty(trim($_POST["password"]))) {
        $password_err = "Please enter a password.";     
    } elseif (strlen(trim($_POST["password"])) < 6) {
        $password_err = "Password must have at least 6 characters.";
    } else {
        $password = trim($_POST["password"]);
    }
    
    // Check input errors before inserting in database
    if (empty($username_err) && empty($email_err) && empty($password_err)) {
        
        // Prepare an insert statement
        $sql = "INSERT INTO users (username, email, password) VALUES (:username, :email, :password)";
        
        if ($stmt = $pdo->prepare($sql)) {
            // Bind parameters
            $stmt->bindParam(":username", $param_username, PDO::PARAM_STR);
            $stmt->bindParam(":email", $param_email, PDO::PARAM_STR);
            $stmt->bindParam(":password", $param_password, PDO::PARAM_STR);
            
            // Set parameters
            $param_username = $username;
            $param_email = $email;
            // Hash the password for secure storage
            $param_password = password_hash($password, PASSWORD_DEFAULT); 
            
            // Attempt to execute the prepared statement
            if ($stmt->execute()) {
                // Redirect to login page
                header("location: login.php");
                exit;
            } else {
                echo "Something went wrong. Please try again later.";
            }

            // Close statement
            unset($stmt);
        }
    }
    
    // Close connection
    unset($pdo);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrapper">
        <h2>Register</h2>
        <p>Please fill this form to create an account.</p>
        
        <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
            
            <div class="form-group">
                <label>Username</label>
                <input type="text" name="username" value="<?php echo $username; ?>">
                <?php if(!empty($username_err)) echo '<div class="error-message">' . $username_err . '</div>'; ?>
            </div>    
            
            <div class="form-group">
                <label>Email</label>
                <input type="email" name="email" value="<?php echo $email; ?>">
                <?php if(!empty($email_err)) echo '<div class="error-message">' . $email_err . '</div>'; ?>
            </div>
            
            <div class="form-group">
                <label>Password</label>
                <input type="password" name="password">
                <?php if(!empty($password_err)) echo '<div class="error-message">' . $password_err . '</div>'; ?>
            </div>
            
            <div class="form-group">
                <input type="submit" class="btn-primary" value="Register">
            </div>
            
            <p class="link-text">Already have an account? <a href="login.php">Login here</a>.</p>
        </form>
    </div>    
</body>
</html>