import React from "react";
import  {Link} from 'react-router-dom'
import user from '../images/user.png'

const ContactCard = (props)=>{
    //console.log(props)
    console.log('props are===>')
    console.log(props)
    const name  =props.name;
    const email =  props.email;
    const id = props.id;
    return (
        <div className='item'>
            <img className="ui avatar image" src= {user} alt="user"/>
        <div className='content'>
           <Link to ={`/contact/${props.id}`} state={{name:name , email:email}} >
            <div className='header'>
                {props.name}
            </div>
            </Link>
            <div>{props.email}</div>
        </div>
        <i className='trash alternate outline icon' onClick={()=>props.clickHandler(props.id)} style={{color:'red' ,float: 'right', marginBottom:'5px' ,marginLeft:'10px'}}></i>
        <Link to ={`/edit`} state={{id:id, name:name , email:email}} >
        <i className='edit alternate outline icon' onClick={()=>props.clickHandler(props.id)} style={{color:'blue' ,float: 'right', marginBottom:'5px'}}></i>
        </Link>
        
    </div>
    )
}

export default ContactCard;