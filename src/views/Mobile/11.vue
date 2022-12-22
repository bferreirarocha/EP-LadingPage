<template>
    <div ref="11" id="inner" class="inner page page11">
        <div class="goleft">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 85.248 85.248"
                @click="$emit('changePage', 4)"
            >
                >
                <path
                    d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                    transform="translate(10.208 10.208)"
                    fill="#e4ff26"
                />
            </svg>
        </div>
        <div class="img">
            <img src="@/assets/location.svg" />
        </div>
        <div class="body">
            <div class="paragraph">
                <div class="line">
                    Don't mess up your
                </div>
                <div class="line">diet because <span>you're</span></div>
                <div class="line"><span>not home!</span></div>
            </div>
            <div class="paragraph">
                <div class="line">
                    Are you on vacation,
                </div>
                <div class="line">
                    business trip or just
                </div>
                <div class="line">
                    out for dinner?
                </div>
            </div>
            <div class="paragraph">
                <div class="line">
                    We will help you find
                </div>
                <div class="line">the <span>best choice</span></div>
                <div class="line">
                    <span>on-the-go.</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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
        var mc = new Hammer.Manager(this.$refs['11'], {
            recognizers: [
                [
                    Hammer.Swipe,
                    {
                        direction: Hammer.DIRECTION_HORIZONTAL,
                        pointers: 1
                    }
                ]
            ]
        });

        mc.on('swiperight', () => {
            this.$emit('changePage', 4);
        });
        /* eslint-enable no-undef */
    },
    created() {
        this.$store.commit('updateCurrentPage', 11);
    }
};
</script>

<style lang="scss" scoped>
#inner {
    background-color: #ff40c3;
    color: #e4ff26;

    .img {
        img {
            filter: drop-shadow(0px 0px 0.3rem white);
        }
    }
}
</style>
