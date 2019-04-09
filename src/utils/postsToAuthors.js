/**
 * Utility :: Takes list of posts and returns unique authors
 * with an array of posts they've written
 */

function postsToAuthors(posts) {
    const authorsWithPosts = [];

    posts.forEach(({ title, slug, authors }) => {
        const post = {
            title,
            slug
        };
        authors.forEach(au => {
            const existingAuthor = authorsWithPosts.find(({ slug }) => slug === au.slug);
            if(existingAuthor) {
                existingAuthor.posts.push(post);
            }
            else {
                authorsWithPosts.push({
                    ...au,
                    posts: [
                        post
                    ]
                });
            }
        });
    });

    return authorsWithPosts;
}

export default postsToAuthors;