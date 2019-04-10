<template>
<div class="voorhoederWrapper">

    <template v-for="(voorhoeder, index) in voorhoeders">
        <voorhoeder
            :key="`t_${ voorhoeder.slug }`"
            :voorhoeder="voorhoeder"
            :data-index="index"
        />
    </template>

</div>
</template>

<script>
import Voorhoeder from './sub/Voorhoeder';

export default {
    props: {
        voorhoeders: {
            type: Array,
            default: () => []
        }
    },

    components: {
        Voorhoeder
    }
};
</script>