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
import { Metadata } from 'next'
import { CustomMetadata } from "../blogTypes";
const oxaniumFont = Oxanium({ weight: "500", subsets: ["latin"] });
const grabMetaTitle = getPostMetadata("mdBlogs");

function getPostContent(slug:any) {
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

// export async function generateMetadata({ params, searchParams }) {
//   const slug = params?.slug;

//   const postContent = getPostContent(slug);
//   console.log("this is inside slug", slug);
//   console.log("this is postContent", postContent);
//   const title = postContent.metadata.title;
//   const ogImage =
//     postContent.metadata.image || "https://example.com/default-image.jpg"; // Default image if none specified
//   const ogDescription =
//     postContent.metadata.description ||
//     `Read the latest updates on ${slug.replaceAll("_", " ")}`;
//   const url = `https://yourdomain.com/blog/${slug}`;
//   const ogauthor = postContent.metadata.author;
//   console.log("this is autor", ogauthor);
//   console.log("this is url", url);
//   console.log("this is ogDescription", ogDescription);
//   console.log("this is ogImage", ogImage);
//   return {
//     author: ogauthor,
//     title: title,
//     description: ogDescription,
//     image: ogImage,
//     url: url,
//     date: postContent.metadata.date,
//   };
// }


// export async function generateMetadata(props:any): Promise<CustomMetadata> {
//   const slug = props.params.slug;
//   const post = getPostContent(slug);
//   return {
//     title: post.metadata.blogTitle,
//     description: post.metadata.description,
//     image: post.metadata.image,
//     authors:[{name: "Prometheus"}],
//   }
// }

const BlogPage = (props:any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <main className="bg-black w-full flex flex-col relative h-full ">
      <head>
        <title>{post.metadata.blogTitle}</title>
        <meta name="description" content={post.metadata.description} />
        <meta property="og:title" content={post.metadata.blogTitle} />
        <meta property="og:description" content={post.metadata.description} />
        <meta property="og:image" content={post.metadata.image} />
        <meta name="author" content={post.metadata.authors}/> 
        <meta name="publish_date" property="og:publish_date" content="2019-10-21T00:00:00-0600"/>
      </head>
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
                {post.metadata.author}
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
