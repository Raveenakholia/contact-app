import React from 'react'
import {useLocation} from 'react-router-dom';
import user from '../images/user.jpg'

export default function ContactDetail(props) {
    console.log(props);
    const location = useLocation();
  const propsData = location.state.data;
  const {name , email} = props.location.state.data;
  return (
    <div className='main'>
        <div className='ui card centered'>
            <div className='image'>
                <img src = {user} alt="user"/>
            </div>
            <div className='content'>
                <div className='header'>{name}</div>
                <div className='desciption'>{email}</div>
            </div>
        </div>
      
    </div>
  )
}
