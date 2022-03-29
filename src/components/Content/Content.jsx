import React, { useEffect, useState } from 'react';
import './content.css';

export default function Content() {
  const [Welcome, setWelcome] = useState('Bom Dia!');

  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour > 12 && currentHour < 18) setWelcome('Boa Tarde!');
    if (currentHour > 18) setWelcome('Boa Noite!');
  }, []);

  return (
    <div className='content' id='content'>
      <h1>Sobre mim</h1>
      <div className='aboutme'>
        <h3>{Welcome}</h3>
        <div className='text_wrapper'>
          <p>
            Como você já deve saber, meu nome é Vinicius Leite Dourado Nogueira. Um pouco
            grande não é mesmo. Pode me chamar de Vini!
          </p>
          <p>
            Eu sou um desenvolvedor criativo e moro em Campinas, SP. Gosto de desenvolver
            projetos desafiadores que me fazem pensar e aprender, mas você também pode me
            vertomando uma cerveja em algum bar ou jogando vídeo game com os amigos. 
            Gosto depensar no mundo da programação como uma caixa de areia onde tudo é possível,
            ainda mais levando em conta os avanços da área de hardware e nas tecnologias
            web, que combinados com a natureza de compartilhamento de idéias da internet,
            permite infinitas possibilidades.
          </p>
          <p>
            Me da muito prazer descobrir soluções mais eficazes para problemas encontrados
            diariamente e aplica-las de forma efetiva e gosto muito de explorar fóruns,
            blogs e sites que trazem esses tipos de idéias!
          </p>
          <p>
            Tenho orgulho de estar atualmente estudando na Trybe, criando e aprendendo com
            projetos divertidos e desafiadores. Em meu tempo livre procuro aprofundar
            meus conhecimentos desenvolvendo projetos pessoais e me manter antenado
            nas novas tecnologias do mercado.
          </p>
        </div>
      </div>
    </div>
  );
}
