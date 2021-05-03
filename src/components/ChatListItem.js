import React from 'react'

import './ChatListItem.css'

export default ({onClick, active, data}) => {
  return (
    <div
      className={`chatListItem ${active ? 'active' : ''}`}
      onClick={onClick}
    >
      <img className="chaListItem--avatar"
        src={data.avatar}
        alt="avatar"
      />
      <div className="chaListItem--lines">
        <div className="chaListItem--line">
          <div className="chatListItem--name">{data.title}</div>
          <div className="chatListItem--date">19:00</div>
        </div>
        <div className="chaListItem--line">
          <div className="chatListItem--lastMsg">
            <p>
              Vamos andar de skate hoje?
              Vamos andar de skate hoje?
              Vamos andar de skate hoje?
              Vamos andar de skate hoje?
              Vamos andar de skate hoje?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}