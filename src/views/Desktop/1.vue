<i18n>
{
  "en": {
    "cover1": {
        "title": "Stop <span>fake diets!</span>",
        "subtitle": "Dietitian thinks, <span>you eat.</span>",
        "description": "Real diets are always <span class='yellow'>custom-made</span>",
        "more": "Learn more"
    },
    "cover2": {
        "title": "<span>Diet</span> & Skin",
        "subtitle": "You are what you <span>eat</span>",
        "description": "We have 1 million recipes for your <span>skin health</span>",
        "more": "Learn more"
    },
    "cover3": {
        "title": "You can eat everything <span>on diet</span>",
        "subtitle": "Just split <span>calories.</span>",
        "description": "We have 1 million recipes <span class='yellow'>low calories.</span>",
        "more": "Learn how"
    }
  }, 
  "it": {
    "cover1": {
        "title": "Basta diete <span>false!</span>",
        "subtitle": "Il dietista pensa, <span>tu mangi.</span>",
        "description": "Le veri consigli sono sempre <span class='yellow'>su misura.</span>",
        "more": "Scopri di più"
    },
    "cover2": {
        "title": "Cibo & bellezza",
        "subtitle": "You are what you <span>eat</span>",
        "description": "We have 1 million recipes for your <span>skin health</span>",
        "more": "Scopri di più"
    },
    "cover3": {
        "title": "Puoi mangiaredi tutto <span>a dieta</span>",
        "subtitle": "Basta organizzare le <span>calorie.</span>",
        "description": "Abbiamo 1 milione di ricette a <span class='yellow'>basso contenuto calorico. </span>",
        "more": "Scopri come"
    }
  }
}
</i18n>

<template>
    <div
        @wheel="detectScroll"
        :class="['cover' + cover, 'page', 'page1', 'home']"
    >
        <!-- <div v-if="showView == false" class="loading"></div> -->

        <!-- <p>{{ $t('hello') }}</p> -->

        <div class="header">
            <img src="@/assets/logo.svg" />
        </div>

        <div v-if="cover == 'rdn'" class="body">
            <div class="title" v-html="$t('cover1.title')"></div>
            <div class="subtitle" v-html="$t('cover1.subtitle')"></div>
            <div class="description" v-html="$t('cover1.description')"></div>
            <button @click="$emit('changePage', 2)">
                {{ $t('cover1.more') }}
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
            <div class="title" v-html="$t('cover2.title')"></div>
            <div class="subtitle" v-html="$t('cover2.subtitle')"></div>
            <div class="description" v-html="$t('cover2.description')"></div>
            <button @click="$emit('changePage', 2)">
                {{ $t('cover2.more') }}
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
            <div class="title" v-html="$t('cover3.title')"></div>
            <div class="subtitle" v-html="$t('cover3.subtitle')"></div>
            <div class="description" v-html="$t('cover3.description')"></div>
            <button @click="$emit('changePage', 2)">
                {{ $t('cover3.more') }}
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
    name: 'Home',
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
        if ('lan' in this.$route.query) {
            this.$store.commit('updateLan', this.$route.query.lan);
        }

        this.$i18n.locale = this.$store.state.lan;

        this.$store.commit('updateCurrentPage', 1);

        if (this.cover == '') {
            this.cover = this.$store.state.cover;
        } else {
            this.$store.commit('updateCover', this.cover);
        }
    },
    mounted() {
        //in case the slide is loaded with a direct link
        if (this.animate == true) {
            this.startAnimation = true;
            this.$emit('stopAnimation');
        }
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
    },
    methods: {
        detectScroll: function() {
            if (event.deltaY > 0) {
                this.$emit('changePage', 2);
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

    width: 100%;
    height: 100%;

    padding: 2rem 5rem;

    font-family: 'Roboto', sans-serif;

    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: border-box;

    &.coverrdn {
        background-image: url('../../assets/cover2.jpg');
        background-position: 100% 20%;
    }

    &.coverskin {
        background-image: url('../../assets/cover1.jpg');
        background-position: center right;
    }

    &.covercalories {
        background-image: url('../../assets/cover3.jpg');
        background-position: 50% 30%;

        .body {
            .title {
                font-size: 6rem;
            }

            .description {
                span {
                    color: #e4ff26;
                }
            }
        }
    }

    .loading {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: white;
    }

    .header {
        width: 100%;
        display: flex;

        img {
            height: 8.5rem;
        }
    }

    .body {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        // justify-content: center;
        justify-content: flex-end;
        padding-bottom: 13vh;

        flex: 1;

        .title {
            font-size: 8.4rem;
            color: white;
            font-weight: 700;
            text-shadow: 0px 0px 3rem black;

            /deep/ span {
                color: #e4ff26;
            }
        }

        .subtitle {
            margin-top: 1rem;
            font-size: 4.2rem;
            color: white;
            font-weight: 700;
            text-shadow: 0px 0px 2rem black;

            /deep/ span {
                color: #e4ff26;
            }
        }

        .description {
            margin-top: 4rem;
            font-size: 2.5rem;
            font-weight: 200;
            color: white;
            text-shadow: 0px 0px 1rem black;

            /deep/ span {
                color: #000000;
                text-shadow: none;
                font-weight: 400;
                &.yellow {
                    color: #e4ff26;
                }
            }
        }

        button {
            color: #000000;
            background-color: #e4ff26;

            &:hover {
                box-shadow: 0px 0px 1rem #e4ff26;
            }
        }
    }
}
</style>
