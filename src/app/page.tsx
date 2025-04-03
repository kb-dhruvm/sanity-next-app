import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center my-8">
        Home
      </h1>
      <hr />
      <Link href="/posts">Posts index &rarr;</Link>
    </>
  );
}
