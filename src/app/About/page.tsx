import React from 'react'
import Image from "next/image";

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
    </>
  )
}

export default About