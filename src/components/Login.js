import React from 'react'
import Api from '../Api'

import './Login.css'

import FacebookIcon from '@material-ui/icons/Facebook';

export default ({onReceive}) => {
  const handleFacebookLogin = async () => {
    let result = await Api.fbPopup()

    if(result) {
      onReceive(result.user)
    } else {
      alert("Erro!")
    }
  }

  return (
    <div className="login">
      <button onClick={handleFacebookLogin}>
        <div className="faceIcon" >
          <FacebookIcon style={{width: 40, height: 40 }} />
        </div>
        Logar com Facebook
      </button>
    </div>
  )
}