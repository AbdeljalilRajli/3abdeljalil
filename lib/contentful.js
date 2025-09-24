import { createClient } from 'contentful';

// Check if environment variables are available
const spaceId = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

let client = null;

if (spaceId && accessToken) {
  client = createClient({
    space: spaceId,
    accessToken: accessToken,
  });
}

export async function fetchEntries() {
  if (!client) {
    console.warn('Contentful client not configured. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN environment variables.');
    return []; // Return empty array as fallback
  }
  
  try {
    const entries = await client.getEntries({
      content_type: 'abdeljalil_Blog', // Replace with your Content Type ID
      include: 2, // Include linked entries (such as embedded assets)
      order: '-sys.createdAt', // Order by creation date (newest first)
      limit: 100, // Limit to 100 entries for better performance
    });
    return entries.items;
  } catch (error) {
    console.error('Error fetching entries:', error);
    return []; // Return empty array on error
  }
}

export async function fetchEntry(slug) {
  if (!client) {
    console.warn('Contentful client not configured. Please set CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN environment variables.');
    return null;
  }
  
  try {
    const entries = await client.getEntries({
      content_type: 'abdeljalil_Blog',
      'fields.slug': slug,
      include: 2, // Include linked entries
    });
    return entries.items[0] || null;
  } catch (error) {
    console.error('Error fetching entry:', error);
    return null;
  }
}
