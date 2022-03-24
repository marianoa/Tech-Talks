import React from 'react';
import './style.css';

function HeroBanner(props) {
  return (
    <div style={{ border: '1px solid blue' }}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <button>{props.cta}</button>
    </div>
  );
}

function Testimonial(props) {
  return (
    <div>
      <p>
        <strong>"</strong>
        {props.quote}
        <strong>"</strong>
      </p>
      <p>{props.author}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <HeroBanner
        title="Hello World"
        description="This is my description"
        cta="Click me!"
      />

      <HeroBanner
        title="Goodbye Moon"
        description="Another component"
        cta="Don't press this button"
      />

      <Testimonial quote="This is a brilliant website" author="Joe Blogg" />

      <Testimonial quote="I love it!" author="Jane Blogg" />
    </div>
  );
}