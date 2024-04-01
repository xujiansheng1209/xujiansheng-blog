import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-Cg1ooxyK.js";const e={},p=t(`<h1 id="kafka的使用" tabindex="-1"><a class="header-anchor" href="#kafka的使用"><span>kafka的使用</span></a></h1><h2 id="_1-引入kafka的依赖" tabindex="-1"><a class="header-anchor" href="#_1-引入kafka的依赖"><span>1.引入kafka的依赖</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>        &lt;dependency&gt;
            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;
            &lt;artifactId&gt;spring-cloud-starter-stream-kafka&lt;/artifactId&gt;
        &lt;/dependency&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-配置kafka" tabindex="-1"><a class="header-anchor" href="#_2-配置kafka"><span>2.配置kafka</span></a></h2><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">kafka</span><span class="token punctuation">:</span>
    <span class="token key atrule">bootstrap-servers</span><span class="token punctuation">:</span> 156.65.20.76<span class="token punctuation">:</span><span class="token number">9092</span><span class="token punctuation">,</span>156.65.20.77<span class="token punctuation">:</span><span class="token number">9092</span><span class="token punctuation">,</span>156.65.20.78<span class="token punctuation">:</span><span class="token number">9092</span> <span class="token comment">#指定Kafka集群的地址，这里有三个地址，用逗号分隔。</span>
    <span class="token key atrule">listener</span><span class="token punctuation">:</span>
      <span class="token key atrule">ack-mode</span><span class="token punctuation">:</span> manual_immediate <span class="token comment">#设置消费者的确认模式为manual_immediate，表示消费者在接收到消息后立即手动确认。</span>
      <span class="token key atrule">concurrency</span><span class="token punctuation">:</span> <span class="token number">3</span>  <span class="token comment">#设置消费者的并发数为5</span>
      <span class="token key atrule">missing-topics-fatal</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  <span class="token comment">#设置为false，表示如果消费者订阅的主题不存在，不会抛出异常。</span>
    <span class="token key atrule">producer</span><span class="token punctuation">:</span>
      <span class="token key atrule">key-serializer</span><span class="token punctuation">:</span> org.apache.kafka.common.serialization.StringSerializer  <span class="token comment"># 设置消息键的序列化器</span>
      <span class="token key atrule">value-serializer</span><span class="token punctuation">:</span> org.apache.kafka.common.serialization.StringSerializer <span class="token comment">#设置消息值的序列化器</span>
      <span class="token key atrule">acks</span><span class="token punctuation">:</span> <span class="token number">1</span>  <span class="token comment">#一般就是选择1，兼顾可靠性和吞吐量 ，如果想要更高的吞吐量设置为0，如果要求更高的可靠性就设置为-1</span>
    <span class="token key atrule">consumer</span><span class="token punctuation">:</span>
      <span class="token key atrule">auto-offset-reset</span><span class="token punctuation">:</span> earliest <span class="token comment">#设置为&quot;earliest&quot;表示将从最早的可用消息开始消费，即从分区的起始位置开始读取消息。</span>
      <span class="token key atrule">enable-auto-commit</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment">#禁用了自动提交偏移量的功能，为了避免出现重复数据和数据丢失，一般都是手动提交</span>
      <span class="token key atrule">key-deserializer</span><span class="token punctuation">:</span> org.apache.kafka.common.serialization.StringDeserializer  <span class="token comment"># 设置消息键的反序列化器</span>
      <span class="token key atrule">value-deserializer</span><span class="token punctuation">:</span> org.apache.kafka.common.serialization.StringDeserializer <span class="token comment">#设置消息值的反序列化器</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-创建主题" tabindex="-1"><a class="header-anchor" href="#_3-创建主题"><span>3.创建主题</span></a></h2><ul><li><p>自动创建(不推荐)</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在kafka的安装目录conf目录下找到该配置文件server.properties，添加如下配置：
num.partitions=3 #默认3个分区
auto.create.topics.enable=true #开启自动创建主题
default.replication.factor=3 #默认3个副本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>手动创建</p></li></ul><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>在kafka的安装目录bin目录下，执行如下命令：
//创建一个有三个分区和三个副本，名为zhuoye的主题
./kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 3 --partitions 3  --topic zhuoye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-生产者代码" tabindex="-1"><a class="header-anchor" href="#_4-生产者代码"><span>4.生产者代码</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ALiYunServiceImpl</span> implents <span class="token class-name">IALiYunService</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">KafkaTemplate</span> kafkaTemplate<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Autowired</span>
    <span class="token keyword">private</span> <span class="token class-name">ExecutorService</span> executorService<span class="token punctuation">;</span>
    <span class="token class-name">String</span> topicName <span class="token operator">=</span> <span class="token string">&quot;zhuoye&quot;</span><span class="token punctuation">;</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">queryECSMetricInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//发送到kafka的消息集合,因为使用了多线程，并且在多线程中往该集合进行添加操作，所以需要线程安全的</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Message</span><span class="token punctuation">&gt;</span></span> messages <span class="token operator">=</span> <span class="token class-name">Collections</span><span class="token punctuation">.</span><span class="token function">synchronizedList</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        <span class="token comment">//获取上次查询时间</span>
        <span class="token class-name">Long</span> startTime <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span>queryTimeRecordMapper<span class="token punctuation">.</span><span class="token function">selectTimeByBelongId</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">;</span>
        <span class="token class-name">Long</span> endTime <span class="token operator">=</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">//查询出所有的运行中的实例</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">CloudInstanceAssetDto</span><span class="token punctuation">&gt;</span></span> cloudInstances <span class="token operator">=</span> cloudInstanceAssetMapper<span class="token punctuation">.</span><span class="token function">queryAllRunningInstance</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Running&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span>cloudInstances<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//定义计数器</span>
            <span class="token class-name">CountDownLatch</span> latch <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CountDownLatch</span><span class="token punctuation">(</span>cloudInstances<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//遍历查询</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">CloudInstanceAssetDto</span> instance <span class="token operator">:</span> cloudInstances<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                executorService<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
                    <span class="token keyword">try</span> <span class="token punctuation">{</span>
                        <span class="token comment">//获取内网流出带宽，并将结果封装到消息集合中</span>
                        <span class="token function">dealMetricDataToMessage</span><span class="token punctuation">(</span><span class="token class-name">ALiYunConstant</span><span class="token punctuation">.</span><span class="token constant">ECS_INTRANET_OUT_RATE</span><span class="token punctuation">,</span> <span class="token class-name">ALiYunConstant</span><span class="token punctuation">.</span><span class="token constant">INTRANET_OUT_RATE_NAME</span><span class="token punctuation">,</span> <span class="token class-name">ALiYunConstant</span><span class="token punctuation">.</span><span class="token constant">LW_INTRANET_OUT_RATE_CODE</span><span class="token punctuation">,</span>
                                startTime<span class="token punctuation">,</span> endTime<span class="token punctuation">,</span> instance<span class="token punctuation">,</span> messages<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;获取ECS的指标数据-多线程处理任务异常！&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
                        latch<span class="token punctuation">.</span><span class="token function">countDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>

                <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">//等待任务执行完毕</span>
            latch<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//将最终的消息集合发送到kafka</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">CollectionUtils</span><span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span>messages<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> messages<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isNotBlank</span><span class="token punctuation">(</span>messages<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                            <span class="token operator">&amp;&amp;</span> <span class="token string">&quot;noSuchInstance&quot;</span><span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>messages<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        <span class="token keyword">continue</span><span class="token punctuation">;</span>
                    <span class="token punctuation">}</span>
                  kafkaTemplate<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>topicName<span class="token punctuation">,</span>  messages<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            flag <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;获取ECS的指标数据失败&quot;</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token comment">//更新记录上次查询时间</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">QueryTimeRecord</span> queryTimeRecord <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">QueryTimeRecord</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            queryTimeRecord<span class="token punctuation">.</span><span class="token function">setBelongId</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setLastQueryTime</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">valueOf</span><span class="token punctuation">(</span><span class="token punctuation">(</span>endTime <span class="token operator">-</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//开始时间往前推1分钟</span>
            queryTimeRecordMapper<span class="token punctuation">.</span><span class="token function">updateByBelongId</span><span class="token punctuation">(</span>queryTimeRecord<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候，如果你想看有没有把消息发送到kafka的指定主题可以使用如下命令：</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>kafka-console-consumer.sh --bootstrap-server localhost:9093 --topic zhuoye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_5-消费者代码" tabindex="-1"><a class="header-anchor" href="#_5-消费者代码"><span>5.消费者代码</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@Component</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">KafkaConsumer</span> <span class="token punctuation">{</span>
    <span class="token comment">// 消费监听</span>
    <span class="token annotation punctuation">@KafkaListener</span><span class="token punctuation">(</span>topics <span class="token operator">=</span> <span class="token string">&quot;zhuoye&quot;</span><span class="token punctuation">,</span>groupId <span class="token operator">=</span><span class="token string">&quot;zhuoye-aliyunmetric&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">consumeExtractorChangeMessage</span><span class="token punctuation">(</span><span class="token class-name">ConsumerRecord</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> record<span class="token punctuation">,</span> <span class="token class-name">Acknowledgment</span> ack<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">String</span> value <span class="token operator">=</span> record<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">//处理数据，存入openTsDb</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
            <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
            ack<span class="token punctuation">.</span><span class="token function">acknowledge</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//手动提交</span>
        <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&quot;kafa-topic【zhuoye】消费阿里云指标源消息【失败】&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-常用kafka的命令" tabindex="-1"><a class="header-anchor" href="#_6-常用kafka的命令"><span>6.常用Kafka的命令</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>//创建主题
./kafka-topics.sh --create --bootstrap-server localhost:9092 --replication-factor 3 --partitions 3  --topic zhuoye
//查看kafka是否接收对应的消息
 kafka-console-consumer.sh --bootstrap-server localhost:9093 --topic zhuoye
// 修改kafka-topic分区数
./kafka-topics.sh --zookeeper localhost:2181 -alter --partitions 6 --topic zhuoye
// 查看topic分区数
./kafka-topics.sh --zookeeper localhost:2181 --describe --topic zhuoye
// 查看用户组消费情况
./kafka-consumer-groups.sh --bootstrap-server localhost:9092 --group zhuoye-aliyunmetric --describe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(e,[["render",o],["__file","kafka的使用.html.vue"]]),d=JSON.parse('{"path":"/java-essentials/kafka%E7%9A%84%E4%BD%BF%E7%94%A8.html","title":"kafka的使用","lang":"zh-CN","frontmatter":{"description":"kafka的使用 1.引入kafka的依赖 2.配置kafka 3.创建主题 自动创建(不推荐) 手动创建 4.生产者代码 这个时候，如果你想看有没有把消息发送到kafka的指定主题可以使用如下命令： 5.消费者代码 6.常用Kafka的命令","head":[["meta",{"property":"og:url","content":"https://snailcoding.cn/java-essentials/kafka%E7%9A%84%E4%BD%BF%E7%94%A8.html"}],["meta",{"property":"og:site_name","content":"蜗牛のJava宝典"}],["meta",{"property":"og:title","content":"kafka的使用"}],["meta",{"property":"og:description","content":"kafka的使用 1.引入kafka的依赖 2.配置kafka 3.创建主题 自动创建(不推荐) 手动创建 4.生产者代码 这个时候，如果你想看有没有把消息发送到kafka的指定主题可以使用如下命令： 5.消费者代码 6.常用Kafka的命令"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:author","content":"Mr.Xu"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"kafka的使用\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Xu\\",\\"url\\":\\"https://snailcoding.cn\\"}]}"]]},"headers":[{"level":2,"title":"1.引入kafka的依赖","slug":"_1-引入kafka的依赖","link":"#_1-引入kafka的依赖","children":[]},{"level":2,"title":"2.配置kafka","slug":"_2-配置kafka","link":"#_2-配置kafka","children":[]},{"level":2,"title":"3.创建主题","slug":"_3-创建主题","link":"#_3-创建主题","children":[]},{"level":2,"title":"4.生产者代码","slug":"_4-生产者代码","link":"#_4-生产者代码","children":[]},{"level":2,"title":"5.消费者代码","slug":"_5-消费者代码","link":"#_5-消费者代码","children":[]},{"level":2,"title":"6.常用Kafka的命令","slug":"_6-常用kafka的命令","link":"#_6-常用kafka的命令","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":3.18,"words":954},"filePathRelative":"java-essentials/kafka的使用.md","excerpt":"\\n<h2>1.引入kafka的依赖</h2>\\n<div class=\\"language-text\\" data-ext=\\"text\\" data-title=\\"text\\"><pre class=\\"language-text\\"><code>        &lt;dependency&gt;\\n            &lt;groupId&gt;org.springframework.cloud&lt;/groupId&gt;\\n            &lt;artifactId&gt;spring-cloud-starter-stream-kafka&lt;/artifactId&gt;\\n        &lt;/dependency&gt;\\n</code></pre></div>","autoDesc":true}');export{r as comp,d as data};
