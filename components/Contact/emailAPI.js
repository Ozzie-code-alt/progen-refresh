import emailjs from '@emailjs/browser';
const EMAILJS_SERVICE_ID='service_om4c63p'
const EMAILJS_TEMPLATE_ID='template_z215hiq'
const EMAILJS_PUBLIC_KEY='PLUpOPXsxh7LK5A-e'

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