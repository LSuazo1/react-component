
import Card from "./components/Card";
import Header from "./components/Header";
import Moda from "./components/Moda";
// import Electronico from "./components/Electronico";
// import ArticulosHogar from "./components/ArticulosHogar";
import axios from 'axios';
import { useState, useEffect } from "react";
import Carrusel from "./components/Carrusel";
import Megamenu from "./components/Megamenu";

function App() {
  const [arreglo2, setArreglo] = useState([]);
  /*  const axiosConsulta = async (e) => {
     const resp = await axios('https://rickandmortyapi.com/api/character');
     const { results } = resp.data
 
     setArreglo(results);
 
   }; */

  useEffect( () => {
   
      const axiosConsulta = async (e) => {
        const resp = await axios('https://rickandmortyapi.com/api/character');
        const { results } = resp.data

        setArreglo(results);
      }
  

    axiosConsulta();
  }, []);



  return (
    <>
    <div>
    <Megamenu/>
    </div>
    
      {/* <Moda/> */}
      {/*  <div className="grid grid-cols-4">
        <button onClick={() => axiosConsulta()} className="btn m-5 p-5 rounded text-white bg-indigo-500 hover:bg-indigo-700">Llamar arreglo</button>
      </div> */}
      <div className="grid grid-cols-4 p-10 pb-4">
        {
          arreglo2.map((arreglo, index) => (
            <Card
              key={index}
              arreglo={arreglo}
            />
          ))
        }
      </div>


      {/*  <Card
        arreglo={arreglo}
      /> */}
      {/* <Electronico/>
      <ArticulosHogar/> */}

     <div className="pt-10">
       {/* <Carrusel/> */}
       {/* <Megamenu/> */}
     </div>

    </>
  );
}

export default App;
