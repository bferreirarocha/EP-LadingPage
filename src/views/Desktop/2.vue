<i18n>
{
  "en": {
      "title":"Hello!",
      "lines1": ["<span>Eat-Project</span> is the first social-community for <span>diet & nutrition,</span>", "composed by <span>real diet professionals.</span>"],
      "lines2": ["Our goal is help you to:"],
      "list":["eat right,", "every moment,","everywhere."],
      "button":"So, let's diet?"
  }, 
  "it": {
      "title":"Ciao!",
      "lines1": ["<span>Eat-Project</span> è il primo social-networ <span>dietetico,</span>", "composto da <span>veri dietisti e nutrizionisti.</span>"],
      "lines2": ["Il nostro obiettivo è aiutarti a :"],
      "list":["mangiare correttamente,", "in ogni momento,","ovunque tu sia."],
      "button":"Cominciamo ?"
  }
}
</i18n>

<template>
    <div @wheel="detectScroll" class="page page2 hello">
        <div class="title" v-html="$t('title')"></div>
        <div class="paragraph1">
            <div class="line" v-html="$t('lines1[0]')"></div>
            <div class="line" v-html="$t('lines1[1]')"></div>
        </div>
        <div class="paragraph2" v-html="$t('lines2[0]')"></div>
        <div class="list">
            <span :class="[startAnimation == true ? 'startAnimation' : '']">{{
                $t('list[0]')
            }}</span>
            <span :class="[startAnimation == true ? 'startAnimation' : '']">{{
                $t('list[1]')
            }}</span>
            <span :class="[startAnimation == true ? 'startAnimation' : '']">{{
                $t('list[2]')
            }}</span>
        </div>
        <button @click="$emit('changePage', 3)">
            {{ $t('button') }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 85.248 85.248">
                <path
                    d="M60.832,32.416l-5.008-5.008L35.968,47.228V4h-7.1V47.228L9.044,27.372,4,32.416,32.416,60.832Z"
                    transform="translate(10.208 10.208)"
                    fill="#e4ff26"
                />
            </svg>
        </button>
        <div class="navigation">
            <div class="circles">
                <div class="circle chosen"></div>
                <div class="circle" @click="$emit('changePage', 3)"></div>
                <div class="circle" @click="$emit('changePage', 4)"></div>
                <div class="circle" @click="$emit('changePage', 5)"></div>
                <div class="circle" @click="$emit('changePage', 6)"></div>
                <div class="circle" @click="$emit('changePage', 7)"></div>
            </div>
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
    </div>
</template>

<script>
export default {
    name: 'Hello',
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
        if ('lan' in this.$route.query) {
            this.$store.commit('updateLan', this.$route.query.lan);
        }

        this.$i18n.locale = this.$store.state.lan;

        this.$store.commit('updateCurrentPage', 2);
    },
    methods: {
        detectScroll: function() {
            if (event.deltaY > 0) {
                this.$emit('changePage', 3);
            } else if (event.deltaY < 0) {
                this.$emit('changePage', 1);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.hello {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;

    flex: 1;

    width: 100%;
    height: 100%;

    padding: 0 6rem;

    font-family: 'Montserrat', sans-serif;

    box-sizing: border-box;

    background-color: #e4ff26;
    color: black;

    .title {
        font-size: 4.9rem;
        font-weight: 600; //semi bold
        margin-bottom: 1.3rem;
    }

    .paragraph1,
    .paragraph2 {
        font-size: 3.3rem;
        font-weight: 600;
    }

    .paragraph1 {
        /deep/ span {
            color: #ff40c3;
            font-weight: 800;
            white-space: nowrap;
        }
    }

    .paragraph2 {
        margin-top: 4rem;
        margin-bottom: 2rem;
    }

    .list {
        display: flex;
        flex-direction: column;
        font-size: 5.4rem;

        /deep/ span {
            font-weight: 700;
            color: #ff40c3;

            transform: translateX(calc(-100% - 8rem));
            backface-visibility: hidden;

            &.startAnimation {
                animation: 1s slideIn cubic-bezier(0.19, 1, 0.22, 1) forwards;
                &:nth-child(1) {
                    animation-delay: 0s;
                }

                &:nth-child(2) {
                    animation-delay: 0.5s;
                }

                &:nth-child(3) {
                    animation-delay: 1s;
                }
            }
        }
    }

    button {
        align-self: center;
        color: #e4ff26;
        background-color: #ff40c3;

        &:hover {
            box-shadow: 0px 0px 1rem #ff40c3;
        }
    }

    .navigation {
        .circle {
            background-color: #ff40c3;
        }
    }
}
</style>
