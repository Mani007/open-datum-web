import React from 'react'
import Image from 'next/image'
import first from '../../../public/Events/Limnoplast23/1.jpg'
import second from '../../../public/Events/Limnoplast23/2.jpg'
import third from '../../../public/Events/Limnoplast23/3.jpg'
import conf from '../../../public/Events/conference.jpg'
import talk from '../../../public/Events/talks.jpg'
import workshop from '../../../public/Events/workshop.jpg'
import web from '../../../public/Events/webinar.jpg'
import podcast from '../../../public/Events/pocast.jpg'
import presentation from '../../../public/Events/presentation.jpg'
import keynote from '../../../public/Events/keynote.jpg'
import meetup from '../../../public/Events/meetup.jpg'
import pdiscussion from '../../../public/Events/paneldiscussion.jpg'

function Events() {
    const events = [
        {
            id:1,
            type: 'Podcast',
            image: podcast,
        },
        {
            id:2,
            type: 'Webinar',
            image: web,
        },
        {
            id:3,
            type: 'Conference',
            image: conf,
        },
        {
            id:4,
            type: 'Workshop',
            image: workshop,
        },
        {
            id:5,
            type: 'Talk',
            image: talk,
        },
        {
            id:6,
            type: 'Panel Discussion',
            image: pdiscussion,
        },
        {
            id:7,
            type: 'Presentation',
            image: presentation,
        },
        {
            id:8,
            type: 'Key Notes',
            image: keynote,
        },
        {
            id:9,
            type: 'Meetups',
            image: meetup,
        }
    ]
  return (
    <>
    <section className='bg-[#b6d8db]'>
        <h2 className='text-center text-3xl'><strong> Events </strong> </h2>
        <h2 className='text-center text-xl'> Limnoplast 2023  </h2>
        <div className='text-center justify-center'>
            <p> We have successfully introduced the inception of OpenDatum at UNESCO's Limnoplast 2023 conference in Paris, France.  </p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-3 '>
            <div className=''>
            <Image src={first} 
                
                alt='Limnoplast 23 UNESCO' className="w-full h-96 rounded-t-lg" />
            </div>
            
            
            <div>
            <Image src={third}
                
                alt='Limnoplast 23 UNESCO' className="w-full h-96 rounded-t-lg" />
            </div>
    
            <div>
            <Image src={second}
                
                alt='Limnoplast 23 UNESCO' className="w-full h-96 rounded-t-lg" />
            </div>
        </div>
        
        <h2 className='text-center text-xl'> Upcoming Events </h2>
        {events.map( (event) => {
            return(
                <>
                
               

                <div  key={event.id} className="flex flex-row md:flex-col px-30  gap-x-6 lg:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="bg-[#b6d8db] block rounded-lg shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <Image src={event.image} 
                
                alt={event.type} className="w- h-full rounded-t-lg" />
                
                
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">
                {event.type}</h5>
                <p className="text-gray-500 mb-4">Chief of Open DATUM Initiative</p>
              
              </div>
            </div>
          </div>
          </div>
                </>

            )}
        )}
    </section>
    </>
  )
}

export default Events