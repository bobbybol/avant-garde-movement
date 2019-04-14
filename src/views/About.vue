<template>
<main class="mainContent">
    <voorhoede-accordion
        v-if="voorhoeders"
        :voorhoeders="voorhoeders"
    />
    <div v-else
         class="loading">
        <img src="@/assets/img/ajax-loader.gif" alt=""/>
        <p class="p">Loading...</p>
    </div>
</main>
</template>

<script>
import { compose, sortBy, prop, toLower } from 'ramda';
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
            const buildSortedVoorhoedersArray = compose(
                sortBy(compose(
                    toLower,
                    prop('name')
                )),
                postsToAuthors
            );
            this.voorhoeders = Object.freeze(buildSortedVoorhoedersArray(posts));
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