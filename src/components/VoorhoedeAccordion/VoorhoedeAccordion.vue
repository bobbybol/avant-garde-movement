<template>
<div class="voorhoederWrapper">

    <template v-for="(voorhoeder, index) in voorhoeders">
        <voorhoeder
            :key="`v_${ voorhoeder.slug }`"
            :voorhoeder="voorhoeder"
            :data-index="index"
        />
        <voorhoeder-details
            :key="`vd_${ voorhoeder.slug }`"
        />
    </template>

</div>
</template>

<script>
import Voorhoeder from './sub/Voorhoeder';
import VoorhoederDetails from './sub/VoorhoederDetails';

export default {
    props: {
        voorhoeders: {
            type: Array,
            default: () => []
        }
    },

    components: {
        Voorhoeder,
        VoorhoederDetails
    }
};
</script>