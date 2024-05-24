import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export default function getPostMetadata(basePath) {
    try {
        const folder = path.join(basePath); // Use path.join for better cross-platform compatibility
        const files = fs.readdirSync(folder);
        const markdownPosts = files.filter(file => file.endsWith('.md'));

        // Get the file data
        const posts = markdownPosts.map((filename) => {
            const filePath = path.join(folder, filename);
            const fileContents = fs.readFileSync(filePath, 'utf8');
            const matterResult = matter(fileContents);
            const stats = fs.statSync(filePath); // Get file statistics

            return {
                title: matterResult.data.title,
                prep_time: matterResult.data.prep_time,
                cook_time: matterResult.data.cook_time,
                bio: matterResult.data.description,
                authors: matterResult.data.authors,
                image: matterResult.data.image,
                slug: filename.replace('.md', ''),
                creationDate: stats.birthtime, // or stats.ctime based on your system and need
            };
        });

        // Sort posts by creationDate in descending order
        posts.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));

        return posts;

    } catch (error) {
        console.error('Error fetching post metadata:', error);
        return [];
    }
}
