

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Vue filter </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>capitalize</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">capitalize(value)</b><br><br>字符串格式化，首字母大写：'abc' => 'Abc'


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>带转换的字符串</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-string">String</span>

- 说明：转换后的字符串

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// vue filters
<p>\{{ str | capitalize }}</p>

// js调用
var str = 'abc'
$api.capitalize(str)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>currency</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">currency(value,[opts])</b><br><br>货币格式化
参考：http://openexchangerates.github.io/accounting.js/#methods


<p class="tip">解决原生js toFixed 四舍五入的问题 
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>待处理的数字</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[opts]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>选项</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| symbol | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 货币符号，默认值：'¥' |
| precision | <span class="type type-number">Number</span> | <span class="type type-false">No</span> | 位数精度，默认值：2 |
| thousand | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 千分位符号，默认值：','，如果''表示不要千分位符号 |
| decimal | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 小数点服务号，默认值：'.' |


<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-number">Number</span>

- 说明：转换后的数字

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// vue filters
<p>\{{ num | currency }}</p>
<p>\{{ num |currency({precision:3}) }}</p>

// js调用
$api.currency(1222.615) //=>"¥1,222.62"
$api.currency(1222.615,{precision:3) //=>"¥1,222.615"

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>formatDate</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">formatDate(date)</b><br><br>对日期进行格式化，目标可能是符合一定格式的字符串，数值，或Date对象。<br>
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


<p class="tip">参考的 avalon date过滤器：http://avalonjs.coding.me/filter.html#date
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>date</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>符合一定格式的字符串，数值，或Date对象</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-string">String</span>

- 说明：日期字符串

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// vue filters
<p>\{{ date | formatDate('yyyy-MM-dd') }}</p>

// js调用
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

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>lowercase</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">lowercase(value)</b><br><br>字符串格式化，小写：'AbC' => 'abc'


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>带转换的字符串</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-string">String</span>

- 说明：转换后的字符串

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// vue filters
<p>\{{ str | lowercase }}</p>

// js调用
var str = 'AbC'
$api.lowercase(str)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>number</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">number(value,[opts])</b><br><br>数字格式化
参考：http://openexchangerates.github.io/accounting.js/#methods


<p class="tip">解决原生js toFixed 四舍五入的问题 
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>待处理的数字</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[opts]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>选项</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| precision | <span class="type type-number">Number</span> | <span class="type type-false">No</span> | 位数精度，默认值：2 |
| thousand | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 千分位符号，默认值：','，如果''表示不要千分位符号 |
| decimal | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 小数点服务号，默认值：'.' |


<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-number">Number</span>

- 说明：转换后的数字

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// vue filters
<p>\{{ num | number }}</p>
<p>\{{ num | number({precision:3}) }}</p>

// js调用
$api.number(1222.615) //=>"1,222.62"
$api.number(1222.615,{precision:3) //=>"1,222.615"

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>pluralize</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">pluralize(value,[count,inclusive])</b><br><br>单词复数


<p class="tip">参考：https://www.npmjs.com/package/pluralize
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>待处理的单词</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[count]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>次数</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[inclusive]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-boolean">Boolean</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>包含次数</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-string">String</span>

- 说明：转换后的字符串

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// vue filters
<p>\{{ str | pluralize }}</p>
<p>\{{ str | pluralize(1) }}</p>
<p>\{{ str | pluralize(1,true) }}</p>

// js调用
$api.pluralize('test') //=> "tests" 
$api.pluralize('test, 1) //=> "test" 
$api.pluralize('test', 5) //=> "tests" 
$api.pluralize('test', 1, true) //=> "1 test" 
$api.pluralize('test', 5, true) //=> "5 tests" 

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>uppercase</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">uppercase(value)</b><br><br>字符串格式化，大写：'abc' => 'ABC'


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>带转换的字符串</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-string">String</span>

- 说明：转换后的字符串

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// vue filters
<p>\{{ str | uppercase }}</p>

// js调用
var str = 'abc'
$api.uppercase(str)

```
<br>