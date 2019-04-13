<template>
<div class="voorhoederDetails">
    <div class="voorhoederDetails_inner">
        <!-- <div class="voorhoederDetails_info">
            <p class="h2-like">{{ personData.name }}</p> -->
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
</template>

<script>
export default {
    props: {
        isOpen: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            personData: {},
            closeBtnStyle: {},
            arrowStyle: {},
            timeout: null
        };
    },

    methods: {
        setCloseBtnStyles(ev) {
            // if(ev === 'over') {
            //     this.closeBtnStyle = {
            //         'animation': 'pulse_animation .25s ease-out'
            //     }
            // }
            // else {
            //     this.closeBtnStyle = {
            //         'animation': 'reverse_animation .25s ease-out'
            //     }
            //     setTimeout(() => {
            //         this.closeBtnStyle = {};
            //     }, 250);
            // }
        },

        setArrowStyles() {
            // clearTimeout(this.timeout);
            // if(this.isOpen) {
            //     this.arrowStyle = {
            //         'left': this.personData.left + 'px',
            //         'margin-left': '-17px'
            //     };
            // }
            // else {
            //     this.timeout = setTimeout(() => {
            //         this.arrowStyle = {};
            //     }, 500);
            // }
        }
    },

    watch: {
        isOpen() {
            this.setArrowStyles();
        },

        // personData() {
        //     this.setArrowStyles();
        // }
    },
};
</script>