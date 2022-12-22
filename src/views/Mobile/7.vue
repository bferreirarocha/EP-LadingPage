<template>
    <div ref="7" class="slide page page7 time">
        <div class="header">
            <div class="line">
                Ok. It's time to eat!
            </div>
            <div class="line">
                <span class="large">Let's resume...</span>
            </div>
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
            >
                <img src="@/assets/calendarFood.svg" />
                <div class="information">
                    <div class="line">
                        Eat right
                    </div>
                </div>
            </div>
            <div
                :class="[
                    'group',
                    'secondTransition',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <img src="@/assets/clockW.svg" />
                <div class="information">
                    <div class="line">
                        Every moment.
                    </div>
                </div>
            </div>
            <div
                :class="[
                    'group',
                    'thirdTransition',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <img src="@/assets/locationW.svg" />
                <div class="information">
                    <div class="line">
                        Everywhere.
                    </div>
                </div>
            </div>
        </div>
        <div :class="['offer', startAnimation == true ? 'startAnimation' : '']">
            <div class="now">Try now!</div>
            <div class="free">It's completely free.</div>
            <div class="start">Start</div>
        </div>
        <div @click="$emit('changePage', 17)" class="continue">
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
    name: 'TimeMobile',
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
        var mc = new Hammer.Manager(this.$refs['7'], {
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
            this.$emit('changePage', 17);
        });

        mc.on('swipedown', () => {
            this.$emit('changePage', 6);
        });
        /* eslint-enable no-undef */
    },
    created() {
        this.$store.commit('updateCurrentPage', 7);
    }
};
</script>

<style lang="scss" scoped>
.time {
    color: #1d2a88;
    background-color: #f9925a;

    .header {
        text-align: left;

        .line {
            justify-content: flex-start;
        }
    }

    .groups {
        &::before {
            top: 3.5rem; //3.5rem is half of .group .img height / 2
            left: 5.3rem !important;

            @include portraitMode {
                @include hugeTablets {
                    left: 7.3rem !important;
                }
            }

            height: calc(100% - 7rem);
            width: 0.4rem;

            background-color: white;
        }

        .group {
            .information {
                .line {
                    color: white;
                    text-shadow: 0px 0px 0.4rem white;
                }
            }

            img {
                height: 7rem !important;
            }
        }
    }

    .offer {
        display: flex;
        flex-direction: column;
        align-items: center;

        margin-bottom: 0.25rem;

        font-weight: 700;

        transform: translateX(calc(-100% - 4rem));
        backface-visibility: hidden;

        &.startAnimation {
            animation: 1.4s slideIn cubic-bezier(0.19, 1, 0.22, 1) forwards;
            animation-delay: 0.5s;
        }

        .now {
            font-size: 2.8rem;
        }

        .free {
            margin-top: 0.5rem;
            margin-bottom: 1rem;
            font-size: 1.4rem;
        }

        .start {
            width: 80vw;
            padding: 1.2rem 0;
            font-size: 1.3rem;
            font-weight: 700;
            color: white;
            border: none;
            text-align: center;
            background-color: #1d2a88;
            border-radius: 10rem;
        }
    }
}
</style>
