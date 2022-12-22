<template>
    <div
        :class="[
            'cover' + $store.state.cover,
            'slide',
            'ending',
            'page',
            'page19',
            'contact'
        ]"
    >
        <div class="overlay">
            <div @click="$emit('changePage', 17)" class="close">
                &#10005;
            </div>
            <div class="form">
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
                        How can we help you?
                    </div>
                    <textarea />
                </div>
                <button @click="$emit('changePage', 20)">Send</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
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
        this.$store.commit('updateCurrentPage', 19);
    }
};
</script>

<style lang="scss" scoped>
.contact {
    .overlay {
        .form {
            flex: 1;

            display: flex;
            flex-direction: column;
            justify-content: center;

            font-size: 2.3rem;
            font-weight: 600;
            .group {
                margin-bottom: 2rem;

                .label {
                    margin-bottom: 0.5rem;
                    margin-left: 0.5rem;
                }

                input,
                textarea {
                    width: 100%;
                    font-family: inherit;
                    font-size: 1.3rem;
                    border-radius: 5px;
                    box-sizing: border-box;
                    border: 2px solid black;
                }

                input {
                    height: 4rem;
                    padding-left: 0.75rem;
                }

                textarea {
                    height: 14rem;
                    padding: 0.75rem;
                }
            }

            button {
                margin: 0 auto;
                padding: 1.5rem;
                font-family: inherit;
                font-size: 1.3rem;
                font-weight: 700;
                background-color: white;
                color: black;
                width: 80vw;
                border: 2px solid black;
            }
        }
    }
}
</style>
