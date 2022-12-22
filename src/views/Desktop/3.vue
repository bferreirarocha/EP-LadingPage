<i18n>
{
  "en": {
      "group1": {
            "title": ["Pick a diet", "template."],
            "paragraph1": ["We have diet templates for", "many goals made by <span>real</span>", "dietitians."]
            },
      "group2": {

      },
      "group3": {

      }
  },
  "it": {
      "group1": {
          "title": [""],
          "paragraph1": [""]
      }
  }
}
</i18n>

<template>
    <div @wheel="detectScroll" class="slide page page3 start">
        <div class="header">Start diet is easy!</div>
        <div class="body">
            <div
                :class="[
                    'group',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <img src="@/assets/calendar.svg" />
                <div class="title">
                    <div class="line">
                        Pick a diet
                    </div>
                    <div class="line">
                        <span>template.</span>
                    </div>
                </div>
                <div class="description">
                    <div class="paragraph">
                        <div class="line">
                            We have diet templates for
                        </div>
                        <div class="line">
                            many goals made by <span>real</span>
                        </div>
                        <div class="line"><span>dietitians!</span></div>
                    </div>
                    <div class="paragraph">
                        <div class="line">
                            <span>Just pick a template for</span>
                        </div>
                        <div class="line"><span>your diet target</span></div>
                        <div class="line">and follow the steps.</div>
                    </div>
                </div>
            </div>
            <div
                :class="[
                    'group',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <img src="@/assets/doctor.svg" />
                <div class="title">
                    <div class="line">
                        Get in touch with
                    </div>
                    <div class="line">
                        <span>dietitians</span>
                    </div>
                </div>
                <div class="description">
                    <div class="paragraph">
                        <div class="line">We have the <span>biggest</span></div>
                        <div class="line">
                            <span>dietitian & nutritionist</span>
                        </div>
                        <div class="line"><span>community</span></div>
                        <div class="line">in the world.</div>
                    </div>
                    <div class="paragraph">
                        <div class="line">
                            <span>Get in touch with them</span>
                        </div>
                        <div class="line">and start learning about</div>
                        <div class="line">diet and nutrition.</div>
                    </div>
                </div>
            </div>
            <div
                :class="[
                    'group',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <img src="@/assets/clock.svg" />
                <div class="title">
                    <div class="line">Eat <span>right food</span></div>
                    <div class="line">at the <span>right time.</span></div>
                </div>
                <div class="description">
                    <div class="paragraph">
                        <div class="line">
                            We will suggest you
                        </div>
                        <div class="line">
                            the <span>right food to eat,</span>
                        </div>

                        <div class="line">
                            <span>each day, each meal</span>
                        </div>
                        <div class="line">
                            for the entire project.
                        </div>
                    </div>
                    <div class="paragraph">
                        <div class="line">
                            If you make mistakes,
                        </div>
                        <div class="line">
                            don't worry!
                        </div>
                        <div class="line">
                            <span>We will readapt</span> everything
                        </div>
                        <div class="line">
                            based on:
                        </div>
                        <div class="line">
                            <span>your tastes & budget.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="navigation">
            <div class="circles">
                <div class="circle" @click="$emit('changePage', 2)"></div>
                <div class="circle chosen"></div>
                <div class="circle" @click="$emit('changePage', 4)"></div>
                <div class="circle" @click="$emit('changePage', 5)"></div>
                <div class="circle" @click="$emit('changePage', 6)"></div>
                <div class="circle" @click="$emit('changePage', 7)"></div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 85.248 85.248"
                @click="$emit('changePage', 4)"
            >
                >
                <path
                    d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                    transform="translate(10.208 10.208)"
                    fill="#ff40c3"
                />
            </svg>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Start',
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
        if (this.animate == true) {
            this.startAnimation = true;
            this.$emit('stopAnimation');
        }
    },
    created() {
        this.$store.commit('updateCurrentPage', 3);
    },
    methods: {
        detectScroll: function() {
            if (event.deltaY > 0) {
                this.$emit('changePage', 4);
            } else if (event.deltaY < 0) {
                this.$emit('changePage', 2);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.start {
    background-color: #e4ff26;
    color: #ff40c3;

    .navigation {
        .circle {
            background-color: #ff40c3;
        }
    }
}
</style>
