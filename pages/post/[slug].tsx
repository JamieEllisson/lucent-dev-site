import { GetStaticProps } from "next";
import SiteNav from "../../components/SiteNav";
import { urlFor } from "../../lib/sanity";
import { sanityClient } from "../../lib/sanity.server";
import { Post } from "../../typings"
import styles from "./Post.module.css"
import PortableText from "react-portable-text"
import Footer from "../../components/Footer";

interface Props {
    post: Post;
}

function Post({post}: Props) {   
    
  return (
    <main>
        <SiteNav/>
        <article className={styles.article}>
            <section className={styles.hero_container}>
                <img className={styles.hero_image} src={urlFor(post.mainImage).url()!}/>
                <div className={styles.hero_wrapper}>
                    <a><span>&#8249;</span><span>News</span></a>
                    <h1>{post.title}</h1>
                    <div>
                        <span>By {post.author.name}</span>
                        <span className={styles.hero_date}>{new Date(post._createdAt).toDateString().substring(4,16)} </span>
                        <span>{post.categories[0].title}</span>
                    </div>
                </div>
            </section> 
            <section className={styles.article_body_container}>
                <h2>{post.longtitle}</h2>
                <PortableText
                    className={styles.article_body}
                    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
                    content={post.body}                    
                />    
                <div className={styles.author_container}>
                    <img className={styles.author_image} src={urlFor(post.author.image).url()!}/>
                    <div className={styles.author_details}>
                        <h3>{post.author.name}</h3>
                        <h4>{post.author.bio[0].children[0].text}</h4>
                    </div>
                </div>           
            </section>    
        </article>
        <Footer/>
    </main>
  )
}

export default Post

export const getStaticPaths = async () => {
    const query = `*[_type == "post"] {
        _id,
        slug {
        current
      }
      }`;
    const posts = await sanityClient.fetch(query);

    const paths = posts.map((post : Post) => ({
        params: {
            slug : post.slug.current
        }
    }))
     

    return {
        paths,
        fallback : "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
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
       longtitle,
       mainImage,
       slug,
       body
      }`;

      const post = await sanityClient.fetch(query, { slug: params?.slug });

      if (!post){
          return {
             notFound: true 
          }
      }

      return {
          props: {
              post,
          },
          revalidate: 3600,
      }
};