// // import React from 'react';
// // import { Navigate } from 'react-router-dom';


// // class EditContact extends React.Component{
// //    constructor(props){
// //     super(props);
// //     console.log(props.location)
// //     console.log(props.name);
// //    }   
   
// //    edit = (e)=>{
// //     e.preventDefault();
    
    
// //    }
// //     render(){
   
// //         return (
// //             <div className = 'ui main'>
// //                 <h2>Add Contact</h2>
// //                 <form className='ui form' onSubmit={this.add}>
// //                     <div className='field'>
// //                         <label>Name</label>
// //                         {/* <input type="text" value={this.state.name} name="name" placeholder='Name' onChange={(e)=>this.setState({name:e.target.value})}/> */}
// //                     </div>
// //                     <div className='field'>
// //                         <label>Email</label>
// //                         {/* <input type="text" name="email" value={this.state.email} placeholder='Email' onChange={(e)=>this.setState({email:e.target.value})}/> */}
// //                     </div>
// //                     <button className='ui button blue'>Add</button>
// //                 </form>
// //             </div>
// //         )
// //     }
// // }

// // export default EditContact;

// import React, { useState } from 'react'
// import { useLocation } from 'react-router-dom';

// export default function EditContact(props) {
//     const location = useLocation();
//     //const [id,setId] = useState(location.state.id);
//     //const [ name , setName]= useState(location.state.name);
//     //const [email, setEmail] = useState(location.state.email);
//     // const update = ()=>{
//     //     const obj = {name:name,id:id,email:email}
//     //    // location.updateContactHandler(obj)
//     // }
//     console.log(location);
//  console.log(location.state.name)
//     return (
//     <div>
//      <form className='ui form' onSubmit={update} >
//         <div className='field'>
//             <label>Name</label>
//             <input type="text" value={name} name="name" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
//         </div>
//         <div className='field'>
//             <label>Email</label>
//             <input type="text" name="email" value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
//         </div>
//         <button className='ui button blue'>Update</button>
//     </form>
//     </div>
//   )
// }
import React from 'react'

export default function EditContact() {
  return (
    <div>
      
    </div>
  )
}

