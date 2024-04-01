import {arraySidebar} from "vuepress-theme-hope";

export const csBasic = arraySidebar([
    {
        text: "计算机基础",
        children: [
            {
                text: "计算机网络",
                prefix: "network/",
                children: [
                    "other-network-questions",
                    "other-network-questions2",
                ],
            },
            {
                text: "操作系统",
                prefix: "operating-system/",
                children: [
                    "operating-system-basic-questions-01",
                    "operating-system-basic-questions-02",
                    "linux-intro",
                    "shell-intro",
                ],
            },
            {
                text: "数据结构与算法",
                prefix: "data-structure/",
                collapsible:true,
                children: [
                    "linear-data-structure",
                    "graph",
                    "heap",
                    "tree",
                    "red-black-tree",
                    "bloom-filter",
                    "classical-algorithm-problems-recommendations",
                    "common-data-structures-leetcode-recommendations",
                    "string-algorithm-problems",
                    "linkedlist-algorithm-problems",
                    "the-sword-refers-to-offer",
                    "10-classical-sorting-algorithms",
                ],
            },
        ],
    },


]);
