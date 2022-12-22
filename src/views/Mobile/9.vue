<template>
    <div ref="9" id="inner" class="inner page page9">
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
            <img src="@/assets/doctor.svg" />
        </div>
        <div class="body">
            <div class="paragraph">
                <div class="line">We have the <span>biggest</span></div>
                <div class="line"><span>dietitians community</span> in</div>
                <div class="line">the world.</div>
            </div>
            <div class="paragraph">
                <div class="line">
                    <span>Get in touch with them</span>
                </div>
                <div class="line">
                    and start learning about
                </div>
                <div class="line">
                    diet & nutrition
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
        var mc = new Hammer.Manager(this.$refs['9'], {
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
        this.$store.commit('updateCurrentPage', 9);
    }
};
</script>

<style lang="scss" scoped>
#inner {
    background-color: #e4ff26;
    color: #ff40c3;
}
</style>
