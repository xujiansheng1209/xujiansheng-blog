# Spring常见面试题1

## 什么是Spring？

Spring 是一款顶级开源框架，它是包含了众多工具方法的 IoC 容器。

Spring 包含了很多模块，比如 spring-core、spring-beans、spring-aop、spring-context、spring-expression、spring-test 等，使用 Spring 可以帮我们快速的开发 Java 程序。



## Spring 有什么优点

Spring 优点如下：

1. 开源免费的热门框架，稳定性高、解决问题成本低；
2. 方便集成各种优秀的框架；
3. 降低了代码耦合性，通过 Spring 提供的 IoC 容器，我们可以将对象之间的依赖关系交由 Spring 进行控制，避免硬编码所造成的过度程序耦合；
4. 方便程序测试，在 Spring 里，测试变得非常简单，例如：Spring 对 Junit 的支持，可以通过注解方便的测试 Spring 程序；
5. 降低 Java EE API 的使用难度，Spring 对很多难用的 Java EE API（如 JDBC、JavaMail、远程调用等）提供了一层封装，通过 Spring 的简易封装，让这些 Java EE API 的使用难度大为降低。



## 什么是 IoC？

IoC 是 Inversion of Control 的缩写，翻译成中文是“控制反转”的意思，它不是一个具体的技术，而是一个实现对象解耦的思想。

控制反转的意思是将依赖对象生命周期的控制权进行反转，传统开发是当前类控制依赖对象的生命周期的，现在交给其他人（Spring），这就是控制（权）反转。



## IoC 有什么优点？

IoC 的优点有以下几个：

1. 使用更方便，拿来即用，无需显式的创建和销毁的过程；
2. 可以很容易提供众多服务，比如事务管理、消息服务等；
3. 提供了单例模式的支持；
4. 提供了 AOP 抽象，利用它很容易实现权限拦截、运行期监控等功能；
5. 更符合面向对象的设计法则；
6. 低侵入式设计，代码的污染极低，降低了业务对象替换的复杂性。

## 什么是 DI？

DI 是 Dependency Injection 的缩写，翻译成中文是“依赖注入”的意思。依赖注入不是一种设计实现，而是一种具体的技术，它是在 IoC 容器运行期间，动态地将某个依赖对象注入到当前对象的技术就叫做 DI（依赖注入）。

比如 A 对象需要依赖 B 对象，那么在 A 运行时，动态的将依赖对象 B 注入到当前类中，而非通过直接 new 的方式获取 B 对象的方式，就是依赖注入。



## IoC 和 DI 有什么区别？

IoC 和 DI 虽然定义不同，但它们所做的事情都是一样的，都是用来实现对象解耦的，而二者又有所不同：IoC 是一种设计思想，而 DI 是一种具体的实现技术。



## 说一下 AOP？AOP 有什么优点？常见使用场景有哪些？

AOP（Aspect-OrientedProgramming，面向切面编程）可以说是 OOP（Object-Oriented Programing，面向对象编程）的补充和完善，OOP 引入封装、继承和多态性等概念来建立一种公共对象处理的能力，当我们需要处理公共行为的时候，OOP 就会显得无能为力，而 AOP 的出现正好解决了这个问题。比如统一的日志处理模块、授权验证模块等都可以使用 AOP 很轻松的处理。

**AOP 优点：**

1. 集中处理某一类问题，方便维护；
2. 逻辑更加清晰；
3. 降低模块间的耦合度。

**AOP 常见的使用场景：**

1. 用户登录和鉴权
2. 统一日志记录
3. 统一方法执行时间统计
4. 统一的返回格式设置
5. 统一的异常处理
6. 事务的开启和提交等



## AOP 是如何组成的？

AOP 是由：切面（Aspect）、切点（Pointcut）、连接点（Join Point）和通知（Advice）组成的，它们的具体含义如下。

**① 切面（Aspect）**

切面（Aspect）由切点（Pointcut）和通知（Advice）组成，它既包含了横切逻辑的定义，也包括了连接点的定义。

简单来说，切面就是当前 AOP 功能的类型，比如当前 AOP 是用户登录和鉴权的功能，那么它就是一个切面。

**② 切点（Pointcut）**

切点 Pointcut：它的作用就是提供一组规则（使用 AspectJ pointcut expression language 来描述）用来匹配连接点的。

简单来说，切点就是设置拦截规则的，满足规则的方法将会被拦截。

③ **连接点（Join Point）**

应用执行过程中能够插入切面的一个点，这个点可以是方法调用时，抛出异常时，甚至修改字段时。切面代码可以利用这些点插入到应用的正常流程之中，并添加新的行为。

简单来说，所有可以触发切点拦截规则的功能都是连接点。比如所有要登录才能访问的控制器（方法），它们都属于连接点。

**④ 通知（Advice）**

切面也是有目标的 ——它必须完成的工作。在 AOP 术语中，切面的工作被称之为通知。

简单来说，当控制器（方法）被拦截之后，触发执行的具体方法就是通知。

小结：切面定义了 AOP 的功能，切点提供了具体的拦截规则，通知决定了具体的执行方法，而连接点就是用来触发 AOP 的这些功能的，它们共同组成了 AOP。



## Spring AOP 有几种通知（Advice）？

Spring AOP 中有 5 种通知类型：

1. **前置通知**使用 @Before 实现：通知方法会在目标方法调用之前执行；
2. **后置通知**使用 @After 实现：通知方法会在目标方法返回或者抛出异常后调用；
3. **返回通知**使用 @AfterReturning 实现：通知方法会在目标方法返回后调用；
4. **抛出异常通知**使用 @AfterThrowing 实现：通知方法会在目标方法抛出异常后调用；
5. **环绕通知**使用 @Around 实现：通知包裹了被通知的方法，在被通知的方法通知之前和调用之后执行自定义的行为。



## 如何实现 Spring AOP？

Spring AOP 功能的实现，分为以下 4 步：

1. 添加 Spring AOP 框架支持；
2. 添加切面；
3. 添加切点；
4. 添加通知。

具体实现代码如下。

## 说一下AOP的实现原理？

Spring AOP 是构建在动态代理的基础上实现的，如果我们为 Spring 的某个 bean 配置了切面，那么 Spring 在创建这个 bean 的时候，实际上创建的是这个 bean 的一个代理对象，我们后续对 bean 中方法的调用，实际上调用的是代理类重写的代理方法。

Spring AOP 支持两种动态代理：JDK Proxy 和 CGLIB 动态代理。默认情况下，实现了接口的类，使用 AOP 会基于 JDK 生成代理类，没有实现接口的类，会基于 CGLIB 生成代理类。



## 如何将 Bean 存储到 Spring？

将 Bean 存储到 Spring 中有两种方式：

1. 通过 xml 的方式将 Bean 注入到 Spring 中；
2. 通过注解的方式将 Bean 注入到 Spring 中。

## 说一下 Bean 的命名规则？

使用注解注入 Bean 时，它的命名规则分为以下两种情况：

1. 类注解命名规则：注入类的首字母和第二个字母是否为大写，如果都为大写，那么 Bean 的名称为原类名，否则就是类名首字母小写。如 UClass 的 Bean 名称为 UClass，而 UserClass 的 Bean 命名成 userClass；
2. 方法注解 @Bean 命名规则：如果没有显示指定 Bean 的名称，那么它的名字就为方法名。

## @Bean 名称冲突该如何处理？

默认情况下 @Bean 的名称为方法名，但如果方法名重复的话，就会导致读取 Bean 时，只能读取到某一个对象，这个时候想要读取到另一个对象时，就要显示的指定 Bean 名称了，Bean 名称的设置如下：

```java
@Component
public class UserBeans {
    @Bean(name = {"user1"})
    public User user() {
        User user = new User();
        user.setId(1);
        user.setName("Java");
        return user;
    }
}
```

上述代码就将 Bean 的名称从默认的 user，重命名为 user1 了。



## 获取 Spring 容器有几种方法？

获取 Spring 容器有两种常用的方法：

1. 使用 ApplicationContext 来获取 Spring 容器；
2. 使用 BeanFactory 来获取容器。

具体实现代码如下：

```java
// 1.ApplicationContext 获取 Spring 容器
ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
// 2.BeanFactory 获取 Spring 容器
BeanFactory beanFactory = new XmlBeanFactory(new ClassPathResource("spring-config.xml"));
```



## ApplicationContext 和 BeanFactory 有什么区别？

它们都可以用来获取 Spring 容器，它们的区别如下：

1. 继承关系和功能：Spring 容器有两个顶级的接口：BeanFactory 和 ApplicationContext。其中 BeanFactory 提供了基础的访问容器的能力，而 ApplicationContext 属于 BeanFactory 的子类，它除了继承了 BeanFactory 的所有功能之外，它还拥有独特的特性，还添加了对国际化支持、资源访问支持、以及事件传播等方面的支持。
2. 性能：ApplicationContext 是一次性加载并初始化所有的 Bean 对象，而 BeanFactory 是需要那个才去加载那个，因此更加轻量。



## Bean 注入有几种方式？

Spring 中对象注入的方法有 3 种：

1. 属性注入（Field Injection）
2. Setter 注入（Setter Injection）
3. 构造方法注入（Constructor Injection）

接下来，我们分别来看。

**① 属性注入**

属性注入是我们最熟悉，也是日常开发中使用最多的一种注入方式，它的实现代码如下：

属性注入最大的优点就是实现简单、使用简单，只需要给变量上添加一个注解（@Autowired），就可以在不 new 对象的情况下，直接获得注入的对象了（这就是 DI 的功能和魅力所在），所以它的优点就是使用简单。

然而，属性注入虽然使用简单，但也存在着很多问题，甚至编译器 Idea 都会提醒你“不建议使用此注入方式”。

**② Setter 注入**

Setter 注入的实现代码如下：

从上面代码可以看出，Setter 注入比属性注入要麻烦很多。

Setter 注入的优点是它完全符合单一职责的设计原则，因为每一个 Setter 只针对一个对象。

**③ 构造方法注入**

构造方法注入是 Spring 官方从 4.x 之后推荐的注入方式，它的实现代码如下：

当然，**如果当前的类中只有一个构造方法，那么 @Autowired 也可以省略**，所以以上代码还可以这样写：

**优点分析**

构造方法注入相比于前两种注入方法，它可以注入不可变对象，并且它只会执行一次，也不存在像 Setter 注入那样，被注入的对象随时被修改的情况，它的优点有以下 4 个：

1. 可注入不可变对象；
2. 注入对象不会被修改；
3. 注入对象会被完全初始化；
4. 通用性更好。

**优点1：注入不可变对象**

使用构造方法注入可以注入不可变对象

**优点2：注入对象不会被修改**

构造方法注入不会像 Setter 注入那样，构造方法在对象创建时只会执行一次，因此它不存在注入对象被随时（调用）修改的情况。

**优点3：完全初始化**

因为依赖对象是在构造方法中执行的，而构造方法是在对象创建之初执行的，因此被注入的对象在使用之前，会被完全初始化，这也是构造方法注入的优点之一。

**优点4：通用性更好**

构造方法和属性注入不同，构造方法注入可适用于任何环境，无论是 IoC 框架还是非 IoC 框架，构造方法注入的代码都是通用的，所以它的通用性更好。

**小结**

依赖注入的常见实现方式有 3 种：属性注入、Setter 注入和构造方法注入。其中属性注入的写法最简单，所以日常项目中使用的频率最高，但它的通用性不好；而 Spring 官方推荐的是构造方法注入，它可以注入不可变对象，其通用性也更好，如果是注入可变对象，那么可以考虑使用 Setter 注入。



## 属性注入有什么缺点？

属性注入的缺点主要包含以下 3 个：

1. 功能性问题：无法注入一个不可变的对象（final 修饰的对象）；
2. 通用性问题：只能适应于 IoC 容器；
3. 设计原则问题：更容易违背单一设计原则。

**缺点1：功能性问题**

使用属性注入无法注入一个不可变的对象（final 修饰的对象）

原因也很简单：在 Java 中 final 对象（不可变）要么直接赋值，要么在构造方法中赋值，所以当使用属性注入 final 对象时，它不符合 Java 中 final 的使用规范，所以就不能注入成功了。

**缺点2：通用性问题**

使用属性注入的方式只适用于 IoC 框架（容器），如果将属性注入的代码移植到其他非 IoC 的框架中，那么代码就无效了，所以属性注入的通用性不是很好。

**缺点3：设计原则问题**

使用属性注入的方式，因为使用起来很简单，所以开发者很容易在一个类中同时注入多个对象，而这些对象的注入是否有必要？是否符合程序设计中的单一职责原则？就变成了一个问题。

但可以肯定的是，注入实现越简单，那么滥用它的概率也越大，所以出现违背单一职责原则的概率也越大。

注意：这里强调的是违背设计原则（单一职责）的可能性，而不是一定会违背设计原则，二者有着本质的区别。



## Setter 注入有什么缺点？

它的缺点主要体现在以下 2 点：

1. 不能注入不可变对象（final 修饰的对象）；
2. 注入的对象可被修改。

**缺点1：不能注入不可变对象**

使用 Setter 注入依然不能注入不可变对象。

**缺点2：注入对象可被修改**

Setter 注入提供了 setXXX 的方法，意味着你可以在任何时候、在任何地方，通过调用 setXXX 的方法来改变注入对象，所以 Setter 注入的问题是，被注入的对象可能随时被修改。



## 推荐使用哪种注入方式？

**参考答案**：Spring 官方推荐使用构造方法注入，原因如下：

1. 属性注入的优点是简洁，使用方便；缺点是只能用于 IoC 容器，如果是非 IoC 容器不可用，并且只有在使用的时候才会出现 NPE（空指针异常）；
2. **构造方法注入是 Spring 推荐的注入方式**，它的缺点是如果有多个注入会显得比较臃肿，但出现这种情况你应该考虑一下当前类是否符合程序的单一职责的设计模式了，它的优点是通用性，在使用之前一定能把保证注入的类不为空；
3. Setter 方式是 Spring 前期版本推荐的注入方式，但通用性不如构造方法，所有 Spring 现版本已经推荐使用构造方法注入的方式来进行类注入了。



## @Autowired 和 @Resource 有什么区别？

@Autowired 和 @Resource 都是用来实现依赖注入的注解（在 Spring/Spring Boot 项目中），但二者却有着 5 点不同：

1. 来源不同：@Autowired 来自 Spring 框架，而 @Resource 来自于（Java）JSR-250；
2. 依赖查找的顺序不同：@Autowired 先根据类型再根据名称查询，而 @Resource 先根据名称再根据类型查询；
3. 支持的参数不同：@Autowired 只支持设置 1 个参数，而 @Resource 支持设置 7 个参数；
4. 依赖注入的用法支持不同：@Autowired 既支持构造方法注入，又支持属性注入和 Setter 注入，而 @Resource 只支持属性注入和 Setter 注入；
5. 编译器 IDEA 的提示不同：当注入 Mapper 对象时，使用 @Autowired 注解编译器会提示错误，而使用 @Resource 注解则不会提示错误。



## Bean 有几种作用域？

Bean 的作用域是指 Bean 在 Spring 整个框架中的某种行为模式。比如 singleton 单例作用域，就表示 Bean 在整个 Spring 中只有一份，它是全局共享的，当有人修改了这个值之后，那么另一个人读取到的就是被修改后的值。

在 Spring 中，Bean 的常见作用域有以下 5 种：

1. singleton：单例作用域；
2. prototype：原型作用域（多例作用域）；
3. request：请求作用域（适用于 Spring MVC ）；
4. session：会话作用域（适用于 Spring MVC ）；
5. application：全局作用域（适用于 Spring MVC ）。

**① singleton**

1. 官方说明：(Default) Scopes a single bean definition to a single object instance for each Spring IoC container.
2. 描述：该作用域下的 Bean 在 IoC 容器中只存在一个实例：获取 Bean（即通过 applicationContext.getBean等方法获取）及装配 Bean（即通过 @Autowired 注入）都是同一个对象。
3. 场景：通常无状态的 Bean 使用该作用域。无状态表示 Bean 对象的属性状态不需要更新。
4. 备注：Spring 默认选择该作用域。

**② prototype**

1. 官方说明：Scopes a single bean definition to any number of object instances.
2. 描述：每次对该作用域下的 Bean 的请求都会创建新的实例：获取 Bean（即通过 applicationContext.getBean 等方法获取）及装配 Bean（即通过 @Autowired 注入）都是新的对象实例。
3. 场景：通常有状态的 Bean 使用该作用域。

**③ request**

1. 官方说明：Scopes a single bean definition to the lifecycle of a single HTTP request. That is, each HTTP request has its own instance of a bean created off the back of a single bean definition. Only valid in the context of a web-aware Spring ApplicationContext.
2. 描述：每次 Http 请求会创建新的 Bean 实例，类似于 prototype。
3. 场景：一次 Http 的请求和响应的共享 Bean。
4. 备注：限定 Spring MVC 框架中使用。

**④ session**

1. 官方说明：Scopes a single bean definition to the lifecycle of an HTTP Session. Only valid in the context of a web-aware Spring ApplicationContext.
2. 描述：在一个 Http Session 中，定义一个 Bean 实例。
3. 场景：用户会话的共享 Bean, 比如：记录一个用户的登陆信息。
4. 备注：限定 Spring MVC 框架中使用。

**⑤ application**

1. 官方说明：Scopes a single bean definition to the lifecycle of a ServletContext. Only valid in the context of a web-aware Spring ApplicationContext.
2. 描述：在一个 Http Servlet Context 中，定义一个 Bean 实例。
3. 场景：Web 应用的上下文信息，比如：记录一个应用的共享信息。
4. 备注：限定 Spring MVC 框架中使用。



## 如何设置 Bean 作用域？

可以通过 @Scope  注解来设置 Bean 的作用域，它的设置方式有以下两种：

1. 直接设置作用域的具体值，如：@Scope("prototype")；
2. 设置 ConfigurableBeanFactory 和 WebApplicationContext 提供的 SCOPE_XXX 变量，如 @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)。



## 说一下 Bean 的生命周期？

Spring 中 Bean 的生命周期是指：Bean 在 Spring（IoC）中从创建到销毁的整个过程。

Spring 中 Bean 的生命周期主要包含以下 5 部分：

1. 实例化：为 Bean 分配内存空间；
2. 设置属性：将当前类依赖的 Bean 属性，进行注入和装配；
3. 初始化：
4. 执行各种通知；
5. 执行初始化的前置方法；
6. 执行初始化方法；
7. 执行初始化的后置方法。
8. 使用 Bean：在程序中使用 Bean 对象；
9. 销毁 Bean：将 Bean 对象进行销毁操作。

以上生命周期中，需要注意的是：“实例化”和“初始化”是两个完全不同的过程，千万不要搞混，实例化只是给 Bean 分配了内存空间，而初始化则是将程序的执行权，从系统级别转换到用户级别，并开始执行用户添加的业务代码。

## Spring 使用了哪些设计模式？

Spring 框架使用的设计模式如下：

1. 代理模式：在 AOP 中有使用；
2. 单例模式：bean 默认是单例模式；
3. 模板方法模式：jdbcTemplate；
4. 工厂模式：BeanFactory；
5. 观察者模式：Spring 事件驱动模型就是观察者模式很经典的一个应用，比如，ContextStartedEvent 就是 ApplicationContext 启动后触发的事件；
6. 适配器模式：Spring MVC 中也是用到了适配器模式适配 Controller