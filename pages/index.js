import React from "react";
import Head from "next/head";
import FeaturedPosts from "../components/home-page/FeaturedPosts";
import Hero from "../components/home-page/Hero";
import { getAllPosts, getFeaturedPosts } from "../lib/posts-util";

const index = (props) => {
  return (
    <>
      <Head>
        <title>Promise' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development"
        />
        s
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </>
  );
};

export function getStaticProps() {
  const featuredPosts = getAllPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default index;
