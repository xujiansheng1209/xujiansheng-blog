---
title: Java基础常见面试题总结(下)
category: Java
---

## 1. 深克隆和浅克隆有什么区别？

- 深克隆（Deep Clone）是将原型对象中的所有类型，无论是值类型还是引用类型，都复制一份给克隆对象，也就是说深克隆会把原型对象和原型对象所引用的对象，都复制一份给克隆对象。
- 浅克隆（Shadow Clone）是把原型对象中成员变量为值类型的属性都复制给克隆对象，把原型对象中成员变量为引用类型的引用地址也复制给克隆对象，也就是原型对象中如果有成员变量为引用对象，则此引用对象的地址是共享给原型对象和克隆对象的。简单来说就是浅克隆只会复制原型对象，但不会复制它所引用的对象。
- 所以深克隆和浅克隆的主要区别在于：深克隆会复制原型对象和它所引用所有对象，而浅克隆只会复制原型对象。

## 2. 如何实现深克隆？

> 深克隆的实现方式有很多种，大体可以分为以下几类：

1. 所有对象都实现克隆方法；
2. 通过构造方法实现深克隆；
3. 使用 JDK 自带的字节流实现深克隆；

- 所有对象都实现克隆方法

这种方式需要让所有的引用对象都实现克隆（Cloneable 接口），示例代码如下：

```java
public class CloneExample {
    public static void main(String[] args) throws CloneNotSupportedException {
        // 创建被赋值对象
        Address address = new Address(001, "北京");
        People p1 = new People(1, "Java", address);
        // 克隆 p1 对象
        People p2 = p1.clone();
        // 修改原型对象
        p1.getAddress().setCity("上海");
        // 输出 p1 和 p2 地址信息
        System.out.println("p1:" + p1.getAddress().getCity() +
                " p2:" + p2.getAddress().getCity());
    }

    static class People implements Cloneable {
        private Integer id;
        private String name;
        private Address address;

        @Override
        protected People clone() throws CloneNotSupportedException {
            People people = (People) super.clone();
            people.setAddress(this.address.clone());
            // 引用类型克隆赋值
            return people;
        }

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Address getAddress() {
            return address;
        }

        public void setAddress(Address address) {
            this.address = address;
        }

        public People(Integer id, String name, Address address) {
            this.id = id;
            this.name = name;
            this.address = address;
        }
    }

    static class Address implements Cloneable {
        private Integer id;
        private String city;

        @Override
        protected Address clone() throws CloneNotSupportedException {
            return (Address) super.clone();
        }

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public Address(Integer id, String city) {
            this.id = id;
            this.city = city;
        }
    }
}
```

这样 People 类就实现深克隆了。

- 通过构造方法实现深克隆

《Effective Java》 中推荐使用构造器（Copy Constructor）来实现深克隆，如果构造器的参数为基本数据类型或字符串类型则直接赋值，如果是对象类型，则需要重新 new 一个对象，实现代码如下：

```java
public class SecondExample {
    public static void main(String[] args) throws CloneNotSupportedException {
        // 创建对象
        Address address = new Address(001, "北京");
        People p1 = new People(1, "Java", address);
        // 调用构造函数克隆对象
        People p2 = new People(p1.getId(), p1.getName(),
                new Address(p1.getAddress().getId(), p1.getAddress().getCity()));
        // 修改原型对象
        p1.getAddress().setCity("上海");
        // 输出 p1 和 p2 地址信息
        System.out.println("p1:" + p1.getAddress().getCity() +
                " p2:" + p2.getAddress().getCity());
    }

    static class People {
        private Integer id;
        private String name;
        private Address address;

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Address getAddress() {
            return address;
        }

        public void setAddress(Address address) {
            this.address = address;
        }

        public People(Integer id, String name, Address address) {
            this.id = id;
            this.name = name;
            this.address = address;
        }
    }

    static class Address {
        private Integer id;
        private String city;

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public Address(Integer id, String city) {
            this.id = id;
            this.city = city;
        }
    }
}
```

- 使用 JDK 自带的字节流实现深克隆

通过 JDK 自带的字节流实现深克隆的方式，是先将要原型对象写入到内存中的字节流，然后再从这个字节流中读出刚刚存储的信息，来作为一个新的对象返回，那么这个新对象和原型对象就不存在任何地址上的共享，这样就实现了深克隆，代码如下：

```java
import java.io.*;

public class ThirdExample {
    public static void main(String[] args) throws CloneNotSupportedException {
        // 创建对象
        Address address = new Address(001, "北京");
        People p1 = new People(1, "Java", address);
        // 通过字节流实现克隆
        People p2 = (People) StreamClone.clone(p1);
        // 修改原型对象
        p1.getAddress().setCity("上海");
        // 输出 p1 和 p2 地址信息
        System.out.println("p1:" + p1.getAddress().getCity() +
                " p2:" + p2.getAddress().getCity());
    }

    static class StreamClone {

        public static <T extends Serializable> T clone(People obj) {
            T cloneObj = null;
            try {
                // 写入字节流
                ByteArrayOutputStream bo = new ByteArrayOutputStream();
                ObjectOutputStream oos = new ObjectOutputStream(bo);
                oos.writeObject(obj);
                oos.close();
                // 分配内存,写入原始对象,生成新对象
                ByteArrayInputStream bi = new ByteArrayInputStream(bo.toByteArray());//获取上面的输出字节流
                ObjectInputStream oi = new ObjectInputStream(bi);
                // 返回生成的新对象
                cloneObj = (T) oi.readObject();
                oi.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
            return cloneObj;
        }
    }

    static class People implements Serializable {
        private Integer id;
        private String name;
        private Address address;

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Address getAddress() {
            return address;
        }

        public void setAddress(Address address) {
            this.address = address;
        }

        public People(Integer id, String name, Address address) {
            this.id = id;
            this.name = name;
            this.address = address;
        }
    }


    static class Address implements Serializable {
        private Integer id;
        private String city;

        public Integer getId() {
            return id;
        }

        public void setId(Integer id) {
            this.id = id;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public Address(Integer id, String city) {
            this.id = id;
            this.city = city;
        }
    }
}
```

此方式需要注意的是，由于是通过字节流序列化实现的深克隆，因此每个对象必须能被序列化，必须实现 Serializable 接口，标识自己可以被序列化，否则会抛出异常 (java.io.NotSerializableException)。

## 3. 什么是动态代理？

动态代理是在程序运行期，动态的创建目标对象的代理对象，并对目标对象中的方法进行功能性增强的一种技术。

在生成代理对象的过程中，目标对象不变，代理对象中的方法是目标对象方法的增强方法。可以理解为运行期间，对象中方法的动态拦截，在拦截方法的前后执行功能操作。

动态代理的常见使用场景有：

1. 统计每个 api 的请求耗时；
2. 统一的日志输出；
3. 校验被调用的 api 是否已经登录和权限鉴定；
4. Spring AOP。

## 4. 动态代理和静态代理有什么区别？

- 静态代理其实就是事先写好代理类，可以手工编写也可以使用工具生成，但它的缺点是每个业务类都要对应一个代理类，特别不灵活也不方便。

- 动态代理是在程序运行期，动态的创建目标对象的代理对象，并对目标对象中的方法进行功能性增强的一种技术。

- 所以总结来说，动态代理和静态代理的效果都是一样的，但静态代理使用麻烦，而动态代理使用简单，后者也是现在编程中实现代理的主流方式。

## 5. 如何实现动态代理？

在 Java 中，实现动态代理的常用方式是 JDK Proxy 和 CGLib。

## 6. JDK Proxy 和 CGLib 有什么区别？

JDK Proxy 和 CGLib 的区别主要体现在以下几个方面：

1. JDK Proxy 是 Java 语言自带的功能，无需通过加载第三方类实现；
2. Java 对 JDK Proxy 提供了稳定的支持，并且会持续的升级和更新 JDK Proxy，例如 Java 8 版本中的 JDK Proxy 性能相比于之前版本提升了很多；
3. JDK Proxy 是通过拦截器加反射的方式实现的；
4. JDK Proxy 只能代理继承接口的类；
5. JDK Proxy 实现和调用起来比较简单；
6. CGLib 是第三方提供的工具，基于 ASM 实现的，性能比较高；
7. CGLib 无需通过接口来实现，它是通过实现子类的方式来完成调用的。

## 7. 动态代理的底层是如何实现的？

不同的动态代理的底层实现是不同的，比如 JDK Proxy 底层是通过反射技术实现的，而 CGLib 是基于 ASM，一个 Java 字节码操作框架实现的。

## 8. 说一下反射机制？

Java 反射机制是在运行状态中，对于任意一个类，都能够知道这个类的所有属性和方法；对于任意一个对象，都能够调用它的任意方法和属性；这种动态获取信息以及动态调用对象方法的功能称为 Java 语言的反射机制。简单来说，反射机制指的是程序在运行时能够获取自身的信息。在 Java 中，只要给定类的名字，就可以通过反射机制来获得类的所有信息。

Java 反射机制主要提供了以下功能，这些功能都位于 java.lang.reflect 包：

1. 在运行时判断任意一个对象所属的类；
2. 在运行时构造任意一个类的对象；
3. 在运行时判断任意一个类所具有的成员变量和方法；
4. 在运行时调用任意一个对象的方法；
5. 生成动态代理。

在程序开发中反射的使用场景有很多，比如以下几个。

**使用场景一**：编程工具 IDEA 或 Eclipse 等，在写代码时会有代码（属性或方法名）提示，就是因为使用了反射；

**使用场景二**：很多知名的框架，如 Spring、MyBatis 等，为了让程序更优雅更简洁，也会使用到反射。

例如，Spring 可以通过配置来加载不同的类，调用不同的方法，代码如下所示：

```xml
<bean id="person" class="com.spring.beans.Person" init-method="initPerson">
</bean>
```

例如，MyBatis 在 Mapper 使用外部类的 Sql 构建查询时，代码如下所示：

```java
@SelectProvider(type = PersonSql.class, method = "getListSql")
List<Person> getList();
class PersonSql {
    public String getListSql() {
        String sql = new SQL() {{
            SELECT("*");
            FROM("person");
        }}.toString();
        return sql;
    }
}
```

**使用场景三**：数据库连接池，也会使用反射调用不同类型的数据库驱动，代码如下所示：

```properties
String url = "jdbc:mysql://127.0.0.1:3306/mydb";
String username = "root";
String password = "root";
Class.forName("com.mysql.jdbc.Driver");
Connection connection = DriverManager.getConnection(url, username, password);
```



## 9. 如何使用反射？

在 Java 中，反射获取调用类可以通过 Class.forName()，反射获取类实例要通过 newInstance()，相当于 new 一个新对象，反射获取方法要通过 getMethod()，获取到类方法之后使用 invoke() 对类方法进行调用。如果是类方法为私有方法的话，则需要通过 setAccessible(true) 来修改方法的访问限制，以上的这些操作就是反射的基本使用，具体调用如下。

- 反射调用静态方法

```java
Class myClass = Class.forName("类名");
Method method = myClass.getMethod("调用方法名");
method.invoke(myClass);
```

- 反射调用公共方法

```java
Class myClass = Class.forName("类名");
// 创建实例对象（相当于 new ）
Object instance = myClass.newInstance();
Method method2 = myClass.getMethod("调用方法名");
method2.invoke(instance);
```

- 反射调用私有方法

```java
    Class myClass = Class.forName("类名");
    // 创建实例对象（相当于 new ）
    Object object = myClass.newInstance();
    Method method3 = myClass.getDeclaredMethod("调用方法名");
    method3.setAccessible(true);
    method3.invoke(object);
```



## 10. 反射有什么优缺点？

优点：

1. 能够运行时动态获取类的实例，大大提高系统的灵活性和扩展性；
2. 与 Java 动态编译相结合，可以实现无比强大的功能；
3. 对于 Java 这种先编译再运行的语言，能够让我们很方便的创建灵活的代码，这些代码可以在运行时装配，无需在组件之间进行源代码的链接，更加容易实现面向对象。

缺点：

1. 反射会消耗一定的系统资源，因此，如果不需要动态地创建一个对象，那么就不需要用反射；
2. 反射调用方法时可以忽略权限检查，获取这个类的私有方法和属性，因此可能会破坏类的封装性而导致安全问题。