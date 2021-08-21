// TODO: please get rid of gulp

const { task, src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const run = require("gulp-run-command").default;
const del = require("del");

sass.compiler = require("sass");

const production = process.env.NODE_ENV == "production";

const styles = "styles/*.{sass,scss,css}";

task("build:css", () => {
    const source = src(styles);
    const render = sass.sync().on("error", sass.logError);
    const destination = dest("_site/styles");

    if (production) {
        return source
            .pipe(render)
            .pipe(destination)
    } else {
        return source
            .pipe(sourcemaps.init())
            .pipe(render)
            .pipe(sourcemaps.write())
            .pipe(destination)
    }
})

task("build:11ty", async () => run("npx @11ty/eleventy")());

task("build", series("build:css", "build:11ty"));

task("clean", () => del("_site/", { force: true }));

task("watch:11ty", async () => run("npx @11ty/eleventy --serve --incremental")());

task("watch:css", () => watch([styles], series("build:css")));

task("dev", async () => series("build:css", parallel("watch:css", "watch:11ty"))());
