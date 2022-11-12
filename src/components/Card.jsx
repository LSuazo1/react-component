import React from 'react'
const Card = ({ arreglo }) => {
    const { name, species, image } = arreglo;
    return (

        <>
            <div className="p-5 border border-shadow">
                <div className="rounded-lg shadow-lg bg-slate-400 max-w-sm div ">
                    <a href="#!">
                        <img className="max-w-full h-auto rounded-lg" src={image} alt="No se encuentra" />
                    </a>
                    <div className="p-2 bg-green-500">
                        <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
                        <p className="text-gray-700 text-base mb-4">
                            {species}.
                        </p>
                        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-bold w-full text-xs 
            leading-tight uppercase rounded shadow-md hover:bg-blue-800 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver</button>

                    </div>

                </div>
            </div>

        </>



    )
}

export default Card
