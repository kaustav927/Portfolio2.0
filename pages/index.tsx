import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
     
      <div className="p-6 max-w-sm mx-auto bg-yellow rounded-xl shadow-lg flex items-center space-x-4">
        <div className="shrink-0">
         <div>
           <img/>
         </div>
         <div className="text-xl font-medium text-black">
            <p className="text-slate-500">Hello world!</p>
         </div>
            
          
        </div>
      </div>
    )
}

export default Home
