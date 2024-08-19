<?php
// اتصال بقاعدة البيانات
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "database_name";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// الحصول على البيانات من الطلب
$email = $_POST['email'];
$password = $_POST['password']; // تأكد من تخزين كلمة المرور بشكل آمن في قاعدة البيانات

// التحقق مما إذا كان هناك حساب موجود بالفعل
$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo json_encode(['status' => 'error', 'message' => 'Account already exists']);
} else {
    // إنشاء حساب جديد
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);
    $sql = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['status' => 'success', 'message' => 'Registration successful']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error registering']);
    }
}

$conn->close();
?>
