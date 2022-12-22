<template>
    <div ref="8" id="inner" class="inner page page8">
        <div class="goleft">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 85.248 85.248"
                @click="$emit('changePage', 3)"
            >
                >
                <path
                    d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                    transform="translate(10.208 10.208)"
                    fill="#ff40c3"
                />
            </svg>
        </div>
        <div class="img">
            <img src="@/assets/calendar.svg" />
        </div>
        <div class="body">
            <div class="paragraph">
                <div class="line">
                    We have thousands of
                </div>
                <div class="line">
                    diet templates made
                </div>
                <div class="line">by <span>real dietitians.</span></div>
            </div>
            <div class="paragraph">
                <div class="line">
                    <span>Just pick a template</span>
                </div>
                <div class="line">
                    <span>for your diet target</span>
                </div>
                <div class="line">
                    and follow the steps.
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
        var mc = new Hammer.Manager(this.$refs['8'], {
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
            this.$emit('changePage', 3);
        });
        /* eslint-enable no-undef */
    },
    created() {
        this.$store.commit('updateCurrentPage', 8);
    }
};
</script>

<style lang="scss" scoped>
#inner {
    background-color: #e4ff26;
    color: #ff40c3;
}
</style>
