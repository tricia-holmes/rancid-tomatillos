import React from "react";
import './Error.css'
import pikachu from '../../assets/images/sad-pikachu.gif'


export default function Error() {
  return (
    <div className='errorMessage'>
      <h1 className="errorMessageText">Oh no! Something went wrong. Please try later!</h1>
      <img className="errorMessageGif" src={pikachu} />
    </div>
  )
}