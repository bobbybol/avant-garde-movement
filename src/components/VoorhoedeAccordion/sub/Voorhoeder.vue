<template>
<animation-card-flip>
    <div class="voorhoeder" v-if="voorhoeder">
        <div class="voorhoeder_stretcher">
            <div class="voorhoeder_padder">
                <div class="voorhoeder_container">
                    <div class="voorhoeder_portrait"
                        :style="{ 'background-image': `url(${ voorhoeder.image.url })` }"
                        @click="$emit('clicked', voorhoeder.slug)"
                    >
                        <div class="voorhoeder_name">
                            <p class="p">{{ voorhoeder.name }}</p>
                        </div>
                    </div>
                    <div class="voorhoeder_backside"></div>
                </div>
            </div>
        </div>
    </div>
</animation-card-flip>
</template>

<script>
import AnimationCardFlip from '../animations/AnimationCardFlip.js';

export default {
    props: {
        voorhoeder: {
            type: Object,
            default: null
        }
    },

    components: {
        AnimationCardFlip
    }
};
</script>