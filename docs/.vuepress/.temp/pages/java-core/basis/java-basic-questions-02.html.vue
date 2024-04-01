<template><div><h2 id="_1-int-和-integer-有什么区别" tabindex="-1"><a class="header-anchor" href="#_1-int-和-integer-有什么区别"><span>1.int 和 Integer 有什么区别？</span></a></h2>
<p>int 和 Integer的区别主要体现在以下几个方面：</p>
<ol>
<li>数据类型不同：int 是基础数据类型，而 Integer 是包装数据类型；</li>
<li>默认值不同：int 的默认值是 0，而 Integer 的默认值是 null；</li>
<li>内存中存储的方式不同：int 在内存中直接存储的是数据值，而 Integer 实际存储的是对象引用，当 new 一个 Integer 时实际上是生成一个指针指向此对象；</li>
<li>实例化方式不同：Integer 必须实例化才可以使用，而 int 不需要；</li>
<li>变量的比较方式不同：int 可以使用 == 来对比两个变量是否相等，而 Integer 一定要使用 equals 来比较两个变量是否相等。</li>
</ol>
<h2 id="_2-integer-有什么优点-integer-可以使用-进行比较吗-为什么" tabindex="-1"><a class="header-anchor" href="#_2-integer-有什么优点-integer-可以使用-进行比较吗-为什么"><span>2. Integer 有什么优点？Integer 可以使用 == 进行比较吗？为什么？</span></a></h2>
<ul>
<li>包装类 Integer 的优点是解决了基本数据类型无法做到的事情泛型类型参数、序列化、类型转换、高频区间数据缓存等问题。</li>
<li>Integer 不能使用 == 比较，因为 Integer 本身是对象，而 == 比较的是对象地址，所以不能使用== 比较。</li>
</ul>
<h2 id="_3-普通类和抽象类有哪些区别" tabindex="-1"><a class="header-anchor" href="#_3-普通类和抽象类有哪些区别"><span>3. 普通类和抽象类有哪些区别？</span></a></h2>
<ol>
<li>普通类不能包含抽象方法，抽象类可以包含抽象方法。</li>
<li>抽象类不能直接实例化，普通类可以直接实例化。</li>
</ol>
<h2 id="_4-抽象类必须要有抽象方法吗" tabindex="-1"><a class="header-anchor" href="#_4-抽象类必须要有抽象方法吗"><span>4. 抽象类必须要有抽象方法吗？</span></a></h2>
<p>不需要，抽象类不一定非要有抽象方法。</p>
<h2 id="_5-抽象类能使用-final-修饰吗" tabindex="-1"><a class="header-anchor" href="#_5-抽象类能使用-final-修饰吗"><span>5. 抽象类能使用 final 修饰吗？</span></a></h2>
<p>不能，定义抽象类就是让其他类继承的，如果定义为 final 该类就不能被继承，这样彼此就会产生矛盾，所以 final 不能修饰抽象类。</p>
<h2 id="_6-抽象类和接口有什么区别" tabindex="-1"><a class="header-anchor" href="#_6-抽象类和接口有什么区别"><span>6. 抽象类和接口有什么区别？</span></a></h2>
<p>接口和抽象类都是用来定义对象的公共行为的，但二者有以下 7 点不同：</p>
<ol>
<li>定义的关键字不同；</li>
<li>子类继承或实现关键字不同；</li>
<li>类型扩展不同：抽象类是单继承，而接口是多继承；</li>
<li>方法访问控制符：抽象类无限制，只是抽象类中的抽象方法不能被 private 修饰；而接口有限制，接口默认的是 public 控制符；</li>
<li>属性方法控制符：抽象类无限制，而接口有限制，接口默认的是 public 控制符；</li>
<li>方法实现不同：抽象类中的普通方法必须有实现，抽象方法必须没有实现；而接口中普通方法不能有实现，但在 JDK 8 中的 static 和 defualt 方法必须有实现；</li>
<li>静态代码块的使用不同：抽象类可以有静态代码块，而接口不能有。</li>
</ol>
<h2 id="_7-java-中-this-和-super-有什么区别" tabindex="-1"><a class="header-anchor" href="#_7-java-中-this-和-super-有什么区别"><span>7. Java 中 this 和 super 有什么区别？</span></a></h2>
<p>this 和 super 都是 Java 中的关键字，都起指代作用，当显式使用它们时，都需要将它们放在方法的首行（否则编译器会报错）。this 表示当前对象，super 用来指代父类对象，它们有四点不同：</p>
<ol>
<li>指代对象：super 指代的是父类，是用来访问父类的；而 this 指代的是当前类；</li>
<li>查找访问：super 只能查找父类，而 this 会先从本类中找，如果找不到则会去父类中找；</li>
<li>本类属性赋值：this 可以用来为本类的实例属性赋值，而 super 则不能实现此功能；</li>
<li>配合 synchronized 使用不同：因为 this 表示当前对象，所以this 可用于 synchronized(this){....} 加锁，而 super 则不能实现此功能。</li>
</ol>
<h2 id="_8-为什么返回类型不算方法重载" tabindex="-1"><a class="header-anchor" href="#_8-为什么返回类型不算方法重载"><span>8. 为什么返回类型不算方法重载？</span></a></h2>
<p>因为不同的返回值类型，JVM 没办法分辨到底要调用哪个方法，JVM 调用方法是通过方法签名来判断到底要调用哪个方法的，而方法签名 = 方法名称 + 参数类型 + 参数个数组成的一个唯一值，这个唯一值就是方法签名。</p>
<p>从方法签名的组成可以看出，返回类型不是方法签名的组成部分，所以不同的返回类型也就不算方法重载了，因为它不能让 JVM 确定要调用的具体方法。</p>
<h2 id="_9-方法重写时需要注意什么问题" tabindex="-1"><a class="header-anchor" href="#_9-方法重写时需要注意什么问题"><span>9. 方法重写时需要注意什么问题？</span></a></h2>
<p>Java 中的方法重写（Override）是在子类重新定义父类已有方法的过程，它是面向对象编程中多态的具体表现。我们可以通过 @Override 关键字重写父类中的某个方法，但在重写的过程中需要注意以下 5 个问题：</p>
<ol>
<li>子类方法的权限控制符不能变小；</li>
<li>子类方法返回的类型只能变小；</li>
<li>子类抛出异常的类型只能变小；</li>
<li>子类方法名必须和父类保持一致；</li>
<li>子类方法的参数类型和个数必须和父类保持一致。</li>
</ol>
<h2 id="_10-comparator与comparable有什么区别" tabindex="-1"><a class="header-anchor" href="#_10-comparator与comparable有什么区别"><span>10. Comparator与Comparable有什么区别</span></a></h2>
<ul>
<li>一个是自己完成比较，一个是外部程序实现比较。</li>
<li>用Comparator是策略模式，就是不改变对象自身，而是一个策略对象来改变它的行为，比如：你想对整数采用绝对值大小来排序，Integer的不符合要求，你不需要去修改Integer类去改变它的排序行为，只需要使用一个实现了Comparator接口的对象来实现控制它的排序就行了</li>
</ul>
</div></template>


