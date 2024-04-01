import {sidebar} from "vuepress-theme-hope";

import {javaEssentials} from "./java-essentials";
import {csBasic} from "./cs-basic";
import {javaProject} from "./java-project";

export default sidebar({
    // Java必知必会
    "/java-essentials/": javaEssentials,
    // 实战项目
    "/java-project/": javaProject,
    // 计算机基础
    "/cs-basics/": csBasic,
    // Java面试指南
    "/": [
        {
            text: "Java面试",
            collapsible: true,
            prefix: "java-preparation/",
            children: [
                {
                    text: "简历编写",
                    prefix: "resume-compilation/",
                    children: [
                        "resume",
                        "Boss在线简历",
                        "resume-guide",
                    ],
                },
                {
                    text: "面试框架",
                    prefix: "interview-framework/",
                    children: [
                        "面试框架",
                    ],
                },
                {
                    text: "面经总结",
                    prefix: "interview-summary/",
                    children: [
                        "阿里社招面经.md",
                    ],
                },


            ],
        },
        {
            text: "Java核心",
            collapsible: true,
            prefix: "java-core/",
            children: [
                {
                    text: "基础",
                    prefix: "basis/",
                    children: [
                        "java-basic-questions-01",
                        "java-basic-questions-02",
                        "java-basic-questions-03",
                    ],
                },
                {
                    text: "集合",
                    prefix: "collection/",
                    children: [
                        "java-collection-questions-01",
                        "java-collection-questions-02",
                    ],
                },
                {
                    text: "并发编程",
                    prefix: "concurrent/",
                    children: [
                        "java-concurrent-questions-01",
                        "java-concurrent-questions-02",
                        "java-concurrent-questions-03",
                    ],
                },
                {
                    text: "IO",
                    prefix: "io/",
                    children: [
                        "io-basis",
                        "io-design-patterns",
                        "io-model",
                        "nio-basis"
                    ],
                },
                {
                    text: "JVM",
                    prefix: "jvm/",
                    children: [
                        "memory-area",
                        "jvm-garbage-collection",
                        "class-file-structure",
                        "class-loading-process",
                        "classloader",
                        "jvm-parameters-intro",
                        "jdk-monitoring-and-troubleshooting-tools",
                        "jvm-in-action",
                    ],
                },
                {
                    text: "新特性",
                    prefix: "new-features/",
                    children: [
                        "java8-common-new-features",
                        "java8-tutorial-translate",
                        "java21",
                    ],
                },
            ],
        },
        {
            text: "数据库",
            prefix: "database/",
            collapsible: true,
            children: [
                {
                    text: "数据库基础",
                    prefix: "sql-basic/",
                    children: [
                        "basis",
                        "nosql",
                        "character-set",
                    ],
                },
                {
                    text: "SQL面试题",
                    prefix: "sql/",
                    children: [
                        "sql-syntax-summary",
                        "sql-questions-01",
                        "sql-questions-02",
                        "sql-questions-03",
                        "sql-questions-04",
                        "sql-questions-05",
                    ],
                },
                {
                    text: "MySQL",
                    prefix: "mysql/",
                    children: [
                        "mysql-questions-01",
                        "mysql-high-performance-optimization-specification-recommendations",
                    ],
                },
                {
                    text: "Redis",
                    prefix: "redis/",
                    children: [
                        "redis-questions-01",
                        "redis-questions-02",
                    ],
                },
                {
                    text: "Elasticsearch",
                    prefix: "elasticsearch/",
                    children: ["elasticsearch-questions-01"],
                },
                {
                    text: "MongoDB",
                    prefix: "mongodb/",
                    children: ["mongodb-questions-01", "mongodb-questions-02"],
                },
            ],
        },
        {
            text: "Spring全家桶",
            prefix: "spring-family/",
            collapsible: true,
            children: [
                {
                    text: "Spring",
                    prefix: "Spring/",
                    children: [
                        "Spring常见面试题1",
                    ],
                },
                {
                    text: "Spring MVC",
                    prefix: "Spring-MVC/",
                    children: [
                        "Spring-MVC",
                    ],
                },
                {
                    text: "Spring Boot",
                    prefix: "Spring-Boot/",
                    children: [
                        "Spring-Boot",
                        "spring-boot-auto-assembly-principles",
                        "springboot-knowledge-and-questions-summary",
                        "springboot-source-code",
                    ],
                },
                {
                    text: "Spring Cloud",
                    prefix: "Spring-Cloud/",
                    children: [
                        "Spring-Cloud",
                    ],
                },
                {
                    text: "MyBatis",
                    prefix: "MyBatis/",
                    children: [
                        "MyBaits常见面试题",
                    ],
                },
            ],
        },
    ],
});
