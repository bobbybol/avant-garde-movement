module.exports = (ctx) => ({
    plugins: {
        autoprefixer: { cascade: false },
        "css-mqpacker": ctx.env.trim() === 'production' ? { sort: true } : false
    }
});
