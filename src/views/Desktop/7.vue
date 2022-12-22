<i18n>
{
  "en": {
  }, 
  "it": {
  }
}
</i18n>

<template>
    <div @wheel="detectScroll" class="slide page page7 time">
        <div class="header">
            Ok. It’s time to eat!
            <span>Let’s resume ...</span>
        </div>
        <div class="body">
            <div class="row firstRow">
                <div
                    :class="[
                        'group',
                        'firstTransition',
                        startAnimation == true ? 'startAnimation' : ''
                    ]"
                >
                    <div class="cover">
                        <img src="@/assets/calendarFood.svg" />
                    </div>
                    <span>Eat right</span>
                </div>
                <div
                    :class="[
                        'group',
                        'secondTransition',
                        startAnimation == true ? 'startAnimation' : ''
                    ]"
                >
                    <div class="cover">
                        <img src="@/assets/clockW.svg" />
                    </div>
                    <span>Every moment</span>
                </div>
                <div
                    :class="[
                        'group',
                        'thirdTransition',
                        startAnimation == true ? 'startAnimation' : ''
                    ]"
                >
                    <div class="cover">
                        <img src="@/assets/locationW.svg" />
                    </div>
                    <span>Everywhere</span>
                </div>
            </div>
            <div
                :class="[
                    'row',
                    'secondRow',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <div class="group">
                    <div class="what">
                        <span>Try now!</span>
                        <span>It's completely free.</span>
                    </div>
                </div>
                <div class="group">
                    <button>Start</button>
                </div>
            </div>
        </div>
        <div class="navigation">
            <div class="circles">
                <div class="circle" @click="$emit('changePage', 2)"></div>
                <div class="circle" @click="$emit('changePage', 3)"></div>
                <div class="circle" @click="$emit('changePage', 4)"></div>
                <div class="circle" @click="$emit('changePage', 5)"></div>
                <div class="circle" @click="$emit('changePage', 6)"></div>
                <div class="circle chosen"></div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 85.248 85.248"
                @click="$emit('changePage', 1)"
            >
                >
                <path
                    d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                    transform="translate(10.208 10.208)"
                    fill="#1D2A88"
                />
            </svg>
        </div>
        <div class="footer">
            <div class="group">
                <span @click="$emit('changePage', 8)">About us</span>
                <!-- <span @click="$emit('changePage', 9)">Contact us</span> -->
                <span @click="sendEmail">Contact us</span>
                <span>Privacy</span>
                <span>Cookies</span>
            </div>
            <div class="group">
                <span>Copyright © 2020, Eat-project</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Time',
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
    },
    created() {
        this.$store.commit('updateCurrentPage', 7);
    },
    methods: {
        detectScroll: function() {
            if (event.deltaY < 0) {
                this.$emit('changePage', 6);
            }
        },
        sendEmail: function() {
            window.location = 'mailto:info@eat-project.com';
        }
    }
};
</script>

<style lang="scss" scoped>
@keyframes bounce {
    0% {
        transform: rotate(180deg) translateY(0%);
    }

    50% {
        transform: rotate(180deg) translateY(15%);
    }

    100% {
        transform: rotate(180deg) translateY(0%);
    }
}

.time {
    color: #1d2a88;
    background-color: #f9925a;

    .body {
        flex-direction: column !important;
        justify-content: center;
        align-items: flex-start;

        width: 55rem;

        .row {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            width: 100%;

            &.firstRow {
                margin-top: 10rem;
                margin-bottom: 7rem;

                .group {
                    width: 25%;

                    transform: scale(0);
                    backface-visibility: hidden;

                    &.startAnimation {
                        animation: 1s zoomIn cubic-bezier(0.19, 1, 0.22, 1)
                            forwards;

                        &.firstTransition {
                            animation-delay: 0s;
                        }

                        &.secondTransition {
                            animation-delay: 0.2s;
                        }

                        &.thirdTransition {
                            animation-delay: 0.4s;
                        }
                    }

                    &:nth-child(1),
                    &:nth-child(2) {
                        > .cover::after {
                            content: '';
                            position: absolute;
                            top: calc(50% - 0.25rem);
                            right: -51%;
                            height: 0.5rem;
                            width: 52%;
                            background-color: white;

                            transform: scale(0);
                            backface-visibility: hidden;
                        }
                    }

                    &.startAnimation {
                        > .cover::after {
                            animation: 1s zoomIn cubic-bezier(0.19, 1, 0.22, 1)
                                forwards;
                        }

                        &:nth-child(1) {
                            > .cover::after {
                                animation-delay: 0.2s;
                            }
                        }

                        &:nth-child(2) {
                            > .cover::after {
                                animation-delay: 0.2s;
                            }
                        }
                    }
                }
            }

            &.secondRow {
                transform: translateX(calc(-100% - 8rem));
                backface-visibility: hidden;

                &.startAnimation {
                    animation: 1.4s slideIn cubic-bezier(0.19, 1, 0.22, 1)
                        forwards;
                    animation-delay: 0.5s;
                }
            }

            .group {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                > .cover {
                    position: relative;
                    margin-bottom: 1rem;
                    width: 100%;

                    > img {
                        width: 100%;
                        filter: drop-shadow(0px 0px 0.3rem white);
                    }
                }

                > span {
                    font-size: 1.8rem;
                    font-weight: 600;
                    color: white;
                }

                .what {
                    display: flex;
                    flex-direction: column;

                    > span:first-child {
                        font-size: 2.6rem;
                        font-weight: 700;
                        margin-bottom: 1rem;
                    }

                    > span:last-child {
                        font-size: 1.75rem;
                        font-weight: 700;
                    }
                }

                > button {
                    margin: 0 !important;
                    background-color: #1d2a88;
                    color: white;
                    font-size: 1.4rem !important;
                    font-weight: 700 !important;
                    padding: 1.4rem 12rem !important;
                }
            }
        }
    }

    .navigation {
        .circle {
            background-color: #ffffff;
        }

        svg {
            transform: rotate(180deg);
            animation: 1s bounce ease infinite 5s !important;
            backface-visibility: hidden;
        }
    }
}
</style>
