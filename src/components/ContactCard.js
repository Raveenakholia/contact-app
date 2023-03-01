import React from "react";
import user from '../images/user.png'

const ContactCard = (props)=>{
    //console.log(props)
    return (
        <div className='item'>
            <img className="ui avatar image" src= {user} alt="user"/>
        <div className='content'>
            <div className='header'>
                {props.name}
            </div>
            <div>{props.email}</div>
        </div>
        <i className='trash alternate outline icon' onClick={()=>props.clickHandler(props.id)} style={{color:'red' ,float: 'right', marginBottom:'5px'}}></i>
    </div>
    )
}

export default ContactCard;