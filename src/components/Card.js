import React from 'react';

const Card = ({ name, hobby, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='kittens' src={`https://robohash.org/${id}?set=set4`} />
      <div>
        <h2>{name}</h2>
        <p>{hobby}</p>
      </div>
    </div>
  );
}

export default Card;