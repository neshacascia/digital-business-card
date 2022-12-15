import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

export function Footer(props) {
  return (
    <footer className={!props.darkmode ? 'light' : ''}>
      <a href="https://twitter.com/neshacascia" target="_blank">
        <FontAwesomeIcon
          className="social-apps"
          icon={faSquareTwitter}
        ></FontAwesomeIcon>
      </a>

      <a href="https://www.linkedin.com/in/neshamervin/" target="_blank">
        <FontAwesomeIcon
          className="social-apps"
          icon={faLinkedin}
        ></FontAwesomeIcon>
      </a>

      <a href="https://github.com/neshacascia" target="_blank">
        <FontAwesomeIcon
          className="social-apps"
          icon={faSquareGithub}
        ></FontAwesomeIcon>
      </a>
    </footer>
  );
}
