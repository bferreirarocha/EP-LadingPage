<template>
    <transition
        :name="transitionName"
        mode="in-out"
        @after-leave="animate = true"
    >
        <router-view
            class="desktop"
            @changePage="changePage"
            @stopAnimation="stopAnimation"
            :animate="animate"
        />
    </transition>
</template>

<script>
export default {
    name: 'Desktop',
    data() {
        return {
            transitionName: 'slideOut',
            animate: true
        };
    },
    // props: {
    //     lan: {
    //         type: String,
    //         default: 'en',
    //         required: false
    //     }
    // },
    created() {
        // this.$store.commit('updateLan', this.lan);
    },
    methods: {
        stopAnimation: function() {
            this.animate = false;
        },
        changePage: function(number) {
            var currentPage = this.$store.state.currentPage;

            if (number > currentPage) {
                this.transitionName = 'slideOut';
            } else if (number < currentPage) {
                this.transitionName = 'slideIn';
            }

            var pathName = '';
            if (number == 1) {
                pathName = 'Home';
            } else if (number == 2) {
                pathName = 'Hello';
            } else if (number == 3) {
                pathName = 'Start';
            } else if (number == 4) {
                pathName = 'Stay';
            } else if (number == 5) {
                pathName = 'RDN';
            } else if (number == 6) {
                pathName = 'With';
            } else if (number == 7) {
                pathName = 'Time';
            } else if (number == 8) {
                pathName = 'About';
            } else if (number == 9) {
                pathName = 'Contact';
            } else if (number == 10) {
                pathName = 'Thanks';
            }

            this.$router.push({ name: pathName });
        }
    }
};
</script>

<style lang="scss" scope>
.slideOut-leave-to {
    transform: translate3d(0, -100%, 0) !important;
}

.slideOut-leave-active {
    transition: transform 0.7s cubic-bezier(0.825, 0, 0.5, 1);
}

.slideIn-enter {
    transform: translate3d(0, -100%, 0) !important;
}

.slideIn-enter-active {
    transition: transform 0.7s cubic-bezier(0.825, 0, 0.5, 1);
}

@keyframes zoomIn {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes bounce {
    0% {
        transform: translateY(0%);
    }

    50% {
        transform: translateY(15%);
    }

    100% {
        transform: translateY(0%);
    }
}

@keyframes slideIn {
    0% {
        transform: translateX(calc(-100% - 8rem));
    }

    100% {
        transform: translateX(0rem);
    }
}

.desktop {
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 5rem;
        padding: 2rem 2.2rem 2rem 5.2rem;
        font-family: 'Montserrat', sans-serif;
        font-size: 3rem;
        font-weight: 600;

        border: none;
        border-radius: 10rem;
        transition: box-shadow 0.2s;
        cursor: pointer;

        svg {
            margin-left: 2rem;
            height: 4.9rem;
            animation: 1s bounce ease infinite 5s;
            backface-visibility: hidden;
        }
    }

    &.page {
        position: absolute !important;
        top: 0;
        left: 0;

        transform: translate3d(0, 0, 0);

        &.page1 {
            z-index: 10;
        }

        &.page2 {
            z-index: 9;
        }

        &.page3 {
            z-index: 8;
        }

        &.page4 {
            z-index: 7;
        }

        &.page5 {
            z-index: 6;
        }

        &.page6 {
            z-index: 5;
        }

        &.page7 {
            z-index: 4;
        }

        &.page8 {
            z-index: 3;
        }

        &.page9 {
            z-index: 2;
        }

        &.page10 {
            z-index: 1;
        }
    }

    &.slide {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        justify-content: center;

        flex: 1;

        width: 100%;
        height: 100%;

        padding: 0 8rem;

        font-family: 'Montserrat', sans-serif;

        box-sizing: border-box;

        > .header {
            display: flex;
            flex-direction: column;

            font-size: 5.6rem;
            font-weight: 800;

            span {
                font-size: 3rem;
                font-weight: 400;
            }
        }

        > .body {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            align-self: stretch;

            > .group {
                flex: 1;

                display: flex;
                flex-direction: column;

                transform: scale(0);
                backface-visibility: hidden;

                &.startAnimation {
                    animation: 1s zoomIn cubic-bezier(0.19, 1, 0.22, 1) forwards;

                    &:nth-child(1) {
                        animation-delay: 0s;
                    }

                    &:nth-child(2) {
                        animation-delay: 0.2s;
                    }

                    &:nth-child(3) {
                        animation-delay: 0.4s;
                    }
                }

                img {
                    object-position: left;
                    object-fit: contain;

                    width: 18rem;

                    margin: 3rem 0 1.5rem 0;

                    filter: drop-shadow(0px 0px 0.3rem white);
                }

                .title {
                    margin-bottom: 2rem;
                    font-size: 2.7rem;
                    font-weight: 700;

                    span {
                        font-size: 3.1rem;
                        font-weight: 700;
                    }
                }

                .description {
                    .paragraph {
                        font-size: 2rem;

                        &:not(:last-child) {
                            margin-bottom: 2rem;
                        }

                        .line {
                            margin: 0.1rem 0;
                            white-space: nowrap;

                            span {
                                font-weight: bold;
                            }
                        }
                    }
                }
            }
        }
    }

    .navigation {
        position: absolute;
        right: 0;
        bottom: 0rem;

        height: 100%;
        width: 8rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .circles {
            .circle {
                width: 1.7rem;
                height: 1.7rem;

                margin: 0.8rem 0;

                border-radius: 50%;

                opacity: 0.5;

                cursor: pointer;

                transition: box-shadow 0.2s, opacity 0.2s;

                &:hover {
                    box-shadow: 0px 0px 0.5rem white;
                    opacity: 0.7;
                }

                &.chosen {
                    opacity: 1 !important;
                    box-shadow: 0px 0px 0.5rem white;
                }
            }
        }

        svg {
            position: absolute;
            bottom: 10vh;
            right: 1rem;

            width: 6rem;

            cursor: pointer;

            transition: filter 0.2s;

            animation: 1s bounce ease infinite 5s;
            backface-visibility: hidden;

            &:hover {
                filter: drop-shadow(0px 0px 0.3rem white);
            }
        }
    }

    .footer {
        position: absolute;
        bottom: 2rem;
        left: 8rem;

        width: calc(100% - 20rem);

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .group {
            display: flex;
            flex-direction: row;

            span {
                color: white;
                font-size: 1.6rem;
                letter-spacing: 0.1px;
                font-weight: 600;

                cursor: pointer;

                transition: text-shadow 0.2s;

                &:hover {
                    text-shadow: 0px 0px 0.1rem white;
                }
            }

            span:not(:last-child) {
                margin-right: 2rem;
            }
        }
    }
}
</style>
