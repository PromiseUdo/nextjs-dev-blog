import React from "react";
import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import materialDark from "react-syntax-highlighter/dist/cjs/styles/prism/material-dark";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

SyntaxHighlighter.registerLanguage("js", js);

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customComponent = {
    img: ({ ...props }) => {
      return (
        <Image
          src={`/images/posts/${post.slug}/${props.src}`}
          alt={props.alt}
          width={600}
          height={300}
        />
      );
    },

    code: ({ children, ...props }) => {
      return (
        <SyntaxHighlighter
          style={materialDark}
          language={props.language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />

      <ReactMarkdown
        children={post.content}
        components={customComponent}
      ></ReactMarkdown>
    </article>
  );
};

export default PostContent;
