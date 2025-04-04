import { defineField, defineType } from "sanity";
import { client } from "../lib/client";

export const navigationType = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: {
        list: [
          { title: "Header", value: "header" },
          { title: "Footer", value: "footer" },
        ],
        layout: "radio",
      },
      initialValue: "header",
      validation: (Rule) =>
        Rule.custom(async (selectedType, context) => {
          if (!selectedType || !context.document) return true; // validation is required anyway

          const existing = await client.fetch(
            `*[_type == "navigation" && type == $type && _id != $id][0]`,
            {
              type: selectedType,
              id: context.document._id,
            }
          );

          return existing
            ? `A ${selectedType} navigation already exists. Only one is allowed.`
            : true;
        }),
    }),
    defineField({
      name: "navItems",
      title: "Nav Items",
      type: "array",
      of: [{ type: "navItem" }],
      validation: (Rule) => Rule.required(),
    }),
  ],
});
