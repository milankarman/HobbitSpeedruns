import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const guidesDirectory = path.join(process.cwd(), 'guides');

export const getGuideData = (guide: string, page: string): any => {
  const fullPath = path.join(guidesDirectory, guide, `${page}.md`);
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

export const getAllGuidePaths = (): string[] => {
  const folders: string[] = fs.readdirSync(guidesDirectory);
  const allPaths: string[] = [];

  folders.forEach((folder) => {
    const paths = fs
      .readdirSync(path.join(guidesDirectory, folder))
      .map((item) => `/guides/${folder}/${item.replace('.md', '')}`);

    allPaths.push(...paths);
  });

  return allPaths;
};
