import React from 'react';

function Section({ title, children, className }) {
  return (
    <section className={`section ${className}`}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default Section;
