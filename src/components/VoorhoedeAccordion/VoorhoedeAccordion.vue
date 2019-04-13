<template>
<div class="voorhoederWrapper">

    <template v-for="(voorhoeder, index) in augmentedVoorhoeders">
        <voorhoeder
            :key="`v_${ voorhoeder.slug }`"
            :ref="voorhoeder.slug"
            :voorhoeder="voorhoeder"
            @clicked="activateMe"
            :data-index="index"
        />
        <voorhoeder-details
            :key="`vd_${ voorhoeder.slug }`"
            :ref="voorhoeder.slug"
            v-show="voorhoeder.isAppendee"
            :isOpen="voorhoeder.isAppendee"
            @close="closeBoxes"
        />
    </template>

</div>
</template>

<script>
import debounce from '@/utils/debounce';
import Voorhoeder from './sub/Voorhoeder';
import VoorhoederDetails from './sub/VoorhoederDetails';
import { appendFile } from 'fs';

export default {
    props: {
        voorhoeders: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            augmentedVoorhoeders: null,
            windowWidth: null
        };
    },

    methods: {
        // @REFACTOR :: Function body too large
        // @REFACTOR :: Move measuring of detailsBox to voorhoederDetails component
        // @REFACTOR :: Get a proper unique id, not slug
        activateMe(slug) {
            // (re)Calculate sizes and positions
            this.setMeasurements();

            // Find all elements in same row
            const me = this.augmentedVoorhoeders.find(v => v.slug === slug);
            const rowArray = this.augmentedVoorhoeders.filter(v => v.top === me.top);

            // Find last element in row
            const appendee = rowArray.reduce((prevObj, obj) => {
                return obj.left > prevObj.left ? obj : prevObj;
            });

            // Get reference to relevant voorhoederDetails component
            const detailsBox = this.$refs[appendee.slug][1];

            // Appendee might already be open
            if(appendee.isAppendee) {
                // Case 1: Data is the same -> close the box
                if(detailsBox.voorhoederData.slug === me.slug) appendee.isAppendee = false;
                // Case 2: Data is different -> replace data
                else {
                    detailsBox.voorhoederData = me;
                    // ..and refresh height
                    this.$nextTick(() => {
                        // @REFACTOR :: Too tightly coupled
                        const innerHeight = detailsBox.$el.querySelector('.voorhoederDetails_inner').scrollHeight;
                        detailsBox.$el.style.height = innerHeight + 'px';
                    })
                }
                return;
            }

            // If another appendee is exists in another row, close it
            this.closeBoxes();

            // Set data for details box
            detailsBox.voorhoederData = me;

            // Try for existing appendee
            const prevAppendee = this.augmentedVoorhoeders.find(v => v.isAppendee);

            // Open details box for me
            this.$nextTick(() => {
                appendee.isAppendee = true;

                // Scroll so my image is nicely at the top
                const scrollTop = getScrollTop();
                let extraHeight = 0;
                let delay = 0;

                // Check if I'm below prevAppendee
                if(!!prevAppendee && me.top > prevAppendee.top) {
                    // @REFACTOR :: Tight
                    extraHeight = this.$refs[prevAppendee.slug][1].$el
                    .querySelector('.voorhoederDetails_inner')
                    .scrollHeight;
                    // @REFACTOR :: Magic
                    delay = 0.25;
                }

                // @REFACTOR :: 60 is topbar height
                const scrollTo = me.top + getScrollTop() - 60 - extraHeight;

                // @TODO :: Scroll not perfect when
                //   - box is already open
                //   - box is above newly clicked person
                // :: Delay is just a stopgap

                TweenMax.to(window, 0.5, {
                    scrollTo,
                    ease: Power4.easeOut,
                    delay
                });
            });
        },

        setMeasurements() {
            // @REFACTOR :: Mutating objects but OK for now since we're changing
            // isAppendee all over the place anyway
            this.augmentedVoorhoeders.forEach(v => {
                const $el = this.$refs[v.slug][0].$el;
                const measures = $el.getBoundingClientRect();
                v.top = measures.top;
                v.left = measures.left + 0.5 * measures.width;
            });
        },

        closeBoxes() {
            const existingAppendee = this.augmentedVoorhoeders.find(v => v.isAppendee);
            if(!!existingAppendee) existingAppendee.isAppendee = false;
        },

        onResize() {
            const newWindowWidth = window.innerWidth;
            if(newWindowWidth !== this.windowWidth) {
                this.closeBoxes();
                this.windowWidth = newWindowWidth;
            }
        },
    },

    created() {
        // @REFACTOR :: This works because of v-iffing this component in the parent,
        // a more robust solution may be sought
        this.augmentedVoorhoeders = this.voorhoeders.map(v => Object.assign({}, v, {
            top: 0,
            left: 0,
            isAppendee: false
        }));
    },

    mounted() {
        this.windowWidth = window.innerWidth;
        // @PERFORMANCE :: Put debounced funtion on static `$options` for
        // proper removal in destroyed hook
        this.$options.debouncedResize = debounce(this.onResize, 100);
        window.addEventListener('resize', this.$options.debouncedResize);
    },

    destroyed() {
        window.removeEventListener('resize', this.$options.debouncedResize);
    },

    components: {
        Voorhoeder,
        VoorhoederDetails
    }
};

const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop;
</script>