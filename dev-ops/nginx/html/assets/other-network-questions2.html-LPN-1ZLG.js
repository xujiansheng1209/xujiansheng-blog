import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as d,a as t,d as e,b as n,w as a,e as o}from"./app-Cg1ooxyK.js";const c="/assets/2008410143049281-BPnyGLqO.png",P={},h=o('<p>下篇主要是传输层和网络层相关的内容。</p><h2 id="tcp-与-udp" tabindex="-1"><a class="header-anchor" href="#tcp-与-udp"><span>TCP 与 UDP</span></a></h2><h3 id="tcp-与-udp-的区别-重要" tabindex="-1"><a class="header-anchor" href="#tcp-与-udp-的区别-重要"><span>TCP 与 UDP 的区别（重要）</span></a></h3><ol><li><strong>是否面向连接</strong>：UDP 在传送数据之前不需要先建立连接。而 TCP 提供面向连接的服务，在传送数据之前必须先建立连接，数据传送结束后要释放连接。</li><li><strong>是否是可靠传输</strong>：远地主机在收到 UDP 报文后，不需要给出任何确认，并且不保证数据不丢失，不保证是否顺序到达。TCP 提供可靠的传输服务，TCP 在传递数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制。通过 TCP 连接传输的数据，无差错、不丢失、不重复、并且按序到达。</li><li><strong>是否有状态</strong>：这个和上面的“是否可靠传输”相对应。TCP 传输是有状态的，这个有状态说的是 TCP 会去记录自己发送消息的状态比如消息是否发送了、是否被接收了等等。为此 ，TCP 需要维持复杂的连接状态表。而 UDP 是无状态服务，简单来说就是不管发出去之后的事情了（<strong>这很渣男！</strong>）。</li><li><strong>传输效率</strong>：由于使用 TCP 进行传输的时候多了连接、确认、重传等机制，所以 TCP 的传输效率要比 UDP 低很多。</li><li><strong>传输形式</strong>：TCP 是面向字节流的，UDP 是面向报文的。</li><li><strong>首部开销</strong>：TCP 首部开销（20 ～ 60 字节）比 UDP 首部开销（8 字节）要大。</li><li><strong>是否提供广播或多播服务</strong>：TCP 只支持点对点通信，UDP 支持一对一、一对多、多对一、多对多；</li><li>……</li></ol><p>我把上面总结的内容通过表格形式展示出来了！确定不点个赞嘛？</p><table><thead><tr><th></th><th>TCP</th><th>UDP</th></tr></thead><tbody><tr><td>是否面向连接</td><td>是</td><td>否</td></tr><tr><td>是否可靠</td><td>是</td><td>否</td></tr><tr><td>是否有状态</td><td>是</td><td>否</td></tr><tr><td>传输效率</td><td>较慢</td><td>较快</td></tr><tr><td>传输形式</td><td>字节流</td><td>数据报文段</td></tr><tr><td>首部开销</td><td>20 ～ 60 bytes</td><td>8 bytes</td></tr><tr><td>是否提供广播或多播服务</td><td>否</td><td>是</td></tr></tbody></table><h3 id="什么时候选择-tcp-什么时候选-udp" tabindex="-1"><a class="header-anchor" href="#什么时候选择-tcp-什么时候选-udp"><span>什么时候选择 TCP，什么时候选 UDP?</span></a></h3><ul><li><strong>UDP 一般用于即时通信</strong>，比如：语音、 视频、直播等等。这些场景对传输数据的准确性要求不是特别高，比如你看视频即使少个一两帧，实际给人的感觉区别也不大。</li><li><strong>TCP 用于对传输准确性要求特别高的场景</strong>，比如文件传输、发送和接收邮件、远程登录等等。</li></ul><h3 id="http-基于-tcp-还是-udp" tabindex="-1"><a class="header-anchor" href="#http-基于-tcp-还是-udp"><span>HTTP 基于 TCP 还是 UDP？</span></a></h3><p><s><strong>HTTP 协议是基于 TCP 协议的</strong>，所以发送 HTTP 请求之前首先要建立 TCP 连接也就是要经历 3 次握手。</s></p>',10),g={href:"https://github.com/Snailclimb/JavaGuide/issues/1915",target:"_blank",rel:"noopener noreferrer"},T=t("p",null,[e("HTTP/3.0 之前是基于 TCP 协议的，而 HTTP/3.0 将弃用 TCP，改用 "),t("strong",null,"基于 UDP 的 QUIC 协议"),e(" 。")],-1),u=t("p",null,"此变化解决了 HTTP/2 中存在的队头阻塞问题。队头阻塞是指在 HTTP/2.0 中，多个 HTTP 请求和响应共享一个 TCP 连接，如果其中一个请求或响应因为网络拥塞或丢包而被阻塞，那么后续的请求或响应也无法发送，导致整个连接的效率降低。这是由于 HTTP/2.0 在单个 TCP 连接上使用了多路复用，受到 TCP 拥塞控制的影响，少量的丢包就可能导致整个 TCP 连接上的所有流被阻塞。HTTP/3.0 在一定程度上解决了队头阻塞问题，一个连接建立多个不同的数据流，这些数据流之间独立互不影响，某个数据流发生丢包了，其数据流不受影响（本质上是多路复用+轮询）。",-1),I=t("p",null,"除了解决队头阻塞问题，HTTP/3.0 还可以减少握手过程的延迟。在 HTTP/2.0 中，如果要建立一个安全的 HTTPS 连接，需要经过 TCP 三次握手和 TLS 握手：",-1),_=t("ol",null,[t("li",null,"TCP 三次握手：客户端和服务器交换 SYN 和 ACK 包，建立一个 TCP 连接。这个过程需要 1.5 个 RTT（round-trip time），即一个数据包从发送到接收的时间。"),t("li",null,"TLS 握手：客户端和服务器交换密钥和证书，建立一个 TLS 加密层。这个过程需要至少 1 个 RTT（TLS 1.3）或者 2 个 RTT（TLS 1.2）。")],-1),m=t("p",null,"所以，HTTP/2.0 的连接建立就至少需要 2.5 个 RTT（TLS 1.3）或者 3.5 个 RTT（TLS 1.2）。而在 HTTP/3.0 中，使用的 QUIC 协议（TLS 1.3，TLS 1.3 除了支持 1 个 RTT 的握手，还支持 0 个 RTT 的握手）连接建立仅需 0-RTT 或者 1-RTT。这意味着 QUIC 在最佳情况下不需要任何的额外往返时间就可以建立新连接。",-1),C=t("p",null,"相关证明可以参考下面这两个链接：",-1),f={href:"https://zh.wikipedia.org/zh/HTTP/3",target:"_blank",rel:"noopener noreferrer"},b={href:"https://datatracker.ietf.org/doc/rfc9114/",target:"_blank",rel:"noopener noreferrer"},v=o('<h3 id="使用-tcp-的协议有哪些-使用-udp-的协议有哪些" tabindex="-1"><a class="header-anchor" href="#使用-tcp-的协议有哪些-使用-udp-的协议有哪些"><span>使用 TCP 的协议有哪些?使用 UDP 的协议有哪些?</span></a></h3><p><strong>运行于 TCP 协议之上的协议</strong>：</p><ol><li><strong>HTTP 协议（HTTP/3.0 之前）</strong>：超文本传输协议（HTTP，HyperText Transfer Protocol)是一种用于传输超文本和多媒体内容的协议，主要是为 Web 浏览器与 Web 服务器之间的通信而设计的。当我们使用浏览器浏览网页的时候，我们网页就是通过 HTTP 请求进行加载的。</li><li><strong>HTTPS 协议</strong>：更安全的超文本传输协议(HTTPS,Hypertext Transfer Protocol Secure)，身披 SSL 外衣的 HTTP 协议</li><li><strong>FTP 协议</strong>：文件传输协议 FTP（File Transfer Protocol）是一种用于在计算机之间传输文件的协议，可以屏蔽操作系统和文件存储方式。注意 ⚠️：FTP 是一种不安全的协议，因为它在传输过程中不会对数据进行加密。建议在传输敏感数据时使用更安全的协议，如 SFTP。</li><li><strong>SMTP 协议</strong>：简单邮件传输协议（SMTP，Simple Mail Transfer Protocol）的缩写，是一种用于发送电子邮件的协议。注意 ⚠️：SMTP 协议只负责邮件的发送，而不是接收。要从邮件服务器接收邮件，需要使用 POP3 或 IMAP 协议。</li><li><strong>POP3/IMAP 协议</strong>：两者都是负责邮件接收的协议。IMAP 协议是比 POP3 更新的协议，它在功能和性能上都更加强大。IMAP 支持邮件搜索、标记、分类、归档等高级功能，而且可以在多个设备之间同步邮件状态。几乎所有现代电子邮件客户端和服务器都支持 IMAP。</li><li><strong>Telnet 协议</strong>：用于通过一个终端登陆到其他服务器。Telnet 协议的最大缺点之一是所有数据（包括用户名和密码）均以明文形式发送，这有潜在的安全风险。这就是为什么如今很少使用 Telnet，而是使用一种称为 SSH 的非常安全的网络传输协议的主要原因。</li><li><strong>SSH 协议</strong> : SSH（ Secure Shell）是目前较可靠，专为远程登录会话和其他网络服务提供安全性的协议。利用 SSH 协议可以有效防止远程管理过程中的信息泄露问题。SSH 建立在可靠的传输协议 TCP 之上。</li><li>……</li></ol><p><strong>运行于 UDP 协议之上的协议</strong>：</p>',4),w=t("li",null,[t("strong",null,"HTTP 协议（HTTP/3.0 ）"),e("： HTTP/3.0 弃用 TCP，改用基于 UDP 的 QUIC 协议 。")],-1),k=t("li",null,[t("strong",null,"DHCP 协议"),e("：动态主机配置协议，动态配置 IP 地址")],-1),A=t("strong",null,"DNS",-1),x={href:"http://www.baidu.com",target:"_blank",rel:"noopener noreferrer"},H=t("li",null,"……",-1),D=o('<h3 id="tcp-三次握手和四次挥手-非常重要" tabindex="-1"><a class="header-anchor" href="#tcp-三次握手和四次挥手-非常重要"><span>TCP 三次握手和四次挥手（非常重要）</span></a></h3><p><strong>相关面试题</strong>：</p><ul><li>为什么要三次握手?</li><li>第 2 次握手传回了 ACK，为什么还要传回 SYN？</li><li>为什么要四次挥手？</li><li>为什么不能把服务器发送的 ACK 和 FIN 合并起来，变成三次挥手？</li><li>如果第二次挥手时服务器的 ACK 没有送达客户端，会怎样？</li><li>为什么第四次挥手客户端需要等待 2*MSL（报文段最长寿命）时间后才进入 CLOSED 状态？</li></ul>',3),M=t("strong",null,"参考答案",-1),Q=t("h3",{id:"tcp-如何保证传输的可靠性-重要",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#tcp-如何保证传输的可靠性-重要"},[t("span",null,"TCP 如何保证传输的可靠性？（重要）")])],-1),S=o('<h2 id="ip" tabindex="-1"><a class="header-anchor" href="#ip"><span>IP</span></a></h2><h3 id="ip-协议的作用是什么" tabindex="-1"><a class="header-anchor" href="#ip-协议的作用是什么"><span>IP 协议的作用是什么？</span></a></h3><p><strong>IP（Internet Protocol，网际协议）</strong> 是 TCP/IP 协议中最重要的协议之一，属于网络层的协议，主要作用是定义数据包的格式、对数据包进行路由和寻址，以便它们可以跨网络传播并到达正确的目的地。</p><p>目前 IP 协议主要分为两种，一种是过去的 IPv4，另一种是较新的 IPv6，目前这两种协议都在使用，但后者已经被提议来取代前者。</p><h3 id="什么是-ip-地址-ip-寻址如何工作" tabindex="-1"><a class="header-anchor" href="#什么是-ip-地址-ip-寻址如何工作"><span>什么是 IP 地址？IP 寻址如何工作？</span></a></h3><p>每个连入互联网的设备或域（如计算机、服务器、路由器等）都被分配一个 <strong>IP 地址（Internet Protocol address）</strong>，作为唯一标识符。每个 IP 地址都是一个字符序列，如 192.168.1.1（IPv4）、2001:0db8:85a3:0000:0000:8a2e:0370:7334（IPv6） 。</p><p>当网络设备发送 IP 数据包时，数据包中包含了 <strong>源 IP 地址</strong> 和 <strong>目的 IP 地址</strong> 。源 IP 地址用于标识数据包的发送方设备或域，而目的 IP 地址则用于标识数据包的接收方设备或域。这类似于一封邮件中同时包含了目的地地址和回邮地址。</p><p>网络设备根据目的 IP 地址来判断数据包的目的地，并将数据包转发到正确的目的地网络或子网络，从而实现了设备间的通信。</p><p>这种基于 IP 地址的寻址方式是互联网通信的基础，它允许数据包在不同的网络之间传递，从而实现了全球范围内的网络互联互通。IP 地址的唯一性和全局性保证了网络中的每个设备都可以通过其独特的 IP 地址进行标识和寻址。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/internet_protocol_ip_address_diagram.png" alt="IP 地址使数据包到达其目的地" tabindex="0"><figcaption>IP 地址使数据包到达其目的地</figcaption></figure><h3 id="什么是-ip-地址过滤" tabindex="-1"><a class="header-anchor" href="#什么是-ip-地址过滤"><span>什么是 IP 地址过滤？</span></a></h3><p><strong>IP 地址过滤（IP Address Filtering）</strong> 简单来说就是限制或阻止特定 IP 地址或 IP 地址范围的访问。例如，你有一个图片服务突然被某一个 IP 地址攻击，那我们就可以禁止这个 IP 地址访问图片服务。</p><p>IP 地址过滤是一种简单的网络安全措施，实际应用中一般会结合其他网络安全措施，如认证、授权、加密等一起使用。单独使用 IP 地址过滤并不能完全保证网络的安全。</p><h3 id="ipv4-和-ipv6-有什么区别" tabindex="-1"><a class="header-anchor" href="#ipv4-和-ipv6-有什么区别"><span>IPv4 和 IPv6 有什么区别？</span></a></h3><p><strong>IPv4（Internet Protocol version 4）</strong> 是目前广泛使用的 IP 地址版本，其格式是四组由点分隔的数字，例如：123.89.46.72。IPv4 使用 32 位地址作为其 Internet 地址，这意味着共有约 42 亿（ 2^32）个可用 IP 地址。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/Figure-1-IPv4Addressformatwithdotteddecimalnotation-29c824f6a451d48d8c27759799f0c995.png" alt="IPv4" tabindex="0"><figcaption>IPv4</figcaption></figure><p>这么少当然不够用啦！为了解决 IP 地址耗尽的问题，最根本的办法是采用具有更大地址空间的新版本 IP 协议 - <strong>IPv6（Internet Protocol version 6）</strong>。IPv6 地址使用更复杂的格式，该格式使用由单或双冒号分隔的一组数字和字母，例如：2001:0db8:85a3:0000:0000:8a2e:0370:7334 。IPv6 使用 128 位互联网地址，这意味着越有 2^128（3 开头的 39 位数字，恐怖如斯） 个可用 IP 地址。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/Figure-2-IPv6Addressformatwithhexadecimalnotation-7da3a419bd81627a9b2cef3b0efb4940.png" alt="IPv6" tabindex="0"><figcaption>IPv6</figcaption></figure><p>除了更大的地址空间之外，IPv6 的优势还包括：</p><ul><li><strong>无状态地址自动配置（Stateless Address Autoconfiguration，简称 SLAAC）</strong>：主机可以直接通过根据接口标识和网络前缀生成全局唯一的 IPv6 地址，而无需依赖 DHCP（Dynamic Host Configuration Protocol）服务器，简化了网络配置和管理。</li><li><strong>NAT（Network Address Translation，网络地址转换） 成为可选项</strong>：IPv6 地址资源充足，可以给全球每个设备一个独立的地址。</li><li><strong>对标头结构进行了改进</strong>：IPv6 标头结构相较于 IPv4 更加简化和高效，减少了处理开销，提高了网络性能。</li><li><strong>可选的扩展头</strong>：允许在 IPv6 标头中添加不同的扩展头（Extension Headers），用于实现不同类型的功能和选项。</li><li><strong>ICMPv6（Internet Control Message Protocol for IPv6）</strong>：IPv6 中的 ICMPv6 相较于 IPv4 中的 ICMP 有了一些改进，如邻居发现、路径 MTU 发现等功能的改进，从而提升了网络的可靠性和性能。</li><li>……</li></ul><h3 id="如何获取客户端真实-ip" tabindex="-1"><a class="header-anchor" href="#如何获取客户端真实-ip"><span>如何获取客户端真实 IP？</span></a></h3><p>获取客户端真实 IP 的方法有多种，主要分为应用层方法、传输层方法和网络层方法。</p><p><strong>应用层方法</strong> ：</p>',23),U={href:"https://en.wikipedia.org/wiki/X-Forwarded-For",target:"_blank",rel:"noopener noreferrer"},y=o('<p><strong>传输层方法</strong>：</p><p>利用 TCP Options 字段承载真实源 IP 信息。这种方法适用于任何基于 TCP 的协议，不受应用层的限制。不过，这并非是 TCP 标准所支持的，所以需要通信双方都进行改造。也就是：对于发送方来说，需要有能力把真实源 IP 插入到 TCP Options 里面。对于接收方来说，需要有能力把 TCP Options 里面的 IP 地址读取出来。</p><p>也可以通过 Proxy Protocol 协议来传递客户端 IP 和 Port 信息。这种方法可以利用 Nginx 或者其他支持该协议的反向代理服务器来获取真实 IP 或者在业务服务器解析真实 IP。</p><p><strong>网络层方法</strong>：</p><p>隧道 +DSR 模式。这种方法可以适用于任何协议，就是实施起来会比较麻烦，也存在一定限制，实际应用中一般不会使用这种方法。</p><h3 id="nat-的作用是什么" tabindex="-1"><a class="header-anchor" href="#nat-的作用是什么"><span>NAT 的作用是什么？</span></a></h3><p><strong>NAT（Network Address Translation，网络地址转换）</strong> 主要用于在不同网络之间转换 IP 地址。它允许将私有 IP 地址（如在局域网中使用的 IP 地址）映射为公有 IP 地址（在互联网中使用的 IP 地址）或者反向映射，从而实现局域网内的多个设备通过单一公有 IP 地址访问互联网。</p><p>NAT 不光可以缓解 IPv4 地址资源短缺的问题，还可以隐藏内部网络的实际拓扑结构，使得外部网络无法直接访问内部网络中的设备，从而提高了内部网络的安全性。</p><figure><img src="https://oss.javaguide.cn/github/javaguide/cs-basics/network/network-address-translation.png" alt="NAT 实现 IP地址转换" tabindex="0"><figcaption>NAT 实现 IP地址转换</figcaption></figure>',9),F=o('<h2 id="arp" tabindex="-1"><a class="header-anchor" href="#arp"><span>ARP</span></a></h2><h3 id="什么是-mac-地址" tabindex="-1"><a class="header-anchor" href="#什么是-mac-地址"><span>什么是 Mac 地址？</span></a></h3><p>MAC 地址的全称是 <strong>媒体访问控制地址（Media Access Control Address）</strong>。如果说，互联网中每一个资源都由 IP 地址唯一标识（IP 协议内容），那么一切网络设备都由 MAC 地址唯一标识。</p><figure><img src="'+c+'" alt="路由器的背面就会注明 MAC 位址" tabindex="0"><figcaption>路由器的背面就会注明 MAC 位址</figcaption></figure><p>可以理解为，MAC 地址是一个网络设备真正的身份证号，IP 地址只是一种不重复的定位方式（比如说住在某省某市某街道的张三，这种逻辑定位是 IP 地址，他的身份证号才是他的 MAC 地址），也可以理解为 MAC 地址是身份证号，IP 地址是邮政地址。MAC 地址也有一些别称，如 LAN 地址、物理地址、以太网地址等。</p><blockquote><p>还有一点要知道的是，不仅仅是网络资源才有 IP 地址，网络设备也有 IP 地址，比如路由器。但从结构上说，路由器等网络设备的作用是组成一个网络，而且通常是内网，所以它们使用的 IP 地址通常是内网 IP，内网的设备在与内网以外的设备进行通信时，需要用到 NAT 协议。</p></blockquote>',6),L={class:"MathJax",jax:"SVG",style:{position:"relative"}},N={style:{"vertical-align":"0"},xmlns:"http://www.w3.org/2000/svg",width:"2.919ex",height:"1.904ex",role:"img",focusable:"false",viewBox:"0 -841.7 1290.1 841.7","aria-hidden":"true"},R=o('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="msup"><g data-mml-node="mn"><path data-c="32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></g><g data-mml-node="TeXAtom" transform="translate(533,363) scale(0.707)" data-mjx-texclass="ORD"><g data-mml-node="mn"><path data-c="34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path><path data-c="38" d="M70 417T70 494T124 618T248 666Q319 666 374 624T429 515Q429 485 418 459T392 417T361 389T335 371T324 363L338 354Q352 344 366 334T382 323Q457 264 457 174Q457 95 399 37T249 -22Q159 -22 101 29T43 155Q43 263 172 335L154 348Q133 361 127 368Q70 417 70 494ZM286 386L292 390Q298 394 301 396T311 403T323 413T334 425T345 438T355 454T364 471T369 491T371 513Q371 556 342 586T275 624Q268 625 242 625Q201 625 165 599T128 534Q128 511 141 492T167 463T217 431Q224 426 228 424L286 386ZM250 21Q308 21 350 55T392 137Q392 154 387 169T375 194T353 216T330 234T301 253T274 270Q260 279 244 289T218 306L210 311Q204 311 181 294T133 239T107 157Q107 98 150 60T250 21Z" transform="translate(500,0)"></path></g></g></g></g></g>',1),j=[R],V=t("mjx-assistive-mml",{unselectable:"on",display:"inline"},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msup",null,[t("mn",null,"2"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mn",null,"48")])])])],-1),E=t("p",null,"MAC 地址具有可携带性、永久性，身份证号永久地标识一个人的身份，不论他到哪里都不会改变。而 IP 地址不具有这些性质，当一台设备更换了网络，它的 IP 地址也就可能发生改变，也就是它在互联网中的定位发生了变化。",-1),O=t("p",null,"最后，记住，MAC 地址有一个特殊地址：FF-FF-FF-FF-FF-FF（全 1 地址），该地址表示广播地址。",-1),z=t("h3",{id:"arp-协议解决了什么问题",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#arp-协议解决了什么问题"},[t("span",null,"ARP 协议解决了什么问题？")])],-1),q=t("p",null,[e("ARP 协议，全称 "),t("strong",null,"地址解析协议（Address Resolution Protocol）"),e("，它解决的是网络层地址和链路层地址之间的转换问题。因为一个 IP 数据报在物理上传输的过程中，总是需要知道下一跳（物理上的下一个目的地）该去往何处，但 IP 地址属于逻辑地址，而 MAC 地址才是物理地址，ARP 协议解决了 IP 地址转 MAC 地址的一些问题。")],-1),X=t("h3",{id:"arp-协议的工作原理",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#arp-协议的工作原理"},[t("span",null,"ARP 协议的工作原理？")])],-1),B=t("h2",{id:"复习建议",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#复习建议"},[t("span",null,"复习建议")])],-1),Z=t("p",null,"非常推荐大家看一下 《图解 HTTP》 这本书，这本书页数不多，但是内容很是充实，不管是用来系统的掌握网络方面的一些知识还是说纯粹为了应付面试都有很大帮助。下面的一些文章只是参考。大二学习这门课程的时候，我们使用的教材是 《计算机网络第七版》（谢希仁编著），不推荐大家看这本教材，书非常厚而且知识偏理论，不确定大家能不能心平气和的读完。",-1),J=t("h2",{id:"参考",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#参考"},[t("span",null,"参考")])],-1),K=t("li",null,"《图解 HTTP》",-1),W=t("li",null,"《计算机网络自顶向下方法》（第七版）",-1),G={href:"https://www.cloudflare.com/zh-cn/learning/network-layer/internet-protocol/",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://time.geekbang.org/column/article/497864",target:"_blank",rel:"noopener noreferrer"},$={href:"https://community.fs.com/blog/what-is-nat-and-what-are-the-benefits-of-nat-firewalls.html",target:"_blank",rel:"noopener noreferrer"};function tt(et,nt){const r=i("ExternalLinkIcon"),s=i("RouteLink");return l(),d("div",null,[h,t("p",null,[e("🐛 修正（参见 "),t("a",g,[e("issue#1915"),n(r)]),e("）：")]),T,u,I,_,m,C,t("ul",null,[t("li",null,[t("a",f,[e("https://zh.wikipedia.org/zh/HTTP/3"),n(r)])]),t("li",null,[t("a",b,[e("https://datatracker.ietf.org/doc/rfc9114/"),n(r)])])]),v,t("ol",null,[w,k,t("li",null,[A,e("：域名系统（DNS，Domain Name System）将人类可读的域名 (例如，"),t("a",x,[e("www.baidu.com"),n(r)]),e(") 转换为机器可读的 IP 地址 (例如，220.181.38.148)。 我们可以将其理解为专为互联网设计的电话薄。实际上，DNS 同时支持 UDP 和 TCP 协议。")]),H]),D,t("p",null,[M,e("："),n(s,{to:"/cs-basics/network/tcp-connection-and-disconnection.html"},{default:a(()=>[e("TCP 三次握手和四次挥手（传输层）")]),_:1}),e(" 。")]),Q,t("p",null,[n(s,{to:"/cs-basics/network/tcp-reliability-guarantee.html"},{default:a(()=>[e("TCP 传输可靠性保障（传输层）")]),_:1})]),S,t("p",null,[e("通过 "),t("a",U,[e("X-Forwarded-For"),n(r)]),e(" 请求头获取，简单方便。不过，这种方法无法保证获取到的是真实 IP，这是因为 X-Forwarded-For 字段可能会被伪造。如果经过多个代理服务器，X-Forwarded-For 字段可能会有多个值（附带了整个请求链中的所有代理服务器 IP 地址）。并且，这种方法只适用于 HTTP 和 SMTP 协议。")]),y,t("p",null,[e("相关阅读："),n(s,{to:"/cs-basics/network/nat.html"},{default:a(()=>[e("NAT 协议详解（网络层）")]),_:1}),e("。")]),F,t("p",null,[e("MAC 地址的长度为 6 字节（48 比特），地址空间大小有 280 万亿之多（"),t("mjx-container",L,[(l(),d("svg",N,j)),V]),e("），MAC 地址由 IEEE 统一管理与分配，理论上，一个网络设备中的网卡上的 MAC 地址是永久的。不同的网卡生产商从 IEEE 那里购买自己的 MAC 地址空间（MAC 的前 24 比特），也就是前 24 比特由 IEEE 统一管理，保证不会重复。而后 24 比特，由各家生产商自己管理，同样保证生产的两块网卡的 MAC 地址不会重复。")]),E,O,z,q,X,t("p",null,[n(s,{to:"/cs-basics/network/arp.html"},{default:a(()=>[e("ARP 协议详解(网络层)")]),_:1})]),B,Z,J,t("ul",null,[K,W,t("li",null,[e("什么是 Internet 协议（IP）？："),t("a",G,[e("https://www.cloudflare.com/zh-cn/learning/network-layer/internet-protocol/"),n(r)])]),t("li",null,[e("透传真实源 IP 的各种方法 - 极客时间："),t("a",Y,[e("https://time.geekbang.org/column/article/497864"),n(r)])]),t("li",null,[e("What Is NAT and What Are the Benefits of NAT Firewalls?："),t("a",$,[e("https://community.fs.com/blog/what-is-nat-and-what-are-the-benefits-of-nat-firewalls.html"),n(r)])])])])}const st=p(P,[["render",tt],["__file","other-network-questions2.html.vue"]]),at=JSON.parse('{"path":"/cs-basics/network/other-network-questions2.html","title":"计算机网络常见面试题总结(下)","lang":"zh-CN","frontmatter":{"title":"计算机网络常见面试题总结(下)","category":"计算机基础","tag":["计算机网络"],"description":"下篇主要是传输层和网络层相关的内容。 TCP 与 UDP TCP 与 UDP 的区别（重要） 是否面向连接：UDP 在传送数据之前不需要先建立连接。而 TCP 提供面向连接的服务，在传送数据之前必须先建立连接，数据传送结束后要释放连接。 是否是可靠传输：远地主机在收到 UDP 报文后，不需要给出任何确认，并且不保证数据不丢失，不保证是否顺序到达。TCP...","head":[["meta",{"property":"og:url","content":"https://snailcoding.cn/cs-basics/network/other-network-questions2.html"}],["meta",{"property":"og:site_name","content":"蜗牛のJava宝典"}],["meta",{"property":"og:title","content":"计算机网络常见面试题总结(下)"}],["meta",{"property":"og:description","content":"下篇主要是传输层和网络层相关的内容。 TCP 与 UDP TCP 与 UDP 的区别（重要） 是否面向连接：UDP 在传送数据之前不需要先建立连接。而 TCP 提供面向连接的服务，在传送数据之前必须先建立连接，数据传送结束后要释放连接。 是否是可靠传输：远地主机在收到 UDP 报文后，不需要给出任何确认，并且不保证数据不丢失，不保证是否顺序到达。TCP..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://oss.javaguide.cn/github/javaguide/cs-basics/network/internet_protocol_ip_address_diagram.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"计算机网络常见面试题总结(下)"}],["meta",{"property":"article:author","content":"Mr.Xu"}],["meta",{"property":"article:tag","content":"计算机网络"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算机网络常见面试题总结(下)\\",\\"image\\":[\\"https://oss.javaguide.cn/github/javaguide/cs-basics/network/internet_protocol_ip_address_diagram.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/network/Figure-1-IPv4Addressformatwithdotteddecimalnotation-29c824f6a451d48d8c27759799f0c995.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/network/Figure-2-IPv6Addressformatwithhexadecimalnotation-7da3a419bd81627a9b2cef3b0efb4940.png\\",\\"https://oss.javaguide.cn/github/javaguide/cs-basics/network/network-address-translation.png\\"],\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Xu\\",\\"url\\":\\"https://snailcoding.cn\\"}]}"]]},"headers":[{"level":2,"title":"TCP 与 UDP","slug":"tcp-与-udp","link":"#tcp-与-udp","children":[{"level":3,"title":"TCP 与 UDP 的区别（重要）","slug":"tcp-与-udp-的区别-重要","link":"#tcp-与-udp-的区别-重要","children":[]},{"level":3,"title":"什么时候选择 TCP，什么时候选 UDP?","slug":"什么时候选择-tcp-什么时候选-udp","link":"#什么时候选择-tcp-什么时候选-udp","children":[]},{"level":3,"title":"HTTP 基于 TCP 还是 UDP？","slug":"http-基于-tcp-还是-udp","link":"#http-基于-tcp-还是-udp","children":[]},{"level":3,"title":"使用 TCP 的协议有哪些?使用 UDP 的协议有哪些?","slug":"使用-tcp-的协议有哪些-使用-udp-的协议有哪些","link":"#使用-tcp-的协议有哪些-使用-udp-的协议有哪些","children":[]},{"level":3,"title":"TCP 三次握手和四次挥手（非常重要）","slug":"tcp-三次握手和四次挥手-非常重要","link":"#tcp-三次握手和四次挥手-非常重要","children":[]},{"level":3,"title":"TCP 如何保证传输的可靠性？（重要）","slug":"tcp-如何保证传输的可靠性-重要","link":"#tcp-如何保证传输的可靠性-重要","children":[]}]},{"level":2,"title":"IP","slug":"ip","link":"#ip","children":[{"level":3,"title":"IP 协议的作用是什么？","slug":"ip-协议的作用是什么","link":"#ip-协议的作用是什么","children":[]},{"level":3,"title":"什么是 IP 地址？IP 寻址如何工作？","slug":"什么是-ip-地址-ip-寻址如何工作","link":"#什么是-ip-地址-ip-寻址如何工作","children":[]},{"level":3,"title":"什么是 IP 地址过滤？","slug":"什么是-ip-地址过滤","link":"#什么是-ip-地址过滤","children":[]},{"level":3,"title":"IPv4 和 IPv6 有什么区别？","slug":"ipv4-和-ipv6-有什么区别","link":"#ipv4-和-ipv6-有什么区别","children":[]},{"level":3,"title":"如何获取客户端真实 IP？","slug":"如何获取客户端真实-ip","link":"#如何获取客户端真实-ip","children":[]},{"level":3,"title":"NAT 的作用是什么？","slug":"nat-的作用是什么","link":"#nat-的作用是什么","children":[]}]},{"level":2,"title":"ARP","slug":"arp","link":"#arp","children":[{"level":3,"title":"什么是 Mac 地址？","slug":"什么是-mac-地址","link":"#什么是-mac-地址","children":[]},{"level":3,"title":"ARP 协议解决了什么问题？","slug":"arp-协议解决了什么问题","link":"#arp-协议解决了什么问题","children":[]},{"level":3,"title":"ARP 协议的工作原理？","slug":"arp-协议的工作原理","link":"#arp-协议的工作原理","children":[]}]},{"level":2,"title":"复习建议","slug":"复习建议","link":"#复习建议","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":15.83,"words":4749},"filePathRelative":"cs-basics/network/other-network-questions2.md","excerpt":"<p>下篇主要是传输层和网络层相关的内容。</p>\\n<h2>TCP 与 UDP</h2>\\n<h3>TCP 与 UDP 的区别（重要）</h3>\\n<ol>\\n<li><strong>是否面向连接</strong>：UDP 在传送数据之前不需要先建立连接。而 TCP 提供面向连接的服务，在传送数据之前必须先建立连接，数据传送结束后要释放连接。</li>\\n<li><strong>是否是可靠传输</strong>：远地主机在收到 UDP 报文后，不需要给出任何确认，并且不保证数据不丢失，不保证是否顺序到达。TCP 提供可靠的传输服务，TCP 在传递数据之前，会有三次握手来建立连接，而且在数据传递时，有确认、窗口、重传、拥塞控制机制。通过 TCP 连接传输的数据，无差错、不丢失、不重复、并且按序到达。</li>\\n<li><strong>是否有状态</strong>：这个和上面的“是否可靠传输”相对应。TCP 传输是有状态的，这个有状态说的是 TCP 会去记录自己发送消息的状态比如消息是否发送了、是否被接收了等等。为此 ，TCP 需要维持复杂的连接状态表。而 UDP 是无状态服务，简单来说就是不管发出去之后的事情了（<strong>这很渣男！</strong>）。</li>\\n<li><strong>传输效率</strong>：由于使用 TCP 进行传输的时候多了连接、确认、重传等机制，所以 TCP 的传输效率要比 UDP 低很多。</li>\\n<li><strong>传输形式</strong>：TCP 是面向字节流的，UDP 是面向报文的。</li>\\n<li><strong>首部开销</strong>：TCP 首部开销（20 ～ 60 字节）比 UDP 首部开销（8 字节）要大。</li>\\n<li><strong>是否提供广播或多播服务</strong>：TCP 只支持点对点通信，UDP 支持一对一、一对多、多对一、多对多；</li>\\n<li>……</li>\\n</ol>","autoDesc":true}');export{st as comp,at as data};
