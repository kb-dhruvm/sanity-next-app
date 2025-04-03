import { HomeIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const homeType = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "heroSection" }, { type: "ctaSectionType" }],
    }),
  ],
});
