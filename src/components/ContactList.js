import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props)=>{
    const deleteHandler = (id)=>{
       props.getContactId(id);
      console.log(id);
    }
    const renderList = props.contacts.map((user)=>{
       return <ContactCard key={user.id} id= {user.id} name={user.name}  clickHandler= {deleteHandler} email = {user.email}></ContactCard>});
        
    
    return(
        <div className='ui celled list'>
      
           <h2>Contact List</h2>
          <Link to="/add"> <button className='ui button blue right'> Add Contact</button></Link>
           {console.log('contacts' + props.contacts)}
           {renderList}        
        </div>
    )
}

export default ContactList;