import React from 'react';

export function Interests(props) {
  return (
    <section className={!props.darkmode ? 'light' : ''}>
      <h2>Interests</h2>
      <p>
        Book worm. Anime lover. Foodie. Travel geek. Bubble tea connoisseur.
        Weightlifter.
      </p>
    </section>
  );
}
