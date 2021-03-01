import React from 'react';
import logoEnvoi from '../icons/envoyer.png';
import './Input.css';

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Écrire un message..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button  className="sendButton" onClick={e => sendMessage(e)}><img src={logoEnvoi} alt="envoi" onClick={e => sendMessage(e)} /></button>
  </form>
)

export default Input;