import React from 'react'
import Image from "next/image";

import Vai from '../../../public/profile pic/GetPersonaPhoto.jpg'
import Coming from '../../../public/profile pic/rsz_1coming-soon-g0f36bc8ad_640.jpg'
import Mohnish from '../../../public/profile pic/WhatsApp Image 2023-02-12 at 17.04.38.jpeg'

function About() {
  return (
    <>

<section className=" px-20 bg-[#A7E6F1] text-neutral-700 text-center">
<h2 className="text-4xl font-bold mb-12">About Us</h2>
    <p>We have started this project out of our lab experiments turned some magical computer codes. Soon we realize the importance and impact of our work. So the journey of OpenDatum begins. Our primary goal is to create an integrated system between micro-plastics research chemistry lab to software interface via world wide web such that all the researchers, scientists, industry expert and technologist work together to monitor, predict and take actions to reverse the damages of micro-plastics pollutions. </p>  <br />
    <div className='text-left'>
    <h4><b>Our Ethos</b> </h4> 
    <ol>
        <li><b>1. Integrity</b></li>
        <p>Everything we do, must withstand the test of public scrutiny. </p>
        <li><b>2. Transparency </b></li>
        <p>Every action we make is available to the public as is.</p>
        <li><b>3. Inclusion </b> </li>
        <p>Everyone is welcome and included, there is no place for any type of prejudice. </p>
        <li><b>4. Open Innovation </b></li>
        <p>We believe true innovation happens through collaborations.</p>
        <li><b>5. Environment </b></li>
        <p>Our ultimate product is our safer planet and its environment.</p>
    </ol> 
    </div>
    <br />
    
        <h2 className="text-4xl font-bold mb-12">The Team</h2>
        
    
        <div className="grid px-30 md:grid-cols-3 gap-x-6 lg:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="bg-[#b6d8db] block rounded-lg shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <Image src={Vai} 
                
                alt='Vaibhav' className="w-full h-96 rounded-t-lg" />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                  >
                  <path fill="#fff"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  </path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">
                  Vaibhav Budhiraja</h5>
                <p className="text-gray-500 mb-4">Chief of Open DATUM Initiative</p>
                <ul className="list-inside flex mx-auto justify-center">
                  
                  <a href="https://twitter.com/VaibhavPlast" target="_blank" className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                      <path fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/vaibhav-budhiraja-37070b9a/" target="_blank" className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                      <path fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="mb-6 lg:mb-0">
            <div className="bg-[#b6d8db] block rounded-lg shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <Image src={Mohnish} 
              
                 alt='Mohnish'
                 className="w-full h-96 rounded-t-lg" />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                  >
                  <path fill="#fff"
                    d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  </path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">Mohnish Awade</h5>
                <p className="text-gray-500 mb-4">Chief of Technology in Open DATUM</p>
                <ul className="list-inside flex mx-auto justify-center">
                  
                  <a href="https://twitter.com/MohnishMonopoly" target="_blank" className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 text-blue-600">
                      <path fill="currentColor"
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/mohnishmonopoly" target="_blank" className="px-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                      <path fill="currentColor"
                        d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </a>
                </ul>
              </div>
            </div>
          </div>
    
          <div className="">
            <div className="bg-[#b6d8db] block rounded-lg shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <Image src={Coming} alt='Comingsoon'
                className="w-full h-96 rounded-t-lg" />
                <a href="#!">
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                </a>
                <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                  >
                  <path fill="#fff"
                    d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                  </path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">This could be You</h5>
                <p className="text-gray-500 mb-4">People willing to contribute to our initiative</p>
                <a href="https://forms.gle/qExvw9CUgUA1669d9" target="_blank" className="text-blue-600"> Apply here</a>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    
    </>
  )
}

export default About