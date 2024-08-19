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
$password = $_POST['password'];

// التحقق من بيانات الاعتماد
$sql = "SELECT * FROM users WHERE email='$email'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo json_encode(['status' => 'success', 'message' => 'Logged in successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Incorrect password']);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'No account found']);
}

$conn->close();
?>
