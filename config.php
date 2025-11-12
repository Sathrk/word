<?php
// /storage/emulated/0/s/config.php

/**
 * Database Configuration and Connection
 */

// Database credentials
define('DB_SERVER', 'sql100.infinityfree.com');
define('DB_USERNAME', 'if0_40294532');
define('DB_PASSWORD', 'AYgK3SmvdMWMf');
define('DB_NAME', 'if0_40294532_world');
define('DB_PORT', '3306');

// DSN (Data Source Name) string
$dsn = "mysql:host=" . DB_SERVER . ";port=" . DB_PORT . ";dbname=" . DB_NAME;

// Attempt to connect to MySQL database
try {
    $pdo = new PDO($dsn, DB_USERNAME, DB_PASSWORD);
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    // Stop script execution and display an error message
    die("ERROR: Could not connect. " . $e->getMessage());
}
?>