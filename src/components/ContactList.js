import React , {useRef } from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = (props)=>{
   const inputEl = useRef('')
    const deleteHandler = (id)=>{
       props.getContactId(id);
      console.log(id);
    }
    const renderList = props.contacts.map((user)=>{
       return <ContactCard key={user.id} id= {user.id} name={user.name}  clickHandler= {deleteHandler} email = {user.email}></ContactCard>
      });

      const getSearchTerm = ()=>{
         props.searchKeyword(inputEl.current.value)
      }
          
    return(
        <div className='ui celled list'>
      
           <h2>Contact List</h2>
           <div className='ui search'>
            <div className='ui icon input'>
               <input type="text" ref={inputEl} placeholder='Search Contact' className='prompt' value={props.term} onChange={getSearchTerm}/>
               <i className='search icon'></i>
            </div>
           </div>
          <Link to="/add"> <button className='ui button blue right'> Add Contact</button></Link>
           {console.log('contacts' + props.contacts)}
           {renderList}        
        </div>
    )
}

export default ContactList;