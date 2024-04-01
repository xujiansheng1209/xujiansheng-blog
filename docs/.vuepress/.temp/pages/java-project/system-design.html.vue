<template><div><h2 id="基础框架" tabindex="-1"><a class="header-anchor" href="#基础框架"><span>基础框架</span></a></h2>
<h3 id="web-框架" tabindex="-1"><a class="header-anchor" href="#web-框架"><span>Web 框架</span></a></h3>
<ul>
<li><a href="https://github.com/spring-projects/spring-boot" title="spring-boot" target="_blank" rel="noopener noreferrer">Spring Boot<ExternalLinkIcon/></a>：Spring Boot 可以轻松创建独立的生产级基于 Spring 的应用程序，内置 web 服务器让你可以像运行普通 Java 程序一样运行项 目。另外，大部分 Spring Boot 项目只需要少量的配置即可，这有别于 Spring 的重配置。</li>
<li><a href="https://github.com/sofastack/sofa-boot" target="_blank" rel="noopener noreferrer">SOFABoot<ExternalLinkIcon/></a>：SOFABoot 基于 Spring Boot ，不过在其基础上增加了 Readiness Check，类隔离，日志空间隔离等等能力。 配套提供的还有：SOFARPC（RPC 框架）、SOFABolt（基于 Netty 的远程通信框架）、SOFARegistry（注册中心）...详情请参考：<a href="https://github.com/sofastack" target="_blank" rel="noopener noreferrer">SOFAStack<ExternalLinkIcon/></a> 。</li>
<li><a href="https://github.com/tipsy/javalin" target="_blank" rel="noopener noreferrer">Javalin<ExternalLinkIcon/></a>：一个轻量级的 Web 框架，同时支持 Java 和 Kotlin，被微软、红帽、Uber 等公司使用。</li>
<li><a href="https://github.com/playframework/playframework" target="_blank" rel="noopener noreferrer">Play Framework<ExternalLinkIcon/></a>：面向 Java 和 Scala 的高速 Web 框架。</li>
<li><a href="https://github.com/lets-blade/blade" target="_blank" rel="noopener noreferrer">Blade<ExternalLinkIcon/></a>：一款追求简约、高效的 Web 框架，基于 Java8 + Netty4。</li>
</ul>
<h3 id="微服务-云原生" tabindex="-1"><a class="header-anchor" href="#微服务-云原生"><span>微服务/云原生</span></a></h3>
<ul>
<li><a href="https://github.com/line/armeria" target="_blank" rel="noopener noreferrer">Armeria<ExternalLinkIcon/></a>：适合任何情况的微服务框架。你可以用你喜欢的技术构建任何类型的微服务，包括<a href="https://grpc.io/" target="_blank" rel="noopener noreferrer">gRPC<ExternalLinkIcon/></a>、 <a href="https://thrift.apache.org/" target="_blank" rel="noopener noreferrer">Thrift<ExternalLinkIcon/></a>、<a href="https://kotlinlang.org/" target="_blank" rel="noopener noreferrer">Kotlin<ExternalLinkIcon/></a>、 <a href="https://square.github.io/retrofit/" target="_blank" rel="noopener noreferrer">Retrofit<ExternalLinkIcon/></a>、<a href="https://www.reactive-streams.org/" target="_blank" rel="noopener noreferrer">Reactive Streams<ExternalLinkIcon/></a>、 <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer">Spring Boot<ExternalLinkIcon/></a>和<a href="https://www.dropwizard.io/" target="_blank" rel="noopener noreferrer">Dropwizard<ExternalLinkIcon/></a></li>
<li><a href="https://github.com/quarkusio/quarkus" target="_blank" rel="noopener noreferrer">Quarkus<ExternalLinkIcon/></a> : 用于编写 Java 应用程序的云原生和容器优先的框架。</li>
</ul>
<h3 id="api-文档" tabindex="-1"><a class="header-anchor" href="#api-文档"><span>API 文档</span></a></h3>
<ul>
<li><a href="https://swagger.io/" target="_blank" rel="noopener noreferrer">Swagger<ExternalLinkIcon/></a> ：较主流的 RESTful 风格的 API 文档工具，提供了一套工具和规范，让开发人员能够更轻松地创建和维护可读性强、易于使用和交互的 API 文档。</li>
<li><a href="https://doc.xiaominfo.com/" target="_blank" rel="noopener noreferrer">Knife4j<ExternalLinkIcon/></a>：集 Swagger2 和 OpenAPI3 为一体的增强解决方案。</li>
</ul>
<h3 id="bean-映射" tabindex="-1"><a class="header-anchor" href="#bean-映射"><span>Bean 映射</span></a></h3>
<ul>
<li><a href="https://github.com/mapstruct/mapstruct" target="_blank" rel="noopener noreferrer">MapStruct<ExternalLinkIcon/></a>（推荐）：满足 JSR269 规范的一个 Java 注解处理器，用于为 Java Bean 生成类型安全且高性能的映射。它基于编译阶段生成 get/set 代码，此实现过程中没有反射，不会造成额外的性能损失。</li>
<li><a href="https://github.com/jmapper-framework/jmapper-core" target="_blank" rel="noopener noreferrer">JMapper<ExternalLinkIcon/></a> : 一个高性能且易于使用的 Bean 映射框架。</li>
</ul>
<h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3>
<ul>
<li><a href="https://github.com/google/guice" target="_blank" rel="noopener noreferrer">Guice<ExternalLinkIcon/></a>：Google 开源的一个轻量级依赖注入框架，相当于一个功能极简化的轻量级 Spring Boot。在某些情况下非常实用，就比如说我们的项目只需要使用依赖注入，不需要 AOP 等功能特性。</li>
<li><a href="https://github.com/spring-projects/spring-batch" target="_blank" rel="noopener noreferrer">Spring Batch<ExternalLinkIcon/></a> : Spring Batch 是一个轻量级但功能又十分全面的批处理框架，主要用于批处理场景比如从数据库、文件或队列中读取大量记录。不过，需要注意的是：Spring Batch 不是调度框架。商业和开源领域都有许多优秀的企业调度框架比如 Quartz、XXL-JOB、Elastic-Job。它旨在与调度程序一起工作，而不是取代调度程序。</li>
</ul>
<h2 id="认证授权" tabindex="-1"><a class="header-anchor" href="#认证授权"><span>认证授权</span></a></h2>
<h3 id="权限认证" tabindex="-1"><a class="header-anchor" href="#权限认证"><span>权限认证</span></a></h3>
<ul>
<li><a href="https://github.com/dromara/sa-token" target="_blank" rel="noopener noreferrer">Sa-Token<ExternalLinkIcon/></a>：轻量级 Java 权限认证框架。支持认证授权、单点登录、踢人下线、自动续签等功能。相比于 Spring Security 和 Shiro 来说，Sa-Token 内置的开箱即用的功能更多，使用也更简单。</li>
<li><a href="https://github.com/spring-projects/spring-security" target="_blank" rel="noopener noreferrer">Spring Security<ExternalLinkIcon/></a>：Spring 官方安全框架，能够用于身份验证、授权、加密和会话管理，是目前使用最广泛的 Java 安全框架。</li>
<li><a href="https://github.com/apache/shiro" target="_blank" rel="noopener noreferrer">Shiro<ExternalLinkIcon/></a>：Java 安全框架，功能和 Spring Security 类似，但使用起来更简单。</li>
</ul>
<h3 id="第三方登录" tabindex="-1"><a class="header-anchor" href="#第三方登录"><span>第三方登录</span></a></h3>
<ul>
<li><a href="https://github.com/Wechat-Group/WxJava" target="_blank" rel="noopener noreferrer">WxJava<ExternalLinkIcon/></a> : WxJava （微信开发 Java SDK），支持包括微信支付、开放平台、小程序、企业微信/企业号和公众号等的后端开发。</li>
<li><a href="https://github.com/justauth/JustAuth" target="_blank" rel="noopener noreferrer">JustAuth<ExternalLinkIcon/></a>：小而全而美的第三方登录开源组件。目前已经集成了诸如：GitHub、Gitee、支付宝、新浪微博、微信、Google、Facebook、Twitter、StackOverflow 等国内外数十家第三方平台。</li>
</ul>
<h3 id="单点登录-sso" tabindex="-1"><a class="header-anchor" href="#单点登录-sso"><span>单点登录（SSO）</span></a></h3>
<ul>
<li><a href="https://github.com/apereo/cas" target="_blank" rel="noopener noreferrer">CAS<ExternalLinkIcon/></a>：企业多语言网络单点登录解决方案。</li>
<li><a href="https://gitee.com/dromara/MaxKey" target="_blank" rel="noopener noreferrer">MaxKey<ExternalLinkIcon/></a>：单点登录认证系统，提供安全、标准和开放的用户身份管理(IDM)、身份认证(AM)、单点登录(SSO)、RBAC 权限管理和资源管理等。</li>
<li><a href="https://github.com/keycloak/keycloak" target="_blank" rel="noopener noreferrer">Keycloak<ExternalLinkIcon/></a>：免费、开源身份认证和访问管理系统，支持高度可配置的单点登录功能。</li>
</ul>
<h2 id="网络通讯" tabindex="-1"><a class="header-anchor" href="#网络通讯"><span>网络通讯</span></a></h2>
<ul>
<li><a href="https://github.com/netty/netty" target="_blank" rel="noopener noreferrer">Netty<ExternalLinkIcon/></a> : 一个基于 NIO 的 client-server(客户端服务器)框架，使用它可以快速简单地开发网络应用程序。</li>
<li><a href="https://github.com/square/retrofit" target="_blank" rel="noopener noreferrer">Retrofit<ExternalLinkIcon/></a>：适用于 Android 和 Java 的类型安全的 HTTP 客户端。Retrofit 的 HTTP 请求使用的是 <a href="https://square.github.io/okhttp/" target="_blank" rel="noopener noreferrer">OkHttp<ExternalLinkIcon/></a> 库（一款被广泛使用网络框架）。</li>
<li><a href="https://gitee.com/dromara/forest" target="_blank" rel="noopener noreferrer">Forest<ExternalLinkIcon/></a>：轻量级 HTTP 客户端 API 框架，让 Java 发送 HTTP/HTTPS 请求不再难。它比 OkHttp 和 HttpClient 更高层，是封装调用第三方 restful api client 接口的好帮手，是 retrofit 和 feign 之外另一个选择。</li>
<li><a href="https://github.com/YeautyYE/netty-websocket-spring-boot-starter" target="_blank" rel="noopener noreferrer">netty-websocket-spring-boot-starter<ExternalLinkIcon/></a> :帮助你在 Spring Boot 中使用 Netty 来开发 WebSocket 服务器，并像 spring-websocket 的注解开发一样简单。</li>
<li><a href="https://github.com/dromara/SMS4J" target="_blank" rel="noopener noreferrer">SMS4J<ExternalLinkIcon/></a>：短信聚合框架，解决接入多个短信 SDK 的繁琐流程。</li>
</ul>
<h2 id="数据库" tabindex="-1"><a class="header-anchor" href="#数据库"><span>数据库</span></a></h2>
<h3 id="数据库连接池" tabindex="-1"><a class="header-anchor" href="#数据库连接池"><span>数据库连接池</span></a></h3>
<ul>
<li><a href="https://github.com/alibaba/druid" target="_blank" rel="noopener noreferrer">Druid<ExternalLinkIcon/></a> : 阿里巴巴数据库事业部出品，为监控而生的数据库连接池。</li>
<li><a href="https://github.com/brettwooldridge/HikariCP" target="_blank" rel="noopener noreferrer">HikariCP<ExternalLinkIcon/></a> : 一个可靠的高性能 JDBC 连接池。Springboot 2.0 选择 HikariCP 作为默认数据库连接池。</li>
</ul>
<h3 id="数据库框架" tabindex="-1"><a class="header-anchor" href="#数据库框架"><span>数据库框架</span></a></h3>
<ul>
<li><a href="https://github.com/baomidou/mybatis-plus" target="_blank" rel="noopener noreferrer">MyBatis-Plus<ExternalLinkIcon/></a> : <a href="http://www.mybatis.org/mybatis-3/" target="_blank" rel="noopener noreferrer">MyBatis<ExternalLinkIcon/></a> 增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。</li>
<li><a href="https://gitee.com/mybatis-flex/mybatis-flex" target="_blank" rel="noopener noreferrer">MyBatis-Flex<ExternalLinkIcon/></a>：一个优雅的 MyBatis 增强框架，无其他任何第三方依赖，支持 CRUD、分页查询、多表查询、批量操作。</li>
<li><a href="https://github.com/redisson/redisson" title="redisson" target="_blank" rel="noopener noreferrer">Redisson<ExternalLinkIcon/></a>：Redis 基础上的一个 Java 驻内存数据网格（In-Memory Data Grid）,支持超过 30 个对象和服务:<code v-pre>Set</code>,<code v-pre>SortedSet</code>, <code v-pre>Map</code>, <code v-pre>List</code>, <code v-pre>Queue</code>, <code v-pre>Deque</code> ……，并且提供了多种分布式锁的实现。更多介绍请看：<a href="https://github.com/redisson/redisson/wiki/Redisson%E9%A1%B9%E7%9B%AE%E4%BB%8B%E7%BB%8D" title="Redisson项目介绍" target="_blank" rel="noopener noreferrer">《Redisson 项目介绍》<ExternalLinkIcon/></a>。</li>
</ul>
<h3 id="数据同步" tabindex="-1"><a class="header-anchor" href="#数据同步"><span>数据同步</span></a></h3>
<ul>
<li><a href="https://github.com/alibaba/canal" title="canal" target="_blank" rel="noopener noreferrer">Canal<ExternalLinkIcon/></a> [kə'næl] : Canal 译意为水道/管道/沟渠，主要用途是基于 MySQL 数据库增量日志解析，提供增量数据订阅和消费。</li>
<li><a href="https://github.com/alibaba/DataX" title="DataX" target="_blank" rel="noopener noreferrer">DataX<ExternalLinkIcon/></a>：DataX 是阿里巴巴集团内被广泛使用的离线数据同步工具/平台，实现包括 MySQL、Oracle、SqlServer、Postgre、HDFS、Hive、ADS、HBase、TableStore(OTS)、MaxCompute(ODPS)、DRDS 等各种异构数据源之间高效的数据同步功能。相关项目：<a href="https://github.com/WeiYe-Jing/datax-web" target="_blank" rel="noopener noreferrer">DataX-Web<ExternalLinkIcon/></a> （DataX 集成可视化页面，选择数据源即可一键生成数据同步任务）。</li>
</ul>
<p>其他：<a href="https://github.com/DTStack/flinkx" target="_blank" rel="noopener noreferrer">Flinkx<ExternalLinkIcon/></a> （基于 Flink 的分布式数据同步工具）。</p>
<h3 id="时序数据库" tabindex="-1"><a class="header-anchor" href="#时序数据库"><span>时序数据库</span></a></h3>
<ul>
<li><a href="https://github.com/apache/iotdb" target="_blank" rel="noopener noreferrer">IoTDB<ExternalLinkIcon/></a>：一款 Java 语言编写的国产时序数据库，为用户提供数据收集、存储和分析等服务。与 Hadoop、Spark 和可视化工具(如 Grafana)无缝集成，满足了工业 IoT 领域中海量数据存储、高吞吐量数据写入和复杂数据查询分析的需求。</li>
<li><a href="https://github.com/kairosdb/kairosdb" target="_blank" rel="noopener noreferrer">KairosDB<ExternalLinkIcon/></a>：一个基于 Cassandra 的快速分布式可扩展时间序列数据库。</li>
</ul>
<h2 id="搜索引擎" tabindex="-1"><a class="header-anchor" href="#搜索引擎"><span>搜索引擎</span></a></h2>
<ul>
<li><a href="https://github.com/elastic/elasticsearch" title="elasticsearch" target="_blank" rel="noopener noreferrer">Elasticsearch<ExternalLinkIcon/></a> （推荐）：开源，分布式，RESTful 搜索引擎。</li>
<li><a href="https://github.com/meilisearch/meilisearch" target="_blank" rel="noopener noreferrer">Meilisearch<ExternalLinkIcon/></a>：一个功能强大、快速、开源、易于使用和部署的搜索引擎，支持中文搜索（不需要添加额外的配置）。</li>
<li><a href="https://lucene.apache.org/solr/" target="_blank" rel="noopener noreferrer">Solr<ExternalLinkIcon/></a> : Solr（读作“solar”）是 Apache Lucene 项目的开源企业搜索平台。</li>
<li><a href="https://gitee.com/dromara/easy-es" target="_blank" rel="noopener noreferrer">Easy-ES<ExternalLinkIcon/></a>：傻瓜级 ElasticSearch 搜索引擎 ORM 框架。</li>
</ul>
<h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试"><span>测试</span></a></h2>
<h3 id="测试框架" tabindex="-1"><a class="header-anchor" href="#测试框架"><span>测试框架</span></a></h3>
<ul>
<li><a href="http://junit.org/" target="_blank" rel="noopener noreferrer">JUnit<ExternalLinkIcon/></a> : Java 测试框架。</li>
<li><a href="https://github.com/mockito/mockito" target="_blank" rel="noopener noreferrer">Mockito<ExternalLinkIcon/></a>：Mockito 是一个模拟测试框架，可以让你用优雅，简洁的接口写出漂亮的单元测试。（对那些不容易构建的对象用一个虚拟对象来代替，使其在调试期间用来作为真实对象的替代品）</li>
<li><a href="https://github.com/powermock/powermock" target="_blank" rel="noopener noreferrer">PowerMock<ExternalLinkIcon/></a>：编写单元测试仅靠 Mockito 是不够。因为 Mockito 无法 mock 私有方法、final 方法及静态方法等。PowerMock 这个 framework，主要是为了扩展其他 mock 框架，如 Mockito、EasyMock。它使用一个自定义的类加载器，纂改字节码，突破 Mockito 无法 mock 静态方法、构造方法、final 类、final 方法以及私有方法的限制。</li>
<li><a href="https://github.com/tomakehurst/wiremock" target="_blank" rel="noopener noreferrer">WireMock<ExternalLinkIcon/></a>：模拟 HTTP 服务的工具（Mock your APIs）。</li>
<li><a href="https://github.com/testcontainers/testcontainers-java" target="_blank" rel="noopener noreferrer">Testcontainers<ExternalLinkIcon/></a>：一个支持 JUnit 的测试工具库，提供轻量级的且一次性的常见数据库测试支持、Selenium Web 浏览器或者其他任何可以在 Docker 容器中运行的实例支持。</li>
</ul>
<p>相关阅读：</p>
<ul>
<li><a href="https://martinfowler.com/articles/practical-test-pyramid.html" target="_blank" rel="noopener noreferrer">The Practical Test Pyramid- Martin Fowler<ExternalLinkIcon/></a> (很赞的一篇文章，不过是英文的)</li>
<li><a href="https://juejin.im/post/6844903982058618894" target="_blank" rel="noopener noreferrer">浅谈测试之 PowerMock<ExternalLinkIcon/></a></li>
</ul>
<h3 id="测试平台" tabindex="-1"><a class="header-anchor" href="#测试平台"><span>测试平台</span></a></h3>
<ul>
<li><a href="https://github.com/metersphere/metersphere" target="_blank" rel="noopener noreferrer">MeterSphere<ExternalLinkIcon/></a> : 一站式开源持续测试平台，涵盖测试跟踪、接口测试、性能测试、团队协作等功能，全面兼容 JMeter、Postman、Swagger 等开源、主流标准。</li>
<li><a href="https://www.apifox.cn/" target="_blank" rel="noopener noreferrer">Apifox<ExternalLinkIcon/></a>：API 文档、API 调试、API Mock、API 自动化测试。</li>
</ul>
<h3 id="api-调试" tabindex="-1"><a class="header-anchor" href="#api-调试"><span>API 调试</span></a></h3>
<ul>
<li><a href="https://insomnia.rest/" target="_blank" rel="noopener noreferrer">Insomnia<ExternalLinkIcon/></a> :像人类而不是机器人一样调试 API。我平时经常用的，界面美观且轻量，总之很喜欢。</li>
<li><a href="https://www.getpostman.com/" target="_blank" rel="noopener noreferrer">Postman<ExternalLinkIcon/></a>：API 请求生成器。</li>
<li><a href="https://github.com/liyasthomas/postwoman" title="postwoman" target="_blank" rel="noopener noreferrer">Postwoman<ExternalLinkIcon/></a>：API 请求生成器-一个免费、快速、漂亮的 Postma 替代品。</li>
<li><a href="https://gitee.com/dromara/fast-request" target="_blank" rel="noopener noreferrer">Restful Fast Request<ExternalLinkIcon/></a>：IDEA 版 Postman，API 调试工具 + API 管理工具 + API 搜索工具。</li>
</ul>
<h2 id="任务调度" tabindex="-1"><a class="header-anchor" href="#任务调度"><span>任务调度</span></a></h2>
<ul>
<li><a href="https://github.com/quartz-scheduler/quartz" target="_blank" rel="noopener noreferrer">Quartz<ExternalLinkIcon/></a>：一个很火的开源任务调度框架，Java 定时任务领域的老大哥或者说参考标准， 很多其他任务调度框架都是基于 <code v-pre>quartz</code> 开发的，比如当当网的<code v-pre>elastic-job</code>就是基于<code v-pre>quartz</code>二次开发之后的分布式调度解决方案</li>
<li><a href="https://github.com/xuxueli/xxl-job" target="_blank" rel="noopener noreferrer">XXL-JOB<ExternalLinkIcon/></a> :XXL-JOB 是一个分布式任务调度平台，其核心设计目标是开发迅速、学习简单、轻量级、易扩展。现已开放源代码并接入多家公司线上产品线，开箱即用。</li>
<li><a href="http://elasticjob.io/index_zh.html" target="_blank" rel="noopener noreferrer">Elastic-Job<ExternalLinkIcon/></a>：Elastic-Job 是当当网开源的一个基于 Quartz 和 Zookeeper 的分布式调度解决方案，由两个相互独立的子项目 Elastic-Job-Lite 和 Elastic-Job-Cloud 组成，一般我们只要使用 Elastic-Job-Lite 就好。</li>
<li><a href="https://github.com/analysys/EasyScheduler" title="EasyScheduler" target="_blank" rel="noopener noreferrer">EasyScheduler<ExternalLinkIcon/></a> （已经更名为 DolphinScheduler，已经成为 Apache 孵化器项目）：Easy Scheduler 是一个分布式工作流任务调度系统，主要解决“复杂任务依赖但无法直接监控任务健康状态”的问题。Easy Scheduler 以 DAG 方式组装任务，可以实时监控任务的运行状态。同时，它支持重试，重新运行等操作... 。</li>
<li><a href="https://gitee.com/KFCFans/PowerJob" target="_blank" rel="noopener noreferrer">PowerJob<ExternalLinkIcon/></a>：新一代分布式任务调度与计算框架，支持 CRON、API、固定频率、固定延迟等调度策略，提供工作流来编排任务解决依赖关系，使用简单，功能强大，文档齐全，欢迎各位接入使用！<a href="http://www.powerjob.tech/" target="_blank" rel="noopener noreferrer">http://www.powerjob.tech/<ExternalLinkIcon/></a> 。</li>
<li><a href="https://github.com/apache/dolphinscheduler" target="_blank" rel="noopener noreferrer">DolphinScheduler<ExternalLinkIcon/></a>：分布式易扩展的可视化工作流任务调度平台。</li>
</ul>
<h2 id="分布式" tabindex="-1"><a class="header-anchor" href="#分布式"><span>分布式</span></a></h2>
<h3 id="api-网关" tabindex="-1"><a class="header-anchor" href="#api-网关"><span>API 网关</span></a></h3>
<ul>
<li><a href="https://github.com/Kong/kong" title="kong" target="_blank" rel="noopener noreferrer">Kong<ExternalLinkIcon/></a>：Kong 是一个云原生、快速的、可伸缩的分布式微服务抽象层(也称为 API 网关、API 中间件或在某些情况下称为服务网格)。2015 年作为开源项目发布，其核心价值是高性能和可扩展性。</li>
<li><a href="https://github.com/Dromara/soul" title="soul" target="_blank" rel="noopener noreferrer">ShenYu<ExternalLinkIcon/></a>：适用于所有微服务的可伸缩、高性能、响应性 API 网关解决方案。</li>
<li><a href="https://github.com/spring-cloud/spring-cloud-gateway" target="_blank" rel="noopener noreferrer">Spring Cloud Gateway<ExternalLinkIcon/></a> : 基于 Spring Framework 5.x 和 Spring Boot 2.x 构建的高性能网关。</li>
<li><a href="https://github.com/Netflix/zuul" target="_blank" rel="noopener noreferrer">Zuul<ExternalLinkIcon/></a> : Zuul 是一个 L7 应用程序网关，它提供了动态路由，监视，弹性，安全性等功能。</li>
</ul>
<h3 id="配置中心" tabindex="-1"><a class="header-anchor" href="#配置中心"><span>配置中心</span></a></h3>
<ul>
<li><a href="https://github.com/ctripcorp/apollo" title="apollo" target="_blank" rel="noopener noreferrer">Apollo<ExternalLinkIcon/></a>（推荐）：Apollo（阿波罗）是携程框架部门研发的分布式配置中心，能够集中化管理应用不同环境、不同集群的配置，配置修改后能够实时推送到应用端，并且具备规范的权限、流程治理等特性，适用于微服务配置管理场景。</li>
<li><a href="https://github.com/alibaba/nacos" target="_blank" rel="noopener noreferrer">Nacos<ExternalLinkIcon/></a>（推荐）：Nacos 是 Spring Cloud Alibaba 提供的服务注册发现组件，类似于 Consul、Eureka。并且，提供了分布式配置管理功能。</li>
<li><a href="https://github.com/spring-cloud/spring-cloud-config" target="_blank" rel="noopener noreferrer">Spring Cloud Config<ExternalLinkIcon/></a>：Spring Cloud Config 是 Spring Cloud 家族中最早的配置中心，虽然后来又发布了 Consul 可以代替配置中心功能，但是 Config 依然适用于 Spring Cloud 项目，通过简单的配置即可实现功能。</li>
<li><a href="https://github.com/hashicorp/consul" target="_blank" rel="noopener noreferrer">Consul<ExternalLinkIcon/></a>：Consul 是 HashiCorp 公司推出的开源软件，提供了微服务系统中的服务治理、配置中心、控制总线等功能。这些功能中的每一个都可以根据需要单独使用，也可以一起使用以构建全方位的服务网格，总之 Consul 提供了一种完整的服务网格解决方案。</li>
</ul>
<h3 id="链路追踪" tabindex="-1"><a class="header-anchor" href="#链路追踪"><span>链路追踪</span></a></h3>
<ul>
<li><a href="https://github.com/apache/skywalking" title="skywalking" target="_blank" rel="noopener noreferrer">Skywalking<ExternalLinkIcon/></a> : 针对分布式系统的应用性能监控，尤其是针对微服务、云原生和面向容器的分布式系统架构。</li>
<li><a href="https://github.com/openzipkin/zipkin" title="zipkin" target="_blank" rel="noopener noreferrer">Zipkin<ExternalLinkIcon/></a>：Zipkin 是一个分布式跟踪系统。它有助于收集解决服务体系结构中的延迟问题所需的时序数据。功能包括该数据的收集和查找。</li>
<li><a href="https://github.com/dianping/cat" title="cat" target="_blank" rel="noopener noreferrer">CAT<ExternalLinkIcon/></a>：CAT 作为服务端项目基础组件，提供了 Java, C/C++, Node.js, Python, Go 等多语言客户端，已经在美团点评的基础架构中间件框架（MVC 框架，RPC 框架，数据库框架，缓存框架等，消息队列，配置系统等）深度集成，为美团点评各业务线提供系统丰富的性能指标、健康状况、实时告警等。</li>
</ul>
<p>相关阅读：<a href="https://skywalking.apache.org/zh/blog/2019-03-29-introduction-of-skywalking-and-simple-practice.html" target="_blank" rel="noopener noreferrer">Skywalking 官网对于主流开源链路追踪系统的对比<ExternalLinkIcon/></a></p>
<h2 id="高性能" tabindex="-1"><a class="header-anchor" href="#高性能"><span>高性能</span></a></h2>
<h3 id="多线程" tabindex="-1"><a class="header-anchor" href="#多线程"><span>多线程</span></a></h3>
<ul>
<li><a href="https://github.com/opengoofy/hippo4j" target="_blank" rel="noopener noreferrer">Hippo4j<ExternalLinkIcon/></a>：异步线程池框架，支持线程池动态变更&amp;监控&amp;报警，无需修改代码轻松引入。支持多种使用模式，轻松引入，致力于提高系统运行保障能力。</li>
<li><a href="https://github.com/dromara/dynamic-tp" target="_blank" rel="noopener noreferrer">Dynamic Tp<ExternalLinkIcon/></a>：轻量级动态线程池，内置监控告警功能，集成三方中间件线程池管理，基于主流配置中心（已支持 Nacos、Apollo，Zookeeper、Consul、Etcd，可通过 SPI 自定义实现）。</li>
<li><a href="https://gitee.com/jd-platform-opensource/asyncTool" target="_blank" rel="noopener noreferrer">asyncTool<ExternalLinkIcon/></a> : 京东的一位大佬开源的多线程工具库，里面大量使用到了 <code v-pre>CompletableFuture</code> ，可以解决任意的多线程并行、串行、阻塞、依赖、回调的并行框架，可以任意组合各线程的执行顺序，带全链路执行结果回调。</li>
</ul>
<h3 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存"><span>缓存</span></a></h3>
<h4 id="本地缓存" tabindex="-1"><a class="header-anchor" href="#本地缓存"><span>本地缓存</span></a></h4>
<ul>
<li><a href="https://github.com/ben-manes/caffeine" target="_blank" rel="noopener noreferrer">Caffeine<ExternalLinkIcon/></a> : 一款强大的本地缓存解决方案，性能非常强大。</li>
<li><a href="https://github.com/google/guava" target="_blank" rel="noopener noreferrer">Guava<ExternalLinkIcon/></a>：Google Java 核心库，内置了比较完善的本地缓存实现。</li>
<li><a href="https://github.com/snazy/ohc" target="_blank" rel="noopener noreferrer">OHC<ExternalLinkIcon/></a> ：Java 堆外缓存解决方案（项目从 2021 年开始就不再进行维护了）。</li>
</ul>
<h4 id="分布式缓存" tabindex="-1"><a class="header-anchor" href="#分布式缓存"><span>分布式缓存</span></a></h4>
<ul>
<li><a href="https://github.com/redis/redis" target="_blank" rel="noopener noreferrer">Redis<ExternalLinkIcon/></a>：一个使用 C 语言开发的内存数据库，分布式缓存首选。</li>
<li><a href="https://github.com/dragonflydb/dragonfly" target="_blank" rel="noopener noreferrer">Dragonfly<ExternalLinkIcon/></a>：一种针对现代应用程序负荷需求而构建的内存数据库，完全兼容 Redis 和 Memcached 的 API，迁移时无需修改任何代码，号称全世界最快的内存数据库。</li>
<li><a href="https://github.com/Snapchat/KeyDB" target="_blank" rel="noopener noreferrer">KeyDB<ExternalLinkIcon/></a>： Redis 的一个高性能分支，专注于多线程、内存效率和高吞吐量。</li>
</ul>
<h4 id="多级缓存" tabindex="-1"><a class="header-anchor" href="#多级缓存"><span>多级缓存</span></a></h4>
<ul>
<li><a href="https://gitee.com/ld/J2Cache" target="_blank" rel="noopener noreferrer">J2Cache<ExternalLinkIcon/></a>：基于本地内存和 Redis 的两级 Java 缓存框架。</li>
<li><a href="https://github.com/alibaba/jetcache" target="_blank" rel="noopener noreferrer">JetCache<ExternalLinkIcon/></a>：阿里开源的缓存框架，支持多级缓存、分布式缓存自动刷新、 TTL 等功能。</li>
</ul>
<h3 id="消息队列" tabindex="-1"><a class="header-anchor" href="#消息队列"><span>消息队列</span></a></h3>
<p><strong>分布式队列</strong>：</p>
<ul>
<li><a href="https://github.com/apache/rocketmq" title="RocketMQ" target="_blank" rel="noopener noreferrer">RocketMQ<ExternalLinkIcon/></a>：阿里巴巴开源的一款高性能、高吞吐量的分布式消息中间件。</li>
<li><a href="https://github.com/apache/kafka" title="Kafaka" target="_blank" rel="noopener noreferrer">Kafaka<ExternalLinkIcon/></a>: Kafka 是一种分布式的，基于发布 / 订阅的消息系统。</li>
<li><a href="https://github.com/rabbitmq" title="RabbitMQ" target="_blank" rel="noopener noreferrer">RabbitMQ<ExternalLinkIcon/></a> :由 erlang 开发的基于 AMQP（Advanced Message Queue 高级消息队列协议）协议实现的消息队列。</li>
</ul>
<p><strong>内存队列</strong>：</p>
<ul>
<li><a href="https://github.com/LMAX-Exchange/disruptor" target="_blank" rel="noopener noreferrer">Disruptor<ExternalLinkIcon/></a>：Disruptor 是英国外汇交易公司 LMAX 开发的一个高性能队列，研发的初衷是解决内存队列的延迟问题（在性能测试中发现竟然与 I/O 操作处于同样的数量级）。</li>
</ul>
<h3 id="读写分离和分库分表" tabindex="-1"><a class="header-anchor" href="#读写分离和分库分表"><span>读写分离和分库分表</span></a></h3>
<ul>
<li><a href="https://github.com/apache/shardingsphere" target="_blank" rel="noopener noreferrer">ShardingSphere<ExternalLinkIcon/></a>：ShardingSphere 是一套开源的分布式数据库中间件解决方案组成的生态圈，它由 Sharding-JDBC、Sharding-Proxy 和 Sharding-Sidecar（计划中）这 3 款相互独立的产品组成。</li>
<li><a href="https://github.com/MyCatApache/MyCat2" target="_blank" rel="noopener noreferrer">MyCat<ExternalLinkIcon/></a> : MyCat 是数据库分库分表的中间件，MyCat 使用最多的两个功能是：读写分离和分库分表。MyCat 是一些社区爱好者在阿里 Cobar 的基础上进行二次开发，解决了 Cobar 当时存 在的一些问题，并且加入了许多新的功能在其中。</li>
<li><a href="https://github.com/baomidou/dynamic-datasource-spring-boot-starter" target="_blank" rel="noopener noreferrer">dynamic-datasource-spring-boot-starter<ExternalLinkIcon/></a>：一个基于 Spring Boot 的快速集成多数据源的启动器，支持多数据源、动态数据源、主从分离、读写分离和分布式事务。</li>
</ul>
<h2 id="高可用" tabindex="-1"><a class="header-anchor" href="#高可用"><span>高可用</span></a></h2>
<h3 id="限流" tabindex="-1"><a class="header-anchor" href="#限流"><span>限流</span></a></h3>
<p>分布式限流：</p>
<ul>
<li><a href="https://github.com/alibaba/Sentinel" target="_blank" rel="noopener noreferrer">Sentinel<ExternalLinkIcon/></a>（推荐）：面向分布式服务架构的高可用防护组件，主要以流量为切入点，从流量控制、熔断降级、系统自适应保护等多个维度来帮助用户保障微服务的稳定性。</li>
<li><a href="https://github.com/Netflix/Hystrix" target="_blank" rel="noopener noreferrer">Hystrix<ExternalLinkIcon/></a>：类似于 Sentinel 。</li>
</ul>
<p>相关阅读：<a href="https://sentinelguard.io/zh-cn/blog/sentinel-vs-hystrix.html" target="_blank" rel="noopener noreferrer">Sentinel 与 Hystrix 的对比<ExternalLinkIcon/></a>。</p>
<p>单机限流：</p>
<ul>
<li><a href="https://github.com/vladimir-bukhtoyarov/bucket4j" target="_blank" rel="noopener noreferrer">Bucket4j<ExternalLinkIcon/></a>：一个非常不错的基于令牌/漏桶算法的限流库。</li>
<li><a href="https://github.com/resilience4j/resilience4j" target="_blank" rel="noopener noreferrer">Resilience4j<ExternalLinkIcon/></a>：一个轻量级的容错组件，其灵感来自于 Hystrix。</li>
</ul>
<h3 id="监控" tabindex="-1"><a class="header-anchor" href="#监控"><span>监控</span></a></h3>
<ul>
<li><a href="https://github.com/codecentric/spring-boot-admin" target="_blank" rel="noopener noreferrer">Spring Boot Admin<ExternalLinkIcon/></a>：管理和监控 Spring Boot 应用程序。</li>
<li><a href="https://github.com/dropwizard/metrics" target="_blank" rel="noopener noreferrer">Metrics<ExternalLinkIcon/></a>：捕获 JVM 和应用程序级别的指标。所以你知道发生了什么事。</li>
</ul>
<h3 id="日志" tabindex="-1"><a class="header-anchor" href="#日志"><span>日志</span></a></h3>
<ul>
<li>EKL 老三件套 : 最原始的时候，ELK 是由 3 个开源项目的首字母构成，分别是 Elasticsearch、Logstash、Kibana。</li>
<li>新一代 ELK 架构 : Elasticsearch+Logstash+Kibana+Beats。</li>
<li>EFK : EFK 中的 F 代表的是 <a href="https://github.com/fluent/fluentd" target="_blank" rel="noopener noreferrer">Fluentd<ExternalLinkIcon/></a>。</li>
<li><a href="https://gitee.com/dromara/TLog" target="_blank" rel="noopener noreferrer">TLog<ExternalLinkIcon/></a>：一个轻量级的分布式日志标记追踪神器，10 分钟即可接入，自动对日志打标签完成微服务的链路追踪。</li>
</ul>
<h2 id="字节码操作" tabindex="-1"><a class="header-anchor" href="#字节码操作"><span>字节码操作</span></a></h2>
<ul>
<li><a href="https://asm.ow2.io/" target="_blank" rel="noopener noreferrer">ASM<ExternalLinkIcon/></a>：通用 Java 字节码操作和分析框架。它可用于直接以二进制形式修改现有类或动态生成类。</li>
<li><a href="https://github.com/raphw/byte-buddy" target="_blank" rel="noopener noreferrer">Byte Buddy<ExternalLinkIcon/></a>：Java 字节码生成和操作库，用于在 Java 应用程序运行时创建和修改 Java 类，无需使用编译器</li>
<li><a href="https://github.com/jboss-javassist/javassist" target="_blank" rel="noopener noreferrer">Javassist<ExternalLinkIcon/></a>：动态编辑 Java 字节码的类库。</li>
<li><a href="https://github.com/Col-E/Recaf" target="_blank" rel="noopener noreferrer">Recaf<ExternalLinkIcon/></a>：现代 Java 字节码编辑器，基于 ASM（Java 字节码操作框架） 来修改字节码，可简化编辑已编译 Java 应用程序的过程。</li>
</ul>
</div></template>


