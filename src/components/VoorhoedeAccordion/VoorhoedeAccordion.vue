<template>
<div class="voorhoederWrapper">

    <template v-for="voorhoeder in voorhoeders">
        <div class="voorhoeder"
             :key="`t_${ voorhoeder.slug }`"
        >
            <div class="voorhoeder_stretcher">
                <div class="voorhoeder_padder">
                    <div class="voorhoeder_container">
                        <div class="voorhoeder_portrait"
                             :style="{ 'background-image': `url(${ voorhoeder.image.url })` }"
                        >
                            <div class="voorhoeder_name">
                                <p class="p">{{ voorhoeder.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>

</div>
</template>

<script>
export default {
    props: {
        voorhoeders: {
            type: Array,
            default: () => []
        }
    }
};
</script>