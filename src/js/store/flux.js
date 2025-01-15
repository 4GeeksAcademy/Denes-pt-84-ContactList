import Contact from "../views/Contacts";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: { // es una variable donde se almacen datos, para ser utilizados luego
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: { 
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}, 
			getContacs: ()=>{// trae los contactos de la API ya existentes
				fetch("https://playground.4geeks.com/contact/agendas/Denesjakab/contacts")
				.then((response)=>{
					
					if (!response.ok){
						console.log("error en la respuesta")
						createAgenda()
					}
					return response.json();
				})
				.then((data)=>{
					console.log(data);
					setStore({contacts: data.contacts})
				})
				.catch(()=>{})

			}, 
			createAgenda: ()=>{// crear la funcion para generar Agenda
				fetch ("https://playground.4geeks.com/contact/agendas/Denesjakab", {method: "POST"})
				.then((response)=>{
					return response.json
				})
				//no hay un 2 then porque no voy a utilizar los datos para nada mas adelante
				.catch();
				
			}, 

			createContact: (contact)=>{ //funcion para craer un contacto. newContact es una forma de decirle que le voy a enviar informacion a esta funcion
				  
				fetch("https://playground.4geeks.com/contact/agendas/Denesjakab/contacts", {method: 'POST',
					headers: {
					  'Content-Type': 'application/json',
					},
					body: JSON.stringify(contact),
				  })
				  .then(respuesta => respuesta.json())
				  .then(datos =>{
					getActions().getContacs()
					console.log(datos)
				  })
			}, 

			changeContact: (id, editedContact)=>{ //funcion para modificar un contacto
				fetch(`https://playground.4geeks.com/contact/agendas/Denesjakab/contacts/${id}`, {method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					  },
					  body: JSON.stringify(editedContact),
				})
				.then(respuesta => respuesta.json)
				.then(datos =>{
					getActions().getContacs()
				})
			}, 

			deleteContact: (id)=>{ //funcion para borrar un contacto
				fetch(`https://playground.4geeks.com/contact/agendas/Denesjakab/contacts/${id}`, {method: 'DELETE'})
				.then((response)=>{
					return response.json})
				.then(datos =>{
					getActions().getContacs()
					console.log(datos)
				  })
			}
		}
	};
};

export default getState;
