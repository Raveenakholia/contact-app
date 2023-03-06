import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import uuid from "react-uuid";
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactDetail from "./ContactDetail";
import api from '../api/contacts';
import EditContact from './EditContact';

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState();
    const [searchResults, setSearchResults] = useState([])

    const addContactHandler = async(contact)=>{
      const request = {
        id : uuid(),
        ...contact
      }
      const response =  await api.post("/contacts",request);

      setContacts([...contacts ,  response.data])
    }

    const RetriveAllContacts = async()=>{
      const response = await api.get("/contacts");
      return response.data;
    }
    const removeContact = async(id)=>{
      await api.delete(`/contacts/${id}`)
      const newContacts = contacts.filter((contact)=>{
        return contact.id !==id;
      })
     
      setContacts(newContacts);
      
    }
    
    useEffect(()=>{      
      // const retriveItems = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      // console.log(retriveItems);
      // if(retriveItems) setContacts(retriveItems);
      const getAllContacts = async ()=>{
        const allcontaccts = await RetriveAllContacts();
        setContacts(allcontaccts);
      }
      getAllContacts();
    }, [])

    const updateContactHandler = (contact)=>{
      console.log(contact);
    }
    const searchHandler = (searchTerm)=>{
      setSearchTerm(searchTerm);
      if(searchTerm !== ""){
        const newcontactList = contacts.filter((contact)=>{
          return Object.values(contact).join('').toLowerCase().includes(searchTerm.toLowerCase());
        })
        setSearchResults(newcontactList)
      }else{
        searchResults(contacts);
      }
    }
    useEffect(()=>{      
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts])
    
    

  return (
    <div className="ui container">
        <Header/>
        <Router>
          <Routes>
          <Route path="/contact"   element={<ContactList  contacts = {searchTerm <1 ? contacts: searchResults} term={searchTerm} searchKeyword={searchHandler} getContactId = {removeContact}/>}/>
          <Route path="/add" element={<AddContact  addContactHandler={addContactHandler}/>}/>
          <Route path="/contact/:id" element={<ContactDetail ></ContactDetail>}/>
          <Route path="/edit" element= {<EditContact updateContactHandler={updateContactHandler}></EditContact>}/>

          </Routes>  
        </Router>
        {/* <AddContact addContactHandler={addContactHandler}/>
        {!!contacts.length  &&<ContactList contacts = {contacts} getContactId = {removeContact}/>} */}
    </div>
  );
}

export default App;
