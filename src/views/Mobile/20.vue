<template>
    <div
        :class="[
            'cover' + $store.state.cover,
            'slide',
            'ending',
            'page',
            'page20',
            'thanks'
        ]"
    >
        <div class="overlay">
            <!-- <div @click="$emit('changePage', 17)" class="close">
                &#10005;
            </div> -->
            <div class="body">
                <div class="line">
                    Thanks for your message.
                </div>
                <div class="line">
                    We will reply you as soon as possible.
                </div>
            </div>
            <button @click="$emit('changePage', 17)">Close</button>
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
        this.$store.commit('updateCurrentPage', 20);
    }
};
</script>

<style lang="scss" scoped>
.thanks {
    .overlay {
        .body {
            flex: 1;

            display: flex;
            flex-direction: column;
            justify-content: center;

            font-size: 2.3rem;
            font-weight: 600;
            line-height: 3rem;
        }

        button {
            margin: 0 auto;
            padding: 1.5rem;
            font-family: inherit;
            font-size: 1.5rem;
            font-weight: 700;
            background-color: white;
            color: black;
            width: 80vw;
        }
    }
}
</style>
