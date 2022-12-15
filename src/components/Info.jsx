import React from 'react';
import memoji from '../assets/memoji.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faImagePortrait } from '@fortawesome/free-solid-svg-icons';

export function Info(props) {
  return (
    <header className={!props.darkmode ? 'light' : ''}>
      <img className="memoji" src={memoji} />

      <div className="toggler-container">
        <FontAwesomeIcon
          className={`sun-icon ${!props.darkmode ? 'light' : ''}`}
          icon={faSun}
        ></FontAwesomeIcon>
        <label className="toggler">
          <input type="checkbox" />
          <span
            className="slider round"
            darkMode={props.darkmode}
            onClick={props.handleClick}
          ></span>
        </label>
        <FontAwesomeIcon
          className={`moon-icon ${!props.darkmode ? 'light' : ''}`}
          icon={faMoon}
        ></FontAwesomeIcon>
      </div>

      <h1>Nesha Mervin</h1>
      <h3>Frontend Developer</h3>

      <div className="btn-container">
        <a className="email-btn btn" href="mailto:neshacascia@gmail.com">
          <FontAwesomeIcon
            className="email-icon"
            icon={faEnvelope}
          ></FontAwesomeIcon>
          Email
        </a>
        <a
          className="portfolio-btn btn"
          href="https://www.neshacascia.com/"
          target="_blank"
        >
          <FontAwesomeIcon
            className="portfolio-icon"
            icon={faImagePortrait}
          ></FontAwesomeIcon>
          Portfolio
        </a>
      </div>
    </header>
  );
}
