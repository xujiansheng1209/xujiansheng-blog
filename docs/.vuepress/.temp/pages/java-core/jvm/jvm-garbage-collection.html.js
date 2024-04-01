import comp from "/Users/ruby/idea_demo/xujiansheng-blog/docs/.vuepress/.temp/pages/java-core/jvm/jvm-garbage-collection.html.vue"
const data = JSON.parse("{\"path\":\"/java-core/jvm/jvm-garbage-collection.html\",\"title\":\"JVM垃圾回收详解（重点）\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"JVM垃圾回收详解（重点）\",\"category\":\"Java\",\"tag\":[\"JVM\"],\"description\":\"如果没有特殊说明，都是针对的是 HotSpot 虚拟机。 本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。 常见面试题： 如何判断对象是否死亡（两种方法）。 简单的介绍一下强引用、软引用、弱引用、虚引用（虚引用与软引用和弱引用的区别、使用软引用能带来的好处）。 如何判断一个常量是废弃常量 如何判断一个类是无用的类 垃圾收...\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://snailcoding.cn/java-core/jvm/jvm-garbage-collection.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"蜗牛のJava宝典\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"JVM垃圾回收详解（重点）\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"如果没有特殊说明，都是针对的是 HotSpot 虚拟机。 本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。 常见面试题： 如何判断对象是否死亡（两种方法）。 简单的介绍一下强引用、软引用、弱引用、虚引用（虚引用与软引用和弱引用的区别、使用软引用能带来的好处）。 如何判断一个常量是废弃常量 如何判断一个类是无用的类 垃圾收...\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:image\",\"content\":\"https://oss.javaguide.cn/github/javaguide/java/jvm/hotspot-heap-structure.png\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"name\":\"twitter:card\",\"content\":\"summary_large_image\"}],[\"meta\",{\"name\":\"twitter:image:alt\",\"content\":\"JVM垃圾回收详解（重点）\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Mr.Xu\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"JVM\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"JVM垃圾回收详解（重点）\\\",\\\"image\\\":[\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/hotspot-heap-structure.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/25178350.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/run-with-PrintGCDetails.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/28954286.jpg\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/28128785.jpg\\\",\\\"https://oss.javaguide.cn/java-guide-blog/image-20210523201742303.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/rf-hotspot-vm-gc.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/object-circular-reference.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/jvm-gc-roots.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/java-reference-type.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/mark-and-sweep-garbage-collection-algorithm.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/copying-garbage-collection-algorithm.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/mark-and-compact-garbage-collection-algorithm.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/serial-garbage-collector.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/parnew-garbage-collector.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/parallel-scavenge-garbage-collector.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/serial-garbage-collector.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/parallel-scavenge-garbage-collector.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/cms-garbage-collector.png\\\",\\\"https://oss.javaguide.cn/github/javaguide/java/jvm/g1-garbage-collector.png\\\"],\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Mr.Xu\\\",\\\"url\\\":\\\"https://snailcoding.cn\\\"}]}\"]]},\"headers\":[{\"level\":2,\"title\":\"前言\",\"slug\":\"前言\",\"link\":\"#前言\",\"children\":[]},{\"level\":2,\"title\":\"堆空间的基本结构\",\"slug\":\"堆空间的基本结构\",\"link\":\"#堆空间的基本结构\",\"children\":[]},{\"level\":2,\"title\":\"内存分配和回收原则\",\"slug\":\"内存分配和回收原则\",\"link\":\"#内存分配和回收原则\",\"children\":[{\"level\":3,\"title\":\"对象优先在 Eden 区分配\",\"slug\":\"对象优先在-eden-区分配\",\"link\":\"#对象优先在-eden-区分配\",\"children\":[]},{\"level\":3,\"title\":\"大对象直接进入老年代\",\"slug\":\"大对象直接进入老年代\",\"link\":\"#大对象直接进入老年代\",\"children\":[]},{\"level\":3,\"title\":\"长期存活的对象将进入老年代\",\"slug\":\"长期存活的对象将进入老年代\",\"link\":\"#长期存活的对象将进入老年代\",\"children\":[]},{\"level\":3,\"title\":\"主要进行 gc 的区域\",\"slug\":\"主要进行-gc-的区域\",\"link\":\"#主要进行-gc-的区域\",\"children\":[]},{\"level\":3,\"title\":\"空间分配担保\",\"slug\":\"空间分配担保\",\"link\":\"#空间分配担保\",\"children\":[]}]},{\"level\":2,\"title\":\"死亡对象判断方法\",\"slug\":\"死亡对象判断方法\",\"link\":\"#死亡对象判断方法\",\"children\":[{\"level\":3,\"title\":\"引用计数法\",\"slug\":\"引用计数法\",\"link\":\"#引用计数法\",\"children\":[]},{\"level\":3,\"title\":\"可达性分析算法\",\"slug\":\"可达性分析算法\",\"link\":\"#可达性分析算法\",\"children\":[]},{\"level\":3,\"title\":\"引用类型总结\",\"slug\":\"引用类型总结\",\"link\":\"#引用类型总结\",\"children\":[]},{\"level\":3,\"title\":\"如何判断一个常量是废弃常量？\",\"slug\":\"如何判断一个常量是废弃常量\",\"link\":\"#如何判断一个常量是废弃常量\",\"children\":[]},{\"level\":3,\"title\":\"如何判断一个类是无用的类？\",\"slug\":\"如何判断一个类是无用的类\",\"link\":\"#如何判断一个类是无用的类\",\"children\":[]}]},{\"level\":2,\"title\":\"垃圾收集算法\",\"slug\":\"垃圾收集算法\",\"link\":\"#垃圾收集算法\",\"children\":[{\"level\":3,\"title\":\"标记-清除算法\",\"slug\":\"标记-清除算法\",\"link\":\"#标记-清除算法\",\"children\":[]},{\"level\":3,\"title\":\"复制算法\",\"slug\":\"复制算法\",\"link\":\"#复制算法\",\"children\":[]},{\"level\":3,\"title\":\"标记-整理算法\",\"slug\":\"标记-整理算法\",\"link\":\"#标记-整理算法\",\"children\":[]},{\"level\":3,\"title\":\"分代收集算法\",\"slug\":\"分代收集算法\",\"link\":\"#分代收集算法\",\"children\":[]}]},{\"level\":2,\"title\":\"垃圾收集器\",\"slug\":\"垃圾收集器\",\"link\":\"#垃圾收集器\",\"children\":[{\"level\":3,\"title\":\"Serial 收集器\",\"slug\":\"serial-收集器\",\"link\":\"#serial-收集器\",\"children\":[]},{\"level\":3,\"title\":\"ParNew 收集器\",\"slug\":\"parnew-收集器\",\"link\":\"#parnew-收集器\",\"children\":[]},{\"level\":3,\"title\":\"Parallel Scavenge 收集器\",\"slug\":\"parallel-scavenge-收集器\",\"link\":\"#parallel-scavenge-收集器\",\"children\":[]},{\"level\":3,\"title\":\"Serial Old 收集器\",\"slug\":\"serial-old-收集器\",\"link\":\"#serial-old-收集器\",\"children\":[]},{\"level\":3,\"title\":\"Parallel Old 收集器\",\"slug\":\"parallel-old-收集器\",\"link\":\"#parallel-old-收集器\",\"children\":[]},{\"level\":3,\"title\":\"CMS 收集器\",\"slug\":\"cms-收集器\",\"link\":\"#cms-收集器\",\"children\":[]},{\"level\":3,\"title\":\"G1 收集器\",\"slug\":\"g1-收集器\",\"link\":\"#g1-收集器\",\"children\":[]},{\"level\":3,\"title\":\"ZGC 收集器\",\"slug\":\"zgc-收集器\",\"link\":\"#zgc-收集器\",\"children\":[]}]},{\"level\":2,\"title\":\"参考\",\"slug\":\"参考\",\"link\":\"#参考\",\"children\":[]}],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"readingTime\":{\"minutes\":28.18,\"words\":8453},\"filePathRelative\":\"java-core/jvm/jvm-garbage-collection.md\",\"excerpt\":\"<blockquote>\\n<p>如果没有特殊说明，都是针对的是 HotSpot 虚拟机。</p>\\n<p>本文基于《深入理解 Java 虚拟机：JVM 高级特性与最佳实践》进行总结补充。</p>\\n<p>常见面试题：</p>\\n<ul>\\n<li>如何判断对象是否死亡（两种方法）。</li>\\n<li>简单的介绍一下强引用、软引用、弱引用、虚引用（虚引用与软引用和弱引用的区别、使用软引用能带来的好处）。</li>\\n<li>如何判断一个常量是废弃常量</li>\\n<li>如何判断一个类是无用的类</li>\\n<li>垃圾收集有哪些算法，各自的特点？</li>\\n<li>HotSpot 为什么要分为新生代和老年代？</li>\\n<li>常见的垃圾回收器有哪些？</li>\\n<li>介绍一下 CMS,G1 收集器。</li>\\n<li>Minor Gc 和 Full GC 有什么不同呢？</li>\\n</ul>\\n</blockquote>\",\"autoDesc\":true}")
export { comp, data }
