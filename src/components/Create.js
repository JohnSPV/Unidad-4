import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebaseConfig/firebase';

const Create = () => {
  const [description, setDescription] = useState('');
  const [marca, setMarca] = useState('');
  const [vram, setVram] = useState(0);
  const [velocidadDeReloj, setVelocidadDeReloj] = useState('');
  const [interfazDeLaTarjeta, setInterfazDeLaTarjeta] = useState('');
  const [stock, setStock] = useState(0);
  const navigate = useNavigate();

  const productsCollection = collection(db, "products");

  const store = async (e) => {
    e.preventDefault();
    await addDoc(productsCollection, {
      description,
      marca,
      vram,
      velocidadDeReloj,
      interfazDeLaTarjeta,
      stock
    });
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Agregar Producto</h1>
          <form onSubmit={store}>
            <div className='mb-3'>
              <label className='form-label'>Descripción</label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)} 
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Marca</label>
              <input
                value={marca}
                onChange={(e) => setMarca(e.target.value)} 
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>VRAM</label>
              <input
                value={vram}
                onChange={(e) => setVram(e.target.value)} 
                type='number'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Velocidad de Reloj</label>
              <input
                value={velocidadDeReloj}
                onChange={(e) => setVelocidadDeReloj(e.target.value)} 
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Interfaz de la Tarjeta</label>
              <input
                value={interfazDeLaTarjeta}
                onChange={(e) => setInterfazDeLaTarjeta(e.target.value)} 
                type='text'
                className='form-control'
              />
            </div>
            <div className='mb-3'>
              <label className='form-label'>Stock</label>
              <input
                value={stock}
                onChange={(e) => setStock(e.target.value)} 
                type='number'
                className='form-control'
              />
            </div>
            <button type='submit' className='btn btn-primary'>Agregar</button>
          </form>   
        </div>
      </div>
    </div>
  );
}

export default Create;
