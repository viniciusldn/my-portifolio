import React, {useState} from 'react';
import './footer.css';

export default function Footer() {

  const [Sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true)
    setTimeout(() => {
      setSent(false)
    }, 2000);
  }

  return (
    <div className='footer' id='footer'>
      <div className='left'>
        <img src='assets/Internet-group-chat.svg.png' alt='Balões de fala vazios' />
      </div>
      <div className='right'>
        <h2>Entre em contato</h2>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button>Enviar</button>
        </form>
        <div className= {Sent ? "fbMsg active" : "fbMsg"}>
         <h3>Obrigado!</h3>
        </div>
      </div>
    </div>
  );
}
