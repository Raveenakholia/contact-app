import React from 'react'
import {Link, useLocation} from 'react-router-dom';
import user from '../images/user.jpg'

 const ContactDetail=(props)=> {
    console.log(props.data)
    const location = useLocation();
    console.log(location);
    console.log(location.data);

  //const propsData = location.state.data;
  //const {name , email} = props.location.state.data;
  return (
    <div className='main'>
        <div className='ui card centered'>
            <div className='image'>
                <img src = {user} alt="user"/>
            </div>
            <div className='content'>
                <div className='header'>{location.state.name}</div>
                <div className='desciption'>{location.state.email}</div>
            </div>         
        </div>
        <Link to="/contact"> <button className='ui button blue center'>Bank to Contacts</button></Link>
      
    </div>
  )
}

export default ContactDetail;