import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import uuid from "react-uuid";
import ContactList from './ContactList';
import AddContact from './AddContact';

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([])
    const [ncontacts, nsetContacts] = useState([])
    const addContactHandler = (contact)=>{
      setContacts([...contacts , {id: uuid(), ...contact}])
      nsetContacts([...ncontacts , {id: uuid(), ...contact}])
      console.log(contacts)
    }

    const removeContact = (id)=>{
      const newContacts = contacts.filter((contact)=>{
        return contact.id !==id;
      })
      console.log('ggggg' +contacts);
      setContacts(newContacts);
      
    }
    
    useEffect(()=>{      
      const retriveItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      console.log(retriveItems);
      if(retriveItems) setContacts(retriveItems);
    }, [])

    useEffect(()=>{      
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts])
    
    

  return (
    <div className="ui container">
        <Header/>
        <Router>
          <Routes>
          <Route path="/contact"   element={<ContactList  contacts = {contacts} getContactId = {removeContact}/>}/>
          <Route path="/add" element={<AddContact  addContactHandler={addContactHandler}/>}/>

          </Routes>  
        </Router>
        {/* <AddContact addContactHandler={addContactHandler}/>
        {!!contacts.length  &&<ContactList contacts = {contacts} getContactId = {removeContact}/>} */}
    </div>
  );
}

export default App;
