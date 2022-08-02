
import Head from '../node_modules/next/head';
import Header from '../components/Header';
import { Hero } from '../components/Hero';
import { Post } from "../typings";
import { sanityClient, urlFor } from "../sanity";
import Link from '../node_modules/next/link';
import Image from '../node_modules/next/image';


interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head >
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      
      <Hero/>

      {/* Posts */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6'>
        {posts.map(post => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className='group cursor-pointer overflow-hidden'>
              <Image 
              className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' 
              src={urlFor(post.mainImage).url()!} 
              alt='main image' 
              />
              <div className='flex justify-between p-5 bg-white'>
                <div>
                  <p className='text-md font-bold'>{post._title}</p>
                  <p className='text-xs'>
                    {post.description} by {post.author.name}
                  </p>
                </div>

              <Image 
              className="h-12 w-12 rounded-full" 
              src={urlFor(post.author.image).url()!}
              alt='author image' 
              />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  // fetch info from Sanity
  const query = `*[_type=="post"]{
    _id,
    title,
    slug,
    author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};