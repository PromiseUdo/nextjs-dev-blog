import React from "react";
import PostGrid from "../posts/post-grid";
import classes from "./featured-post.module.css";

const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPosts</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
