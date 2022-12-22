<template>
    <div ref="1" :class="['cover' + cover, 'page', 'page1', 'home']">
        <!-- <div v-if="showView == false" class="loading"></div> -->

        <!-- <p>{{ $t('hello') }}</p> -->

        <div class="header">
            <img src="@/assets/logo.svg" />
        </div>

        <div v-if="cover == 'rdn'" class="body">
            <div class="title"><span>Stop fake diets!</span></div>
            <div class="subtitle">Dietitian thinks, <span>you eat.</span></div>
            <div class="description">
                Real diets are always
                <span class="yellow">custom-made.</span>
            </div>
            <button @click="$emit('changePage', 2)">
                Learn more
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 85.248 85.248"
                >
                    <path
                        d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                        transform="translate(10.208 10.208)"
                        fill="#000000"
                    />
                </svg>
            </button>
        </div>

        <div v-else-if="cover == 'skin'" class="body">
            <div class="title"><span>Diet</span> & skin</div>
            <div class="subtitle">You are what you <span>EAT</span></div>
            <div class="description">
                1 million recipes for your <span>skin health</span>
            </div>
            <button @click="$emit('changePage', 2)">
                Learn more
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 85.248 85.248"
                >
                    <path
                        d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                        transform="translate(10.208 10.208)"
                        fill="#000000"
                    />
                </svg>
            </button>
        </div>

        <div v-else-if="cover == 'calories'" class="body">
            <div class="title">You can eat everything <span>on diet</span></div>
            <div class="subtitle">Just split <span>calories</span></div>
            <div class="description">
                We have 1 million recipes
                <span class="yellow">low calories</span>
            </div>
            <button @click="$emit('changePage', 2)">
                Learn more
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 85.248 85.248"
                >
                    <path
                        d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                        transform="translate(10.208 10.208)"
                        fill="#000000"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeMobile',
    props: {
        cover: {
            type: String,
            default: '',
            required: false
        },
        animate: {
            type: Boolean,
            default: false,
            required: false
        }
    },
    created() {
        this.$store.commit('updateCurrentPage', 1);

        if (this.cover == '') {
            this.cover = this.$store.state.cover;
        } else {
            this.$store.commit('updateCover', this.cover);
        }
        // this.$i18n.locale = 'en';
    },
    mounted() {
        //in case the slide is loaded with a direct link
        if (this.animate == true) {
            this.startAnimation = true;
            this.$emit('stopAnimation');
        }

        /* eslint-disable no-undef */
        var mc = new Hammer.Manager(this.$refs['1'], {
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
            this.$emit('changePage', 2);
        });
        /* eslint-enable no-undef */
    },
    watch: {
        cover(val) {
            this.$store.commit('updateCover', val);
        },
        animate(val) {
            if (val == true) {
                this.startAnimation = true;
                this.$emit('stopAnimation');
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.home {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;
    height: 100%;

    // padding: 0.5rem;

    font-family: 'Roboto', sans-serif;

    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;

    &.coverrdn {
        background-image: url('../../assets/mobile/cover1.jpg');
        background-position: center;
    }

    &.coverskin {
        justify-content: flex-end;

        background-image: url('../../assets/mobile/cover2.jpg');
        background-position: center;

        .header {
            display: none;
        }

        .body {
            background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0%,
                rgba(255, 255, 255, 1) 95%
            );

            .subtitle {
                font-weight: 500;
                color: black;

                span {
                    font-weight: 700;
                }
            }

            .description {
                font-weight: 400;
                color: black;
                text-shadow: none;

                span {
                    font-weight: 400;
                    color: black;
                }
            }
        }
    }

    &.covercalories {
        background-image: url('../../assets/mobile/cover3.jpg');
        background-position: center;

        .body {
            .title {
                font-size: 4rem;
            }

            .subtitle {
                margin: 2.5rem 0;
                font-size: 2.7rem;
            }

            .description {
                margin: 0.5rem 0 0 0;
            }
        }
    }

    .header {
        display: flex;

        padding: 0.5rem;

        img {
            height: 7rem;
        }
    }

    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 0.5rem;

        background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(0, 0, 0, 1) 95%
        );

        .title {
            font-size: 4.6rem;
            color: white;
            font-weight: 700;
            text-align: center;
            text-shadow: 0px 0px 3rem black;

            span {
                color: #e4ff26;
            }
        }

        .subtitle {
            margin-top: 0.5rem;
            font-size: 2.85rem;
            color: white;
            font-weight: 700;
            text-shadow: 0px 0px 2rem black;

            span {
                color: #e4ff26;
            }
        }

        .description {
            margin-top: 2rem;
            font-size: 1.7rem;
            color: white;
            text-shadow: 0px 0px 1rem black;

            span {
                color: #414141;
                text-shadow: none;
                font-weight: 500;

                &.yellow {
                    color: #e4ff26;
                }
            }
        }

        button {
            padding: 1.7rem 2.4rem 1.7rem 3.9rem;

            font-family: 'Roboto', sans-serif;
            font-size: 2.2rem;
            font-weight: 700;

            color: #000000;
            background-color: #e4ff26;
        }
    }
}
</style>
