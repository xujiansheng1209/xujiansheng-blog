import comp from "/Users/ruby/idea_demo/xujiansheng-blog/docs/.vuepress/.temp/pages/java-core/jvm/jvm-parameters-intro.html.vue"
const data = JSON.parse("{\"path\":\"/java-core/jvm/jvm-parameters-intro.html\",\"title\":\"最重要的JVM参数总结\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"最重要的JVM参数总结\",\"category\":\"Java\",\"tag\":[\"JVM\"],\"description\":\"本文由 JavaGuide 翻译自 https://www.baeldung.com/jvm-parameters，并对文章进行了大量的完善补充。 JDK 版本：1.8 1.概述 在本篇文章中，你将掌握最常用的 JVM 参数配置。 2.堆内存相关 Java 虚拟机所管理的内存中最大的一块，Java 堆是所有线程共享的一块内存区域，在虚拟机启动时创建。此...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://snailcoding.cn/java-core/jvm/jvm-parameters-intro.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"蜗牛のJava宝典\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"最重要的JVM参数总结\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"本文由 JavaGuide 翻译自 https://www.baeldung.com/jvm-parameters，并对文章进行了大量的完善补充。 JDK 版本：1.8 1.概述 在本篇文章中，你将掌握最常用的 JVM 参数配置。 2.堆内存相关 Java 虚拟机所管理的内存中最大的一块，Java 堆是所有线程共享的一块内存区域，在虚拟机启动时创建。此...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Xu\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"JVM\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"最重要的JVM参数总结\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Xu\\\",\\\"url\\\":\\\"https://snailcoding.cn\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1.概述\",\"slug\":\"_1-概述\",\"link\":\"#_1-概述\",\"children\":[]},{\"level\":2,\"title\":\"2.堆内存相关\",\"slug\":\"_2-堆内存相关\",\"link\":\"#_2-堆内存相关\",\"children\":[{\"level\":3,\"title\":\"2.1.显式指定堆内存–Xms和-Xmx\",\"slug\":\"_2-1-显式指定堆内存–xms和-xmx\",\"link\":\"#_2-1-显式指定堆内存–xms和-xmx\",\"children\":[]},{\"level\":3,\"title\":\"2.2.显式新生代内存(Young Generation)\",\"slug\":\"_2-2-显式新生代内存-young-generation\",\"link\":\"#_2-2-显式新生代内存-young-generation\",\"children\":[]},{\"level\":3,\"title\":\"2.3.显式指定永久代/元空间的大小\",\"slug\":\"_2-3-显式指定永久代-元空间的大小\",\"link\":\"#_2-3-显式指定永久代-元空间的大小\",\"children\":[]}]},{\"level\":2,\"title\":\"3.垃圾收集相关\",\"slug\":\"_3-垃圾收集相关\",\"link\":\"#_3-垃圾收集相关\",\"children\":[{\"level\":3,\"title\":\"3.1.垃圾回收器\",\"slug\":\"_3-1-垃圾回收器\",\"link\":\"#_3-1-垃圾回收器\",\"children\":[]},{\"level\":3,\"title\":\"3.2.GC 日志记录\",\"slug\":\"_3-2-gc-日志记录\",\"link\":\"#_3-2-gc-日志记录\",\"children\":[]}]},{\"level\":2,\"title\":\"4.处理 OOM\",\"slug\":\"_4-处理-oom\",\"link\":\"#_4-处理-oom\",\"children\":[]},{\"level\":2,\"title\":\"5.其他\",\"slug\":\"_5-其他\",\"link\":\"#_5-其他\",\"children\":[]},{\"level\":2,\"title\":\"文章推荐\",\"slug\":\"文章推荐\",\"link\":\"#文章推荐\",\"children\":[]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":8.59,\"words\":2576},\"filePathRelative\":\"java-core/jvm/jvm-parameters-intro.md\",\"excerpt\":\"<blockquote>\\n<p>本文由 JavaGuide 翻译自 <a href=\\\"https://www.baeldung.com/jvm-parameters\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://www.baeldung.com/jvm-parameters</a>，并对文章进行了大量的完善补充。</p>\\n<p>JDK 版本：1.8</p>\\n</blockquote>\\n<h2>1.概述</h2>\\n<p>在本篇文章中，你将掌握最常用的 JVM 参数配置。</p>\\n<h2>2.堆内存相关</h2>\\n<blockquote>\\n<p>Java 虚拟机所管理的内存中最大的一块，Java 堆是所有线程共享的一块内存区域，在虚拟机启动时创建。<strong>此内存区域的唯一目的就是存放对象实例，几乎所有的对象实例以及数组都在这里分配内存。</strong></p>\\n</blockquote>\",\"autoDesc\":true}")
export { comp, data }
