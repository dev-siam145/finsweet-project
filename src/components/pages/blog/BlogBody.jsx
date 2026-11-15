import React from 'react'
import Container from '../../common/Container'
import { Link } from 'react-router-dom';


const blogs = [
  {
    id: 1,
    title: "Introduction to Web Development",
    slug: "introduction-to-web-development",
    description: "Learn the fundamentals of web development using HTML, CSS, and JavaScript.",
    publishedDate: "2026-01-15"
  },
  {
    id: 2,
    title: "Why JavaScript is Important",
    slug: "why-javascript-is-important",
    description: "Discover why JavaScript is one of the most popular programming languages.",
    publishedDate: "2026-02-10"
  },
  {
    id: 3,
    title: "Mastering CSS Flexbox",
    slug: "mastering-css-flexbox",
    description: "Understand CSS Flexbox and learn how to create responsive layouts.",
    publishedDate: "2026-03-05"
  },
  {
    id: 4,
    title: "Getting Started with React",
    slug: "getting-started-with-react",
    description: "Explore React fundamentals and build your first interactive user interface.",
    publishedDate: "2026-04-20"
  },
  {
    id: 5,
    title: "Responsive Web Design",
    slug: "responsive-web-design",
    description: "Learn how to make websites look great on mobile, tablet, and desktop devices.",
    publishedDate: "2026-05-12"
  },
  {
    id: 6,
    title: "Understanding Tailwind CSS",
    slug: "understanding-tailwind-css",
    description: "Discover how Tailwind CSS helps developers build modern interfaces faster.",
    publishedDate: "2026-06-18"
  }
];


const BlogBody = () => {
  return (
   <section className='py-28'>
    <Container>
        <div className='grid grid-cols-3 gap-6'>
            {blogs.map((item,index)=>(

                <Link to={`/blog/${item.slug}`} target='_blank' className='bg-white shadow-2xl p-4 rounded-xl'>
                    <div className='h-[250px] rounded-2xl bg-blue-600'></div>
                    <h3 className='text-2xl mt-5'>{item.title}</h3>
                    <p className='py-4'>{item.description}</p>
                    <span>Published Data:{item.publishedDate}</span>
                </Link>
            ))

            }
        </div>

    </Container>
   </section>
  )
}

export default BlogBody