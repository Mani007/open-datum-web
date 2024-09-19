import React from 'react'
import Image from "next/image";
import {dummy2} from '../constants';

function About() {
  return (
   
    <>
     <div>About</div>
     <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <p>{dummy2}</p>
    </>
  )
}

export default About