export const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error("Missing SANITY_STUDIO_API_TOKEN");
}