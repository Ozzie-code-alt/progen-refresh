import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetadata";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import BlogButton from "@/components/Blogs/BlogButton";
import { FaRegUserCircle } from "react-icons/fa";
import Footer from "@/components/Global/Footer";
import ThreeColumnFooter from "@/components/Global/LargeBreakpointFooter";
import NavbarGroup from "@/components/Global/NavbarGroup";
import { Oxanium } from "next/font/google";

const oxaniumFont = Oxanium({ weight: "500", subsets: ["latin"] });
const grabMetaTitle = getPostMetadata("mdBlogs");


function getPostContent(slug) {
  const folder = "mdBlogs/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return {
    content: matterResult.content,
    metadata: matterResult.data, // This contains the front matter
  };
}

// generator
export const generateStaticParams = async () => {
  const posts = getPostMetadata("mdBlogs");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const slug = params?.slug;
  
  const postContent = getPostContent(slug);
  console.log("this is inside slug", slug);
  console.log("this is postContent", postContent);
  const title = postContent.metadata.title; 

  const ogImage =
    postContent.metadata.image || "https://example.com/default-image.jpg"; // Default image if none specified
  const ogDescription =
    postContent.metadata.description ||
    `Read the latest updates on ${slug.replaceAll(
      "_",
      " "
    )} at Kwatro Distrito Blog.`;
  const url = `https://yourdomain.com/blog/${slug}`;
  const author = postContent.metadata.author;
  console.log("this is autor", author);
  console.log("this is url", url);
  console.log("this is ogDescription", ogDescription);
  console.log("this is ogImage", ogImage);
  return {
    title: title,
    description: ogDescription,
    image: ogImage,
    url: url,
    Author: author,
  };
}

const BlogPage = (props) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main className="bg-black w-full flex flex-col relative h-full ">
      <Head>
        <title>{post.metadata.title}</title>
        <meta name="description" content={post.metadata.description} />
        <meta property="og:title" content={post.metadata.title} />
        <meta property="og:description" content={post.metadata.description} />
        <meta property="og:image" content={post.metadata.image} />
        <meta name="author" content={post.metadata.Author}/>
        <meta
          property="og:url"
          content={`https://yourdomain.com/blog/${slug}`}
        />
      </Head>
      <NavbarGroup />
      <article className="flex flex-col lg:flex-row pt-[10%] pb-10">
        {/*Left Side*/}
        <div className="w-full lg:w-[45%] flex  h-full justify-center ">
          <div className=" lg:fixed lg:px-30 flex flex-col gap-5">
            <BlogButton />
            <div className="flex px-10 flex-col  justify-center text-left">
              <h1
                className={`text-[#FFFFFF] font-bold text-[30px] text-wrap md:text-[40px] 2xl:text-[50px]   uppercase  ${oxaniumFont.className}`}
              >
                {post.metadata.blogTitle}
              </h1>
              <p
                className={`text-[#FFFFFF] text-[20px] text-wrap   text-opacity-[63%]  ${oxaniumFont.className}`}
              >
                {" "}
                {post.metadata.description}
              </p>
            </div>

            <div className="flex gap-3 pb-5 px-10">
              <FaRegUserCircle className="text-[#FFFFFF] text-[20px]" />
              <p className="text-[#FFFFFF] text-[15px] text-opacity-[63%] font-ox">
                Prometheus
              </p>
            </div>
          </div>
        </div>
        {/*Right Side */}
        <div
          className={`w-full px-10 lg:w-[55%] h-full ${oxaniumFont.className}`}
        >
          <Markdown>{post.content}</Markdown>
        </div>
        {/* <h1>{post.metadata.title}</h1>
            <p><strong>Author:</strong> {post.metadata.author}</p>
            <img src={post.metadata.image} alt={`Image for ${post.metadata.title}`} />
            <p>{post.metadata.description}</p>
        <Markdown>{post.content}</Markdown> */}
      </article>
      <footer className="md:hidden">
        <Footer />
      </footer>

      <footer className="hidden md:block">
        <ThreeColumnFooter />
      </footer>
    </main>
  );
};

export default BlogPage;
