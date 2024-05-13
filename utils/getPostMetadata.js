import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export default function getPostMetadata(basePath) {
    const folder = basePath + '/'
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
            authors: matterResult.data.author,
            image: matterResult.data.image,
            slug: filename.replace('.md', ''),
            creationDate: stats.birthtime // or stats.ctime based on your system and need
        }
    })

    posts.sort((a, b) => new Date(b.creationDate) - new Date(a.creationDate));
    console.log(posts)
    return posts
}