import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/SiteNav'
import { urlFor } from "../lib/sanity"
import { Post } from '../typings'
import { sanityClient} from "../lib/sanity.server"


interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props){  
   const latest = posts.slice(0,4);  
  return (
    <div className=''> 
      <Head>
        <title>Lucent Esports</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className="">
        <div>
          <img className="w-full h-80vh object-cover" src='/img/large-slideshow-1.jpg' alt='slideshow'/>
        </div>
        <div className="flex items-center justify-center w-80 mx-auto pt-5 text-2xl">LATEST NEWS</div>
        <div className='mx-auto min-w-min justify-center grid grid-cols-1 sm:grid-cols-2 sm:max-w-xl lg:grid-cols-4 lg:max-w-7xl'>
          {latest.map(post=>(           
            <Link key={post._id} href={`/post/${post.slug.current}`}>
              <div className=" min-w-min relative mx-auto rounded-lg w-64 group cursor-pointer overflow-hidden">
                <img 
                  className='h-64 w-64 object-cover rounded-lg group-hover:scale-105 group-hover:shadow-xl transition-transform duration-200 ease-in-out'
                  src={
                  urlFor(post.mainImage).url()!
                } alt=""/>
                <div className='p-2 bg-white'>
                  <div>  
                    <p>{post.categories[0].title}</p>                  
                    <p>{post.title}</p>                    
                  </div>
                    <p>Date</p>
                </div>
              </div>
            </Link>
          ))}
        </div>     
      </main>
    </div>  
        
  )
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] | order(_createdAt desc){
    _id,
    _createdAt,
    title,
    author->{
      name,
      image,
      bio
    },
    categories[]->{
      title,
    }, 
    publishedAt,
    longtitle,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return{
    props: {
      posts,
    }
  }

};