import React, { useState, useContext, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext'


function EditContact() {
  const { actions, store } = useContext(Context)
  const [editedContact, setEditedContact] = useState( //estrucutura de lo que mandamos a nuestro fetch PUT
    null
  )
  console.log(editedContact)
  const params = useParams(); //al params no necesito pasarle informacion para que funcione
  console.log(params);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(store.contacts)
    let selectedContact = store.contacts.find((contact) => contact.id == params.id)
    setEditedContact(selectedContact)
  }, [store.contacts])

  const handleChange = (e) => {
    setEditedContact({ ...editedContact, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()//para que no envie la informacion por defecto, si no cuando yo quiero que se envie, segundo pasa la informacion a contact
    actions.changeContact(params.id, editedContact)
    navigate("/")
  }



  return (
    <div className='container mt-5 text-center'>
      <h1 className='position-absolute top-0 start-50 translate-middle-x'>Editando Contacto: </h1>

      {
        editedContact == null ? <h1>cargando</h1> :
          <div className='my-5'>

            <label for="exampleFormControlInput1" class="form-label">Name</label>
            <input type="text" class="form-control" placeholder="Full Name" value={editedContact.name} name="name" onChange={handleChange}></input>

            <label for="exampleFormControlInput1" class="form-label">Email</label>
            <input type="email" class="form-control" placeholder="Enter Email" value={editedContact.email} name="email" onChange={handleChange}></input>

            <label for="exampleFormControlInput1" class="form-label">Phone</label>
            <input type="number" class="form-control" placeholder="Enter Phone" value={editedContact.phone} name="phone" onChange={handleChange}></input>

            <label for="exampleFormControlInput1" class="form-label">Address</label>
            <input type="text" class="form-control" placeholder="Enter Address" value={editedContact.address} name="address" onChange={handleChange}></input>
          </div>
      }
      <div className="container text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>Edit the contact</button>
        <div className="container text-center">
          <Link to="/">
            <button className="btn btn-success">Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default EditContact