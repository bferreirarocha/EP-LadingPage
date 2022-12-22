<i18n>
{
  "en": {
  }, 
  "it": {
  }
}
</i18n>

<template>
    <div @wheel="detectScroll" class="slide page page4 stay">
        <div class="header">
            <div class="line">Stay on diet "on-the-go"</div>
        </div>
        <div class="body">
            <div
                :class="[
                    'group',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <img src="@/assets/location.svg" />
                <div class="title">
                    <div class="line">
                        Diet
                    </div>
                    <div class="line">
                        <span>follows you.</span>
                    </div>
                </div>
                <div class="description">
                    <div class="paragraph">
                        <div class="line">
                            Don't mess up your diet
                        </div>
                        <div class="line">
                            because <span>you're not home!</span>
                        </div>
                    </div>
                    <div class="paragraph">
                        <div class="line">
                            Are you on vacation,
                        </div>
                        <div class="line">business trip or</div>
                        <div class="line">out for dinner?</div>
                    </div>
                    <div class="paragraph">
                        <div class="line">
                            We will help you find the
                        </div>
                        <div class="line">
                            <span>best choice on-the-go</span>
                        </div>
                    </div>
                </div>
            </div>
            <div
                :class="[
                    'group',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <img src="@/assets/food.svg" />
                <div class="title">
                    <div class="line">
                        Stay on diet in
                    </div>
                    <div class="line">
                        <span>restaurants</span>
                    </div>
                </div>
                <div class="description">
                    <div class="paragraph">
                        <div class="line">
                            We'll show you the best
                        </div>
                        <div class="line">restaurants to find</div>
                        <div class="line">
                            <span>your diet menu.</span>
                        </div>
                    </div>
                    <div class="paragraph">
                        <div class="line">
                            We collaborate with
                        </div>
                        <div class="line">
                            <span>healthy</span> restaurants, bars &
                        </div>
                        <div class="line">hotels.</div>
                    </div>
                </div>
            </div>
            <div
                :class="[
                    'group',
                    startAnimation == true ? 'startAnimation' : ''
                ]"
            >
                <img src="@/assets/delivery.svg" />
                <div class="title">
                    <div class="line"><span>Food delivery</span></div>
                    <div class="line">& diet</div>
                </div>
                <div class="description">
                    <div class="paragraph">
                        <div class="line">
                            Are you home and don't
                        </div>
                        <div class="line">like to cook?</div>
                        <div class="line">Are you at work?</div>
                    </div>
                    <div class="paragraph">
                        <div class="line">
                            We will link your diet plan
                        </div>
                        <div class="line">
                            to <span>Healthy Food Delivery</span>
                        </div>
                        <div class="line">services in your area.</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="navigation">
            <div class="circles">
                <div class="circle" @click="$emit('changePage', 2)"></div>
                <div class="circle" @click="$emit('changePage', 3)"></div>
                <div class="circle chosen"></div>
                <div class="circle" @click="$emit('changePage', 5)"></div>
                <div class="circle" @click="$emit('changePage', 6)"></div>
                <div class="circle" @click="$emit('changePage', 7)"></div>
            </div>
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
    </div>
</template>

<script>
export default {
    name: 'Stay',
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
        this.$store.commit('updateCurrentPage', 4);
    },
    methods: {
        detectScroll: function() {
            if (event.deltaY > 0) {
                this.$emit('changePage', 5);
            } else if (event.deltaY < 0) {
                this.$emit('changePage', 3);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.stay {
    color: #e4ff26;
    background-color: #ff40c3;

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
