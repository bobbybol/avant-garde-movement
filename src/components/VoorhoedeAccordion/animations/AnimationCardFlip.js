export default {

    functional: true,

    render: function (createElement, { children }) {
        const data = {
            props: {
                name: 'animation-card-flip',
                appear: true,
            },

            on: {
                enter(el, done) {
                    const $front = el.querySelector('.voorhoeder_portrait');
                    const $back  = el.querySelector('.voorhoeder_backside');
                    const delay = el.dataset.index * 0.15 + 0.25;
                    const tl = new TimelineMax({ onComplete: done, delay });

                    tl
                        .from($front, 0.6, {
                            rotationY: 180,
                            ease: Power2.easeOut,
                            clearProps: 'transform'
                        })
                        .fromTo($back, 0.6, {
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

        return createElement('transition', data, children);
    }
};