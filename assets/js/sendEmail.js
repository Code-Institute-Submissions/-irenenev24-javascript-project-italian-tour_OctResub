//---mix of code institute and stack overflow-------
function sendMail(contactForm) {
    emailjs.send("service_r19yrpd", "italia", {
        "from_first": contactForm.first.value,
        "from_last": contactForm.last.value,
        "from_email": contactForm.email.value,
        "from_number": contactForm.number.value,
        "from_message": contactForm.message.value
      })
  return;
}
