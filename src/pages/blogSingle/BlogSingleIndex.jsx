import React from 'react'
import Container from '../../components/common/Container'
import { useParams } from 'react-router-dom'

const BlogSingleIndex = () => {
    const {slug}=useParams()

  return (
    <div className='py-20'>
        <Container>
            <h1 className='text-4xl font-bold'>BlogSingleIndex:{slug}</h1>
        </Container>
    </div>
  )
}

export default BlogSingleIndex