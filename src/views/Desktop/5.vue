<i18n>
{
  "en": {
  }, 
  "it": {
  }
}
</i18n>

<template>
    <div @wheel="detectScroll" class="slide page page5 rdn">
        <div class="header">
            Are you a "RDN"?
            <span>Registered Dietitian Nutritionist</span>
        </div>
        <div class="body">
            <div
                :class="[
                    'group',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <img src="@/assets/phone.svg" />
                <div class="title">
                    <div class="line">
                        Propose diet
                    </div>
                    <div class="line">
                        <span>ideas</span>
                    </div>
                </div>
                <div class="description">
                    <div class="paragraph">
                        <div class="line">
                            There are many people in
                        </div>
                        <div class="line">your town looking for</div>
                        <div class="line">
                            <span>diet help.</span>
                        </div>
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
                        <div class="line">
                            <span>Be hired by them</span> for their
                        </div>
                        <div class="line">diet projects.</div>
                    </div>
                </div>
            </div>
            <div
                :class="[
                    'group',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <img src="@/assets/calendarB.svg" />
                <div class="title">
                    <div class="line">
                        Create diet
                    </div>
                    <div class="line">
                        <span>Projects</span>
                    </div>
                </div>
                <div class="description">
                    <div class="paragraph">
                        <div class="line">
                            Your ideas can
                            <span>Inspire</span>
                        </div>
                        <div class="line">
                            <span>many people.</span>
                        </div>
                    </div>
                    <div class="paragraph">
                        <div class="line">
                            You can collaborate in
                        </div>
                        <div class="line">
                            <span>nutrition team projects</span>
                        </div>
                        <div class="line">with doctors, chefs, food</div>
                        <div class="line">companies and food</div>
                        <div class="line">bloggers.</div>
                    </div>
                </div>
            </div>
            <div
                :class="[
                    'group',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <img src="@/assets/chip.svg" />
                <div class="title">
                    <div class="line">
                        Let machines
                    </div>
                    <div class="line">
                        <span>works for you</span>
                    </div>
                </div>
                <div class="description">
                    <div class="paragraph">
                        <div class="line">
                            Stop building
                        </div>
                        <div class="line">
                            diet meals <span>manually!</span>
                        </div>
                    </div>
                    <div class="paragraph">
                        <div class="line">
                            <span>Machine Learning will</span>
                        </div>
                        <div class="line">
                            <span>collect & sort</span> the best
                        </div>
                        <div class="line">recipes for your patients'</div>
                        <div class="line">plans.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="navigation">
            <div class="circles">
                <div class="circle" @click="$emit('changePage', 2)"></div>
                <div class="circle" @click="$emit('changePage', 3)"></div>
                <div class="circle" @click="$emit('changePage', 4)"></div>
                <div class="circle chosen"></div>
                <div class="circle" @click="$emit('changePage', 6)"></div>
                <div class="circle" @click="$emit('changePage', 7)"></div>
            </div>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 85.248 85.248"
                @click="$emit('changePage', 6)"
            >
                >
                <path
                    d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                    transform="translate(10.208 10.208)"
                    fill="#e4ff26"
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
        //in case the slide is loaded with a direct link
        if (this.animate == true) {
            this.startAnimation = true;
            this.$emit('stopAnimation');
        }
    },
    created() {
        this.$store.commit('updateCurrentPage', 5);
    },
    methods: {
        detectScroll: function() {
            if (event.deltaY > 0) {
                this.$emit('changePage', 6);
            } else if (event.deltaY < 0) {
                this.$emit('changePage', 4);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.rdn {
    color: #e4ff26;
    background-color: #05ab89;

    .header {
        text-shadow: 0px 0px 0.1rem white;
    }

    .navigation {
        .circle {
            background-color: #e4ff26;
        }
    }
}
</style>
