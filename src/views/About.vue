<template>
    <div class="about">
        <h1>Ab00t</h1>
        <voorhoede-accordion :voorhoeders="voorhoeders" />
    </div>
</template>

<script>
import { graphqlRequest } from '@/repo';
import postsToAuthors from '@/utils/postsToAuthors';
import VoorhoedeAccordion from '@/components/VoorhoedeAccordion/VoorhoedeAccordion';

export default {
    data() {
        return {
            voorhoeders: null
        };
    },

    async created() {
        const postsQuery = `
            query {
                posts {
                    title
                    slug
                    authors {
                        name
                        slug
                        image {
                            url
                        }
                    }
                }
            }
        `;

        try {
            const { posts } = await graphqlRequest(postsQuery);
            this.voorhoeders = Object.freeze(postsToAuthors(posts));
        }
        catch(err) {
            console.log('Error getting posts: ', err);
        }
    },

    components: {
        VoorhoedeAccordion
    }
};
</script>