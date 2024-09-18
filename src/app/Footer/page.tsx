import React from 'react'
import Link from 'next/link'
function Footer() {
  return (
    <>
       <footer
  className="bg-indigo-200 text-center text-neutral-600 dark:bg-indigo-200 dark:text-neutral-600 lg:text-left">
  <div
    id="comm" className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
    
    <div className="flex w-full items-center justify-center">
      
      <Link href="https://twitter.com/ouropendatum" target="_blank" className="mr-6 text-neutral-600 dark:text-neutral-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
        </svg>
      </Link>
      
      
      <Link href="https://github.com/ourOpenDATUM" target="_blank" className="text-neutral-600 dark:text-neutral-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path
            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </Link>
    </div>
  </div>
  <div className="mx-6 py-10 text-center md:text-left">
    <div className="grid-1 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
      <div className="">
        <h5
          className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
         
          OpenDATUM
        </h5>
        <p>
          Our platform powered by state of the art artificial intelligence system, will be able to predict the degradation of microplastics and their toxicology status across different parts of the world. 
          Moreover, as our platform is completely open source, you can develop and apply your own algorithms over it. <br/>
           With our platform, you can put your microplastics research light years ahead.</p>
        
      </div>
      <div className="items-center justify-center">
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Site-Map
        </h6>
        <p className="mb-4">
          <a href="/" className="text-neutral-600 dark:text-neutral-600"
            >Home</a>
        </p>
        <p className="mb-4">
          <a href="#tech" className="text-neutral-600 dark:text-neutral-600"
            >Technology</a>
        </p>
        <p className="mb-4">
          <a href="#event" className="text-neutral-600 dark:text-neutral-600"
            >Events</a>
        </p>
        <p>
          <a href="#comm" className="text-neutral-600 dark:text-neutral-600"
            >Community</a>
        </p>
      </div>
      
      <div>
        <h6
          className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
          Contact
        </h6>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5">
            <path
              d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
            <path
              d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
          </svg>
          Ljubljana, Slovenia
        </p>
        <p className="mb-4 flex items-center justify-center md:justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5">
            <path
              d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path
              d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          opendatum@gmail.com
        </p>
        
      </div>
    </div>
  </div>
  <div className="bg-indigo-200 p-6 text-center dark:bg-indigo-200">
    <span>© 2023 Copyright:</span>
    <a
      className="font-semibold text-neutral-600 dark:text-neutral-600"
      href="https://tailwind-elements.com/"
      >Open DATUM</a>
    
  </div>
</footer>
    </>
  )
}

export default Footer