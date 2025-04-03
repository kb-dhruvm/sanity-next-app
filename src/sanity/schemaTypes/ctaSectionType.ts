import { defineField, defineType } from "sanity";

export const ctaSectionType = defineType({
  name: "ctaSectionType",
  title: "CTA Section",
  type: "object",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "array",
      of: [{ type: "button" }],
    }),
  ],
});
