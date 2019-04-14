<template>
<animation-accordion>
    <div class="voorhoederDetails">
        <div class="voorhoederDetails_inner">
            <div class="voorhoederDetails_info">
                <p class="h2-like">
                    {{ voorhoederData.name }}
                </p>
                <a class="a"
                   :href="`mailto:${ voorhoederData.slug }@voorhoede.nl`"
                >
                    {{ `${ voorhoederData.slug }@voorhoede.nl` }}
                </a>
            </div>
            <div class="voorhoederDetails_posts">
                <p class="h2-like">
                    Blog Posts
                </p>
                <ul>
                    <li v-for="post in voorhoederData.posts"
                        :key="post.slug"
                    >
                        <a :href="`https://www.voorhoede.nl/en/blog/${ post.slug }`"
                           target="_blank"
                           class="a"
                        >
                            {{ post.title }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="closeBtn"
            :style="closeBtnStyle"
            @click="$emit('close')"
            @mouseover="setCloseBtnStyles('over')"
            @mouseout="setCloseBtnStyles('out')"
        ></div>
        <div class="voorhoederDetails_arrow"
            :style="arrowStyle"
        ></div>
    </div>
</animation-accordion>
</template>

<script>
import AnimationAccordion from '../animations/AnimationAccordion.js';

export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            voorhoederData: {},
            closeBtnStyle: {},
            arrowStyle: {},
            timeout: null
        };
    },

    methods: {
        setCloseBtnStyles(ev) {
            if(ev === 'over') {
                this.closeBtnStyle = {
                    'animation': 'pulse_animation .25s ease-out'
                }
            }
            else {
                this.closeBtnStyle = {
                    'animation': 'reverse_animation .25s ease-out'
                }
                setTimeout(() => {
                    this.closeBtnStyle = {};
                }, 250);
            }
        },

        setArrowStyles() {
            clearTimeout(this.timeout);
            if(this.isOpen) {
                this.arrowStyle = {
                    'left': this.voorhoederData.left + 'px',
                    'margin-left': '-17px'
                };
            }
            else {
                this.timeout = setTimeout(() => {
                    this.arrowStyle = {};
                }, 500);
            }
        }
    },

    watch: {
        isOpen() {
            this.setArrowStyles();
        },

        voorhoederData() {
            this.setArrowStyles();
        }
    },

    components: {
        AnimationAccordion
    }
};
</script>