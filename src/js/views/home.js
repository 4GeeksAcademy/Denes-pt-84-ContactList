import React, { useContext } from "react";
import { Context } from "../store/appContext"
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import Contact from "./Contacts";

export const Home = () => {
	const { store, actions } = useContext(Context)

	return (
		<div className="container text-center mt-5">


			<h1>Contacts</h1>

			{store.contacts.map((contact, index) => {
				return(
					<Contact key={index}
					name={contact.name}
					phone={contact.phone}
					email={contact.email}
					address={contact.address}
					id ={contact.id}
					/> //todos los contactos van atener un id unico 
				)

			})}

			<Link to="/new-contact">
				<button className="btn btn-success">Create New Contact</button>
			</Link>

		</div>)

};
