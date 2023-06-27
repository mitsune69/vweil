const sendBtn = document.querySelector(".btn");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error");

const inputEl = document.querySelector(".input-field");

const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const timeoutFunc = setInterval(() => {
  errorMsg.style.display = "none";
  errorIcon.style.display = "none";
}, 2000);

sendBtn.addEventListener("click", function () {
  if (inputEl.value.length === 0 || !inputEl.value.match(emailValidation)) {
    errorMsg.style.display = "inline";
    errorIcon.style.display = "inline";
    errorMsg.textContent = "Please provide a valid email address";
    return timeoutFunc;
  } else {
    errorMsg.style.display = "inline";
    errorMsg.style.color = "green";
    errorMsg.textContent = "Thank you for subscribing to our newsletter!";
    // upload to database
    var Airtable = require('airtable');
    var base = new Airtable({apiKey: 'patAbfwyNwXarHoxf.8fdba95bc847352b056ba0b5009240714c1f077726fd7d0c888f3e8221f7c46b'}).base('appVlUGs2UNjwac7A');

    base('singletap').create([
    {
      "fields": {
      "Name": inputEl.value
      }
    },

    ], function(err, records) {
      if (err) {
      console.error(err);
      return;
      }
    });

    return timeoutFunc;
  }
});
