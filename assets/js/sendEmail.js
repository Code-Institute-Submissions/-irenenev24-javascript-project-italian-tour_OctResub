  //===from Code Institute---
  
  function sendMail(contactForm) {
    emailjs.send("service_hgfgk8a", "italia", {
        "from_name": contactForm.firstname.value,
        "lastname": contactForm.lastname.value,
        "from_email": contactForm.email.value,
        "phone": contactForm.phone.value,
        "from": contactForm.from.value,
        "to": contactForm.to.value,
        "message": contactForm.message.value
    })
    .then(
        // Alert sent if email successful
        function(response) {
            alert("Your email has been sent, we will be in touch as soon as possible");
            // Page reloads after user clicks "ok" on alert box
            // Found on Stack Overflow, linked in README
            window.location.reload(true);
        },
        // Alert sent if email failed
        function(error) {
            alert("Your email was not sent, please try again");
            window.location.reload(true);
        }
    );
    return false;  // stops page reloading straight away
}