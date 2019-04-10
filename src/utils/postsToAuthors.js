/**
 * Utility :: Takes a list of posts and returns a list of
 * unique authors with a nested list of posts they've written.
 *
 * @PERFORMANCE :: Technically this is an O(n²) algorithm,
 * but acceptable because there's usually one and maximally
 * two authors per posts, effectively rendering it 2O(n).
 * A pure functional approach was also considered but led
 * to nearly double the amount of iterations over the posts array.
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