import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'guides');

export const getGuideData = (guide: string): any => {
  const fullPath = path.join(postsDirectory, `${guide}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Combine the data with the id
  return {
    id: guide,
    content: matterResult.content,
    ...matterResult.data,
  };
};

export const getAllGuideURIs = (): string[] => {
  return ['/guides/test'];
};
