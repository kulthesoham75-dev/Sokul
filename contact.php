<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "your-email@example.com"; // <-- apna email yahan daalo
    $subject = "New Contact Message from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)){
        echo "success";
    }else{
        echo "error";
    }
}
?>