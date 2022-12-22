<template>
    <div ref="14" id="inner" class="inner page page14">
        <div class="goleft">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 85.248 85.248"
                @click="$emit('changePage', 5)"
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
            <img src="@/assets/phone.svg" />
        </div>
        <div class="body">
            <div class="paragraph">
                <div class="line">
                    There are many
                </div>
                <div class="line">
                    people in your town
                </div>
                <div class="line">looking for <span>diet help.</span></div>
            </div>
            <div class="paragraph">
                <div class="line">
                    They are looking for
                </div>

                <div class="line">
                    <span>real diet advice.</span>
                </div>
            </div>
            <div class="paragraph">
                <div class="line"><span>Be hired by them</span> for</div>
                <div class="line">
                    their diet projects.
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
        var mc = new Hammer.Manager(this.$refs['14'], {
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
            this.$emit('changePage', 5);
        });
        /* eslint-enable no-undef */
    },
    created() {
        this.$store.commit('updateCurrentPage', 14);
    }
};
</script>

<style lang="scss" scoped>
#inner {
    color: #e4ff26;
    background-color: #05ab89;

    .img {
        img {
            filter: drop-shadow(0px 0px 0.3rem white);
        }
    }
}
</style>
