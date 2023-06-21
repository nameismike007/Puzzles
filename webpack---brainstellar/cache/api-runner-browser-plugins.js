module.exports = [{
    plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
    options: {
        "plugins": [],
        "maxWidth": 200,
        "backgroundColor": "transparent",
        "withWebp": false,
        "loading": "eager",
        "quality": 100,
        "linkImagesToOriginal": false,
        "showCaptions": false,
        "markdownCaptions": false,
        "withAvif": false,
        "decoding": "async",
        "disableBgImageOnAlpha": false,
        "disableBgImage": false
    },
}, {
    plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
    options: {
        "plugins": [],
        "name": "BRAINSTELLAR",
        "short_name": "BRAINSTELLAR",
        "start_url": "/",
        "background_color": "#a8323c",
        "theme_color": "#993333",
        "display": "standalone",
        "icon": "static/logo.png",
        "include_favicon": false,
        "legacy": true,
        "theme_color_in_head": true,
        "cache_busting_mode": "query",
        "crossOrigin": "anonymous",
        "cacheDigest": "cf42278703512cce27eb1d7233bb8cd0"
    },
}, {
    plugin: require('../gatsby-browser.js'),
    options: {
        "plugins": []
    },
}, {
    plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
    options: {
        "plugins": []
    },
}]