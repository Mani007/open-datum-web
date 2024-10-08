import React from 'react'

function Roadmap() {
  return (
    <>
    <section className="items-center bg-[#A7E6F1]  justify-center">
        <div className=" text-gray-800 text-center"> 
          <h2 className="text-4xl pt-10 font-bold mb-6">Project Road-Map</h2>
        </div>
        <div className="flex  items-center justify-center py-10">
  <div className="max-w-screen-sm  lg:max-w-screen-md xl:max-w-screen-lg pl-40 pr-10 mx-auto">
    <ol className="relative border-l-4 border-indigo-600 leading-loose">
      <li className="mb-10 ml-6 ">
        <div
             className="absolute w-4 h-4 bg-green-500 border-4 border-indigo-600 rounded-full -left-[0.6rem]"
             ></div>
        <p className="absolute -left-[7rem] p-0 m-0 font-bold">March 2022</p>
        <p className="font-bold text-lg mb-1">Inception of Idea</p>
       
        <p>
           Leveraging power of Artificial intelligence in prediction of degradation of microplastics. 
        </p>
      </li>
      <li className="mb-10 ml-6 ">
        <div
             className="absolute w-4 h-4 bg-green-500 border-4 border-indigo-600 rounded-full -left-[0.6rem]"
             ></div>
        <p className="absolute -left-[7rem] p-0 m-0 font-bold">May 2022</p>
        <p className="font-bold text-lg mb-1">
          Proof of concept 
        </p>
       
        <p>
          Making data preprocessing and trying out different time series analysis and prediction algorithms such as ARIMA, SARIMA etc.  
        </p>
      </li>
      <li className="mb-10 ml-6 ">
        <div
             className="absolute w-4 h-4 bg-green-500 border-4 border-indigo-600 rounded-full -left-[0.6rem]"
             ></div>
        <p className="absolute -left-[7rem] p-0 m-0 font-bold">
        Nov 2022
          
        </p>
        <p className="font-bold text-lg mb-1">OpenDatum Origin </p>
       
        <p>
           Creating OpenDatum, the platform to accelerate the research of microplastics degradation and toxicology. 
        </p>
      </li>
      <li className="mb-10 ml-6 ">
        <div
             className="absolute w-4 h-4 bg-green-500 border-4 border-indigo-600 rounded-full -left-[0.6rem]"
             ></div>
        <p className="absolute -left-[7rem] p-0 m-0 font-bold">June 2023</p>
        <p className="font-bold text-lg mb-1">OpenDatum </p>
       
        <p>
           Platform BETA launch with minium important features. Also include our AI models. 
        </p>
      </li>
      <li className="mb-10 ml-6 ">
        <div
             className="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"
             ></div>
        <p className="absolute -left-[7rem] p-0 m-0 font-bold">Dec 2024</p>
        <p className="font-bold text-lg mb-1">OpenDatum </p>
       
        <p>
           Release and open-source developers API and documentations under MIT and other licenses
        </p>
      </li>
      <li className="mb-10 ml-6 ">
        <div
             className="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"
             ></div>
        <p className="absolute -left-[7rem] p-0 m-0 font-bold">
          June 2025
        </p>
        <p className="font-bold text-lg mb-1">
          OpenDATUM Globally
        </p>
        
        <p>
          The suite of tools to be launched in the global scale with realtime data processing and inference capability. 
        </p>
      </li>
      <li className="mb-10 ml-6 ">
        <div
             className="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"
             ></div>
        <p className="absolute -left-[7rem] p-0 m-0 font-bold">Dec 2025</p>
        <p className="font-bold text-lg mb-1">
          OpenDatum on Blockchains
        </p>
        
        <p>
          Complete side chain solution for multiple leading blockchains such as Ethereum, Polygon etc. 
        </p>
      </li>
    </ol>
  </div>
</div>
      </section>
    </>
  )
}

export default Roadmap