<template>
    <div ref="10" id="inner" class="inner page page10">
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
            <img src="@/assets/clock.svg" />
        </div>
        <div class="body">
            <div class="paragraph">
                <div class="line">
                    We will suggest you
                </div>
                <div class="line">the <span>right recipes to</span></div>
                <div class="line"><span> eat, each meal</span> for the</div>
                <div class="line">whole project.</div>
            </div>
            <div class="paragraph">
                <div class="line">
                    If you make mistakes,
                </div>
                <div class="line">
                    don't worry!
                </div>
                <div class="line">
                    <span>We will readapt</span>
                </div>
                <div class="line">
                    everything based on:
                </div>
                <div class="line">
                    <span>your tastes & budget.</span>
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
        var mc = new Hammer.Manager(this.$refs['10'], {
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
        this.$store.commit('updateCurrentPage', 10);
    }
};
</script>

<style lang="scss" scoped>
#inner {
    background-color: #e4ff26;
    color: #ff40c3;
}
</style>
