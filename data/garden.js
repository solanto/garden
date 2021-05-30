module.exports = {
    environment: process.env.ELEVENTY_ENV,
    production: process.env.ELEVENTY_ENV == "production",
    githubToken: process.env.GARDEN_GITHUB_TOKEN
}
