//---mix of code institute and stack overflow-------
// to send to relevant email service with relevant content
function sendMail(contactForm) {
    emailjs.send("service_r19yrpd", "italia", {
        "from_first": contactForm.first.value,//retrives first name
        "from_last": contactForm.last.value,//retrives last name
        "from_email": contactForm.email.value,//retrives email
        "from_number": contactForm.number.value,//retrives phone number
        "from_message": contactForm.message.value//retrives message
      });
    return;
}
