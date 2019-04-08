module.exports = (ctx) => ({
    plugins: {
        autoprefixer: { cascade: false },
        "lost": {},
        "css-mqpacker": ctx.env.trim() === 'production' ? { sort: true } : false
    }
});
