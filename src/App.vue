<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
    data() {
        return {
            // current: 0 //1 landscape, 2 portrait
        };
    },
    created() {
        // console.log(this.$router.currentRoute);
        // if ('lan' in this.$route.query) {
        //     this.$store.commit('updateLan', this.$route.query.lan);
        // }
        this.changeMode();
        // window.addEventListener('resize', () => {
        //     this.changeMode();
        // });
    },
    methods: {
        changeMode: function() {
            if (window.innerHeight < window.innerWidth) {
                //landscape
                if (this.current != 1) {
                    this.current = 1;
                    this.$router.push({
                        name: 'Home',
                        params: {
                            cover: this.$store.state.cover
                        },
                        query: {
                            lan: this.$store.state.lan
                        }
                    });
                }
            } else {
                //portrait
                if (this.current != 2) {
                    this.current = 2;
                    this.$router.push({
                        name: 'HomeMobile',
                        params: {
                            cover: this.$store.state.cover
                        },
                        query: {
                            lan: this.$store.state.lan
                        }
                    });
                }
            }
        }
    }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800&display=swap&subset=latin');
@import url('https://fonts.googleapis.com/css?family=Roboto:300:400,500,700&display=swap&subset=latin'); //for Home.vue, buttons and logo.svg
// @import url('https://fonts.googleapis.com/css?family=Public+Sans:500&display=swap'); //for the logo (not anymore)

html,
body {
    width: 100%;
    height: 100%;
    overflow: hidden;

    @include largeDesktops {
        font-size: 12.5px;
    }

    @include mediumDesktops {
        font-size: 9px;
    }

    @include hugeTablets {
        font-size: 8px;
    }

    @include hugeTabletsShort {
        font-size: 5.5px;
    }

    @include largeTablets {
        font-size: 4.5px;
    }

    @include portraitMode {
        @include hugeTablets {
            font-size: 21px;
        }

        @include hugeTabletsShortP {
            font-size: 19px;
        }

        @include largeTablets {
            font-size: 19px;
        }

        @include largeTabletsShort {
            font-size: 15.5px;
        }

        @include mediumTablets {
            font-size: 12.5px;
        }

        @include mediumTabletsShort {
            font-size: 10.5px;
        }

        @include smallTablets {
            font-size: 8px;
        }
    }
}

body {
    margin: 0;
}

#app {
    width: 100%;
    height: 100%;

    overflow: hidden;

    text-size-adjust: 100%; //for iOS
}
</style>
