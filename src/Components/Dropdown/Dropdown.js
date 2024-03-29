import React, { useEffect,useRef} from 'react';

function Dropdown(props) {

    const dropdownRef=useRef();

    const handleClick=(event)=>{
        if(dropdownRef && !dropdownRef?.current?.contains(event?.target))
        {
            if(props.onCLose)props.onClose();
        }
    };

    useEffect(() => {
        document.addEventListener('click',handleClick);

        return () => {
            document.removeEventListener('click',handleClick);
        }
    });

  return (
    <div ref={dropdownRef} className='dropdown' style={{position:"absolute",top:"100%",right:"0"}}>
        {props.children}
    </div>
  );
}

export default Dropdown;