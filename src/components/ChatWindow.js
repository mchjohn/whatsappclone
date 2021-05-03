import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react'

import './ChatWindow.css'

import SearchIcon from '@material-ui/icons/Search'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AttachFileIcon from '@material-ui/icons/AttachFile'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import CloseIcon from '@material-ui/icons/Close'
import SendIcon from '@material-ui/icons/Send'
import MicIcon from '@material-ui/icons/Mic'

export default () => {
  const [emojiOpen, setEmojiOpen] = useState(false)
  const [text, setText] = useState('')

  const handleEmojiClick = (e, emojiObject) => {
    setText( text + emojiObject.emoji)
  }

  const handleOpenEmoji = () => {
    setEmojiOpen(true)
  }

  const handleCloseEmoji = () => {
    setEmojiOpen(false)
  }

  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--info">
          <img
            className="chatWindow--avatar"
            src="https://avatars.githubusercontent.com/u/46505290?v=4"
            alt="avatar"
          />
          <div className="chatWindow--name">Michel John</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon
              style={{color: '#919191'}}
            />
            <AttachFileIcon
              style={{color: '#919191'}}
            />
            <MoreVertIcon
              style={{color: '#919191'}}
            />
          </div>
        </div>


        
      </div>
      
      <div className="chatWindow--body">

      </div>

      <div
        className="chatWindow--emojiarea"
        style={{height: emojiOpen ? '200px' : '0px'}}>
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            disableSearchBar
            disableSkinTonePicker
          />
      </div>
      
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div
            onClick={handleCloseEmoji}
            className="chatWindow--btn"
            style={{width: emojiOpen ? 40 : 0}}
          >
            <CloseIcon style={{color: '#919191'}} />
          </div>
          
          <div
            onClick={handleOpenEmoji}
            className="chatWindow--btn"
          >
            <InsertEmoticonIcon
              style={{color: emojiOpen ? '#009688' : '#919191'}}
            />
          </div>
        </div>

        <div className="chatWindow--inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite uma mensagem"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </div>

        <div className="chatWindow--pos">
          <div className="chatWindow--btn">
            <SendIcon style={{color: '#919191'}} />
          </div>
        </div>
      </div>
    </div>
  )
}