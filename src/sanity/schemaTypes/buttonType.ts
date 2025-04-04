import { defineField, defineType } from "sanity";

export const buttonType = defineType({
  name: "button",
  title: "Button",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("Title is required"),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
      validation: (Rule) => Rule.required().error("Link is required"),
    }),
    defineField({
      name: "target",
      title: "Target",
      type: "string",
      options: {
        list: [
          { title: "Self", value: "_self" },
          { title: "Blank", value: "_blank" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required().error("TTarget is requried"),
      initialValue: "_blank",
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
        ],
        layout: "radio",
      },
      initialValue: "primary",
    }),
  ],
});
