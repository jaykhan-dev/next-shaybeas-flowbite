import Image from "next/image";
import Blog1 from "../public/images/blogs/blog.webp";
import Blog2 from "../public/images/blogs/blog4.webp";
import Blog3 from "../public/images/blogs/blog8.webp";
import BlogGIF from "../public/lottie/blog1.gif";
import Link from "next/link";

export default function Blog() {
  return (
    <section
      className="flex justify-center my-20 p-2"
      aria-label="blog section"
      id="blog"
    >
      <div className="lg:w-2/3 grid place-items-center">
        <Image src={BlogGIF} width={300} height={300} alt="Blog gif" />
        <h1 className="lg:text-6xl font-bold text-center m-8">
          Community Blog
        </h1>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* COL1 */}
          <div className="p-4 border border-black/20 rounded shadow-xl hover:scale-95 duration-300 my-8">
            <Image
              src={Blog1}
              width={400}
              height={300}
              alt="Blog 1 Image"
              className="bg-gray-100 my-2"
            />
            <div className="flex items-center justify-between">
              <p className="text-sm">January 03, 2009</p>
              <p className="uppercase text-sm font-bold">Community</p>
            </div>
            <h2 className="text-3xl font-bold my-4">Blog Header 1</h2>
            <p>Paragraph for the blog!</p>
            <Link href="/blogs/blog-1">
              <button className="uppercase my-4 hover:translate-x-2 duration-300">
                Read More
              </button>
            </Link>
          </div>

          {/* COL2 */}
          <div className="p-4 border border-black/20 rounded shadow-xl hover:scale-95 duration-300 my-8">
            <Image
              src={Blog2}
              width={400}
              height={300}
              alt="Blog 1 Image"
              className="bg-gray-100 my-2"
            />
            <div className="flex items-center justify-between">
              <p className="text-sm">January 03, 2009</p>
              <p className="uppercase text-sm font-bold">Community</p>
            </div>
            <h2 className="text-3xl font-bold my-4">Blog Header 1</h2>
            <p>Paragraph for the blog</p>
            <button className="uppercase my-4 hover:translate-x-2 duration-300">
              Read More
            </button>
          </div>

          {/* COL3 */}
          <div className="p-4 border border-black/20 rounded shadow-xl hover:scale-95 duration-300 my-8">
            <Image
              src={Blog3}
              width={400}
              height={300}
              alt="Blog 1 Image"
              className="bg-gray-100 my-2"
            />
            <div className="flex items-center justify-between">
              <p className="text-sm">January 03, 2009</p>
              <p className="uppercase text-sm font-bold">Community</p>
            </div>
            <h2 className="text-3xl font-bold my-4">Blog Header 1</h2>
            <p>Paragraph for the blog</p>
            <button className="uppercase my-4 hover:translate-x-2 duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
