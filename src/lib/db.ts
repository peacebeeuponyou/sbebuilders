import fs from 'fs/promises';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'src', 'data', 'content.json');

export interface DB {
  services: any[];
  projects: any[];
  testimonials: any[];
  companyInfo: any;
  blogs: any[];
  enquiries: any[];
  seo: any;
}

export async function getDB(): Promise<DB> {
  try {
    const data = await fs.readFile(DB_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading DB:", error);
    // Return empty structure if file missing
    return {
      services: [],
      projects: [],
      testimonials: [],
      companyInfo: {},
      blogs: [],
      enquiries: [],
      seo: {}
    };
  }
}

export async function saveDB(data: DB): Promise<void> {
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
}

// Helper to get specific collection
export async function getCollection(collectionName: keyof DB) {
  const db = await getDB();
  return db[collectionName];
}

// Helper to update specific collection
export async function updateCollection(collectionName: keyof DB, data: any[]) {
  const db = await getDB();
  db[collectionName] = data as any; // Type assertion needed for dynamic key assignment
  await saveDB(db);
}
