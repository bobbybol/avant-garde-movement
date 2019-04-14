export default {

    functional: true,

    render: function (createElement, { children }) {
        const data = {
            props: {
                name: 'animation-accordion',
                css: false
            },

            on: {
                enter(el, done) {
                    TweenMax.fromTo(el, 0.5, {
                        height: 0
                    },{
                        height: el.scrollHeight,
                        ease: Power4.easeOut,
                        onComplete: done
                    });
                },

                leave(el, done) {
                    TweenMax.to(el, 0.5, {
                        height: 0,
                        ease: Power4.easeOut,
                        onComplete: done
                    });
                }
            }
        };

        return createElement('transition', data, children);
    }
};