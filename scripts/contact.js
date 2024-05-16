// $("#formValidation").validate({
//     rules:{
//         name:{
//             minlength:2
//         },
//         email:{
//             email:true
//         }
//     },
//     message:{
//        name:{
//         required:"Enter Your name!",
//         minlength:"Please enter atlest 2 characters."
//        },
//        email:"Enter Your Email!",
//        message:"Enter Your Message"
//     },

//     submitHandler:function(form){
//         form.submit();
//     }
// });
// function validateForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message").value;

//     // Check if any field is empty
//     if (name == "" || email == "" || message == "") {
//       alert("All fields must be filled out");
//       return false;
//     }

//     // Check email format using regex
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address");
//       return false;
//     }
//     alert("Form Submitted Sucessfully");
//     // Call function to send mail
    
//     // Prevent form submission
//     return false;
//   }
document.getElementById('gform').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Perform form validation
  if (validateForm()) {
      // If form is valid, send email
      sendEmail();
  }
});

function validateForm() {
  // Basic validation - check if fields are not empty
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var message = document.getElementById('message').value.trim();

  if (name === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return false;
  }

  // Email validation - check if email is valid format
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  return true;
}

function sendEmail() {
  // Get form data
  const form = document.getElementById('gform');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = "Please wait..."
  
      fetch('https://api.web3forms.com/submit', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              },
              body: json
          })
          .then(async (response) => {
              let json = await response.json();
              if (response.status == 200) {
                  result.innerHTML = json.message;
              } else {
                  console.log(response);
                  result.innerHTML = json.message;
              }
          })
          .catch(error => {
              console.log(error);
              result.innerHTML = "Something went wrong!";
          })
          .then(function() {
              form.reset();
              setTimeout(() => {
                  result.style.display = "none";
              }, 3000);
          });
  });
    }