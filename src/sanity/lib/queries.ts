import { defineQuery } from "next-sanity";

export const HOME_QUERY = defineQuery(
  `*[_type == "home" && language == $local][0]`
);

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)][0...12]{
  _id, title, slug, author->
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "post" && slug.current == $slug][0]{
  title, body, mainImage, seo
}`);

export const NAVIGATION_QUERY = defineQuery(
  `*[_type == "navigation" && type == $type][0]`
)
