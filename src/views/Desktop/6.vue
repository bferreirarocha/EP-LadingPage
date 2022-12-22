<i18n>
{
  "en": {
  }, 
  "it": {
  }
}
</i18n>

<template>
    <div @wheel="detectScroll" class="slide page page6 with">
        <div class="header">Stay on diet with</div>
        <div class="body">
            <div class="row">
                <div class="item">
                    <img
                        :class="[
                            'firstAnimation',
                            startAnimation == true ? 'startAnimation' : ''
                        ]"
                        src="@/assets/1million.svg"
                    />
                </div>
                <div class="item center">
                    <img
                        :class="[
                            'fourthAnimation',
                            startAnimation == true ? 'startAnimation' : ''
                        ]"
                        src="@/assets/center.svg"
                    />
                </div>
                <div class="item">
                    <img
                        :class="[
                            'secondAnimation',
                            startAnimation == true ? 'startAnimation' : ''
                        ]"
                        src="@/assets/30k.svg"
                    />
                </div>
            </div>
            <div class="row">
                <div class="item">
                    <img
                        :class="[
                            'thirdAnimation',
                            startAnimation == true ? 'startAnimation' : ''
                        ]"
                        src="@/assets/20k.svg"
                    />
                </div>
            </div>
        </div>
        <div class="navigation">
            <div class="circles">
                <div class="circle" @click="$emit('changePage', 2)"></div>
                <div class="circle" @click="$emit('changePage', 3)"></div>
                <div class="circle" @click="$emit('changePage', 4)"></div>
                <div class="circle" @click="$emit('changePage', 5)"></div>
                <div class="circle chosen"></div>
                <div class="circle" @click="$emit('changePage', 7)"></div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 85.248 85.248"
                @click="$emit('changePage', 7)"
            >
                >
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
    name: 'With',
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
        this.$store.commit('updateCurrentPage', 6);
    },
    methods: {
        detectScroll: function() {
            if (event.deltaY > 0) {
                this.$emit('changePage', 7);
            } else if (event.deltaY < 0) {
                this.$emit('changePage', 5);
            }
        }
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

    .body {
        flex-direction: column !important;
        justify-content: center;
        align-items: center;

        .row {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            width: 95%;
            margin-top: 3rem;

            .item {
                box-sizing: border-box;
                height: 8rem;

                &.center {
                    padding: 0 1rem 1rem 1rem;
                    height: 42rem;
                }

                img {
                    height: 100%;

                    &.firstAnimation,
                    &.secondAnimation,
                    &.thirdAnimation,
                    &.fourthAnimation {
                        transform: scale(0);
                    }

                    &.startAnimation {
                        &.firstAnimation,
                        &.secondAnimation,
                        &.thirdAnimation,
                        &.fourthAnimation {
                            animation: 1s zoomIn cubic-bezier(0.19, 1, 0.22, 1)
                                forwards;
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

                        &.fourthAnimation {
                            animation-delay: 0.6s;
                        }
                    }
                }
            }
        }
    }

    .navigation {
        .circle {
            background-color: #ffffff;
        }
    }
}
</style>
