import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
import { PortableTextComponent } from "@/sanity/components/PortableTextComponent";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post?.seo) {
    notFound();
  }

  const { title, description } = post.seo;

  return {
    title,
    description,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: post } = await sanityFetch({
    query: POST_QUERY,
    params: await params,
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Image
        src={urlFor(post.mainImage!).url()}
        alt={post.title!}
        height={300}
        width={800}
        className="object-cover max-h-[400px] max-w-full"
      />
      <h1 className="text-4xl font-bold text-balance">{post?.title}</h1>
      {post.body && (
        <PortableText value={post.body} components={PortableTextComponent} />
      )}
      <hr />
      <Link href="/posts">&larr; Return to index</Link>
    </main>
  );
}
