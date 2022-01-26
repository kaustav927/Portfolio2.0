import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

    let name:string;
    let age:number;
    let isMarried:boolean;
    let hobbies:string[];
    let role:[number,string];

    type Person ={
        name: string,
        age?: number,
    }

    let person:Person ={
        name: 'John',
        age: 30,
    }


    return (
            <h1>{name}</h1>
        )
}

export default Home
