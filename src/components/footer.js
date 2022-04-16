import React from 'react';
import GitHubLogo from '../pictures/github.svg';

function Footer () {
  return (
    <footer className="text-light">
      <p>Check the code on our repository on Github:</p>
      <a className="mb-2" href="https://github.com/forgerlil/todo-react-project">
        <img src={GitHubLogo} alt="Github Logo"/>
      </a>
      <p>© 2022 Copyright:</p>
      <div className="mb-2 collabs">
        <img src="https://avatars.githubusercontent.com/u/81853712?v=4" alt="Collaborator Lilian Forger" title="Collaborator Lilian Forger"/>
        <img src="https://avatars.githubusercontent.com/u/99274158?v=4" alt="Collaborator Maria Blanco" title="Collaborator Maria Blanco"/>
        <img src="https://avatars.githubusercontent.com/u/101398734?v=4" alt="Collaborator Nina Schmidt" title="Collaborator Nina Schmidt"/>
        <img src="https://avatars.githubusercontent.com/u/100858519?v=4" alt="Collaborator Uma Harish" title="Collaborator Uma Harish"/>
      </div>
    </footer>
  )
};

export default Footer;