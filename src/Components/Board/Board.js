import React, { useState } from 'react';
import './Board.css';
import {MoreHorizontal} from 'react-feather';
import Card from '../Card/Card';
import Editable from '../Editable/Editable';
import Dropdown from '../Dropdown/Dropdown';

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);


  return (
    <div className="board">
      <div className="boardTop">
        <p className="boardTopTitle">
          {props.board?.title}<span>{` ${props.board?.cards?.length}`}</span>
        </p>
        <div className='boardTopMore' onClick= {() => setShowDropdown(true)}>
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown onClose={() => setShowDropdown(false)}>
              <div className='boardDropdown'>
                <p onClick={()=>props.removeBoard(props.board?.id)}>Delete Board</p>
              </div>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="boardCards custom-scroll">
        {
          props.board?.cards.map((item) => (
            <Card key={item.id} card={item}
            removeCard = {props.removeCard}
            boardId={props.board?.id}
            handleDragEnd={props.handleDragEnd}
            handleDragEnter={props.handleDragEnter}
            />
          ))
        }
        <Editable 
        displayClass="boardCardsAdd" text="Add Card" placeholder="Enter Card Title"
        onSubmit={(value) => props.addCard(value,props.board?.id)}
        />
      </div>
    </div>
  );
}

export default Board;
