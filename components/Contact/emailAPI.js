import emailjs from '@emailjs/browser';


const sendEmail = ({
  firstName,
  lastName,
  email,
  message,
  number
}) => {
  emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, {
    firstName, 
    lastName,
    email,
    message,
    number
    },
    process.env.EMAILJS_PUBLIC_KEY,                
  ) 
    .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
    console.log('FAILED...', error);
    });
}

export default sendEmail;