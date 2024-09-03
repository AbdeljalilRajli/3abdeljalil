import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries() {
  const entries = await client.getEntries({
    content_type: 'abdeljalil_Blog', // Replace with your actual Content Type ID
  });
  return entries.items;
}

export async function fetchEntry(slug) {
  const entries = await client.getEntries({
    content_type: 'abdeljalil_Blog', // Replace with your actual Content Type ID
    'fields.slug': slug,
    select: 'fields.title,fields.content,fields.publishedDate,fields.featuredImage'
  });
  return entries.items[0];
}