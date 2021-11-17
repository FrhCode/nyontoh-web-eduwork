"use strict";

const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
var browsersync = require("browser-sync").create();

const postCss = require("gulp-postcss");
const autoPrefixer = require("autoprefixer");
const cssNano = require("cssnano");

const path = {
    scssSrc: "./sass/main.scss",
    scssDest: "./css/",

    htmlWatchLocation: "./*.html",
    scssWatchLocation: "./sass/*.scss",
    jsWatchLocation: "./js/*.js",
};

function buildStyle() {
    const plugins = [autoPrefixer(), cssNano()];

    const { scssSrc, scssDest } = path;

    return src(scssSrc).pipe(sass()).pipe(postCss(plugins)).pipe(dest(scssDest)).pipe(browsersync.stream());
}

function browserSyncConfig() {
    browsersync.init({
        port: 8080,
        server: {
            baseDir: "./",
        },
    });
}

function watchChange() {
    const { htmlWatchLocation, scssWatchLocation, jsWatchLocation } = path;

    watch(htmlWatchLocation).on("change", browsersync.reload);
    watch(scssWatchLocation, buildStyle);
    watch(jsWatchLocation).on("change", browsersync.reload);
}

exports.default = series(buildStyle, parallel(watchChange, browserSyncConfig));
