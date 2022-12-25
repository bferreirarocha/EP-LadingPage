<i18n>
{
  "en": {
  }, 
  "it": {
  }
}
</i18n>

<template>
    <div :class="['about', , 'page', 'page10', 'cover' + $store.state.cover]">
        <div class="overlay">
            <div class="header">
                <img
                    v-if="$store.state.cover == 'skin'"
                    src="@/assets/logoBlack.svg"
                />
                <img v-else src="@/assets/logo.svg" />
                <div @click="$emit('changePage', 9)" class="close">
                    &#10005;
                </div>
            </div>
            <div class="body">
                <div class="paragraph1">
                    Thank you for your message!
                </div>
                <div class="paragraph2">
                    We will reply as soon as possible.
                </div>
                <button>
                    Close
                </button>
            </div>
        </div>
        <div class="footer">
            <div class="group">
                <span @click="$emit('changePage', 8)">About us</span>
                <span>Contact us</span>
                <span>Privacy</span>
                <span>Cookies</span>
            </div>
            <div class="group">
                <span>Copyright © 2019, Eat-project</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Thanks',
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
        this.$store.commit('updateCurrentPage', 10);
    } 

};
</script>

<style lang="scss" scoped>
.about {
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: center;

    width: 100%;
    height: 100%;

    font-family: 'Montserrat', sans-serif;

    background-repeat: no-repeat;
    background-size: cover;

    .overlay {
        display: flex;
        flex-direction: column;
        justify-content: center;

        width: 100%;
        height: 100%;

        padding: 0 8rem;
        box-sizing: border-box;
    }

    &.coverskin {
        color: black;
        background-image: url('../../assets/cover1.jpg');
        background-position: center right;

        .overlay {
            background-color: rgba(255, 255, 255, 0.8);
        }

        .footer {
            span {
                color: black !important;
            }
        }

        button {
            &:hover {
                box-shadow: 0px 0px 1rem black !important;
            }
        }
    }

    &.coverrdn {
        background-image: url('../../assets/cover2.jpg');
        background-position: 100% 20%;
    }

    &.covercalories {
        background-image: url('../../assets/cover3.jpg');
        background-position: 50% 30%;
    }

    &.coverrdn,
    &.covercalories {
        color: white;
        .overlay {
            background-color: rgba(0, 0, 0, 0.8);
        }

        .header {
            .close {
                &:hover {
                    text-shadow: 0px 0px 1rem white;
                }
            }
        }

        .body {
            .group {
                color: white;
            }
        }

        button {
            background-color: white !important;
            color: black !important;
        }
    }

    .header {
        position: absolute;
        top: 1rem;
        left: 3rem;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        width: calc(100% - 6rem);

        img {
            height: 8rem;
        }

        .close {
            font-size: 6rem;

            user-select: none;
            cursor: pointer;

            transition: text-shadow 0.2s;

            &:hover {
                text-shadow: 0px 0px 1rem black;
            }
        }
    }

    .body {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 70rem;

        .paragraph1 {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        .paragraph2 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1.5rem;
        }

        button {
            width: 40%;
            padding: 1.2rem 0 !important;
            margin-top: 1rem !important;
            font-size: 1.5rem !important;

            background-color: black;
            color: white;
        }
    }

    .footer {
        bottom: 2rem !important;
        left: 14rem !important;
        width: calc(100% - 28rem) !important;
    }
}
</style>
