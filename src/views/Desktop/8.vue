<i18n>
{
  "en": {
  }, 
  "it": {
  }
}
</i18n>

<template>
    <div :class="['about', 'page', 'page8', 'cover' + $store.state.cover]">
        <div class="overlay">
            <div class="header">
                <img
                    v-if="$store.state.cover == 'skin'"
                    src="@/assets/logoBlack.svg"
                />
                <img v-else src="@/assets/logo.svg" />
                <div @click="$emit('changePage', 7)" class="close">
                    &#10005;
                </div>
            </div>
            <div class="body">
                <!-- <div class="group">
                    <div class="line">
                        <span>Eat-Project</span> is the first social-network
                        with the ambition to link
                    </div>
                    <div class="line">
                        two worlds: <span>food & diet professionals.</span>
                    </div>
                    <div class="line">
                        The idea starts in 2007 in Italy’s fashion industry
                        environment,
                    </div>
                    <div class="line">
                        with the initiative to build nutrition projects with a
                        specific goal:
                    </div>
                    <div class="line">
                        take care of
                        <span>fashion models' life-style & health.</span>
                    </div>
                </div>
                <div class="group">
                    <div class="line">
                        Between kitchen and diet centers, the team was composed
                        by
                    </div>
                    <div class="line">
                        two members, both programmers and cooks, who started
                    </div>
                    <div class="line">
                        mapping thousands of healthy recipes with their specific
                        nutrients.
                    </div>
                </div>
                <div class="group">
                    <div class="line">
                        In 2013 the team started offering their database to
                        <span>dietitians & nutritionists</span>
                    </div>

                    <div class="line">
                        <span>freelancers</span>, reaching a network of over
                        5000 professionals in
                    </div>
                </div> -->

                <div class="content">
                    <div class="group">
                        Eat-Project is the first network channel with the
                        ambition to connect two worlds:
                        <span>Gastronomy & Digital Health</span>
                    </div>
                    <div class="group">
                        2007 was a year of a particular stir around many fashion
                        companies on an international level. Many of these were
                        strongly criticized by public opinion regarding the
                        <span>"physical condition" of the young models</span>
                        they collaborate with. In the same year some of them
                        decided to start <span>nutritional projects</span> with
                        the specific goal of educating those teenage on the
                        right way to preserve physical shape without neglecting
                        health, through the proper nutritional plan
                        supported by health. However, in order to be able to
                        achive the right strategy based
                       on  <span>quality and wide variety,</span>
                        they needed a fundamental ingredient: <span>data.</span>
                    </div>
                    <div class="group">
                        It’s 2007, and the digital gastronomy web channels were
                        at the beginning. The team was made up of two
                        programmers, who started mapping thousands of recipes
                        with their respective nutrients. After the end of the
                        project in 2012, the team decided to offer their
                        data-know-how to freelance dieticians and nutritionists,
                        reaching out
                        <span
                            >a network of over 5,000 experts from Italy, Brazil,
                            and USA, and</span>   <span>“connecting people to diet professionals”</span>                       
                            via WhatsApp and e-mail. <br>After 12 years of collaboration, in 2020 the two
                        Co-Founders decide to work on the
                        <span>first MVP version of Eat-Project.</span>
                    </div>


                    <div class="group">
                        Nowadays, the topic of information certification has
                        become increasingly controversial and a source of huge
                        discussion. A lack of information’s reliability has been
                        generated by the abuse of digital tools that allow the
                        creation and dissemination of information without any
                        scientific basis. And as often happens, such speculation
                        also involves health industry.
                    </div>

                    <div class="group">
                        The only way to be able to guarantee users a high level
                        of information's reliability on the network, is to
                       
                              <span>promote new channels</span > designed to limiting the
                            dissemination of<br>  <span>"fake information".</span >
                    </div>

                    <div class="group">
                        The project was born to meet the needs of who must 
                        find
                        a compromise between <span>gastronomic preferences</span>
                            and <span>nutritional needs</span>, either <span>“Home &
                            On-The-Go”.</span>
                    </div>

                    <div class="group">
                        But Eat-Project doesn't want to be just nutritional
                        information.<br> The project is a network for
                        millions of users looking for gastronomic inspiration
                        through the collaboration of many other professionals in
                        the Food industry (<span
                            >Chef, Food Bloggers, Food photographers, Food
                            Reporters, sommeliers, Bar Tenders, Food Companies,
                             etc...</span
                        >). <br>Together they will be able to work in the creation,
                        enhancement, and sharing of multimedia content with a
                        high creative and information value.
                    </div>

                    <div class="group">
                        The company chooses <span>Milan</span> for strategic reasons related
                        to the gastronomic and food environment. <br>Also called
                        <span>"food valley"</span>, after EXPO 2015 Milan
                        becomes the first global reference center for the food
                        industry, with over 400 events per year, sposored by 3,080 Italian and foreign 
                       brands, over 82,000 visitors
                        and 2, 2 billion in revenues.
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="group">
                <span>About us</span>
                <!-- <span @click="$emit('changePage', 9)">Contact us</span> -->
                <span @click="sendEmail">Contact us</span>
                <span>Privacy</span>
                <span>Cookies</span>
            </div>
            <div class="group">
                <span>Copyright © 2020, Eat-project</span>
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
        this.$store.commit('updateCurrentPage', 8);
    },
    methods: {
        sendEmail: function() {
            window.location = 'mailto:info@eat-project.com';
        }
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

        overflow: hidden;
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
            height: 8.5rem;
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
        margin: 11.5rem 0rem 5.92rem 0;
        height: calc(100% - 11.5rem - 5.92rem);

        overflow: hidden;

        .content {
            width: 100%;
            height: 100%;
            padding-right: 2rem;
            word-break: keep-all;

            overflow-y: scroll;

            .group {
                font-size: 2.8rem;

                &:not(:last-child) {
                    margin-bottom: 3rem;
                }

                span {
                    font-weight: 700;
                }

                // .line {
                //     span {
                //         font-weight: 700;

                //         &:first-child {
                //             font-weight: 600;
                //         }
                //     }
                // }
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
