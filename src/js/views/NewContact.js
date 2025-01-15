import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {Context} from '../store/appContext'

const NewContact = () => {
const navigate = useNavigate();
const{actions}= useContext(Context)
const[contact,setContact]= useState({ //estrucutura de lo que mandamos a nuestro fetch
  name: "",
  phone:"",
  email: "",
  address:""

})

  const handleChange= (e)=>{
    setContact({...contact, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()//para que no envie la informacion por defecto, si no cuando yo quiero qie se envie, segundo pasa la informacion a contact
    actions.createContact(contact)
    navigate("/")
  }

  return (
    <div className='container text-center'>
      <h1 className='position-absolute top-0 start-50 translate-middle-x'>Create a new contact</h1>
      <div className='my-5'>
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" placeholder="Full Name" value={contact.name} name='name' onChange={handleChange}></input> {/*cada input tiene que tener un value y un nombre*/}

        <label for="exampleFormControlInput1" class="form-label">Email</label>
        <input type="email" class="form-control" placeholder="Enter Email" value={contact.email} name='email' onChange={handleChange}></input>

        <label for="exampleFormControlInput1" class="form-label">Phone</label>
        <input type="number" class="form-control" placeholder="Enter Phone" value={contact.phone} name='phone' onChange={handleChange}></input>

        <label for="exampleFormControlInput1" class="form-label">Address</label>
        <input type="text" class="form-control" placeholder="Enter Address" value={contact.address} name='address' onChange={handleChange}></input>
      </div>

      <div className="container text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>Create New contact</button>
        <div className="container text-center">
          <Link to="/">
            <button className="btn btn-success">Back Home</button>
          </Link>
        </div>
      </div>

    </div>


  )
}

export default NewContact

//metodo post, tengo que estructurar el contenido que quiero pasarle al contacto, le paso como parametro el nuevo contacto( se hace en actions creando una funcion agregarcontacto)
/* 
agregarContacto: (nuevoContacto)=>{
              body: JSON.stringify(nuevoContacto)
  
  }

  Crear una funcion para el envio de informacion, en esta funcion debemos prevenir el fallo. e.preventdefault(), aparte le vamos a pasar la informacion de nuestro fetch. 
  actions.nombredelafunciondelfetch(contact)

  1. funcion con metodo post
  2. hacer la funcion para enviar la informacion al fetch
  3. Onchange a todos los input del contacto: 
*/
