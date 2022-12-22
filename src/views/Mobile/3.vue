<template>
    <div ref="3" class="slide page page3 start">
        <div class="header">
            <div class="line">Start diet</div>
            <div class="line">is easy!</div>
        </div>
        <div
            :class="['groups', startAnimation == true ? 'startAnimation' : '']"
        >
            <div
                :class="[
                    'group',
                    'firstTransition',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
                @click="$emit('changePage', 8)"
            >
                <img src="@/assets/calendar.svg" />
                <div class="information">
                    <div class="line">
                        Pick a diet
                    </div>
                    <div class="line">
                        <span>template</span>
                    </div>
                </div>
                <div class="useless">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        class="svg-inline--fa fa-chevron-right fa-w-10"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path
                            fill="currentColor"
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div
                :class="[
                    'group',
                    'secondTransition',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
                @click="$emit('changePage', 9)"
            >
                <img src="@/assets/doctor.svg" />
                <div class="information">
                    <div class="line">
                        Get in touch
                    </div>
                    <div class="line">
                        with
                    </div>
                    <div class="line">
                        <span>dietitians</span>
                    </div>
                </div>
                <div class="useless">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        class="svg-inline--fa fa-chevron-right fa-w-10"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path
                            fill="currentColor"
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                        ></path>
                    </svg>
                </div>
            </div>
            <div
                :class="[
                    'group',
                    'thirdTransition',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
                @click="$emit('changePage', 10)"
            >
                <img src="@/assets/clock.svg" />
                <div class="information">
                    <div class="line">
                        Eat
                    </div>
                    <div class="line">
                        <span>right food,</span>
                    </div>
                    <div class="line">
                        <span class="small">
                            at the right time.
                        </span>
                    </div>
                </div>
                <div class="useless">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        class="svg-inline--fa fa-chevron-right fa-w-10"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                    >
                        <path
                            fill="currentColor"
                            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
        <div @click="$emit('changePage', 4)" class="continue">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.248 85.248">
                <path
                    d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                    transform="translate(10.208 10.208)"
                    fill="#ff40c3"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StartMobile',
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
        if (this.animate == true) {
            this.startAnimation = true;
            this.$emit('stopAnimation');
        }

        /* eslint-disable no-undef */
        var mc = new Hammer.Manager(this.$refs['3'], {
            recognizers: [
                [
                    Hammer.Swipe,
                    {
                        // direction: Hammer.DIRECTION_ALL,
                        direction: Hammer.DIRECTION_VERTICAL,
                        pointers: 1
                    }
                ]
            ]
        });

        mc.on('swipeup', () => {
            this.$emit('changePage', 4);
        });

        mc.on('swipedown', () => {
            this.$emit('changePage', 2);
        });

        // mc.on('swipeleft', () => {
        //     this.$emit('changePage', 8);
        // });
        /* eslint-enable no-undef */
    },
    created() {
        this.$store.commit('updateCurrentPage', 3);
    }
};
</script>

<style lang="scss" scoped>
.start {
    background-color: #e4ff26;
    color: #ff40c3;

    .groups {
        &::before {
            background-color: #ff40c3;
        }

        .group img {
            filter: none;
        }
    }
}
</style>
