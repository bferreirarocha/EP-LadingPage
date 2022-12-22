<template>
    <div ref="2" class="page page2 hello">
        <div class="body">
            <div class="title">Hello,</div>

            <div class="paragraph1">
                <div class="line">
                    <span>Eat-Project</span> is a <span>diet</span>
                </div>
                <div class="line">
                    community composed by
                </div>
                <div class="line">
                    <span>health professionals.</span>
                </div>
            </div>
            <div class="paragraph2">
                <div class="line">Their goal is to teach you</div>
                <div class="line">how to:</div>
            </div>
            <div class="list">
                <span :class="[startAnimation == true ? 'startAnimation' : '']"
                    >eat right,</span
                >
                <span :class="[startAnimation == true ? 'startAnimation' : '']"
                    >every moment,</span
                >
                <span :class="[startAnimation == true ? 'startAnimation' : '']"
                    >everywhere.</span
                >
            </div>
        </div>
        <button @click="$emit('changePage', 3)">
            So, let's diet?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.248 85.248">
                <path
                    d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                    transform="translate(10.208 10.208)"
                    fill="#e4ff26"
                />
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Hello',
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
        var mc = new Hammer.Manager(this.$refs['2'], {
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
            this.$emit('changePage', 3);
        });

        mc.on('swipedown', () => {
            this.$emit('changePage', 1);
        });
        /* eslint-enable no-undef */
    },
    created() {
        this.$store.commit('updateCurrentPage', 2);
    }
};
</script>

<style lang="scss" scoped>
.hello {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;

    flex: 1;

    width: 100%;
    height: 100%;

    padding: 2rem 2rem 1rem 2rem;

    font-family: 'Montserrat', sans-serif;

    box-sizing: border-box;

    background-color: #e4ff26;
    color: black;

    .body {
        .title {
            font-size: 3rem;
            font-weight: 700; //semi bold
            margin-bottom: 1.6rem;
        }

        .paragraph1,
        .paragraph2 {
            font-size: 2.15rem;
            font-weight: 700;

            .line {
                margin: 0.2rem 0;
            }
        }

        .paragraph1 {
            span {
                color: #ff40c3;
            }
        }

        .paragraph2 {
            margin-top: 3.2rem;
            margin-bottom: 1.6rem;
        }

        .list {
            display: flex;
            flex-direction: column;
            font-size: 3.6rem;

            span {
                font-weight: 700;
                color: #ff40c3;
                margin: 0.1rem 0;

                transform: translateX(calc(-100% - 8rem));
                backface-visibility: hidden;

                &.startAnimation {
                    animation: 1s slideIn cubic-bezier(0.19, 1, 0.22, 1)
                        forwards;
                    &:nth-child(1) {
                        animation-delay: 0s;
                    }

                    &:nth-child(2) {
                        animation-delay: 0.5s;
                    }

                    &:nth-child(3) {
                        animation-delay: 1s;
                    }
                }
            }
        }
    }

    button {
        align-self: center;
        margin-top: 0rem;
        padding: 1.7rem 2.4rem 1.7rem 3.9rem;

        font-size: 2.2rem;
        color: #e4ff26;
        background-color: #ff40c3;

        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }

    .navigation {
        .circle {
            background-color: #ff40c3;
        }
    }
}
</style>
