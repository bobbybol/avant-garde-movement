module.exports = {
    chainWebpack: config => {
        config.module
            .rule('vue')
            .use('vue-loader')
            .loader('vue-loader')
            .tap(options => {
                options.compilerOptions.whitespace = 'condense';
                return options;
            })
        ;
    },
    publicPath: process.env.NODE_ENV === 'production' ? '/voorhoede/' : '/'
};