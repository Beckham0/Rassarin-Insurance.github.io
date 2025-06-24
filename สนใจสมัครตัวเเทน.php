<?php
$to = "youremail@example.com";

$name = addcslashes($_POST['ชื่อ']);
$name = addcslashes($_POST['นามสกุล']);
$email = addcslashes($_POST['อีเมล']);
$old = addcslashes($_POST['อายุ']);
$sex = addcslashes($_POST['เพศ']);
$date = addcslashes($_POST['วันที่']);
$tiam = addcslashes($_POST['เวลา']);
$message = addcslashes($_POST['หมายเหตุ']);

$subject = "สนใจสมัครเป็นตัวเเทน $name";
$body .= "ชื่อ: $name\n";
$body .= "นามสกุล: $name\n";
$body .= "เบอร์โทร: $phone\n";
$body .= "อีเมล: $email\n";
$body .= "อายุ: $old\n";
$body .= "เพศ: $sex\n";
$body .= "สะดวกให้ติดต่อกลับ";
$body .= "วันที่: $date\n";
$body .= "เวลา: $tiam\n";
$body .= "หมายเหตุ: $message\n";

$headers = "From: $to";

if (mail($to, $subject, $body, $headers)) {
    echo "ส่งอีเมลเรียบร้อยแล้ว ขอบคุณค่ะ!";
} else {
    echo "เกิดข้อผิดพลาดในการส่งอีเมล";
}
?>
