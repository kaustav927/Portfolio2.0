import React from 'react'
import Navbar from '../components/Navbar'
function Contact() {
  return (
    <>
    <Navbar/>
    <div className="container mt-10 flex justify-between items-center w-10/12 mx-auto px md:px-14 lg:px-24 h-full">
      <section className="w-full">
        <h2 id="work" className="text-4xl font-cd-bold dark:text-white">
          Contact
        </h2>
        <div >
          <form>Name</form>
          <input
                      className="bg-gray-200 shadow-inner rounded p-2 flex-1 outline-none"
                      type="email"
                      aria-label="email"
                      placeholder="Enter Account Username of Email"
          />
          <h1 className="text-sm">Description</h1>
                  <form className="">
                    <textarea
                      placeholder="Enter your password description"
                      className="bg-gray-200 shadow-inner rounded p-2 my-3 flex-1 w-3/4 h-52"
                      type="text"
                    />
                  </form>
        </div>
        

        
      </section>
    </div>
    </>
  )
}

export default Contact