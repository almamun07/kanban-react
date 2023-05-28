import React , {useState} from 'react';
import { CheckSquare, Clock, MoreHorizontal } from 'react-feather';
import Chip from '../Chip/Chip';
import './Card.css';
import Dropdown from '../Dropdown/Dropdown';
function Card(props) {
    const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className='card' draggable
    onDragEnd={() => props.handleDragEnd(props.card?.id, props.boardId)}
    onDragEnter={() => 
    props.handleDragEnter(props.card?.id, props.boardId)}
    >
        <div className="card_left">
            <div className='cardTitle'>
                {props.card?.title}
            </div>
            
            <div className='cardFooter'>
                {props.card?.title}
            </div>
        </div>
        <div className='card_top'>
            <div className='cardTopMore' onClick= {() => setShowDropdown(!showDropdown)}>
                <MoreHorizontal />
                {showDropdown && (
                    <Dropdown onClose={() => setShowDropdown(false)}>
                    <div className='cardDropdown'>
                        <p onClick={()=>props.removeCard(props.card?.id,props.boardId)}>Delete Card</p>
                    </div>
                    </Dropdown>
                )}
            </div>
        </div>
    </div>
  )
}

export default Card