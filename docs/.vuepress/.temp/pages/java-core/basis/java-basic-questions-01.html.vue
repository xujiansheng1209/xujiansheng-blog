<template><div><h2 id="_1-和-equals的区别" tabindex="-1"><a class="header-anchor" href="#_1-和-equals的区别"><span>1. == 和 equals的区别?</span></a></h2>
<p>==：</p>
<ul>
<li>基本数据类型：==是比较值是否相等</li>
<li>引用类型：==是判断对象的指向的内存地址是否相同</li>
</ul>
<p>equals：</p>
<ul>
<li>如果是字符串，则是判断字符串内容是否相同</li>
<li>如果是object对象，比较的是内存地址是否相同</li>
<li>如果是自己的类重写equals，可以自定义两个对象是否相等</li>
</ul>
<h2 id="_2-两个对象的hashcode相同-equals是否也相同" tabindex="-1"><a class="header-anchor" href="#_2-两个对象的hashcode相同-equals是否也相同"><span>2. 两个对象的hashcode相同，equals是否也相同?</span></a></h2>
<p>两个对象equls相等，hashcode必须相等，hashcode相同，equals不一定相同</p>
<h2 id="_3-重载和重写的区别" tabindex="-1"><a class="header-anchor" href="#_3-重载和重写的区别"><span>3. 重载和重写的区别</span></a></h2>
<p>重载：同一个类中多个名称相同的方法，这些方法参数列表各不相同(参数个数或类型不同)<br>
重写：</p>
<ul>
<li>重写必须继承，子类中的方法与父类中的方法名称参数完全相同，通过子类的实例对象调用这个方法将调用子类对象定义的方法，相当于将父类中定义的那个方法给覆盖了，这是多态的一种表现</li>
<li>重写的方法修饰符大于等于父类的方法，访问权限只能比父类更大，不能更小，重载与修饰符无关</li>
<li>重写覆盖的方法中，只能比父类跑出更少的异常，或者是抛出父类抛出的异常的子异常</li>
</ul>
<h2 id="_4-接口和抽象类有什么区别" tabindex="-1"><a class="header-anchor" href="#_4-接口和抽象类有什么区别"><span>4. 接口和抽象类有什么区别?</span></a></h2>
<ul>
<li>抽象类要被子类继承，关键字是abstract，接口要被子类实现，关键字是interface</li>
<li>抽象类可以有构造方法和普通成员变量，接口不能有</li>
<li>抽象类中可以作方法声明，也可以做方法实现，接口只能做方法声明</li>
<li>一个类可以实现多个接口但是只能继承一个父类，这个父类可以是抽象类</li>
<li>抽象级别：接口&gt;抽象类&gt;实现类</li>
<li>抽象类主要用来抽象类别，接口主要是用来抽象方法功能</li>
</ul>
<h2 id="_5-string类的常用方法都有哪些" tabindex="-1"><a class="header-anchor" href="#_5-string类的常用方法都有哪些"><span>5.  String类的常用方法都有哪些?</span></a></h2>
<ul>
<li>indexOf()：返回指定字符的索引</li>
<li>charAt()：返回指定索引处的字符</li>
<li>replace()：字符串替换</li>
<li>trim()：去除字符串两端空白</li>
<li>split()：分割字符串，返回一个分割后的字符串数组</li>
<li>getBytes()：返回字符串的byte类型数组</li>
<li>length()：返回字符串长度</li>
<li>toLowerCase()：将字符串转成小写字母</li>
<li>toUpperCase()：将字符串转成大写字符</li>
<li>substring()：截取字符串</li>
<li>equals()：字符串比较</li>
</ul>
<h2 id="_6-string、stringbuffer、stringbuilder的区别" tabindex="-1"><a class="header-anchor" href="#_6-string、stringbuffer、stringbuilder的区别"><span>6.String、StringBuffer、StringBuilder的区别?</span></a></h2>
<p>可变性：</p>
<ul>
<li>String内部的value值是final修饰的，所以它是不可变类，每次修改String的值，都会产生一个新的对象</li>
<li>StringBuffer和StringBuilder是可变类，字符串的变更不会产生新的对象</li>
</ul>
<p>线程安全性：</p>
<ul>
<li>String是不可变类，所以它是线程安全的</li>
<li>StringBuffer是线程安全的，因为它每个操作方法都加了synchronized同步关键字</li>
<li>StringBuilder不是线程安全的，在多线程情况下对字符串进行操作，应该使用StringBuffer，否则使用StringBuilder</li>
</ul>
<p>性能方面：</p>
<ul>
<li>String的性能是最低的，不可变意味着在做字符串拼接和修改的时候，要创建新的对象和分配内存</li>
<li>StringBuffer要比String性能高，因为它的可变形使得字符串可以直接被修改</li>
<li>StringBuilder要比StringBuffer性能高，因为StringBuffer加了同步锁</li>
</ul>
<p>存储方面：</p>
<ul>
<li>String存储在字符串常量池里面</li>
<li>StringBuffer和StringBuilder存储在堆内存空间</li>
</ul>
<h2 id="_7-java中的几种数据类型是什么-各自占用多少字节" tabindex="-1"><a class="header-anchor" href="#_7-java中的几种数据类型是什么-各自占用多少字节"><span>7. Java中的几种数据类型是什么，各自占用多少字节?</span></a></h2>
<ul>
<li>int 4</li>
<li>short 2</li>
<li>long 8</li>
<li>byte  1</li>
<li>char 2</li>
<li>float 4</li>
<li>double 8</li>
<li>boolean</li>
</ul>
<h2 id="_8-string类能被继承吗-为什么" tabindex="-1"><a class="header-anchor" href="#_8-string类能被继承吗-为什么"><span>8. String类能被继承吗，为什么?</span></a></h2>
<p>String类被final修饰，final修饰的类不能被继承，String类为什么不能被继承， 主要有两个原因:</p>
<ul>
<li>效率性：String类作为最常用的类之一，禁止被继承和重写，可以提高效率</li>
<li>安全性：String类中有很多调用底层的本地方法，调用了操作系统的API，如果方法可以重写，可能被植入恶意代码，破坏程序</li>
</ul>
<h2 id="_9-说说java中多态的实现原理" tabindex="-1"><a class="header-anchor" href="#_9-说说java中多态的实现原理"><span>9.说说Java中多态的实现原理?</span></a></h2>
<p>多态机制包括:静态多态（编译时多态）和动态多态(运行时多态)</p>
<ul>
<li>静态多态比如说重载，动态多态一般指在运行时才能确定调用哪个方法，通常说的多态一般是指运行时多态，就是编译时不确定究竟调用哪个具体方法，一直等到运行时才能确定。</li>
<li>多态实现方式：子类继承父类（extends）和类实现接口（implements）</li>
<li>多态核心之处就在于对父类方法的改写和对接口方法的实现，来取得运行时不同的执行效果，Java里对象方法的调用是依靠类信息里的方法表实现，对象方法引用调用和接口方法引用调用的大致思想一样，当调用对象的某个方法时，JVM查找该对象类的方法表以确定该方法的直接引用地址，有了地址后才真正调用该方法。</li>
<li>例子：Fruit父类，一个taste方法，两个子类Apple和Pear，程序运行，当调用对象Fruit f的方法taste时，JVM查找Fruit对象类的方法表已确定taste方法的直接引用地址，到底来自Apple还是Pear，确定后才真正调用对应子类的taste方法</li>
</ul>
<h2 id="_10-为什么重写-equals-时-必须重写-hashcode" tabindex="-1"><a class="header-anchor" href="#_10-为什么重写-equals-时-必须重写-hashcode"><span>10.为什么重写 equals 时，必须重写 hashCode？</span></a></h2>
<p>equals 和 hashCode  两个方法是用来协同判断两个对象是否相等的，采用这种方式的原因是可以提高程序插入和查询的速度，如果在重写 equals 时，不重写 hashCode，就会导致在某些场景下，例如将两个相等的自定义对象存储在 Set 集合时，就会出现程序执行的异常，为了保证程序的正常执行，所以我们就需要在重写 equals 时，也一并重写 hashCode 方法才行。</p>
<p><strong>异常问题分析</strong></p>
<p>比如在 Set 集合存储数据时，如果只重写了 equals 方法，那么默认情况下，Set 进行去重判断时，会先判断两个对象的 hashCode 是否相同，而此时因为没有重写 hashCode 方法，所以会默认调用 Object 中的 hashCode 方法，而 Object 中的 hashCode 方法会得到两个对象的哈希值，而两个对象因为引用地址不同，所以哈希的结果也是不同的，因此会直接返回 false，于是 Set 集合就插入了两个相等的对象。</p>
<p>但是，如果在重写 equals 方法时，也重写了 hashCode 方法，那么在执行判断时会去执行重写的 hashCode 方法，此时对比的是两个对象的所有属性的 hashCode，因为属性为基础数据类型或 String，所以哈希之后得到的 hashCode 值也是相同的，于是再去调用 equals 方法，发现两个对象确实是相等的，于是就返回 true 了，因此 Set 集合就不会存储两个相等的数据了，那么整个程序也能正常执行了。</p>
</div></template>


