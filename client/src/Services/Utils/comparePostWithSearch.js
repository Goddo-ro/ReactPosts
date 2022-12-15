export default function comparePostWithSearch(post, search) {
    const title = post.title.toLowerCase();
    const content = post.content.toLowerCase();

    if (title.includes(search.toLowerCase()) || 
        content.includes(search.toLowerCase())) {
            return true;
        }
    
    return false;
}