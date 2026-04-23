import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from 'axios';
// componente
import WidgetWompi from './widgetWompi';

function Home() {
  const precioCOP = 50000;

  const [configWompi, setConfigWompi] = useState({
    customerEmail: "proyectos@pretwor.com",
  });

  useEffect(() => {
    (async () => {
      try {
        // método para obtener configuración de wompi
        const resConfig = await axios.post("/obtener-configa", {
          params: { precio: precioCOP }
        });

        setConfigWompi((prev) => ({
          ...prev,
          ...resConfig.data
        }));
      } 
      catch (error) {
        console.log("error: ", error);
      }
    })();
  }, []);


  //   console.log("configWompi: ", configWompi);
  // }, [configWompi]);

  async function comprar(){

  }

  


  return(
    <div className='container py-5'>
      <div className='row align-items-center'>
        <div className='col-12 col-md-6 mb-4 mb-md-0'>
          <img
            src='imagenes/chaqueta.jpg'
            alt='Chaqueta en cuero'
            className='img-fluid rounded shadow-sm'
          />
        </div>

        <div className='col-12 col-md-6'>
          <h1 className='mb-3'>Chaqueta en cuero</h1>
          <h3 className='mb-3'>${precioCOP} COP</h3>
          <p className='mb-4'>
            Chaqueta hecha en cuero, ideal para la calle, con un estilo moderno y
            cómodo para usar en cualquier ocasión.
          </p>
         
          {/* WIDGETWOMPI */}
          {configWompi?.publicKey ? (
            <WidgetWompi wompiConfig={configWompi} />
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Home;