import Image from "next/image";

export default function Blog() {
  return (
    <section
      className="flex justify-center my-20 p-2"
      aria-label="blog section"
    >
      <div className="lg:w-2/3">
        <h1 className="lg:text-6xl font-bold text-center">Community Blog</h1>

        <div className="grid lg:grid-cols-3 gap-4">
          {/* COL1 */}
          <div className="p-4 border border-white/10 rounded shadow-xl my-8">
            <Image
              src="/images"
              width={400}
              height={300}
              alt="Blog 1 Image"
              className="bg-gray-100 my-2"
            />
            <p className="text-sm">January 03, 2009</p>
            <p className="uppercase text-sm font-bold font-mono my-4">
              Community
            </p>
            <h1 className="text-3xl font-bold my-2">Blog Header 1</h1>
            <p>Paragraph for the blog!</p>
            <button className="uppercase my-4 font-bold hover:translate-x-8 duration-300">
              Read More
            </button>
          </div>

          {/* COL2 */}
          <div className="p-4 border border-white/10 rounded shadow-xl my-8">
            <Image
              src="/images"
              width={400}
              height={300}
              alt="Blog 1 Image"
              className="bg-gray-100 my-2"
            />
            <p className="text-sm">January 03, 2009</p>
            <p className="uppercase text-sm font-bold font-mono my-4">
              Community
            </p>
            <h1 className="text-3xl font-bold my-2">Blog Header 1</h1>
            <p>Paragraph for the blog</p>
            <button className="uppercase my-4 font-bold hover:translate-x-8 duration-300">
              Read More
            </button>
          </div>

          {/* COL3 */}
          <div className="p-4 border border-white/10 rounded shadow-xl my-8">
            <Image
              src="/images"
              width={400}
              height={300}
              alt="Blog 1 Image"
              className="bg-gray-100 my-2"
            />
            <p className="text-sm">January 03, 2009</p>
            <p className="uppercase text-sm font-bold font-mono my-4">
              Community
            </p>
            <h1 className="text-3xl font-bold my-2">Blog Header 1</h1>
            <p>Paragraph for the blog</p>
            <button className="uppercase my-4 font-bold hover:translate-x-8 duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
