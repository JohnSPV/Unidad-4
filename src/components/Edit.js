import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

const Edit = () => {
  const [description, setDescription] = useState('');
  const [vram, setVram] = useState(0);
  const [marca, setMarca] = useState('');
  const [velocidadDeReloj, setVelocidadDeReloj] = useState('');
  const [interfazDeLaTarjeta, setInterfazDeLaTarjeta] = useState('');
  const [stock, setStock] = useState(0);

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    const product = doc(db, "products", id);
    const data = {
      description,
      vram,
      marca,
      velocidadDeReloj,
      interfazDeLaTarjeta,
      stock
    };
    await updateDoc(product, data);
    navigate('/');
  };

  const getProductById = async (id) => {
    const product = await getDoc(doc(db, "products", id));
    if (product.exists()) {
      const productData = product.data();
      setDescription(productData.description);
      setVram(productData.vram);
      setMarca(productData.marca);
      setVelocidadDeReloj(productData.velocidadDeReloj);
      setInterfazDeLaTarjeta(productData.interfazDeLaTarjeta);
      setStock(productData.stock);
    } else {
      console.log('El producto no existe');
    }
  };

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  }, [id]);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Editar Producto</h1>
          <form onSubmit={update}>
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
              <label className='form-label'>VRAM</label>
              <input
                value={vram}
                onChange={(e) => setVram(e.target.value)}
                type='number'
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
            <button type='submit' className='btn btn-primary'>Actualizar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
