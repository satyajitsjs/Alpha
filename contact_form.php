<?php
header('Content-Type: application/json');

// Check if all fields are set and not empty
if (
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['mobile']) && !empty($_POST['mobile']) &&
    isset($_POST['subject']) && !empty($_POST['subject']) &&
    isset($_POST['message']) && !empty($_POST['message'])
) {
    // Sanitize input data
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $mobile = htmlspecialchars($_POST['mobile']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Compose email
    $to = "alpha.zeros.2023@gmail.com";
    $subject_email = "New Contact Form Message: $subject";
    $body = "Name: $name\nEmail: $email\nMobile: $mobile\nMessage:\n$message";
    $headers = "From: $email";

    // Send email to site admin
    if (mail($to, $subject_email, $body, $headers)) {
        // Success response
        echo json_encode(["success" => true, "message" => "Message sent successfully."]);
    } else {
        // Failure response
        echo json_encode(["success" => false, "message" => "Failed to send message."]);
    }

    // Also send email confirmation to the user
    mail($email, "Thank you for contacting us", "We have received your message.", $headers);
} else {
    // Return an error if any fields are missing
    echo json_encode(["success" => false, "message" => "All fields are required."]);
}
?>
