<i18n>
{
  "en": {
  }, 
  "it": {
  }
}
</i18n>

<template>
    <div :class="['about', , 'page', 'page9', 'cover' + $store.state.cover]">
        <div class="overlay">
            <div class="header">
                <img
                    v-if="$store.state.cover == 'skin'"
                    src="@/assets/logoBlack.svg"
                />
                <img v-else src="@/assets/logo.svg" />
                <div @click="$emit('changePage', 8)" class="close">
                    &#10005;
                </div>
            </div>
            <div class="body">
                <div class="group">
                    <div class="label">
                        Name
                    </div>
                    <input type="text" />
                </div>
                <div class="group">
                    <div class="label">
                        Email
                    </div>
                    <input type="text" />
                </div>
                <div class="group">
                    <div class="label">
                        Message
                    </div>
                    <textarea />
                </div>
                <div class="group">
                    <button @click="$emit('changePage', 10)">Send</button>
                </div>
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
                <span>Copyright © {{ Date.getFullYear() }}, Eat-project</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
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
        this.$store.commit('updateCurrentPage', 9);
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

        padding: 0 14rem;
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
        width: 40rem;

        .group {
            width: 100%;

            display: flex;
            flex-direction: row;
            justify-content: space-between;

            &:nth-child(3) {
                flex-direction: column;
            }

            &:not(:last-child) {
                margin-bottom: 2rem;
            }

            font-size: 2.8rem;
            font-weight: 700;

            input {
                width: 27rem;
                margin: 0;
                padding: 0 0 0 1rem;
                border: 1px solid #acacac;
                border-radius: 0.5rem;
                box-sizing: border-box;
            }

            textarea {
                width: 100%;
                height: 15rem;
                margin: 1rem 0 0 0;
                padding: 1rem;
                border: 1px solid #acacac;
                border-radius: 1rem;
                box-sizing: border-box;
            }

            input,
            textarea {
                font-size: 1rem;
                font-family: inherit;
            }

            button {
                width: 100%;
                padding: 1.5rem 0 !important;
                margin-top: 1rem !important;
                font-size: 1.8rem !important;

                background-color: black;
                color: white;
            }
        }
    }

    .footer {
        bottom: 2rem !important;
        left: 14rem !important;
        width: calc(100% - 28rem) !important;
    }
}
</style>
