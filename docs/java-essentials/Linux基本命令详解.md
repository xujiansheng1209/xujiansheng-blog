# Linux基本命令详解

## 目录结构

- 只有一个根目录
- bin->usr/bin：系统的可执行文件，可以在任何目录下执行
- usr/local/bin：用户自己的可执行文件，可以在任何目录下执行
- etc存放配置文件，配置环境变量（/etc/profile）
- home：每一个用户的根目录，用来保护用户私人的数据，默认情况下，目录名和自己的用户们相同
- opt：存放额外安装的软件，相当于windows系统的program files

## 常用命令

### Linux服务器信息

```shell
IP地址：ifconfig
运行的进程和系统性能信息：top
内存使用情况：free -h
磁盘使用情况：df -h
防火墙:systemctl status firewalld
			systemctl start firewalld
			systemctl stop firewalld
所有的系统服务都可以这样启动、停止、查看状态，systemctl start（stop、status、restart） 【服务名】
注：有些版本的服务器可能使用的不是firewalld，而是使用iptables，两者都是设置和管理网络防火墙规则的工具
若要在服务器添加端口策略，可以使用如下命令：
	firewall-cmd --permanent --zone=public --add-port=3306/tcp //添加3306端口，传输协议位tcp
	firewall-cmd --reload //重新加载firewalld防火墙的配置，使新的规则生效，一定要重新加载，否则不生效
	firewall-cmd --zone=public --list-all //公共区域（public zone）的防火墙规则和设置的命令
```

### 文本编辑

```shell
vi和vim是linux中的文本编辑器，用来在linux中创建、查看或者编辑文本文件
编辑模式：在一般模式下，按i键或者a键，进入编辑模式，可以编辑文件内容，但是不能保存编辑的内容，按ESC键可以返回一般模式
命令行模式：在一般模式下，按shift+：，进入命令行模式，输入：q！---不保存强制退出编辑器，wq ---保存且退出编辑器，q---只是退出编辑器，/[搜索的内容] --- 搜索，小写的n向下搜索，大写的N向上搜索
```

### 文件和目录相关操作的命令

```
查看当前目录下的所有文件和目录：ll或者ls
切换目录：
			cd /opt //切换到opt目录下
			cd .. //切换到上级目录
			cd bin //切换到当前目录的bin目录下
创建目录：
			mkdir -p data/mysql //在当前目录下创建目录data，并在data下创建mysql（一次性创建多级目录）
			mkdir /opt/data //在opt目录下创建目录data
复制文件：cp A.jar A-2024-3-16.jar //把文件A.jar复制为A-2024-3-16.jar
删除文件和目录：
			rm  a.txt //提示删除a.txt
			rm	-f a.txt //强制删除a.txt
			rm 	-r data //强制递归删除打他目录
			rm 	-rf data //强制递归删除data目录
查看文件内容：
			cat	A.txt //查看A.txt文件内容，所有内容一次显示出来
			tail -f user_service.log //实时查看user_service.log的末尾内容
			grep "mysql" user_service.log //查看文件user_service包含mysql内容
查找文件：
			find / -name a.txt //从根目录查找名称为a.txt的文件
			find /opt *.java //查找opt目录下.java文件
			find /opt *.java|grep user //搜索opt目录下，所有名称包含user的.java文件
```

### 用户相关操作命令

```shell
添加用户：useradd zhuoye //添加用户
注：在/home目录下创建用户的根目录，目录名称默认跟用户名相同，在Linux中任何一个用户至少属于一个组，新建用户时如果不指定组，则会新建一个组，组名和用户名相同，并且把该用户添加到该组中，useradd -d /home/zhuoyun zhuoye 创建用户的同时，指定用户的根目录

给用户设置密码：passwd zhuoye //给用户zhuoye设置密码
删除用户：userdel zhuoye //删除用户zhuoye
查看用户信息：id zhuoye
切换用户：su zhuoye
注意：从权限高的用户切换权限低的用户，不需要密码验证，从权限低的用户切换到权限高的用户，必须密码验证，这个命令是经常用的，上面用户创建相关命令一般在公司轮不到我们创建

```

### 压缩和解压相关命令

```shell
压缩或者解压单个文件: gzip zhuoye.txt  //压缩单个文件，生成一个.gz的压缩包，并且会把原来的文件删除。
			      		   gunzip ret.txt.gz  //.gz压缩包名:解压.gz压缩包，并且会把原来的.gz压缩包删除。
			      
压缩(打包)或者解压多个文件和目录： zip zhuoye.zip zhuoye1.txt zhuoye2.txt zhuoye3.txt //把文件zhuoye1.txt zhuoye2.txt zhuoye3.txt压缩为zhuoye.zip文件
					         unzip zhuoye.zip -d data  //解压zhuoye.zip到data目录下
					         tar -zcvf zhuoye.tar.gz zhuoye1.txt zhuoye2.txt zhuoye3.txt //压缩
					         tar -zxvf zhuoye.tar.gz -C /opt/data   //解压
```

### 权限相关操作

```shell
修改文件或者目录的所有者：chown zhuoye zhuoye.txt  //修改zhuoye.txt文件的所有者为zhuoye用户
                      chown -R zhuoye data     //修改data目录下的所有文件包含data目录的所有者为zhuoye用户         
文件或者目录的权限控制：chmod 777 zhuoye.txt //将文件zhuoye.txt的权限设置为777

注：在linux中，任何一个文件或者目录都有三部分权限：所有者权限、同组用户权限、其它组用户权限。
第一部分权限：所有者权限，文件或者目录的所有者对该文件所拥有的权限，使用r、w、x分表表示读、写、执行的权限。比如：rwx：拥有读写执行的权限,r-x：拥有读和执行的权限，r--：只拥有读的权限，---：没有任何权限。
第二部分权限：同组用户权限，文件或者目录的同组用户对该文件所拥有的权限，使用r、w、x分表表示读、写、执行的权限。
第三部分权限：其它组用户权限，文件或者目录的其它组用户对该文件所拥有的权限，使用r、w、x分表表示读、写、执行的权限。
每个权限都可以用一个数字来表示， r、w、x分别对应4、2、1，每一个文件或者目录都有三部分权限，每一部分权限都可以用一组数据之和来表示
```



### 进程管理

```
查找mysql服务相关的进程 ： ps -ef|grep mysql 
查看端口3306的进程 ：lsof -i :3306
查看当前运行的Java进程：jps
关闭进程 ： kill -9 PID
```

### 软件包的安装

```
RPM包安装 :   rpm -ivh zhuoye.rpm     // i:安装  v:提示  h:进度条
             rpm -ivh --force zhuoye.rpm //强制安装
卸载rpm软件包：rpm -e zhuoye.rpm 
yum安装：yum install firefox
当前系统中使用yum已经安装的软件包: yum list installed|grep firefox
yum安装软件包卸载：yum remove  firefox.x86_64
```

## 扩展指令

### 文件上传下载

```
本地上传文件到Linux服务器命令：rz -y
下载文件到本地电脑命令：sz 文件名 
注：如果使用时显示没有该命令，可以使用命令进行安装： yum install lrzsz
```

### 常见的docker命令

```
docker -v  //查看是否安装docker
docker images // 列出本地主机上的Docker镜像
docker ps   // 列出当前正在运行的Docker容器
docker ps -a  // 列出当前所有的Docker容器
docker stop <容器ID或容器名称>   //停止正在运行的Docker容器
docker rm   <容器ID或容器名称>  //删除停止的docker容器
docker start <容器ID或容器名称>  //运行一个已经停止的容器
docker logs  <容器ID或容器名称> //查看docker容器日志
```

### 执行可执行文件

```
./zhouye
```



