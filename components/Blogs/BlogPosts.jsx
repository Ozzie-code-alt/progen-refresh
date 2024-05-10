import Link from "next/link";
import { CgProfile } from "react-icons/cg";

export default function BlogCard(props) {
  const { post } = props;
  return (
      <div className="postCard text-white mx-10 flex flex-row gap-10 pb-10   ">
        <div className="flex flex-col md:flex-row mt-12 justify-between w-full">
          {/*Left Div*/}
          <div className="w-full md:w-[60%]  flex">
            <img src={post.image} alt="images" className="rounded-2xl" />
          </div>
          {/*Right Div*/}
          <div className="w-full md:w-[40%] flex flex-col md:ml-14 my-4 mr-4 space-y-4">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-xl md:text-3xl  text-white font-bold  cursor-pointer">
                {post.title}
              </h2>
            </Link>
            <div className="flex flex-row w-full space-x-2">
            <div className="flex items-center text-2xl ">
              <CgProfile />
            </div>
            <h3 className="flex">Prometheus</h3>
          </div>
          </div>
        </div>
      </div>
  );
}
