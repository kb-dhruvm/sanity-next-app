import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { postType } from "./postType";
import { authorType } from "./authorType";
import { heroSectionType } from "./heroSectionType";
import { buttonType } from "./buttonType";
import { homeType } from "./homeType";
import { ctaSectionType } from "./ctaSectionType";
import { seoType } from "./seoType";
import { navItemType } from "./navItemType";
import { navigationType } from "./navigationType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blockContentType,
    categoryType,
    postType,
    authorType,
    heroSectionType,
    ctaSectionType,
    buttonType,
    homeType,
    seoType,
    navItemType,
    navigationType,
  ],
};
