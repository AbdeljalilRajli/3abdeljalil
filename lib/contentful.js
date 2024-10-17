import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function fetchEntries() {
  const entries = await client.getEntries({
    content_type: 'abdeljalil_Blog', // Replace with your Content Type ID
    include: 2, // Include linked entries (such as embedded assets)
  });
  return entries.items;
}

export async function fetchEntry(slug) {
  const entries = await client.getEntries({
    content_type: 'abdeljalil_Blog',
    'fields.slug': slug,
    include: 2, // Include linked entries
  });
  return entries.items[0];
}
