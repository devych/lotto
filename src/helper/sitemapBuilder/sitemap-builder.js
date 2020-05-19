require("babel-register")({
    presets: ["es2015", "react"],
});

const router = require("./router").default;
const Sitemap = require("react-router-sitemap").default;

const generateSitemap = () => {
    return new Sitemap(router)
        .build("http://ttolotto.me")
        .save("./public/sitemap.xml");
};
generateSitemap();
