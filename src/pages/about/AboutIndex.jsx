import React, { useEffect } from 'react'
import axios from 'axios';
import Container from '../../components/common/Container';


const AboutIndex = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'
    useEffect(()=>{
        console.log("hello")


    },[])

  return (
    <div className='py-20'>
        <Container>

        </Container>
    </div>
  )
}

export default AboutIndex