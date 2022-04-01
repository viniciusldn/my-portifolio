import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import './footer.css';

export default function Footer() {

  const [Sent, setSent] = useState(false);
  const [Message, setMessage] = useState(undefined);
  const [Name, setName] = useState(undefined);
  const [Email, setEmail] = useState(undefined);
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (Message && Name && Email) {
      emailjs.sendForm('service_kccuphi', 'template_9dgsnvi', form.current, 'dDcD0ePe55eLPcurS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setSent(true)
      setTimeout(() => {
        setSent(false)
        setMessage(undefined)
        setName(undefined)
        setEmail(undefined)
      }, 2000);
    }
    else alert('Preencha todos os campos');
  }

  return (
    <div className='footer' id='footer'>
      <div className='left'>
        <img src={require('../../assets/Internet-group-chat.svg.png')} alt='Balões de fala vazios' />
      </div>
      <div className='right'>
        <h1>Entre em contato</h1>
        <form ref={form} onSubmit={handleSubmit}>
          <input type='text' placeholder='Nome' name="from_name"  onChange={(e)=>setName(e.target.value)} />
          <input type='email' placeholder='Email' name="from_email" onChange={(e)=>setEmail(e.target.value)} />
          <textarea placeholder='Message' name="message" onChange={(e)=>setMessage(e.target.value)} />
          <button className={(Message && Name && Email)? 'able' : 'disable'} type="submit" value="Send">Enviar</button>
        </form>
        <div className= {Sent ? "fbMsg active" : "fbMsg"}>
         <h3>Obrigado!</h3>
        </div>
      </div>
    </div>
  );
}
