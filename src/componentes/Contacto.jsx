import React, { useEffect } from 'react';
import orangeCat from '../imagenes/cat-gf959cac5d_640.png';
import CardContacto from './CardContacto';
import {IoMdMail} from "@react-icons/all-files/io/IoMdMail"
import {FaWhatsappSquare} from "@react-icons/all-files/fa/FaWhatsappSquare"
import {FaPhoneSquareAlt} from "@react-icons/all-files/fa/FaPhoneSquareAlt"
import {BiDirections} from "@react-icons/all-files/bi/BiDirections"
import '../App.css'
import {db} from "../../src/utils/firebase"
import {collection, getDocs, limit, query, where} from "firebase/firestore"


const Contacto = () => {

  // useEffect( ()=>{
  //   const getData = async()=>{
  //     //creacion de referencia
  //     const query = doc (db, "items","BLfbrP4eIEV0bch9qCeT" );
  //     // solicitud
  //     const response = await getDoc(query);

  //     const newProduct = {
  //    ...response.data(),
  //    id: response.id
  //     }
  //     console.log(newProduct)
  //   }
  //   getData();
  // }, [])

  useEffect( ()=>{
    const getData = async()=>{
      //creacion de referencia
      const queryData = query(collection( db, "items")); 
      // solicitud
      const response = await getDocs(queryData);
      console.log(response)
      const productos = response.docs.map(doc => {
          const newProduct = {
            ...doc.data(),
            id: doc.id
       }
       return newProduct
      })
        console.log(productos);
    }
    getData();
  }, [])
  
  return (


      <div className='contenedorCard'>
        <CardContacto titulo='Contacto'/>
        <img className='imgcard' src={orangeCat} alt="gatito" />
       <div className='datosContacto'>
        < FaWhatsappSquare style={{fontSize: '40px',color:'#43d854'}} />
        <p>+569 657 648 993</p>
        <IoMdMail style={{fontSize: '40px',color:'rgb(163, 172, 171)'}}/>
        <p>dulcemascota@dlcmascota.cl</p>
        <FaPhoneSquareAlt style={{fontSize: '40px',color:'#0d6efd'}}/>
        <p>9 657 648 993</p>
        <BiDirections style={{fontSize: '40px',color:'#f1a94c'}}/>
        <p>Av. Providencia 2170, Providencia, RM.</p>
       </div>
        
      </div>
  )
}

export default Contacto;
