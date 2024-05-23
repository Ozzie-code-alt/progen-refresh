import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export default function getPostMetadata(basePath) {
    const folder = path.join(process.cwd(), basePath);
    const files = fs.readdirSync(folder)
    const markdownPosts = files.filter(file => file.endsWith('.md'))

    // get the file data
    const posts = markdownPosts.map((filename) => {
        const filePath = path.join(folder, filename);
        const fileContents = fs.readFileSync(`${basePath}/${filename}`, 'utf8')
        const matterResult = matter(fileContents)
        const stats = fs.statSync(filePath);  // Get file statistics
        return {
            title: matterResult.data.title,
            prep_time: matterResult.data.prep_time,
            cook_time: matterResult.data.cook_time,
            bio: matterResult.data.description,
            authors: matterResult.data.authors,
            image: matterResult.data.image,
            slug: filename.replace('.md', ''),
            creationDate: stats.birthtime || stats.ctime // Fallback to ctime if birthtime is unavailable
        }
    })




    posts.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
    return posts
}