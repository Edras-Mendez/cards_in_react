import React from 'react';
import '../style_components/webDescription.css';

function WebDescription (props){
  return (
    <div className="description__container">
      <img className="img__container" src={require(`../imgs/${props.image}`)} alt="imagen_testimonio" />
      <div className="text__wrapper">
        <p className="title__description">Hello Description</p>
        <p className="text__description">Sit incidunt modi veritatis sit eaque Temporibus aspernatur officia obcaecati laborum suscipit. Quod sequi doloribus obcaecati corrupti fuga! Vel ex fugiat blanditiis excepturi voluptates? Minima enim dolorum est reiciendis quod.</p>
      </div>
    </div>
  );
}

export default WebDescription;
