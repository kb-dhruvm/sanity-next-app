import { defineField, defineType } from "sanity";

export const navItemType = defineType({
  name: "navItem",
  title: "Nav Item",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Link",
      type: "string",
    }),
    defineField({
      name: "haveSubItems",
      title: "Have Sub Items",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subItems",
      title: "Sub Items",
      type: "array",
      of: [{ type: "navItem" }], 
      hidden: ({ parent }) => !parent.haveSubItems,
    })
  ],
});
