<template><div><h1 id="java面试框架" tabindex="-1"><a class="header-anchor" href="#java面试框架"><span>Java面试框架</span></a></h1>
<h2 id="java面试流程" tabindex="-1"><a class="header-anchor" href="#java面试流程"><span>Java面试流程</span></a></h2>
<ul>
<li>
<ol>
<li>
<p>简历编写和投递：主要是专业技能的编写和项目经验的编写</p>
<p>专业技能：</p>
<p>项目经验：MES智慧工厂项目</p>
</li>
</ol>
</li>
<li>
<ol start="2">
<li>
<p>面试：自我介绍和项目介绍，项目相关问题和八股文</p>
<p>自我介绍：面试官，你好，我工作有1年了，最近做到一个项目上给力神公司做的MES系统，主要是模组的生产制造过程的信息化</p>
</li>
</ol>
</li>
</ul>
<h2 id="自我介绍" tabindex="-1"><a class="header-anchor" href="#自我介绍"><span>自我介绍</span></a></h2>
<p>1、介绍姓名、毕业时间、工作年限、工作经历、技术影响力(博客、GitHub、开源贡献、专利）</p>
<p>2、开发过的较大型项目，解决过的复杂技术问题，相关方法论的沉淀</p>
<p>3、带过团队、做过架构设计、承担过PO职责、推进过重点项目落地、协同过跨部门开发</p>
<p>核心：个人的基本信息，以及项目和技术上的沉淀，给面试官留出和你聊下去的话题 例如：面试官你好，我叫张三，23年毕业于XXX大学，软件工程专业，目前已经工作3年。我从毕业后就职于xxx科技公司，负责营销和订单系统发开发。在系统搭建、代码优化、问题处理上有较丰富的经验和处理能力。同时也喜欢写一些          技术博客和看一些技术书籍，另外在Spring、Dubbo等源码学习上有过一些研究以及复用到业务开发中</p>
<p><strong>面试类型：</strong></p>
<p>1、直接提问型：直接提问一些技术栈问题或者有些公司会考算法</p>
<p>2、场景引导型：通过让你介绍你的一些项目经历，用过什么技术栈，在场景下提问，需要你有一定的开发架构经验和项目落地能力     每一个场景就是一个复杂问题的解决能力，这里问到的场景会与你简历中的工作经历和项目相关，但复杂程度超过你当前的项目     比如：你写了一个订单类的，那么会问你秒杀类的实际解决方案，这样的问题很难背题应付，需要经历过</p>
<p>3、连环追问型：从一个小的技术点出发，每一个回答都在为下一个深入的问题做开始，在招聘高级别的开发会进行定向深入挖掘提问</p>
<p>4、压力逼问型：越不会什么，面试官越问你什么，让你感受高级面试官的气场，能扛住的并抓住重点，offer就稳了</p>
<h2 id="算法" tabindex="-1"><a class="header-anchor" href="#算法"><span>算法</span></a></h2>
<ul>
<li>动态规划</li>
<li>算法思维</li>
<li>数据结构</li>
<li>高频题目：排序、二分查找、回文链表、数据结构设计，刷leetcode</li>
</ul>
<h2 id="技术栈" tabindex="-1"><a class="header-anchor" href="#技术栈"><span>技术栈</span></a></h2>
<h3 id="java" tabindex="-1"><a class="header-anchor" href="#java"><span>Java</span></a></h3>
<h4 id="jdk源码" tabindex="-1"><a class="header-anchor" href="#jdk源码"><span>JDK源码</span></a></h4>
<ol>
<li>HashMap
<ol>
<li>HashMap的数据结构(1.7、1.8的区别)</li>
<li>HashMap的实现原理</li>
<li>HashMap扩容为什么是2^n-1</li>
<li>HashMap是线程安全的吗</li>
<li>HashMap、HashTable是什么关系？</li>
</ol>
</li>
<li>ThreadLocal
<ol>
<li>讲讲你对ThreadLocal的一些理解</li>
<li>ThreadLocal有哪些应用场景</li>
<li>了解过FastThreadLocal吗</li>
</ol>
</li>
<li>ArrayList、LinkList
<ol>
<li>是否保证线程安全</li>
<li>底层数据结构</li>
<li>插入和删除是否受元素位置的影响</li>
<li>是否支持快速随机访问</li>
<li>内存空间占用</li>
<li>如何进行扩容的，默认初始化空间是多少</li>
</ol>
</li>
<li>String StringBuffer StringBuilder
<ol>
<li>有什么区别</li>
<li>是线程安全的吗</li>
</ol>
</li>
<li>jdk1.8的新特性
<ol>
<li>lambda表达式</li>
<li>Functional Interfaces</li>
<li>Optionals</li>
<li>Stream 流</li>
<li>Parallel-Streams 并行流</li>
</ol>
</li>
</ol>
<h4 id="并发编程" tabindex="-1"><a class="header-anchor" href="#并发编程"><span>并发编程</span></a></h4>
<ol>
<li>volatile
<ol>
<li>volatile 的作用和使用场景</li>
<li>volatile 如何保证指令重排</li>
<li>什么情况下会发生指令重排</li>
</ol>
</li>
<li>synchronized
<ol>
<li>一般用在什么场景</li>
<li>实现原理</li>
<li>锁升级过程(偏向锁、轻量级锁、重量级锁)</li>
<li>这是JVM层面锁，还是JDK层面锁｛JVM层面｝</li>
<li>这是一种悲观锁还是乐观锁｛悲观锁是独占锁｝</li>
</ol>
</li>
<li>lock
<ol>
<li>这是JVM层面锁，还是JDK层面锁｛JDK层面｝</li>
<li>这是一种悲观锁还是乐观锁</li>
<li>是可重入锁吗</li>
</ol>
</li>
<li>ReentrantLock
<ol>
<li>与synchronized相比较有什么不同</li>
<li>ReentrantLock 与 Lock 的关系</li>
<li>锁过程中是否可中断，与之对应的synchronized可中断吗</li>
</ol>
</li>
<li>CAS
<ol>
<li>Unsafe 类的作用</li>
<li>CAS 的理解(compareAndSet)</li>
<li>什么是ABA问题</li>
<li>CAS的实现有什么(AtomicInteger)</li>
</ol>
</li>
<li>AQS
<ol>
<li>实现类有哪些 ReentrantLock、Semaphore、CountDownLatch、CyclicBarrier</li>
<li>实现了AQS的锁有哪些 自旋锁、互斥锁、读锁写锁、条件产量、信号量、栅栏都是AQS的衍生物 内存屏障，几乎所有的处理器至少支持一种粗粒度的屏障指令，通常被称为“栅栏（Fence）”</li>
</ol>
</li>
</ol>
<h4 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程"><span>多线程</span></a></h4>
<ol>
<li>线程池的种类
<ol>
<li>newCachedThreadPool</li>
<li>newFixedThreadPool</li>
<li>newScheduledThreadPool</li>
<li>newSingleThreadExecutor</li>
</ol>
</li>
<li>线程的生命周期
<ol>
<li>新建、就绪、运行、阻塞(等待阻塞、同步阻塞、其他阻塞)、死亡</li>
</ol>
</li>
</ol>
<h4 id="jvm" tabindex="-1"><a class="header-anchor" href="#jvm"><span>JVM</span></a></h4>
<ol>
<li>GC 优化</li>
<li>JVM 逃逸分析</li>
<li>类的对象头都包括什么</li>
<li>new Object() 初始化都做了什么</li>
<li>运行时数据区</li>
<li>Java的内存模型以及GC算法</li>
</ol>
<h4 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式"><span>设计模式</span></a></h4>
<ol>
<li>设计模式6大原则 单一职责(一个类和方法只做一件事)、里氏替换(多态，子类可扩展父类)、依赖倒置(细节依赖抽象，下层依赖上层)、接口隔离(建立单一接口)、迪米特原则(最少知道，降低耦合)、开闭原则(抽象架构，扩展实现)</li>
<li>创建型模式 这类模式提供创建对象的机制， 能够提升已有代码的灵活性和可复用性。</li>
<li>结构型模式 这类模式介绍如何将对象和类组装成较大的结构， 并同时保持结构的灵活和高效。</li>
<li>行为模式 这类模式负责对象间的高效沟通和职责委派。</li>
</ol>
<h4 id="反射、代理" tabindex="-1"><a class="header-anchor" href="#反射、代理"><span>反射、代理</span></a></h4>
<ol>
<li>怎么实现反射调用方法</li>
<li>怎么代理一个类，有什么场景使用</li>
<li>类代理的原理是什么</li>
<li>有什么框架可以做类代理</li>
</ol>
<h3 id="redis" tabindex="-1"><a class="header-anchor" href="#redis"><span>Redis</span></a></h3>
<h4 id="命令" tabindex="-1"><a class="header-anchor" href="#命令"><span>命令</span></a></h4>
<ol>
<li>计数命令</li>
<li>排序命令</li>
<li>加锁命令</li>
</ol>
<h4 id="架构" tabindex="-1"><a class="header-anchor" href="#架构"><span>架构</span></a></h4>
<ol>
<li>常用的数据类型</li>
<li>数据淘汰策略</li>
<li>单线程的为什么那么快</li>
<li>RDB和AOF的优缺点</li>
<li>持久化策略选择</li>
</ol>
<h4 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h4>
<ol>
<li>缓存雪崩、缓存穿透、缓存预热、缓存更新、缓存降级</li>
<li>Pipeline有什么好处，为什么要用pipeline</li>
<li>是否使用过Redis集群，集群的原理是什么</li>
<li>Redis的同步机制了解么</li>
</ol>
<h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql"><span>MySQL</span></a></h3>
<h4 id="锁" tabindex="-1"><a class="header-anchor" href="#锁"><span>锁</span></a></h4>
<ol>
<li>全局锁</li>
<li>表锁</li>
<li>行锁</li>
<li>乐观锁、悲观锁</li>
<li>排他锁</li>
<li>锁优化</li>
</ol>
<h4 id="事务" tabindex="-1"><a class="header-anchor" href="#事务"><span>事务</span></a></h4>
<ol>
<li>事物特征</li>
<li>脏读</li>
<li>幻读</li>
<li>不可重复读</li>
<li>事物隔离</li>
<li>并发事物</li>
<li>事物实现原理</li>
</ol>
<h4 id="日志" tabindex="-1"><a class="header-anchor" href="#日志"><span>日志</span></a></h4>
<ol>
<li>慢查询日志</li>
<li>错误日志</li>
<li>redo log(重做日志)</li>
<li>binlog(归档日志)</li>
<li>undo log(回滚日志)</li>
</ol>
<h4 id="索引" tabindex="-1"><a class="header-anchor" href="#索引"><span>索引</span></a></h4>
<ol>
<li>聚集索引 VS 非聚集索引</li>
<li>最左匹配原则</li>
<li>前缀索引</li>
</ol>
<h4 id="引擎" tabindex="-1"><a class="header-anchor" href="#引擎"><span>引擎</span></a></h4>
<ol>
<li>InnoDB</li>
<li>MyISAM</li>
</ol>
<h3 id="框架" tabindex="-1"><a class="header-anchor" href="#框架"><span>框架</span></a></h3>
<h4 id="spring" tabindex="-1"><a class="header-anchor" href="#spring"><span>Spring</span></a></h4>
<ul>
<li><a href="https://bugstack.cn/md/spring/develop-spring/2021-05-16-%E7%AC%AC1%E7%AB%A0%EF%BC%9A%E5%BC%80%E7%AF%87%E4%BB%8B%E7%BB%8D%EF%BC%8C%E6%89%8B%E5%86%99Spring%E8%83%BD%E7%BB%99%E4%BD%A0%E5%B8%A6%E6%9D%A5%E4%BB%80%E4%B9%88%EF%BC%9F.html" target="_blank" rel="noopener noreferrer">手写Spring：渐进式源码实践(opens new window)<ExternalLinkIcon/></a></li>
</ul>
<ol>
<li>Bean的注册过程</li>
<li>Bean的定义都包括什么信息</li>
<li>Spring 事务中的隔离级别有哪几种</li>
<li>schedule 使用</li>
</ol>
<h4 id="mybatis" tabindex="-1"><a class="header-anchor" href="#mybatis"><span>MyBatis</span></a></h4>
<ul>
<li><a href="https://bugstack.cn/md/spring/develop-spring/2021-05-16-%E7%AC%AC1%E7%AB%A0%EF%BC%9A%E5%BC%80%E7%AF%87%E4%BB%8B%E7%BB%8D%EF%BC%8C%E6%89%8B%E5%86%99Spring%E8%83%BD%E7%BB%99%E4%BD%A0%E5%B8%A6%E6%9D%A5%E4%BB%80%E4%B9%88%EF%BC%9F.html" target="_blank" rel="noopener noreferrer">手写Mybatis：渐进式源码实践(opens new window)<ExternalLinkIcon/></a></li>
</ul>
<ol>
<li>mybatis在spring的使用中，只需要定义接口，就可以和xml中的配置的sql语句，进行关联，执行数据库增删改查操作。怎么实现的</li>
<li>session是怎么管理的</li>
</ol>
<h4 id="springboot" tabindex="-1"><a class="header-anchor" href="#springboot"><span>SpringBoot</span></a></h4>
<ul>
<li>[SpringBoot 中间件设计和开发(opens new window)](<a href="https://bugstack.cn/md/project/springboot-middleware/2021-03-31-%E3%80%8ASpringBoot" target="_blank" rel="noopener noreferrer">https://bugstack.cn/md/project/springboot-middleware/2021-03-31-《SpringBoot<ExternalLinkIcon/></a> 中间件设计和开发》专栏小册上线啦！.html)</li>
</ul>
<ol>
<li>SpringBoot 怎么开发一个自己的Stater</li>
</ol>
<h4 id="springcloud" tabindex="-1"><a class="header-anchor" href="#springcloud"><span>SpringCloud</span></a></h4>
<ol>
<li>spring cloud 断路器的作用是什么</li>
<li>spring cloud 的核心组件有哪些 Eureka：服务注册于发现。 Feign：基于动态代理机制，根据注解和选择的机器，拼接请求 url 地址，发起请求。 Ribbon：实现负载均衡，从一个服务的多台机器中选择一台。 Hystrix：提供线程池，不同的服务走不同的线程池，实现了不同服务调用的隔离，避免了服务雪崩的问题。 Zuul：网关管理，由 Zuul 网关转发请求给对应的服务。</li>
</ol>
<h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h3>
<h4 id="dubbo" tabindex="-1"><a class="header-anchor" href="#dubbo"><span>Dubbo</span></a></h4>
<ol>
<li>通信模型是什么样的</li>
<li>Dubbo 和 Spring Cloud 有什么区别</li>
<li>dubbo都支持什么协议，推荐用哪种 dubbo://（推荐） rmi:// hessian:// http:// webservice:// thrift:// memcached:// redis:// rest://</li>
<li>Dubbo里面有哪几种节点角色</li>
<li>Dubbo中怎么处理的超时断开</li>
</ol>
<h4 id="mq" tabindex="-1"><a class="header-anchor" href="#mq"><span>MQ</span></a></h4>
<ol>
<li>RabbitMq</li>
<li>Kafka</li>
</ol>
<h4 id="elasticsearch" tabindex="-1"><a class="header-anchor" href="#elasticsearch"><span>ElasticSearch</span></a></h4>
<ol>
<li>elasticsearch 了解多少，说说你们公司 es 的集群架构，索引数据大小，分片有多少，以及一些调优手段 。</li>
<li>elasticsearch 的倒排索引是什么</li>
<li>elasticsearch 是如何实现 master 选举的</li>
<li>详细描述一下 Elasticsearch 搜索的过程</li>
</ol>
<h4 id="hbase" tabindex="-1"><a class="header-anchor" href="#hbase"><span>Hbase</span></a></h4>
<ol>
<li>拓展类问题</li>
</ol>
<h4 id="otter" tabindex="-1"><a class="header-anchor" href="#otter"><span>otter</span></a></h4>
<ol>
<li>拓展类问题</li>
</ol>
<h3 id="工具" tabindex="-1"><a class="header-anchor" href="#工具"><span>工具</span></a></h3>
<ol>
<li>Idea</li>
<li>Maven</li>
<li>Jenkins</li>
<li>JMeter</li>
</ol>
<h3 id="架构-1" tabindex="-1"><a class="header-anchor" href="#架构-1"><span>架构</span></a></h3>
<h4 id="系统搭建" tabindex="-1"><a class="header-anchor" href="#系统搭建"><span>系统搭建</span></a></h4>
<ol>
<li>MVC</li>
<li>DDD 领域驱动设计</li>
</ol>
<h4 id="数据库设计" tabindex="-1"><a class="header-anchor" href="#数据库设计"><span>数据库设计</span></a></h4>
<ol>
<li>分库分表(水平拆分、垂直拆分)</li>
<li>业务场景</li>
<li>基础配置优化相关</li>
</ol>
<h4 id="服务治理" tabindex="-1"><a class="header-anchor" href="#服务治理"><span>服务治理</span></a></h4>
<ol>
<li>负载均衡</li>
<li>熔断</li>
<li>降级</li>
<li>限流</li>
<li>黑白名单</li>
</ol>
<h4 id="分布式任务" tabindex="-1"><a class="header-anchor" href="#分布式任务"><span>分布式任务</span></a></h4>
<ol>
<li>xxl-job</li>
</ol>
<h4 id="监控" tabindex="-1"><a class="header-anchor" href="#监控"><span>监控</span></a></h4>
<ol>
<li>系统非入侵全链路监控</li>
<li>TP99、TP999、QPS、TPS的熟悉程度</li>
</ol>
<h4 id="压测" tabindex="-1"><a class="header-anchor" href="#压测"><span>压测</span></a></h4>
<ol>
<li>是否压测过，有无经验</li>
<li>对系统健壮性的把控</li>
<li>JVM参数</li>
<li>GC调优</li>
<li>代码优化</li>
</ol>
<h4 id="环境" tabindex="-1"><a class="header-anchor" href="#环境"><span>环境</span></a></h4>
<ol>
<li>Linux</li>
<li>Tomcat</li>
<li>docker</li>
<li>k8s</li>
</ol>
<h2 id="项目" tabindex="-1"><a class="header-anchor" href="#项目"><span>项目</span></a></h2>
<ul>
<li><a href="https://bugstack.cn/md/project/lottery/introduce/Lottery%E6%8A%BD%E5%A5%96%E7%B3%BB%E7%BB%9F.html" target="_blank" rel="noopener noreferrer">Lottery 抽奖系统 - 基于领域驱动设计的四层架构实践(opens new window)<ExternalLinkIcon/></a></li>
<li><a href="https://bugstack.cn/md/project/im/2020-03-04-%E3%80%8ANetty+JavaFx%E5%AE%9E%E6%88%98%EF%BC%9A%E4%BB%BF%E6%A1%8C%E9%9D%A2%E7%89%88%E5%BE%AE%E4%BF%A1%E8%81%8A%E5%A4%A9%E3%80%8B.html" target="_blank" rel="noopener noreferrer">Netty+JavaFx实战：仿桌面版微信聊天(opens new window)<ExternalLinkIcon/></a></li>
<li><a href="https://bugstack.cn/md/assembly/api-gateway/2022-08-12-%E5%BC%80%E7%AF%87%EF%BC%9A%E5%A6%82%E6%9E%9C%E8%AE%A9%E6%88%91%E8%AE%BE%E8%AE%A1%E4%B8%80%E5%A5%97%EF%BC%8CTPS%E7%99%BE%E4%B8%87%E7%BA%A7API%E7%BD%91%E5%85%B3.html" target="_blank" rel="noopener noreferrer">API网关：中间件设计和实践(opens new window)<ExternalLinkIcon/></a></li>
</ul>
<h3 id="项目经验" tabindex="-1"><a class="header-anchor" href="#项目经验"><span>项目经验</span></a></h3>
<ol>
<li>开发了哪些项目</li>
<li>重点项目是什么</li>
<li>你主要负责哪些</li>
<li>有过什么优化</li>
</ol>
<h3 id="工作业绩" tabindex="-1"><a class="header-anchor" href="#工作业绩"><span>工作业绩</span></a></h3>
<ol>
<li>中大型项目架构能力</li>
<li>复杂项目落地能力</li>
<li>重点项目执行落地</li>
<li>交付能力&amp;质量</li>
</ol>
<h3 id="技术沉淀" tabindex="-1"><a class="header-anchor" href="#技术沉淀"><span>技术沉淀</span></a></h3>
<ol>
<li>方法论</li>
<li>流程规范制定</li>
<li>交付质量</li>
<li>公用组件建设</li>
<li>开源项目</li>
<li>复杂架构设计经验</li>
<li>团队技术分享</li>
</ol>
<h3 id="工程师品质" tabindex="-1"><a class="header-anchor" href="#工程师品质"><span>工程师品质</span></a></h3>
<ol>
<li>认知范围，技术、业务、运营</li>
<li>学习能力，接受能力</li>
<li>创新技术，迁移能力</li>
</ol>
<h3 id="疑难问题处理" tabindex="-1"><a class="header-anchor" href="#疑难问题处理"><span>疑难问题处理</span></a></h3>
<ol>
<li>复杂问题推进解决能力</li>
<li>紧急事故解决能力</li>
</ol>
<h3 id="项目推进" tabindex="-1"><a class="header-anchor" href="#项目推进"><span>项目推进</span></a></h3>
<ol>
<li>中大型项目推进落地</li>
<li>资源协调安排</li>
<li>流程规范实施</li>
</ol>
<h3 id="专业影响力" tabindex="-1"><a class="header-anchor" href="#专业影响力"><span>专业影响力</span></a></h3>
<ol>
<li>项目推进过程中方案执行落地</li>
<li>带动他人共同完成，并赋予能力提升</li>
<li>技术价值创造</li>
<li>开源项目和专利</li>
</ol>
<h2 id="个人-面试官" tabindex="-1"><a class="header-anchor" href="#个人-面试官"><span>个人&amp;面试官</span></a></h2>
<h3 id="个人" tabindex="-1"><a class="header-anchor" href="#个人"><span>个人</span></a></h3>
<ol>
<li>可能会有一个人性的问题</li>
<li>介绍自己部门是什么的</li>
<li>其他你早点入职</li>
</ol>
<h4 id="面试官" tabindex="-1"><a class="header-anchor" href="#面试官"><span>面试官</span></a></h4>
<ol>
<li>部门主要做什么业务</li>
<li>入职后承担哪块</li>
<li>有什么技术挑战需要提前学习了解的</li>
</ol>
<ul>
<li>结合以上框架内容看自己是否是一个能抗住打的求职者，综合素质是否全面，技术栈广度、深度是否在瓶颈里徘徊，思考下怎么突破。</li>
<li>面试只是一份求职的开始，面试题也只是学习过程的知识点总结，只流于背题很容易被问倒。不同的面试官风格、水平、关注点也都不同，只有自己学扎实了才能随心所面。</li>
</ul>
<h2 id="java求职" tabindex="-1"><a class="header-anchor" href="#java求职"><span>Java求职</span></a></h2>
<h3 id="建议" tabindex="-1"><a class="header-anchor" href="#建议"><span>建议</span></a></h3>
<ol>
<li>尽早做规划，可以通过大厂招聘官网的岗位描述来了解岗位的要求</li>
<li>雕琢一份优秀的简历，推荐阅读：<a href="https://mp.weixin.qq.com/s/wfabzdpOPdq89faFFpZ4NA" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/wfabzdpOPdq89faFFpZ4NA(opens new window)<ExternalLinkIcon/></a></li>
<li>多读面经，坚持刷算法</li>
<li>多参与面试，持续复盘总结</li>
</ol>
<h3 id="校招岗位" tabindex="-1"><a class="header-anchor" href="#校招岗位"><span>校招岗位</span></a></h3>
<ul>
<li>阿里 Java 开发：<a href="https://campus.alibaba.com/position.htm?refno=12699" target="_blank" rel="noopener noreferrer">https://campus.alibaba.com/position.htm?refno=12699(opens new window)<ExternalLinkIcon/></a></li>
<li>腾讯后台开发：<a href="https://join.qq.com/post_detail.html?pid=1&amp;id=101&amp;tid=2" target="_blank" rel="noopener noreferrer">https://join.qq.com/post_detail.html?pid=1&amp;id=101&amp;tid=2(opens new window)<ExternalLinkIcon/></a></li>
<li>腾讯全栈开发：<a href="https://join.qq.com/post_detail.html?pid=1&amp;id=137&amp;tid=2" target="_blank" rel="noopener noreferrer">https://join.qq.com/post_detail.html?pid=1&amp;id=137&amp;tid=2(opens new window)<ExternalLinkIcon/></a></li>
<li>腾讯运营开发：<a href="https://join.qq.com/post_detail.html?pid=1&amp;id=105&amp;tid=2" target="_blank" rel="noopener noreferrer">https://join.qq.com/post_detail.html?pid=1&amp;id=105&amp;tid=2(opens new window)<ExternalLinkIcon/></a></li>
<li>美团后端开发：<a href="https://campus.meituan.com/jobs?jobFamily=1&amp;jobId=4005&amp;jobType=1&amp;pageNo=2" target="_blank" rel="noopener noreferrer">https://campus.meituan.com/jobs?jobFamily=1&amp;jobId=4005&amp;jobType=1&amp;pageNo=2(opens new window)<ExternalLinkIcon/></a></li>
<li>华为软件开发：<a href="https://career.huawei.com/reccampportal/portal5/campus-recruitment-detail.html?jobId=176044" target="_blank" rel="noopener noreferrer">https://career.huawei.com/reccampportal/portal5/campus-recruitment-detail.html?jobId=176044(opens new window)<ExternalLinkIcon/></a></li>
</ul>
<h3 id="社招岗位" tabindex="-1"><a class="header-anchor" href="#社招岗位"><span>社招岗位</span></a></h3>
<ul>
<li>阿里社招：<a href="https://job.alibaba.com/zhaopin/positionList.htm" target="_blank" rel="noopener noreferrer">https://job.alibaba.com/zhaopin/positionList.htm(opens new window)<ExternalLinkIcon/></a></li>
<li>腾讯社招：<a href="https://careers.tencent.com/search.html" target="_blank" rel="noopener noreferrer">https://careers.tencent.com/search.html(opens new window)<ExternalLinkIcon/></a></li>
</ul>
<h3 id="鱼皮经历" tabindex="-1"><a class="header-anchor" href="#鱼皮经历"><span>鱼皮经历</span></a></h3>
<ul>
<li>从 0 开始的编程学习进大厂经历
<ul>
<li>⭐ 我学计算机的四年，共勉：<a href="https://mp.weixin.qq.com/s/Nc7Ee2UyrPg6hGseQUCzeg" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/Nc7Ee2UyrPg6hGseQUCzeg(opens new window)<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>实习经历
<ul>
<li>⭐ 我的第一份实习：<a href="https://mp.weixin.qq.com/s/SwGiRzyTkCOOCUXfXPR1Pw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/SwGiRzyTkCOOCUXfXPR1Pw(opens new window)<ExternalLinkIcon/></a></li>
<li>⭐ 我的第二份实习，字节跳动：<a href="https://mp.weixin.qq.com/s/3q-YIfuZBjPjSnamNwOraw" target="_blank" rel="noopener noreferrer">https://mp.weixin.qq.com/s/3q-YIfuZBjPjSnamNwOraw(opens new window)<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h3 id="知识总结" tabindex="-1"><a class="header-anchor" href="#知识总结"><span>知识总结</span></a></h3>
<ul>
<li>⭐ JavaGuide：<a href="https://snailclimb.gitee.io/javaguide/#/" target="_blank" rel="noopener noreferrer">https://snailclimb.gitee.io/javaguide/#/(opens new window)<ExternalLinkIcon/></a></li>
<li>⭐ CS-Notes：<a href="http://www.cyc2018.xyz/" target="_blank" rel="noopener noreferrer">http://www.cyc2018.xyz/(opens new window)<ExternalLinkIcon/></a></li>
<li>阿里 Java 技术图谱：<a href="https://developer.aliyun.com/graph/java" target="_blank" rel="noopener noreferrer">https://developer.aliyun.com/graph/java(opens new window)<ExternalLinkIcon/></a></li>
</ul>
<h3 id="面经" tabindex="-1"><a class="header-anchor" href="#面经"><span>面经</span></a></h3>
<p>编程导航面经汇总：<a href="https://yuyuanweb.feishu.cn/wiki/PLHrwcEPCiJcxXk7Ki4csRoJn2f" target="_blank" rel="noopener noreferrer">https://yuyuanweb.feishu.cn/wiki/PLHrwcEPCiJcxXk7Ki4csRoJn2f(opens new window)<ExternalLinkIcon/></a></p>
<h3 id="面试题解" tabindex="-1"><a class="header-anchor" href="#面试题解"><span>面试题解</span></a></h3>
<p>编程导航精选面试题汇总：<a href="https://yuyuanweb.feishu.cn/wiki/CmFywXs0Oi0MS9kU3yocJugFn2e" target="_blank" rel="noopener noreferrer">https://yuyuanweb.feishu.cn/wiki/CmFywXs0Oi0MS9kU3yocJugFn2e(opens new window)<ExternalLinkIcon/></a></p>
<h3 id="视频" tabindex="-1"><a class="header-anchor" href="#视频"><span>视频</span></a></h3>
<ul>
<li>⭐ 尚硅谷 2021 逆袭版 Java 面试题第三季：<a href="https://www.bilibili.com/video/BV1Hy4y1B78T" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1Hy4y1B78T(opens new window)<ExternalLinkIcon/></a></li>
<li>⭐ 阿里大佬透彻讲解 Java 面试 500 道必考题：<a href="https://www.bilibili.com/video/BV1yU4y1J7Bb" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1yU4y1J7Bb(opens new window)<ExternalLinkIcon/></a></li>
</ul>
<h3 id="持续学习" tabindex="-1"><a class="header-anchor" href="#持续学习"><span>持续学习</span></a></h3>
<h4 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h4>
<p>持续追求技术的深度和广度，培养自己的 <strong>核心竞争力</strong> 和 <strong>不可替代性</strong> ，学无止境！</p>
<h4 id="学习建议" tabindex="-1"><a class="header-anchor" href="#学习建议"><span>学习建议</span></a></h4>
<p>自主学习，自主搜索教程，多看书，多阅读技术博客，多实践。</p>
<h4 id="学习方向" tabindex="-1"><a class="header-anchor" href="#学习方向"><span>学习方向</span></a></h4>
<h5 id="框架源码" tabindex="-1"><a class="header-anchor" href="#框架源码"><span>框架源码</span></a></h5>
<ul>
<li>Spring</li>
<li>SpringBoot</li>
<li>SpringMVC</li>
<li>MyBatis</li>
<li>Netty</li>
<li>Dubbo</li>
<li>SpringCloud</li>
</ul>
<h5 id="计算机原理" tabindex="-1"><a class="header-anchor" href="#计算机原理"><span>计算机原理</span></a></h5>
<ul>
<li>《算法导论》：<a href="https://www.bilibili.com/video/av48922404" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/av48922404(opens new window)<ExternalLinkIcon/></a></li>
<li>《现代操作系统》：<a href="https://www.bilibili.com/video/av9555596" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/av9555596(opens new window)<ExternalLinkIcon/></a></li>
<li>《深入理解计算机系统》：<a href="https://www.bilibili.com/video/av31289365" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/av31289365(opens new window)<ExternalLinkIcon/></a></li>
<li>《编译原理》： <a href="https://www.bilibili.com/video/av17649289" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/av17649289(opens new window)<ExternalLinkIcon/></a></li>
<li>《计算机网络：自顶向下方法》：<a href="https://www.bilibili.com/video/BV1JV411t7ow" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1JV411t7ow(opens new window)<ExternalLinkIcon/></a></li>
<li>《计算机程序的构造和解释》：<a href="https://www.bilibili.com/video/av8515129" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/av8515129(opens new window)<ExternalLinkIcon/></a></li>
<li>《数据库系统概论》：<a href="https://www.bilibili.com/video/BV1G54y1d7ZK" target="_blank" rel="noopener noreferrer">https://www.bilibili.com/video/BV1G54y1d7ZK(opens new window)<ExternalLinkIcon/></a></li>
</ul>
<h5 id="数据库-中间件-分布式" tabindex="-1"><a class="header-anchor" href="#数据库-中间件-分布式"><span>数据库 / 中间件 / 分布式</span></a></h5>
<ul>
<li>数据库
<ul>
<li>MySQL</li>
<li>PostgreSQL</li>
</ul>
</li>
<li>缓存
<ul>
<li>Redis</li>
</ul>
</li>
<li>队列
<ul>
<li>Apache Kafka</li>
<li>Apache Pulsar</li>
</ul>
</li>
<li>搜索引擎
<ul>
<li>Elastic Stack
<ul>
<li>Elasticsearch</li>
<li>logstash</li>
<li>kibana</li>
<li>beats</li>
</ul>
</li>
</ul>
</li>
<li>容器
<ul>
<li>Docker</li>
<li>K8S</li>
</ul>
</li>
</ul>
<h5 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h5>
<ul>
<li>广告系统</li>
<li>电商系统</li>
<li>搜索系统</li>
<li>支付转账</li>
<li>游戏后台</li>
<li>即时通讯</li>
<li>社交系统</li>
<li>CMS 系统</li>
<li>ERP 系统</li>
<li>OA 系统</li>
<li>代码生成</li>
<li>权限管理</li>
<li>秒杀活动</li>
</ul>
<h5 id="架构设计" tabindex="-1"><a class="header-anchor" href="#架构设计"><span>架构设计</span></a></h5>
<p>同阶段 6 架构设计部分</p>
<h5 id="大数据" tabindex="-1"><a class="header-anchor" href="#大数据"><span>大数据</span></a></h5>
<ul>
<li>5V 特点</li>
<li>Hadoop</li>
<li>HDFS</li>
<li>MapReduce</li>
<li>Spark</li>
<li>Flink</li>
<li>Storm</li>
<li>Hive</li>
<li>HBase</li>
<li>Druid</li>
<li>Kylin</li>
<li>Pig</li>
<li>Mahout</li>
</ul>
<h5 id="前沿技术" tabindex="-1"><a class="header-anchor" href="#前沿技术"><span>前沿技术</span></a></h5>
<ul>
<li>
<p>云原生：</p>
<p><a href="https://www.jianshu.com/p/a37baa7c3eff" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/a37baa7c3eff<ExternalLinkIcon/></a>(opens new window)</p>
<ul>
<li>Quasar Framework：<a href="http://www.quasarchs.com/" target="_blank" rel="noopener noreferrer">http://www.quasarchs.com/(opens new window)<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>服务网格：</p>
<p><a href="https://www.redhat.com/zh/topics/microservices/what-is-a-service-mesh" target="_blank" rel="noopener noreferrer">https://www.redhat.com/zh/topics/microservices/what-is-a-service-mesh<ExternalLinkIcon/></a>(opens new window)</p>
<ul>
<li>istio：<a href="https://github.com/istio/istio" target="_blank" rel="noopener noreferrer">https://github.com/istio/istio(opens new window)<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>GraalVM：</p>
<p><a href="https://juejin.cn/post/6850418120570437646" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6850418120570437646<ExternalLinkIcon/></a> (opens new window)</p>
<p>（高性能的通用虚拟机）</p>
<ul>
<li>官网：<a href="https://www.graalvm.org/" target="_blank" rel="noopener noreferrer">https://www.graalvm.org/(opens new window)<ExternalLinkIcon/></a></li>
</ul>
</li>
<li>
<p>ZGC：</p>
<p><a href="https://juejin.cn/post/6859276583656980493" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6859276583656980493<ExternalLinkIcon/></a> (opens new window)</p>
<p>（新一代垃圾回收器）</p>
<ul>
<li>官网：<a href="http://openjdk.java.net/projects/zgc/" target="_blank" rel="noopener noreferrer">http://openjdk.java.net/projects/zgc/(opens new window)<ExternalLinkIcon/></a></li>
</ul>
</li>
</ul>
<h5 id="自学-java-专题资源" tabindex="-1"><a class="header-anchor" href="#自学-java-专题资源"><span>自学 Java 专题资源</span></a></h5>
<ul>
<li>⭐ GitHub Java 专区：<a href="https://github.com/topics/java" target="_blank" rel="noopener noreferrer">https://github.com/topics/java(opens new window)<ExternalLinkIcon/></a></li>
<li>⭐ GitHub Java 合集：<a href="https://github.com/akullpp/awesome-java" target="_blank" rel="noopener noreferrer">https://github.com/akullpp/awesome-java(opens new window)<ExternalLinkIcon/></a></li>
<li>StackOverflow：<a href="https://stackoverflow.com/questions/tagged/java" target="_blank" rel="noopener noreferrer">https://stackoverflow.com/questions/tagged/java (opens new window)<ExternalLinkIcon/></a>（解决问题必备）</li>
<li>⭐ 掘金 Java 专区：<a href="https://juejin.cn/tag/Java" target="_blank" rel="noopener noreferrer">https://juejin.cn/tag/Java(opens new window)<ExternalLinkIcon/></a></li>
<li>美团技术团队：<a href="https://tech.meituan.com/" target="_blank" rel="noopener noreferrer">https://tech.meituan.com/(opens new window)<ExternalLinkIcon/></a></li>
<li>阿里技术团队：<a href="https://102.alibaba.com/tech/list/" target="_blank" rel="noopener noreferrer">https://102.alibaba.com/tech/list/(opens new window)<ExternalLinkIcon/></a></li>
<li>有赞技术团队：<a href="https://tech.youzan.com/tag/back-end/" target="_blank" rel="noopener noreferrer">https://tech.youzan.com/tag/back-end/<ExternalLinkIcon/></a></li>
</ul>
</div></template>


