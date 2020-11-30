import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { GuidePreview, GuideData, GuidePagePreview } from '../interfaces/guides';

const guidesDirectory = path.join(process.cwd(), 'data/guides');

// Gets the guide data for the requested page as well as accompanying metadata
export const getGuideData = (guide: string, page: string): GuideData => {
  const markdownPath = path.join(guidesDirectory, guide, `${page}.md`);
  const indexPath = path.join(guidesDirectory, guide, 'index.json');

  const markdown = matter(fs.readFileSync(markdownPath, 'utf8'));
  const index = JSON.parse(fs.readFileSync(indexPath, 'utf8'));

  // Index other pages in this guide
  const pages: GuidePagePreview[] = fs
    .readdirSync(path.join(guidesDirectory, guide))
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const guideFilePath: string = path.join(guidesDirectory, guide, fileName);
      const { data } = matter(fs.readFileSync(guideFilePath, 'utf8'));

      return { header: data.header, order: data.order, guidePath: `${guide}/${fileName}` };
    });

  // Order other pages in this guide
  pages.sort((a: GuidePagePreview, b: GuidePagePreview) => a.order - b.order);

  return { content: markdown.content, ...markdown.data, ...index, pages };
};

// Gets the metadata for all available guides
export const getGuidesPreviews = (): GuidePreview[] => {
  const folders: string[] = fs.readdirSync(guidesDirectory);
  const allPaths: string[] = [];

  folders.forEach((folder) => {
    const paths = fs
      .readdirSync(path.join(guidesDirectory, folder))
      .filter((path) => path.endsWith('index.json'))
      .map((item) => `/guides/${folder}/${item}`);

    allPaths.push(...paths);
  });

  const previews: GuidePreview[] = allPaths.map((previewPath) => {
    const fullPath = path.join(process.cwd(), 'data', previewPath);
    const preview = JSON.parse(fs.readFileSync(fullPath, 'utf-8'));

    return { ...preview, path: previewPath.replace('/index.json', '') };
  });

  previews.sort((a, b) => a.order - b.order);

  return previews;
};

// Gets all the possible paths to guide pages, used for Next.js building
export const getAllGuidePaths = (): string[] => {
  const folders: string[] = fs.readdirSync(guidesDirectory);
  const allPaths: string[] = [];

  folders.forEach((folder) => {
    const paths = fs.readdirSync(path.join(guidesDirectory, folder));
    paths.forEach((item) => {
      if (item.endsWith('.md')) {
        allPaths.push(`/guides/${folder}/${item.replace('.md', '')}`);
      }
    });
  });

  return allPaths;
};
