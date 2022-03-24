import React, { useEffect, useState } from 'react';
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
  const [page, updatePage] = useState();

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Cookie',
      'visid_incap_673446=JIu0hRx+Rfi+fOWgJKbyEYuV7GAAAAAAQUIPAAAAAABaYy/nF3HjcNhFM5WHhAvu'
    );

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch(
      'https://cdn.contentful.com/spaces/op2qgzceam5o/environments/master/entries/7dsNMZBD0EgwXJnyQROkCW?access_token=WIC1KuiU0qnu7OoomLJ1hTi40Pdl5PLqMaeqlQZG03U',
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => updatePage(result))
      .catch((error) => console.log('error', error));
  });

  return (
    <div>   
      {page && <p>{page.fields.slug}</p>}

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
