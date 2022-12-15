import React from 'react';

export function About(props) {
  return (
    <section className={`about ${!props.darkmode ? 'light' : ''}`}>
      <h2>About</h2>
      <p>
        I am a passionate frontend developer, specializing in transforming ideas
        into interactive, digital experiences that are simple, beautiful and
        accessible. I’m always excited to learn new languages, frameworks, and
        technologies, as I am consistently looking to improve and grow as a
        developer.
      </p>
    </section>
  );
}
