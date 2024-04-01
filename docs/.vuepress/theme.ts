// @ts-ignore
import {getDirname, path} from "vuepress/utils";
import {hopeTheme} from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar/index.js";

// @ts-ignore
const __dirname = getDirname(import.meta.url);

export default hopeTheme({
    locales: {
        "/": {
            // 设置正在使用的语言
            lang: "zh-CN",
        },
        "/en/": {
            // 设置正在使用的语言
            lang: "en-US",
        },
    },
    hostname: "https://snailcoding.cn",
    logo: "/logo.png",
    favicon: "/favicon.ico",

    iconAssets: "//at.alicdn.com/t/c/font_2922463_o9q9dxmps9.css",

    author: {
        name: "Mr.Xu",
        url: "https://snailcoding.cn",
    },
    pure: true,
    breadcrumb: false,
    navbar,
    sidebar,
    footer:
        '<a href="https://beian.miit.gov.cn/" target="_blank">鄂ICP备2024034864号</a>',
    displayFooter: true,

    pageInfo: ["Author", "Category", "Tag", "Original", "Word", "ReadingTime"],

    plugins: {
        blog: true,

        copyright: {
            author: "Mr.Xu",
            license: "MIT",
            triggerLength: 100,
            maxLength: 700,
            canonical: "https://snailcoding.cn",
            global: true,
        },

        feed: {
            atom: true,
            json: true,
            rss: true,
        },

        mdEnhance: {
            align: true,
            codetabs: true,
            figure: true,
            gfm: true,
            // hint: true,
            include: {
                resolvePath: (file, cwd) => {
                    if (file.startsWith("@"))
                        return path.resolve(
                            __dirname,
                            "../snippets",
                            file.replace("@", "./"),
                        );

                    return path.resolve(cwd, file);
                },
            },
            tasklist: true,
        },

        search: {
            isSearchable: (page) => page.path !== "/",
            maxSuggestions: 10,
        },
    },
});
