module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-nesting')(),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};
