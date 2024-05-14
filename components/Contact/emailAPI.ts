import emailjs from '@emailjs/browser';

type emailProps ={
  to_name:string,
  from_email:string
  user_email:string,
  number:string,
  from_name?:string
  message:string
}

const sendEmail = ({
  from_email,
  from_name,
  to_name,
  user_email,
  message,
  number
}:emailProps) => {
  emailjs.send( process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, {
    from_email,
    from_name,
    to_name,
    user_email,
    message,
    number
    },
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,               
  ) 
    .then(function(response) {
    console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
    console.log('FAILED...', error);
    });
}

export default sendEmail;