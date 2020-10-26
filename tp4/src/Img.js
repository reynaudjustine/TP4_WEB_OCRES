import React, { Component } from 'react';
import "./Img.css";

class Img extends Component 
{
  render() 
  {
    const { img } = this.props;
    return (
      <div className="imgContainer">
        <img src={img}/>
      </div>
    );
  }
}


export default Img;