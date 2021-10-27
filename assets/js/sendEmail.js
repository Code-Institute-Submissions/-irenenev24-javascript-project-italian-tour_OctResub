//---mix of code institute and stack overflow-------
function sendMail(contactForm) {
    emailjs.send("service_r19yrpd", "italia", {
        "from_first": contactForm.first.value,
        "from_last": contactForm.last.value,
        "from_email": contactForm.email.value,
        "from_number": contactForm.number.value,
        "from_message": contactForm.message.value
      })
      .then(
        function (response) {
          console.log("Message sent succesfully", response);
          document.getElementById("contactForm").reset();
          document.getElementById("onSubmitText").innerText = "Your message has been sent!";
        },
        function (error) {
          console.log("Message not sent", error);
          document.getElementById("onSubmitText").innerText = "Please ensure that all fields are filled in correctly";
          document.getElementById("onSubmitText").style.color = "red";
        }
      );
    return false;
  }