import React, { useContext, useState } from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from '../store/appContext'


const Contact = ({ name, phone, email, address, id }) => {
const navigate = useNavigate();
const { actions } = useContext(Context);

        const handleDelete = () => {
            if (window.confirm("Are you sure that do you want to delete the contact?")) { //abre un mensaje de confirmación antes de borrar un contacto
                actions.deleteContact(id);
            }
            navigate("/")
        };


        return (
            <div className="container">


                <div className="Contact">
                    <div className="contact-img">
                        <img src="https://media.istockphoto.com/id/1437816897/es/foto/mujer-de-negocios-gerente-o-retrato-de-recursos-humanos-para-el-%C3%A9xito-profesional-la-empresa.jpg?b=1&s=612x612&w=0&k=20&c=ZU8zBuzaimwRki3TjMkjaKApo5y1PFDkWySxDoKgR6k=" className="profilePicture" alt="..."></img>
                    </div>
                    <div className="datos">
                        <h3>{name}</h3>
                        <p><i class="fa-solid fa-phone"></i><strong>{phone}</strong></p>
                        <p><i class="fa-regular fa-envelope"></i><strong>{email}</strong></p>
                        <p><i class="fa-solid fa-location-dot"></i><strong>{address}</strong></p>

                    </div>
                    <div className="iconos">
                        <Link to={`/edit-contact/${id}`}><i className="fa-solid fa-pencil"></i></Link>
                        <i className="fa-solid fa-trash-can" onClick={()=> handleDelete(id)}></i>
                    </div>

                </div>


            </div>

        )

    }

    export default Contact; 
