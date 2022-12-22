<template>
    <transition
        :name="transitionName"
        mode="in-out"
        @after-leave="animate = true"
    >
        <router-view
            class="mobile"
            @changePage="changePage"
            @stopAnimation="stopAnimation"
            :animate="animate"
        />
    </transition>
</template>

<script>
/* eslint-disable no-unused-vars */
import Hammer from 'hammerjs';
/* eslint-enable no-unused-vars */

export default {
    name: 'Mobile',
    data() {
        return {
            transitionName: 'slideOut',
            animate: true
        };
    },
    methods: {
        stopAnimation: function() {
            this.animate = false;
        },
        changePage: function(number) {
            var currentPage = this.$store.state.currentPage;

            if (number < 1 || number > 20 || number == currentPage) {
                return;
            }

            if (
                (currentPage == 3 || currentPage == 4 || currentPage == 5) &&
                number >= 8 &&
                number <= 16
            ) {
                this.transitionName = 'shiftOut';
            } else if (
                currentPage >= 8 &&
                currentPage <= 16 &&
                (number == 3 || number == 4 || number == 5)
            ) {
                this.transitionName = 'shiftIn';
            } else if (number > currentPage) {
                this.transitionName = 'slideOut';
            } else if (number < currentPage) {
                this.transitionName = 'slideIn';
            }

            var pathName = '';
            if (number == 1) {
                pathName = 'HomeMobile';
            } else if (number == 2) {
                pathName = 'HelloMobile';
            } else if (number == 3) {
                pathName = 'StartMobile';
            } else if (number == 4) {
                pathName = 'StayMobile';
            } else if (number == 5) {
                pathName = 'RDNMobile';
            } else if (number == 6) {
                pathName = 'WithMobile';
            } else if (number == 7) {
                pathName = 'TimeMobile';
            } else if (number == 8) {
                pathName = '31';
            } else if (number == 9) {
                pathName = '32';
            } else if (number == 10) {
                pathName = '33';
            } else if (number == 11) {
                pathName = '41';
            } else if (number == 12) {
                pathName = '42';
            } else if (number == 13) {
                pathName = '43';
            } else if (number == 14) {
                pathName = '51';
            } else if (number == 15) {
                pathName = '52';
            } else if (number == 16) {
                pathName = '53';
            } else if (number == 17) {
                pathName = 'NavigationMobile';
            } else if (number == 18) {
                pathName = 'AboutMobile';
            } else if (number == 19) {
                pathName = 'ContactMobile';
            } else if (number == 20) {
                pathName = 'ThanksMobile';
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
    transition: transform 0.5s cubic-bezier(0.825, 0, 0.5, 1);
}

.slideIn-enter {
    transform: translate3d(0, -100%, 0) !important;
}

.slideIn-enter-active {
    transition: transform 0.5s cubic-bezier(0.825, 0, 0.5, 1);
}

.shiftOut-leave-to {
    transform: translate3d(-100%, 0, 0) !important;
}

.shiftOut-leave-active {
    transition: transform 0.5s cubic-bezier(0.825, 0, 0.5, 1);
}

.shiftIn-enter {
    transform: translate3d(-100%, 0, 0) !important;
}

.shiftIn-enter-active {
    transition: transform 0.5s cubic-bezier(0.825, 0, 0.5, 1);
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

@keyframes bounceSideways {
    0% {
        transform: translateX(0%);
    }

    50% {
        transform: translateX(15%);
    }

    100% {
        transform: translateX(0%);
    }
}

@keyframes slideIn {
    0% {
        transform: translateX(calc(-100% - 4rem));
    }

    100% {
        transform: translateX(0rem);
    }
}

.mobile {
    button {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        margin-top: 1.5rem;

        border: none;
        border-radius: 10rem;
        transition: box-shadow 0.2s;
        cursor: pointer;

        svg {
            margin-left: 1rem;
            height: 3.45rem;
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
            z-index: 20;
        }

        &.page2 {
            z-index: 19;
        }

        &.page3 {
            z-index: 18;
        }

        &.page4 {
            z-index: 17;
        }

        &.page5 {
            z-index: 16;
        }

        &.page6 {
            z-index: 15;
        }

        &.page7 {
            z-index: 14;
        }

        &.page8 {
            z-index: 13;
        }

        &.page9 {
            z-index: 12;
        }

        &.page10 {
            z-index: 11;
        }

        &.page11 {
            z-index: 10;
        }

        &.page12 {
            z-index: 9;
        }

        &.page13 {
            z-index: 8;
        }

        &.page14 {
            z-index: 7;
        }

        &.page15 {
            z-index: 6;
        }

        &.page16 {
            z-index: 5;
        }

        &.page17 {
            z-index: 4;
        }

        &.page18 {
            z-index: 3;
        }

        &.page19 {
            z-index: 2;
        }
    }

    &.slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        width: 100%;
        height: 100%;

        // padding: 1rem 0.5rem 0rem 0.5rem;
        padding-top: 1rem;
        box-sizing: border-box;

        font-family: 'Montserrat', sans-serif;

        .header {
            font-size: 3.2rem;
            font-weight: 900;

            text-align: center;

            .line {
                display: flex;
                flex-direction: row;
                justify-content: center;

                white-space: nowrap;

                span {
                    margin-top: 0.2rem;
                    &.small {
                        font-weight: 400;
                        font-size: 1.95rem;
                    }

                    &.large {
                        font-size: 2.5rem;
                        font-weight: 600;
                    }
                }
            }
        }

        .groups {
            position: relative;
            flex: 1;

            align-self: stretch;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            margin: 1.5rem 0;
            // padding: 0 0.5rem;

            box-sizing: border-box;

            &::before {
                content: '';

                position: absolute;
                top: 4.5rem; //.group .img height / 2)
                left: 6.5rem; //4.5rem + 2rem for group's padding

                @include portraitMode {
                    @include hugeTablets {
                        left: 8.5rem; //4.5rem + 4rem for group's padding
                    }
                }

                height: calc(100% - 9rem);
                width: 0.4rem;

                box-shadow: 0px 0px 0.5rem white;

                transform: scale(0);
                backface-visibility: hidden;

                z-index: 1;
            }

            &.startAnimation {
                &::before {
                    animation: 1s zoomIn cubic-bezier(0.19, 1, 0.22, 1) forwards
                        0.4s;
                }
            }

            .group {
                position: relative;

                // align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: center;
                // justify-content: center;

                padding: 0rem 2rem;

                @include portraitMode {
                    @include hugeTablets {
                        padding: 0rem 4rem;
                    }
                }

                transform: scale(0);
                backface-visibility: hidden;

                z-index: 2;

                &.startAnimation {
                    animation: 1s zoomIn cubic-bezier(0.19, 1, 0.22, 1) forwards;

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

                img {
                    height: 9rem;
                    filter: drop-shadow(0px 0px 0.3rem white);
                }

                .information {
                    // flex: 1;

                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    margin-left: 2rem;

                    .line {
                        font-size: 2.2rem;
                        font-weight: 600;
                        white-space: nowrap;

                        span {
                            font-size: 2.8rem;
                            font-weight: 700;

                            &.small {
                                font-size: 1.7rem;
                                font-weight: 600;
                            }
                        }
                    }
                }

                .useless {
                    position: absolute;
                    right: 0.5rem;

                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;

                    svg {
                        width: 2rem;
                        animation: 1s bounceSideways ease infinite 3s;
                        backface-visibility: hidden;
                    }
                }
            }
        }

        .continue {
            width: 100%;
            text-align: center;

            svg {
                height: 5rem;
                filter: drop-shadow(0px 0px 0.3rem white);
            }
        }
    }

    &.inner {
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;

        width: 100%;
        height: 100%;

        padding: 2rem;
        box-sizing: border-box;

        font-family: 'Montserrat', 'sans-serif';

        .goleft {
            position: absolute;
            top: 1rem;
            left: 1rem;

            align-self: flex-start;
            display: flex;

            svg {
                height: 5rem;
                transform: rotate(90deg);
            }
        }

        .img {
            margin-top: 2.5rem;
            margin-bottom: 1.5rem;

            img {
                height: 13rem;
            }
        }

        .body {
            font-size: 2.7rem;
            .paragraph {
                &:not(:last-child) {
                    margin-bottom: 2.5rem;
                }

                .line {
                    // margin: 0.1rem 0;
                    white-space: nowrap;
                    span {
                        font-weight: 700;
                    }
                }
            }
        }
    }

    &.ending {
        padding: 0 !important;

        background-repeat: no-repeat;
        background-size: cover;
        box-sizing: border-box;

        &.coverrdn {
            background-image: url('../assets/mobile/cover1.jpg');
            background-position: center;

            color: white;

            .overlay {
                background-color: rgba(0, 0, 0, 0.8);
            }
        }

        &.coverskin {
            background-image: url('../assets/mobile/cover2.jpg');
            background-position: center;

            .overlay {
                background-color: rgba(255, 255, 255, 0.9);
            }
            // background-color: white;
        }

        &.covercalories {
            background-image: url('../assets/mobile/cover3.jpg');
            background-position: center;

            color: white;

            .overlay {
                background-color: rgba(0, 0, 0, 0.8);
            }
        }

        .overlay {
            flex: 1;
            align-self: stretch;

            display: flex;
            flex-direction: column;
            justify-content: space-between;

            padding: 1.5rem;

            .close {
                align-self: flex-end;
                font-size: 4.5rem;
            }

            .footer {
                font-size: 1.5rem;
                font-weight: 600;
            }
        }
    }
}
</style>
