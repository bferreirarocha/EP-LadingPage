<template>
    <div
        ref="17"
        :class="[
            'cover' + $store.state.cover,
            'slide',
            'ending',
            'page',
            'page17',
            'navigation'
        ]"
    >
        <div class="overlay">
            <div class="header">
                <img
                    v-if="$store.state.cover == 'skin'"
                    src="@/assets/logoBlack.svg"
                />
                <img v-else src="@/assets/logo.svg" />
            </div>
            <div class="menu">
                <div class="item" @click="$emit('changePage', 18)">
                    About us
                </div>
                <!-- <div class="item" @click="$emit('changePage', 19)"> -->
                <div class="item" @click="sendEmail">
                    Contact us
                </div>
                <div class="item">
                    Cookies
                </div>
                <div class="item">
                    Privacy
                </div>
            </div>
            <div class="arrow" @click="$emit('changePage', 7)">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 85.248 85.248"
                >
                    <path
                        d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                        transform="translate(10.208 10.208)"
                        fill="currentColor"
                    />
                </svg>
            </div>
            <div class="footer">Copyright © 2020, Eat-Project</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navigation',
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
        var mc = new Hammer.Manager(this.$refs['17'], {
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

        mc.on('swipedown', () => {
            this.$emit('changePage', 7);
        });
        /* eslint-enable no-undef */
    },
    created() {
        this.$store.commit('updateCurrentPage', 17);
    },
    methods: {
        sendEmail: function() {
            window.location = 'mailto:info@eat-project.com';
        }
    }
};
</script>

<style lang="scss" scoped>
.navigation {
    .overlay {
        .header {
            display: flex;
            width: 100%;

            img {
                height: 7rem;
            }
        }

        .menu {
            display: flex;
            flex-direction: column;
            margin-bottom: 10vh;

            .item {
                margin: 1rem 0;
                font-size: 3.5rem;
                font-weight: 600;
            }
        }

        .arrow {
            position: absolute;
            right: 1.5rem;
            bottom: 15vh;

            height: 5rem;

            svg {
                height: 100%;
                transform: rotate(180deg);
            }
        }
    }
}
</style>
