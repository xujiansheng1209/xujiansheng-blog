<template><div><h2 id="_1-hashset-如何保证数据不可重复" tabindex="-1"><a class="header-anchor" href="#_1-hashset-如何保证数据不可重复"><span>1. HashSet 如何保证数据不可重复？</span></a></h2>
<p>HashSet 保证数据不可重复的原因和 HashSet 添加数据的流程有关。</p>
<p>添加的流程是：当将一个键值对放入 HashMap 时，首先根据 key 的 hashCode() 返回值决定该 Entry 的存储位置。如果有两个 key 的 hash 值相同，则会判断这两个元素 key 的 equals() 是否相同，如果相同就返回 true，说明是重复键值对，那么 HashSet 中 add() 方法的返回值会是 false，表示 HashSet 添加元素失败。因此，如果向 HashSet 中添加一个已经存在的元素，新添加的集合元素不会覆盖已有元素，从而保证了元素的不重复。如果不是重复元素，put 方法最终会返回 null，传递到 HashSet 的 add 方法就是添加成功。</p>
<p>当将一个键值对放入 HashMap 时，首先根据 key 的 hashCode() 返回值决定该 Entry 的存储位置。如果有两个 key 的 hash 值相同，则会判断这两个元素 key 的 equals() 是否相同，如果相同就返回 true，说明是重复键值对，那么 HashSet 中 add() 方法的返回值会是 false，表示 HashSet 添加元素失败。因此，如果向 HashSet 中添加一个已经存在的元素，新添加的集合元素不会覆盖已有元素，从而保证了元素的不重复。如果不是重复元素，put 方法最终会返回 null，传递到 HashSet 的 add 方法就是添加成功。</p>
<h2 id="_2-hashmap-和-hashtable-有什么区别" tabindex="-1"><a class="header-anchor" href="#_2-hashmap-和-hashtable-有什么区别"><span>2.HashMap 和 Hashtable 有什么区别？</span></a></h2>
<p>它们的区别体现在以下几个方面：</p>
<ol>
<li>存储方面：HashMap 允许 key 和 value 为 null，而 Hashtable 不允许；</li>
<li>线程安全方面：Hashtable 是线程安全的，而 HashMap 是非线程安全的；</li>
<li>使用推荐方面：在 Hashtable 的类注释可以看到，Hashtable 是保留类不建议使用，推荐在单线程环境下使用 HashMap 替代，如果需要多线程使用则用 ConcurrentHashMap 替代。</li>
</ol>
<h2 id="_3-hashmap-底层是如何实现的" tabindex="-1"><a class="header-anchor" href="#_3-hashmap-底层是如何实现的"><span>3. HashMap 底层是如何实现的？</span></a></h2>
<p>HashMap 在 JDK 1.7 和 JDK 1.8 的底层实现是不一样的。</p>
<p>在 JDK 1.7 中，HashMap 使用的是数组 + 链表实现的，而 JDK 1.8 中使用的是数组 + 链表或红黑树实现的。</p>
<h2 id="_4-说一下-hashmap-新增流程" tabindex="-1"><a class="header-anchor" href="#_4-说一下-hashmap-新增流程"><span>4. 说一下 HashMap 新增流程？</span></a></h2>
<p>简单来说 HashMap 的元素添加流程是，先将 key 值进行 hash 得到哈希值，根据哈希值得到元素位置，判断元素位置是否为空，如果为空直接插入，不为空判断是否为红黑树，如果是红黑树则直接插入，否则判断链表是否大于 8，且数组长度大于 64，如果满足这两个条件则把链表转成红黑树，然后插入元素，如果不满足这两个条件中的任意一个，则遍历链表进行插入。</p>
<h2 id="_5-为什么链表要升级为红黑树" tabindex="-1"><a class="header-anchor" href="#_5-为什么链表要升级为红黑树"><span>5. 为什么链表要升级为红黑树？</span></a></h2>
<p>在 JDK 1.8 以上的版本中，当链表长度达到 8，并且数组长度大于等于 64 时，链表会转换为红黑树存储。因为链表超过一定长度之后查询效率就会很低，它的时间复杂度是 O(n)，而红黑树的时间复杂度是 O(logn)，因此引入红黑树可以加快 HashMap 在数据量比较大的情况下的查询效率。</p>
<h2 id="_6-什么情况红黑树会退化为链表" tabindex="-1"><a class="header-anchor" href="#_6-什么情况红黑树会退化为链表"><span>6. 什么情况红黑树会退化为链表？</span></a></h2>
<p>当 TreeNode 长度小于 6 时，会退化为链表。</p>
<h2 id="_7-为什么-hashmap-要使用红黑树" tabindex="-1"><a class="header-anchor" href="#_7-为什么-hashmap-要使用红黑树"><span>7. 为什么 HashMap 要使用红黑树？</span></a></h2>
<p>主要原因有以下几个：</p>
<ol>
<li>二分查找树：它的左右节点不平衡，一开始就固定了 root，那么极端的情况下会成为链表结构；</li>
<li>链表：链表长度越长，那么他的插入和查询效率都很低；</li>
<li>红黑树：红黑树它的整体查找，增删节点的效率都是比较高的。</li>
</ol>
<p>所以综合来说，使用红黑树最合适 HashMap 的存储。</p>
<h2 id="_8-hashmap-重要的参数有哪些-为什么加载因子是-0-75" tabindex="-1"><a class="header-anchor" href="#_8-hashmap-重要的参数有哪些-为什么加载因子是-0-75"><span>8. HashMap 重要的参数有哪些？为什么加载因子是 0.75？</span></a></h2>
<p>HashMap 有两个重要的参数：容量（Capacity）和加载因子（LoadFactor）。</p>
<ol>
<li>容量（Capacity）：是指 HashMap 中桶的数量，默认的初始值为 16。</li>
<li>加载因子（LoadFactor）：也被称为装载因子，或负载因子，LoadFactor 是用来判定 HashMap 是否扩容的依据，默认值为 0.75f，装载因子的计算公式 = HashMap 存放的 KV 总和（size）/ Capacity。</li>
</ol>
<p>加载因子是 0.75是出于容量和性能之间平衡的结果：</p>
<ol>
<li>当加载因子设置比较大的时候，扩容的门槛就被提高了，扩容发生的频率比较低，占用的空间会比较小，但此时发生 Hash 冲突的几率就会提升，因此需要更复杂的数据结构来存储元素，这样对元素的操作时间就会增加，运行效率也会因此降低；</li>
<li>而当加载因子值比较小的时候，扩容的门槛会比较低，因此会占用更多的空间，此时元素的存储就比较稀疏，发生哈希冲突的可能性就比较小，因此操作性能会比较高。</li>
</ol>
<p>所以综合了以上情况，就取了一个 0.5 到 1.0 的平均数 0.75 作为加载因子。</p>
<h2 id="_9-hashmap-如何解决哈希冲突" tabindex="-1"><a class="header-anchor" href="#_9-hashmap-如何解决哈希冲突"><span>9. HashMap 如何解决哈希冲突？</span></a></h2>
<p>HashMap 在 JDK 1.8 版本中是通过链式寻址法，以及红黑树来解决 Hash 冲突的问题。其中红黑树是为了优化 Hash 表的链表过长导致时间复杂度增加的问题，当链表长度大于等于 8，并且数组的容量大于 64 的时候，再向链表添加元素，就会触发链表向红黑树的一个转化。</p>
<h2 id="_10-concurrenthashmap-如何保证线程安全" tabindex="-1"><a class="header-anchor" href="#_10-concurrenthashmap-如何保证线程安全"><span>10. ConcurrentHashMap 如何保证线程安全？</span></a></h2>
<ul>
<li>ConcurrentHashMap 在 JDK 1.7 时是通过分段锁来保证线程安全的，</li>
<li>而在 JDK 1.8 时是在头节点加锁，通过CAS + volatile 或 synchronized 的方式来保证线程安全的。</li>
</ul>
</div></template>


