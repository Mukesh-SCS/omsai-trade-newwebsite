<?php
/**
 * Quick PHP Test Script
 * Access this file to verify PHP is working on your local server
 * URL: http://localhost:8000/test.php
 */

echo "<!DOCTYPE html>";
echo "<html><head><title>PHP Test</title>";
echo "<style>body{font-family:Arial;padding:20px;background:#f5f5f5;}";
echo ".success{color:green;font-weight:bold;}";
echo ".error{color:red;font-weight:bold;}";
echo ".info{background:white;padding:15px;margin:10px 0;border-radius:5px;}</style>";
echo "</head><body>";

echo "<h1>🔧 PHP Environment Test</h1>";

// PHP Version
echo "<div class='info'>";
echo "<h2>PHP Information</h2>";
echo "<p><strong>PHP Version:</strong> " . phpversion() . "</p>";
echo "<p><strong>Server Software:</strong> " . (isset($_SERVER['SERVER_SOFTWARE']) ? $_SERVER['SERVER_SOFTWARE'] : 'Unknown') . "</p>";
echo "</div>";

// Check mail function
echo "<div class='info'>";
echo "<h2>Email Function Check</h2>";
if (function_exists('mail')) {
    echo "<p class='success'>✓ mail() function is AVAILABLE</p>";
    echo "<p>You can use send.php for email functionality</p>";
} else {
    echo "<p class='error'>✗ mail() function is NOT available</p>";
    echo "<p>You may need to configure PHP or use an alternative email service</p>";
}
echo "</div>";

// Check if send.php exists
echo "<div class='info'>";
echo "<h2>File Check</h2>";
if (file_exists('send.php')) {
    echo "<p class='success'>✓ send.php exists</p>";
} else {
    echo "<p class='error'>✗ send.php not found</p>";
}

if (file_exists('enquiry.html')) {
    echo "<p class='success'>✓ enquiry.html exists</p>";
} else {
    echo "<p class='error'>✗ enquiry.html not found</p>";
}
echo "</div>";

// Test form data (if submitted)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "<div class='info'>";
    echo "<h2>Form Data Test</h2>";
    echo "<p><strong>POST data received:</strong></p>";
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";
    echo "</div>";
}

// Quick form test
echo "<div class='info'>";
echo "<h2>Quick Form Test</h2>";
echo "<form method='POST' action='test.php'>";
echo "<p><input type='text' name='test_name' placeholder='Your Name' required></p>";
echo "<p><input type='email' name='test_email' placeholder='Your Email' required></p>";
echo "<p><button type='submit'>Test Form Submission</button></p>";
echo "</form>";
echo "</div>";

echo "<div class='info'>";
echo "<h2>📝 Next Steps</h2>";
echo "<ol>";
echo "<li>If mail() is available, test the enquiry form: <a href='enquiry.html'>enquiry.html</a></li>";
echo "<li>Check the main page: <a href='index.html'>index.html</a></li>";
echo "<li>Check the modern homepage: <a href='home.html'>home.html</a></li>";
echo "</ol>";
echo "</div>";

echo "</body></html>";
?>

