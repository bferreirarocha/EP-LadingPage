module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/scss/_needed.scss"; @import "@/scss/_colors.scss";@import "@/scss/_functions.scss";`
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule('i18n')
            .resourceQuery(/blockType=i18n/)
            .type('javascript/auto')
            .use('i18n')
            .loader('@kazupon/vue-i18n-loader')
            .end();
    }
};
