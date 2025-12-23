# Local Testing Guide

## Quick Setup Options

### Option 1: PHP Built-in Server (Easiest - No Installation)

**Requirements:** PHP installed on your computer

1. **Check if PHP is installed:**
   ```bash
   php -v
   ```
   If you see a version number, PHP is installed. If not, install PHP from [php.net](https://www.php.net/downloads.php)

2. **Navigate to your project folder:**
   ```bash
   cd C:\Users\tripa\Downloads\Business\omsai-trade-newwebsite
   ```

3. **Start PHP server:**
   ```bash
   php -S localhost:8000
   ```

4. **Open browser:**
   - Go to: `http://localhost:8000/index.html`
   - Or: `http://localhost:8000/home.html`
   - Test form: `http://localhost:8000/enquiry.html`

5. **To stop server:** Press `Ctrl+C` in the terminal

---

### Option 2: XAMPP (Recommended for Windows)

**Best for:** Full local development environment

1. **Download XAMPP:**
   - Go to: [https://www.apachefriends.org/](https://www.apachefriends.org/)
   - Download XAMPP for Windows
   - Install it (usually to `C:\xampp`)

2. **Start XAMPP:**
   - Open XAMPP Control Panel
   - Click "Start" for **Apache** (web server)
   - Click "Start" for **MySQL** (optional, not needed for this project)

3. **Copy your project:**
   - Copy your project folder to: `C:\xampp\htdocs\`
   - Or create a folder: `C:\xampp\htdocs\omsai-trade\`
   - Copy all your files there

4. **Access your website:**
   - Go to: `http://localhost/omsai-trade/index.html`
   - Or: `http://localhost/omsai-trade/enquiry.html`

5. **Test the form:**
   - Fill out the enquiry form
   - Submit it
   - Check if email would be sent (PHP mail() won't actually send emails locally, but you can see if it works)

---

### Option 3: Laragon (Modern Alternative)

**Best for:** Modern Windows development

1. **Download Laragon:**
   - Go to: [https://laragon.org/](https://laragon.org/)
   - Download and install

2. **Start Laragon:**
   - Open Laragon
   - Click "Start All"

3. **Copy your project:**
   - Copy to: `C:\laragon\www\omsai-trade\`

4. **Access:**
   - Go to: `http://omsai-trade.test/index.html`

---

## Testing the Form Locally

### Important Note About Email

**PHP `mail()` function won't actually send emails on localhost** because:
- No mail server configured locally
- Most local setups don't have SMTP configured

### How to Test Form Functionality

#### Method 1: Check PHP Errors
1. Open `send.php`
2. Add this at the top (after `<?php`):
   ```php
   error_reporting(E_ALL);
   ini_set('display_errors', 1);
   ```
3. Submit the form
4. Check for any PHP errors

#### Method 2: Debug Email Sending
Modify `send.php` to log results:

```php
// After line 47, add:
error_log("Email send attempt: " . ($_i ? "SUCCESS" : "FAILED"));
error_log("To: " . $_to);
error_log("Subject: " . $_subject);
```

#### Method 3: Use a Test Email Service
Temporarily modify `send.php` to use a test service or just display the email content:

```php
// Replace line 47 with:
$_i = true; // Force success for testing
// Display what would be sent:
echo "<pre>Email would be sent to: {$_to}\n";
echo "Subject: {$_subject}\n";
echo "Body:\n{$_body}</pre>";
```

---

## Step-by-Step Testing Checklist

1. ✅ **Start local server** (XAMPP, Laragon, or PHP built-in)
2. ✅ **Open website** in browser (`http://localhost:8000/index.html`)
3. ✅ **Navigate to enquiry form** (`http://localhost:8000/enquiry.html`)
4. ✅ **Fill out form:**
   - Name: Test User
   - Email: test@example.com
   - Phone: 1234567890
   - Company: Test Company
   - Address: Test Address
   - Message: This is a test message
5. ✅ **Submit form**
6. ✅ **Check result:**
   - Should see success message
   - Form should be replaced with message
   - No PHP errors should appear

---

## Troubleshooting

### "PHP not found" error
- Install PHP or use XAMPP/Laragon (includes PHP)

### "Page not found" error
- Check you're in the correct directory
- Verify file paths are correct
- Check server is running

### Form submits but nothing happens
- Check browser console (F12) for JavaScript errors
- Check PHP error logs
- Verify `send.php` is in the same directory as `enquiry.html`

### Email not sending
- **This is normal on localhost!** PHP mail() needs a mail server
- Test on your actual cPanel server for real email sending
- Use the debug methods above to verify form data is being received

---

## Quick Test Script

Create a file `test.php` in your project root:

```php
<?php
echo "<h1>PHP is working!</h1>";
echo "<p>PHP Version: " . phpversion() . "</p>";
echo "<p>Server: " . $_SERVER['SERVER_SOFTWARE'] . "</p>";

// Test mail function availability
if (function_exists('mail')) {
    echo "<p style='color:green;'>✓ mail() function is available</p>";
} else {
    echo "<p style='color:red;'>✗ mail() function is NOT available</p>";
}
?>
```

Access: `http://localhost:8000/test.php`

---

## Next Steps

Once local testing works:
1. ✅ Upload to cPanel
2. ✅ Test on live server
3. ✅ Verify emails are actually being sent
4. ✅ Check spam folder if emails don't arrive

