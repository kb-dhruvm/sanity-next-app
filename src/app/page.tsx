import { PortableTextComponent } from "@/sanity/components/PortableTextComponent";
import { urlFor } from "@/sanity/lib/image";
import { sanityFetch } from "@/sanity/lib/live";
import { HOME_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { data } = await sanityFetch({ query: HOME_QUERY });

  if (!data) {
    return null;
  }

  const { title, body } = data;

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center my-8">
        {title}
      </h1>
      <hr />
      {body &&
        body.map((block) => {
          if (block._type === "heroSection") {
            const { heading, image, description, button } = block;
            return (
              <div className="relative min-h-[50vh]" key={block._key}>
                {image && (
                  <div className="absolute inset-0">
                    <Image
                      src={urlFor(image).url()}
                      alt={heading || "hero banner"}
                      width={1920}
                      height={1080}
                      className="object-cover w-full h-full"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 backdrop-blur-[2px]" />
                  </div>
                )}

                <div className="relative z-10 px-6 lg:px-8">
                  <div className="mx-auto max-w-3xl min-h-screen flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl drop-shadow-lg">
                        {heading}
                      </h1>
                      {description && (
                        <div className="mt-6 text-lg leading-8 text-gray-100">
                          <PortableText
                            value={description}
                            components={PortableTextComponent}
                          />
                        </div>
                      )}
                      {button && (
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                          <Link
                            href={button.link || "#"}
                            className="rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-gray-900 shadow-lg hover:bg-white transition-all duration-300 hover:scale-105"
                          >
                            {button.title}
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          if (block._type === "ctaSectionType") {
            const { heading, description, button } = block;
            return (
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 py-16" key={block._key}>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {heading}
                    </h2>
                    {description && (
                      <div className="mt-6 text-lg leading-8 text-gray-600">
                        <PortableText
                          value={description}
                          components={PortableTextComponent}
                        />
                      </div>
                    )}
                    {button && button.length > 0 && (
                      <div className="mt-10 flex justify-center gap-x-6">
                        {button.map((btn, index) => (
                          <Link
                            key={index}
                            href={btn.link || "#"}
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            {btn.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          }
        })}
    </>
  );
}
