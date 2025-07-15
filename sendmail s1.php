<?php

$fname = isset($_POST['ชื่อ']) ? $_POST['ชื่อ'] : '';
$lname = isset($_POST['นามสกุล']) ? $_POST['นามสกุล'] : '';
$phone = isset($_POST['เบอร์โทร']) ? $_POST['เบอร์โทร'] : '';
$email = isset($_POST['อีเมล']) ? $_POST['อีเมล'] : '';
$age = isset($_POST['อายุ']) ? $_POST['อายุ'] : '';
$gender = isset($_POST['เพศ']) ? $_POST['เพศ'] : '';
$note = isset($_POST['หมายเหตุ']) ? $_POST['หมายเหตุ'] : '';
$source = $_POST['source'] ?? 'เเผนประกันสุขภาพเหมาจ่าย';
$source_p = $_POST['source_p'] ?? 'เเผนประกันสุขภาพเหมาจ่าย';

// ส่งอีเมล
$to = "ratsarin.maimai@gmail.com";
$subject = "สนใจประกันจาก $source";
$body = "ชื่อ: $fname\nนามสกุล: $lname\nบริการ: $source_p\nเบอร์โทร: $phone\nอีเมล: $email\nอายุ: $age\nเพศ: $gender\nหมายเหตุ: $note\n";

$headers = "From: no-reply@yourdomain.com";

if (mail($to, $subject, $body, $headers)) {
    echo '
    <div style="
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        background-color: #e6ffed;
        border: 2px solid #34c759;
        color: #1c7c43;
        font-family: sans-serif;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        text-align: center;
    ">
        <h2 style="margin-bottom: 10px;">✅ ส่งอีเมลเรียบร้อยแล้ว!</h2>
        <p>ขอบคุณที่กรอกแบบฟอร์ม เราจะติดต่อกลับโดยเร็วที่สุดค่ะ</p>
        <a href="index.html" style="margin-top: 15px; display: inline-block; text-decoration: none; color: #fff; background: #28a745; padding: 10px 20px; border-radius: 5px;">กลับหน้าหลัก</a>
    </div>';
} else {
    echo '
    <div style="
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        background-color: #ffe6e6;
        border: 2px solid #ff4d4d;
        color: #a94442;
        font-family: sans-serif;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        text-align: center;
    ">
        <h2 style="margin-bottom: 10px;">❌ ส่งอีเมลไม่สำเร็จ</h2>
        <p>กรุณาลองใหม่อีกครั้ง หรือแจ้งผู้ดูแลระบบ</p>
        <a href="javascript:history.back()" style="margin-top: 15px; display: inline-block; text-decoration: none; color: #fff; background: #dc3545; padding: 10px 20px; border-radius: 5px;">ย้อนกลับ</a>
    </div>';
}
?>
