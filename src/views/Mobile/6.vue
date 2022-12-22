<template>
    <div ref="6" class="slide page page6 with">
        <div class="header">
            <div class="line">
                Stay on diet with
            </div>
        </div>

        <div class="images">
            <img
                :class="[
                    'firstAnimation',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
                src="@/assets/mobile/1million.svg"
            />
            <img
                :class="[
                    'secondAnimation',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
                src="@/assets/mobile/20k.svg"
            />
            <img
                :class="[
                    'thirdAnimation',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
                src="@/assets/mobile/3k.svg"
            />
        </div>

        <div @click="$emit('changePage', 7)" class="continue">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.248 85.248">
                <path
                    d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                    transform="translate(10.208 10.208)"
                    fill="#FFFFFF"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'WithMobile',
    data() {
        return {
            startAnimation: false
        };
    },
    props: {
        animate: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    watch: {
        animate(val) {
            if (val == true) {
                this.startAnimation = true;
                this.$emit('stopAnimation');
            }
        }
    },
    mounted() {
        //in case the slide is loaded with a direct link
        if (this.animate == true) {
            this.startAnimation = true;
            this.$emit('stopAnimation');
        }

        /* eslint-disable no-undef */
        var mc = new Hammer.Manager(this.$refs['6'], {
            recognizers: [
                [
                    Hammer.Swipe,
                    {
                        direction: Hammer.DIRECTION_VERTICAL,
                        pointers: 1
                    }
                ]
            ]
        });

        mc.on('swipeup', () => {
            this.$emit('changePage', 7);
        });

        mc.on('swipedown', () => {
            this.$emit('changePage', 5);
        });
        /* eslint-enable no-undef */
    },
    created() {
        this.$store.commit('updateCurrentPage', 6);
    }
};
</script>

<style lang="scss" scoped>
.with {
    color: #ffffff;
    background-color: #1d2a88;

    .header {
        text-shadow: 0px 0px 0.1rem white;
    }

    .images {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin: 4rem 2rem;

        flex: 1;
        align-self: stretch;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        img {
            width: 100%;
            max-height: 20vh;

            transform: scale(0);

            &.startAnimation {
                &.firstAnimation,
                &.secondAnimation,
                &.thirdAnimation {
                    animation: 1s zoomIn cubic-bezier(0.19, 1, 0.22, 1) forwards;
                    backface-visibility: hidden;
                }

                &.firstAnimation {
                    animation-delay: 0s;
                }

                &.secondAnimation {
                    animation-delay: 0.2s;
                }

                &.thirdAnimation {
                    animation-delay: 0.4s;
                }
            }
        }
    }
}
</style>
