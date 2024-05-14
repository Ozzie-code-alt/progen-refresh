import emailjs from '@emailjs/browser';


const sendEmail = ({
  from_email,
  from_name,
  to_name,
  user_email,
  message,
  number
}) => {
  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_email,
    from_name,
    to_name,
    user_email,
    message,
    number
    },
    EMAILJS_PUBLIC_KEY,                
  ) 
    .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
    console.log('FAILED...', error);
    });
}

export default sendEmail;