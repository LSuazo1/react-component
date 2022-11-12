import React from 'react'

import { Chip } from 'primereact/chip';


const Electronico = () => {
    return (

       
     
        <div class="">
               <section id="Electronico" className="min-h-[90vh] grid grid-cols-4 xl:grid-cols-4"> 
            <div >
           
                <div class="rounded-lg shadow-lg bg-white max-w-sm">
                    <a href="#!">
                        <img class="max-w-full h-auto rounded-lg" src="https://m.media-amazon.com/images/I/61tE7IcuLmL._SX522_.jpg" alt="" />
                    </a>
                    <div class="p-2">
                        <h5 class="text-gray-900 text-xl font-medium mb-2">LENTES VR</h5>
                        <p class="text-gray-700 text-base mb-4">
                           Marca Sansung, color Blanco. Estado 9/10
                        </p>
                        <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs 
                        leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver</button>
                         
                    </div>

                     </div>
            </div>

            <div >
           
           <div class="rounded-lg shadow-lg bg-white max-w-sm">
               <a href="#!">
                   <img class="max-w-full h-auto rounded-lg" src="https://m.media-amazon.com/images/I/713Y94XoVPL._AC_SX466_.jpg" alt="" />
               </a>
               <div class="p-6">
                   <h5 class="text-gray-900 text-xl font-medium mb-2">ADAPTADOR RED</h5>
                   <p class="text-gray-700 text-base mb-4">
                      Marca Kingston, color negro. Estado 9/10
                   </p>
                   <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs 
                   leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver</button>
                    
               </div>

                </div>
       </div>
       

       <div >
           
           <div class="rounded-lg shadow-lg bg-white max-w-sm">
               <a href="#!">
                   <img class="max-w-full h-auto rounded-lg" src="https://m.media-amazon.com/images/I/51vfoiVL2LL._AC_SX466_.jpg" alt="" />
               </a>
               <div class="p-2">
                   <h5 class="text-gray-900 text-xl font-medium mb-2">TELESCOPIO</h5>
                   <p class="text-gray-700 text-base mb-4">
                      Marca CELESTRON, color negro. Estado 8/10
                   </p>
                   <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs 
                   leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver</button>
                    
               </div>

                </div>
       </div>


       </section>



        </div>
    )
}

export default Electronico