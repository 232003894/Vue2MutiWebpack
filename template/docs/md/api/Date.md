

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Date </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>dateFormat</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">dateFormat(date,[format])</b><br><br>对日期进行格式化，目标可能是符合一定格式的字符串，数值，或Date对象。<br>
显示一个用户必须注意到并且必须点击按钮确认才能关闭的信息<br>
format 格式化说明
</p>

| 标记   | 说明 |
|-------|-------|
|yyyy|将当前的年份以4位数输出，如果那一年为300，则补足为0300|
|yy|将当前的年份截取最后两位数输出，如2014变成14， 1999变成99， 2001变成01|
|y|将当前的年份原样输出，如2014变成2014， 399变成399， 1变成1|
|MMMM|在中文中，MMMM与MMM是没有区别，都是"1月"，"2月"……英语则为该月份的单词全拼|
|MMM|在中文中，MMMM与MMM是没有区别，都是"1月"，"2月"……英语则为该月份的单词缩写(前三个字母)|
|MM|将月份以01-12的形式输出(即不到两位数，前面补0)|
|M|将月份以1-12的形式输出|
|dd|以日期以01-31的形式输出(即不到两位数，前面补0)|
|d|以日期以1-31的形式输出|
|EEEE|将当前天的星期几以“星期一”，“星期二”，“星期日”的形式输出，英语则Sunday-Saturday|
|EEE|将当前天的星期几以“周一”，“周二”，“周日”的形式输出，英语则Sun-Sat|
|HH|将当前小时数以00-23的形式输出|
|H|将当前小时数以0-23的形式输出|
|hh|将当前小时数以01-12的形式输出|
|h|将当前小时数以0-12的形式输出|
|mm|将当前分钟数以00-59的形式输出|
|m|将当前分钟数以0-59的形式输出|
|ss|将当前秒数以00-59的形式输出|
|s|将当前秒数以0-59的形式输出|
|a|将当前时间是以“上午”，“下午”的形式输出|
|Z|将当前时间的时区以-1200-+1200的形式输出|
|fullDate|相当于y年M月d日EEEE 2014年12月31日星期三|
|longDate|相当于y年M月d日EEEE 2014年12月31日|
|medium|相当于yyyy-M-d H:mm:ss 2014-12-31 19:02:44|
|mediumDate|相当于yyyy-M-d 2014-12-31|
|mediumTime|相当于H:mm:ss 19:02:44|
|short|相当于yy-M-d ah:mm 14-12-31 下午7:02|
|shortDate|相当于yy-M-d 14-12-31|
|shortTime|相当于ah:mm 下午7:02|

<p>


<p class="tip">参考的 avalon date过滤器
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>date</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-date">Date</span> <span class="type type-string">String</span> <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>符合一定格式的字符串，数值，或Date对象</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[format]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>默认值 'yyyy-M-d',其他参考上面的表格</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
var d = new Date()
$api.dateFormat(d,"yyyy-MM-dd HH:mm:ss")

var d = '2011/07/08'
$api.dateFormat(d,"yyyy-MM-dd HH:mm:ss")

var d = '2011-07-08'
$api.dateFormat(d,"yyyy-MM-dd HH:mm:ss")

var d = '01-01-2000'
$api.dateFormat(d,"yyyy-MM-dd HH:mm:ss")

var d = '03 04,2000'
$api.dateFormat(d,"yyyy-MM-dd HH:mm:ss")

var d = '3 4,2000'
$api.dateFormat(d,"yyyy-MM-dd")

var d = 1373021259229
$api.dateFormat(d,"yyyy-MM-dd HH:mm:ss")

var d = '1373021259229'
$api.dateFormat(d,"yyyy-MM-dd HH:mm:ss")

//这是ISO8601的日期格式
var d = '2014-12-07T22:50:58+08:00'
$api.dateFormat(d,"yyyy-MM-dd HH:mm:ss")

//这是ASP.NET输出的JSON数据的日期格式
var d = '\/Date(1373021259229)\/'
$api.dateFormat(d,"yyyy-MM-dd HH:mm:ss") 

```
<br>