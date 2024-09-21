import React from 'react'
import Image from "next/image";
import Img1 from '../../../public/31Z_2103.w023.n001.280B.p1.280.jpg'
import Img2 from '../../../public/Rubbish Bag-01.jpg'
import Img3 from '../../../public/1906.i126.028.nature water pollution.jpg'
import Img4 from '../../../public/woman-drowning-water-plastic-recipients-pile-garbage-used-bottles-packs-filling-world-ocean-killing-people.jpg'
import Img5 from '../../../public/Project_69-07.jpg'
function Landing() {
  return (
    <>
     <div className="relative flex flex-col items-center justify-center">
        <Image src={Img1} alt="base"/>
        
            <h1 className="font-light absolute text-center text-slate-800 lg:text-8xl md:text-10xl sm:text-10xl "><strong> Micro-Plastics <br /> The Hidden Pandemic </strong></h1> 
            
                         
    </div>
 
<div className="relative flex flex-col justify-center items-center  bg-[#A7E6F1]  pt-5">
 <section className="transition-all">
  <div className="grid grid-cols-2  ">
    <div className="relative flex flex-col items-center justify-center"> 
      <Image src={Img2} alt="ocean"/>
    </div>
    <div className="relative flex flex-col items-center justify-center"> 
      <div className="basis-5">
      <h1 className="font-light  text-center  lg:text-4xl md:text-2xl sm:text-2xl "><strong> Plastics Waste </strong></h1>
    </div>
    <div className="basis-3">  
    <p className=" font-light text-center  lg:text-2xl md:text-1xl sm:text-1/2xl ">
        This plastic waste get degrade into micro and nano size particles, also known as <strong>Micro-plastics.</strong>   
      </p>
    </div>   
    </div>

  </div>
</section>

<section className="mt-10 transition-all">
  <div className="grid grid-cols-2  ">
    
    <div className="relative flex flex-col items-center justify-center"> 
      <div className="basis-5">
      <h1 className="font-light  text-center  lg:text-4xl md:text-2xl sm:text-2xl "><strong> Micro-Plastics and Environment </strong></h1>
    </div>
    <div className="basis-3">  
    <p className=" font-light text-center  lg:text-2xl md:text-1xl sm:text-1/2xl ">
        These <strong>Micro-plastics</strong> will mix in the Environment and will pollute it that no instrument can measure accurately.  
      </p>
    </div>   
    </div>
       
       <div className="relative flex flex-col items-center justify-center"> 
        <Image src={Img3} alt="ocean"/>
      </div>
  </div>
</section>

<section className="mt-10 transition-all">
  <div className="grid grid-cols-2 ">
    <div className="relative flex flex-col items-center justify-center"> 
      <Image src={Img4} alt="ocean"/>
    </div>
    <div className="relative flex flex-col items-center justify-center"> 
      <div className="basis-5">
      <h1 className="font-light  text-center  lg:text-4xl md:text-2xl sm:text-2xl "><strong> Micro-Plastics and Humans </strong></h1>
    </div>
    <div className="basis-3">  
    <p className=" font-light text-center  lg:text-2xl md:text-1xl sm:text-1/2xl ">
        Reaseach has shown that humans consume more than 70000  <strong>Micro-plastics</strong> particle every year.     
      </p>
    </div>   
    </div>
       
  </div>
</section>

<section id="tech" className="mt-10 transition-all">
  <div className="grid grid-cols-2  ">
    
    <div className="relative flex flex-col items-center justify-center"> 
      <div className="basis-5">
      <h1 className="font-light  text-center  lg:text-4xl md:text-2xl sm:text-2xl "><strong> Artificial Intelligence for Micro-Plastics degradation and Toxicology </strong></h1>
    </div>
    <div className="basis-3">  
    <p className=" font-light text-center  lg:text-2xl md:text-1xl sm:text-1/2xl ">
        Our OpenDATUM- Open Sorce tool, with Artificial Intelligence, can be able to predict <strong>Micro-plastics</strong> degradation and Toxicology across different parts of the world. 
      </p>
    </div>   
    </div>
       <div className="relative flex flex-col items-center justify-center"> 
        <Image src={Img5} alt="ocean"/>
      </div>
  </div>
</section>
</div>
    </>
  )
}

export default Landing