<template>
<transition v-if="voorhoeder"
            appear
            @enter="enter"
>
    <div class="voorhoeder">
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
                    <div class="voorhoeder_backside"></div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    props: {
        voorhoeder: {
            type: Object,
            default: null
        }
    },

    // Appear Animation
    methods: {
        enter(el, done) {
            const front = el.querySelector('.voorhoeder_portrait');
            const back  = el.querySelector('.voorhoeder_backside');
            const delay = el.dataset.index * 0.15 + 0.25;
            const tl = new TimelineMax({ onComplete: done, delay });

            tl
                .from(front, 0.6, {
                    rotationY: 180,
                    ease: Power2.easeOut,
                    clearProps: 'transform'
                })
                .fromTo(back, 0.6, {
                    rotationY: 0,
                    zIndex: 3
                },{
                    rotationY: 180,
                    zIndex: 1,
                    ease: Power2.easeOut,
                    clearProps: 'all'
                }, '-=0.6')
            ;
        }
    }
};
</script>