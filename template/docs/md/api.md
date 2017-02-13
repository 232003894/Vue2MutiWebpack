

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Utils </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>delHtmlTag</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">delHtmlTag(html)</b><br><br>去掉所有html标记


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>html</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>待处理html</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-string">String</span>

- 说明：去掉 html tag的文本

<br><span class="vux-method-title">示例：</span>

<br>

``` js
var tmp = '<span class="type type-object">abcd</span>'
// "abcd" 
$api.delHtmlTag(tmp)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>equals</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">equals(x,y,[propertys])</b><br><br>比较2个对象是否相等,递归比较<br>
可以比较2个对象的全部属性,也可以只比较指定属性<br>
如果是function类型会转成字符串比较


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>x</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要比较的对象</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>y</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要比较的对象</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[propertys]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>指定需要比较的属性,多字段用","分隔</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否为一个纯净的对象

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// true 
$api.equals([1,2,3],[1,2,3])

// false 
$api.equals({sub:'abc',sub1:'abc',subtitle:'sub'},{sub:'abc',sub1:'abc',test:'sub123'})

// 比较指定字段
// false 
$api.equals({sub:'abc',sub1:'abc',subtitle:'sub'},{sub:'abc',sub1:'abc',test:'sub123'},'sub,sub1')

// true
$api.equals(function a(){
  return '123'
},function a(){
  return '123'
})

// false
$api.equals(function a(){
  // 123
  return '123'
},function a(){
  return '123'
})

// false
$api.equals(function a(){
  return '123'
},function b(){
  return '123'
})

// true
$api.equals({
  fun:function (){
    return '123'
  }
},{
  fun:function (){
    return '123'
  }
})

// false
$api.equals({
  fun:function (){
    return '1'
  }
},{
  fun:function (){
    return '2'
  }
})

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>getStyle</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">getStyle(obj)</b><br><br>获取dom元素的style对象


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>obj</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>dom元素</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-object">Object</span>

- 说明：style对象

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.getStyle(document.getElementById('test'))

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  新增</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>getType</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">getType(obj)</b><br><br>获取类型


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>obj</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要获取类型的对象</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-string">String</span>

- 说明：'boolean', 'number', 'string', 'function', 'array', 'date', 'regexp', 'object', 'error'

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// string 
$api.getType('12')

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>isArray</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">isArray(value)</b><br><br>判定是否是数组类型


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要判断的对象</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否为数组类型

<br><span class="vux-method-title">示例：</span>

<br>

``` js
var arr = [1,2,3]
// true 
$api.isArray(arr)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>isDate</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">isDate(value)</b><br><br>判定是否是日期类型


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要判断的对象</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否为日期类型

<br><span class="vux-method-title">示例：</span>

<br>

``` js
var date = new Date()
// true 
$api.isDate(date)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>isFunction</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">isFunction(value)</b><br><br>判定是否是函数类型


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要判断的对象</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否为函数类型

<br><span class="vux-method-title">示例：</span>

<br>

``` js
var fun = function(){
  // ...
}
// true 
$api.isFunction(fun)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>isObject</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">isObject(value)</b><br><br>判定是否是对象类型


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要判断的对象</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否为对象类型

<br><span class="vux-method-title">示例：</span>

<br>

``` js
var obj = {
  title:'ddd'
}
// true 
$api.isObject(obj)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>isPlainObject</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">isPlainObject(value)</b><br><br>判定是否是一个纯净的对象<br>
不能为window, 任何类(包括自定义类)的实例,元素节点,文本节点


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要判断的对象</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否为一个纯净的对象

<br><span class="vux-method-title">示例：</span>

<br>

``` js
var tmp = window
// false 
$api.isPlainObject(tmp)

var obj = {
  title:'ddd'
}
// true 
$api.isPlainObject(obj)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>isRegExp</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">isRegExp(value)</b><br><br>判定是否是正则表达式类型


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要判断的对象</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否为正则表达式类型

<br><span class="vux-method-title">示例：</span>

<br>

``` js
var raspnetjson = /^\/Date\((\d+)\)\/$/   
// true 
$api.isRegExp(raspnetjson)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>isString</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">isString(value)</b><br><br>判定是否是字符串类型


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要判断的对象</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否为字符串类型

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// true 
$api.isString('12')

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>isWindow</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">isWindow(value)</b><br><br>判定是否是window对象


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要判断的对象</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否为window对象

<br><span class="vux-method-title">示例：</span>

<br>

``` js
var tmp = window
// true 
$api.isWindow(tmp)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>log</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">log(msg)</b><br><br>输出日志<br>
相当于console.log,只是增加了时间输出


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>msg</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>要输出的消息</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// [下午5:27:50 387]
// 日志输出
$api.log('日志输出')

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>mix</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">mix([deep],target,[object1,objectN])</b><br><br>用于合并多个对象或深克隆,类似于jQuery.extend <br/>
多个数组也可以合并,这里数组可以理解为以索引为属性的对象,对应的索引位会被替换 <br/>
mix(target, [object1, objectN]) <br/>
mix([deep], target, [object1, objectN])


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[deep]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-boolean">Boolean</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>深拷贝,如果是true，合并成为递归</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>target</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span> <span class="type type-array">Array</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>对象扩展，它将接收新的属性</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[object1]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span> <span class="type type-array">Array</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>一个对象，它包含额外的属性合并到第一个参数</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[objectN]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span> <span class="type type-array">Array</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>一个对象，它包含额外的属性合并到第一个参数</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-object">Object</span> <span class="type type-array">Array</span>

- 说明：返回 target

<br><span class="vux-method-title">示例：</span>

<br>

``` js

// 多个对象拷贝
// {"title":"sss","obj":{"sub":"abc","test":"sub123"}}
$api.mix({title:'dd',obj:{sub:'abc',subtitle:'sub'}},{title:'sss',obj:{sub:'abc',test:'sub123'}})

// 多个对象深度拷贝
// {"title":"sss","obj":{"sub":"abc","subtitle":"sub","test":"sub123"}}
$api.mix(true,{title:'dd',id:123,obj:{sub:'abc',subtitle:'sub'}},{title:'sss',id1:123,obj:{sub:'abc',test:'sub123'}})

// 多个数组拷贝
// [4,{"sub":"abc","test":"sub123"},3,5]
$api.mix([1,{sub:'abc',subtitle:'sub'},2,5],[4,{sub:'abc',test:'sub123'},3])

// 多个数组深度拷贝
// [4,{"sub":"abc","subtitle":"sub","test":"sub123"},3,5]
$api.mix(true,[1,{sub:'abc',subtitle:'sub'},2,5],[4,{sub:'abc',test:'sub123'},3])

// 对象拷贝到数组中
// [1, 1, 2, title: "ddd", id: 123]
$api.mix([1,1,2],{title:'dd',id:123})

// 数组拷贝到对象中
// Object {0: 1, 1: 1, 2: 2, title: "dd", id: 123}
$api.mix({title:'dd',id:123},[1,1,2])

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>toFixed</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">toFixed(value,[precision])</b><br><br>把 Number 四舍五入为指定小数位数的数字<br>
参考：http://openexchangerates.github.io/accounting.js/#methods


<p class="tip">解决原生js toFixed 四舍五入的问题 <br/>
(0.615).toFixed(2) // "0.61" <br/>
$api.toFixed(0.615, 2) // "0.62"
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要四舍五入的数字</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[precision]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>小数位的精度，几位小数</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-number">Number</span>

- 说明：四舍五入后的数字

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 2位精度
$api.toFixed(0.615, 2) // "0.62"

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>tpl</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">tpl(tplStr,data)</b><br><br>模板替换输出<br>
需要替换的部分使用'{#'+'#}'限定<br>
比如:{#name#}


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>tplStr</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>模板</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>data</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>需要替换的数据</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-string">String</span>

- 说明：格式化替换的文本

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// "最少输入12个字"
$api.tpl('最少输入{#minlength#}个字',{'minlength': 12})

```
<br>

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Filter </span>



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

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Environment </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe628;</i><span style="display:none"> </span>os</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > 系统环境


 <br><span class="vux-method-title">类型：</span><span class="type type-object">Object</span><br>

<br>

| 字段   | 类型 | 说明   |
|-------|-------|-------|
| name | <span class="type type-string">String</span> | 系统环境名称 |
| wechat | <span class="type type-boolean">Boolean</span><br><span class="type type-string">String</span> | 不是微信环境返回false,是微信环境返回版本号 |
| version | <span class="type type-string">String</span> | 系统环境版本号 |
| android | <span class="type type-boolean">Boolean</span> | 是否安卓环境 |
| isBadAndroid | <span class="type type-boolean">Boolean</span> | 是否安卓非Chrome环境 |
| ios | <span class="type type-boolean">Boolean</span> | 是否为苹果设备 |
| iphone | <span class="type type-boolean">Boolean</span> | 是否为苹果手机 |
| ipad | <span class="type type-boolean">Boolean</span> | 是否为ipad |
| plus | <span class="type type-boolean">Boolean</span> | 是否在5+基座中运行 |
| stream | <span class="type type-boolean">Boolean</span> | 是否为流应用 |


<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.os.android

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  新增name字段</span></li></ul>

<span class="vux-params-property"> v1.0.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  去掉wechat.version</span></li></ul>
<br>

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Action </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>actionCount</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">actionCount(type,[name,index])</b><br><br>获取符合条件的action的钩子的数量


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>type</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>action类型</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[name]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子名称</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[index]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子排序值</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-number">Number</span>

- 说明：符合条件的action的钩子的数量

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.actionCount('inits')
$api.actionCount('inits','browser')
$api.actionCount('inits','browser',2)

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  增加 name,index 参数</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>addAction</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">addAction(type,hook)</b><br><br>添加指定类型action的钩子


<p class="warning">(type,name,index) 组合后必须唯一<br>
如果已经存在,则覆盖
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>type</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>action类型</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>hook</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>hook action处理对象</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| name | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 名称 |
| index | <span class="type type-number">Number</span> | <span class="type type-false">No</span> | 排序值,默认值:1000 |
| handle | <span class="type type-function">Function</span> | <span class="type type-boolean">true</span> | 处理钩子,返回false代表中断,反之则继续 |


<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-array">Array</span>

- 说明：返回该类型的钩子集合

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 添加初始化action
$api.addAction('inits', {
  name:'browser',
  index:100,
  handle:function () {
    console.log('browser init')
  }
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  (type,name,index)组合后必须唯一 ,否则覆盖</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>doAction</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">doAction(type,[callback])</b><br><br>执行指定类型的action


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>type</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>action类型</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[callback]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-function">Function</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>回调</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 执行初始化
$api.doAction('inits')

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>removeAction</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">removeAction(type,name,index)</b><br><br>删除指定类型action的钩子


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>type</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>action类型</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>name</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子名称</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>index</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子排序值</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-array">Array</span>

- 说明：该类型的钩子集合

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 删除指定的初始化action
$api.removeAction('inits','browser',100)

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  删除action的方法改进,不使用对象比较,通过(type,name,index)</span></li></ul>
<br>

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Event </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>fire</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">fire(winObj,eventType,[eventData])</b><br><br>单窗体事件通知


<p class="tip">H5+模式、window原生模式 可用
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>winObj</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>窗口对象 webview 或者 window</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>eventType</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>事件名称</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[eventData]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>通知数据</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 执行初始化
$api.fire(window,'msgclose',{
  msg:'消息'
})

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>fireAll</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">fireAll(eventType,[eventData])</b><br><br>所有窗体


<p class="tip">H5+模式、window原生模式 可用<br><br>
H5+模式:所有窗体 <br>
window原生模:本窗体
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>eventType</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>事件名称</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[eventData]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>通知数据</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 执行初始化
$api.fireAll('msgclose',{
  msg:'消息'
})

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>fireTree</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">fireTree(winObj,eventType,[eventData])</b><br><br>窗体(树)事件通知,本窗体及所有子窗体(不递归)


<p class="tip">H5+模式、window原生模式 可用<br><br>
H5+模式:本窗体和所有子窗体 <br>
window原生模:本窗体
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>winObj</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>窗口对象 webview 或者 window</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>eventType</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>事件名称</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[eventData]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>通知数据</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 执行初始化
$api.fireTree(window,'msgclose',{
  msg:'消息'
})

```
<br>

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Storage </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>getSetting</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">getSetting(key)</b><br><br>通过键(key)检索获取当前状态的值
相当于 getStorageObject 指定key的简写


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>key</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>键名</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-any">Any</span>

- 说明：对应键值

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// $settings version
$api.getSetting('version')

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>getState</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">getState(key)</b><br><br>通过键(key)检索获取当前状态的值
相当于 getStorageObject 指定key的简写


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>key</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>键名</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-any">Any</span>

- 说明：对应键值

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// $state uid
$api.getState('uid')

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>getStorage</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">getStorage(key)</b><br><br>通过键(key)检索获取应用存储的值


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>key</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>键名</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-any">Any</span>

- 说明：对应键值

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// $settings 
$api.getStorage('$settings')

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>getStorageObject</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">getStorageObject(key,objKey)</b><br><br>通过键(key)检索获取存储值中对象(objKey)的值


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>key</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>存储的键名</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>objKey</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>对象中的键名</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-any">Any</span>

- 说明：对应键值

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// $settings.version
$api.getStorageObject('$settings','version')

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>setSetting</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">setSetting(key,value)</b><br><br>修改或添加键值(key-value)对数据到当前状态的值<br>
相当于 setStorageObject 指定key的简写


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>key</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>键名</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>键值</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// $settings version
$api.setState('version','1.00')

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>setState</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">setState(key,value)</b><br><br>修改或添加键值(key-value)对数据到当前状态的值<br>
相当于 setStorageObject 指定key的简写


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>key</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>键名</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>键值</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// $state uid
$api.setState('uid','mike')

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>setStorage</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">setStorage(key,value)</b><br><br>修改或添加键值(key-value)对数据到当前状态


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>key</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>键名</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>键值</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// $settings 
$api.setStorage('$settings',{version:'1.00'})

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>setStorageObject</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">setStorageObject(key,objKey,value)</b><br><br>修改或添加键值对数据到对应存储(Key)对象的属性(objKey-value)的值


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>key</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>存储的键名</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>objKey</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>对象中的键名</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>value</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>键值</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// $settings.version 
$api.setStorageObject('$settings','version','1.00')

```
<br>

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Back </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>addAction</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">addAction(hook)</b><br><br>添加'backs'类型action的钩子


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>hook</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>hook action处理对象</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| name | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 名称 |
| index | <span class="type type-number">Number</span> | <span class="type type-false">No</span> | 排序值,默认值:1000 |
| handle | <span class="type type-function">Function</span> | <span class="type type-boolean">true</span> | 处理钩子,返回false代表中断,反之则继续 |


<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-array">Array</span>

- 说明：返回'backs'类型的钩子集合

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 添加初始化action
$api.addAction( {
  name:'browser',
  index:100,
  handle:function () {
    console.log('browser backs')
  }
})

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>addMsgBack</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">addMsgBack(hook)</b><br><br>添加'msgBacks'类型action的钩子


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>hook</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>hook action处理对象</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| name | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 名称 |
| index | <span class="type type-number">Number</span> | <span class="type type-false">No</span> | 排序值,默认值:1000 |
| handle | <span class="type type-function">Function</span> | <span class="type type-boolean">true</span> | 处理钩子,返回false代表中断,反之则继续 |


<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-array">Array</span>

- 说明：返回'msgBacks'类型的钩子集合

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 添加初始化action
$api.addMsgBack( {
  name:'browser',
  index:100,
  handle:function () {
    console.log('browser msgBacks')
  }
})

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>back</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">back([closeMsg])</b><br><br>执行back action(后退)<br>
比如header的后退


<p class="tip">执行顺序:msgback > beforeback > back的hooks<br>
back的hooks中则更加index的顺序来执行,一般情况下是先 h5+的back 再web的back
</p>

<br><span class="vux-method-title">参数：</span>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[closeMsg]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-boolean">Boolean</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>是否先执行msg类型的关闭(常用于安卓后退按键的后退),默认值false</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 直接后退
$api.back()
// 如果有msg先关闭msg
$api.back(true)

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  合并了backWithMsg方法,通过closeMsg参数</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>canHistoryBack</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">canHistoryBack([value])</b><br><br>get/set 后退是否使用history.back,默认值 true<br>
true:back功能会先使用history.back<br>
false:不使用history.back,直接back,比如spa的路由首页(直接退出就可以了),而其他路由需要<br>


<br><span class="vux-method-title">参数：</span>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[value]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-any">Any</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>值(只要值不是false都代表true),输入则set,不输入则get</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：后退是否使用history.back

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// set true
$api.canHistoryBack(true)
$api.canHistoryBack('false')
$api.canHistoryBack(1)
// set false
$api.canHistoryBack(false)
// get
$api.canHistoryBack()

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  getCanHistory和setCanHistory 合并为 canHistoryBack</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>menu</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">menu()</b><br><br>H5Plus 菜单


<p class="warning">只在 H5+模式 模式中有效
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.menu()

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-todo">todo</span>  暂未实现菜单功能</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>plusBack</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">plusBack()</b><br><br>H5Plus back


<p class="warning">只在 H5+模式 模式中有效
</p>

<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否执行完成<br/><br/>
> 在需要退出app的情况时,<br/>
> 第一次back会提示‘再按一次退出应用’,<br/>
> back其实没有执行成功,<br/>
> 只有连续2次back,才会执行成功<br/>
> 在弹出权限层的时候,可以根据返回值true或false进行后续业务


<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.plusBack()

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  增加返回值,表示是否执行完成</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>removeBack</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">removeBack(name,index)</b><br><br>删除'backs'类型action的钩子


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>name</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子名称</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>index</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子排序值</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-array">Array</span>

- 说明：该类型的钩子集合

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 删除指定的'backs'action
$api.removeBack('browser',100)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>removeMsgBack</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">removeMsgBack(name,index)</b><br><br>删除'msgBacks'类型action的钩子


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>name</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子名称</code>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>index</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-number">Number</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>钩子排序值</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-array">Array</span>

- 说明：该类型的钩子集合

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 删除指定的'msgBacks'action
$api.removeBack('browser',100)

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>setPreBack</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">setPreBack(preBack)</b><br><br>设置back前处理


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>preBack</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-function">Function</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>back action 前的预处理方法</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.setPreBack(()=>{
  $api.log('back前处理')
})

```
<br>

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Dialog </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>alert</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">alert(msg,[options])</b><br><br>弹窗信息<br>
显示一个用户必须注意到并且必须点击按钮确认才能关闭的信息


<p class="tip">Vue组件模式、H5+模式、window原生模式 都可用
</p>

<p class="warning">options.nativeFirst：<br>
（默认值）<b>false：使用Vue组件</b><br>
优先级：Vue组件模式 > H5 Plus模式 > window原生模式<br>
<b>true：不使用Vue组件</b><br>
优先级：H5 Plus模式 > window原生模式
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>msg</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>提示内容</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[options]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>其他选项</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| title | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 弹窗的标题<br>window.alert下无效 |
| buttonText | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 按钮文字<br>window.alert下无效 |
| onShow | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | 弹窗前执行方法 |
| onHide | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | 弹窗确定后执行方法 |
| nativeFirst | <span class="type type-boolean">Boolean</span> | <span class="type type-false">No</span> | 【Vue组件】是否优先使用原生的，默认值false |
| maskTransition | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 【Vue组件】遮罩动画，默认值 'vux-fade' |
| dialogTransition | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 【Vue组件】弹窗主体动画，默认值 'vux-dialog' |


<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 简单示例 msg
$api.alert('消息123')

// 完整示例 
$api.alert('消息123',{
  title:'标题',
  buttonText:'知道了',
  onShow:()=>{
    console.log('alert onShow')
  },
  onHide:()=>{
    console.log('alert onHide')
  }
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-feature">feature</span>  新增：调用Vue组件，实现！</span></li><li><span style="font-size:14px;"><span class="change change-change">change</span>  是否优先使用原生方法,nativeFirst</span></li></ul>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  由alert.show 改为 alert</span></li></ul>

<span class="vux-params-property"> v1.0.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  msg 属性从 options中单独出来,为必填项,options为选填项</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>alertClose</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">alertClose()</b><br><br>关闭弹窗信息<br>
主要用于Android中的后退键关闭弹窗


<p class="warning">只在Vue组件模式 并且 显示时传入的 options.<b>nativeFirst</b>为<b>false</b>时（默认值）可用
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 关闭弹窗
$api.alertClose()

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-feature">feature</span>  新增：调用Vue组件，实现！</span></li></ul>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  由alert.hide 改为 alertClose</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>confirm</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">confirm(msg,[options])</b><br><br>用于显示一个带有指定消息和 OK 及取消按钮的对话框<br>


<p class="tip">Vue组件模式、H5+模式、window原生模式 都可用
</p>

<p class="warning">options.nativeFirst：<br>
（默认值）<b>false：使用Vue组件</b><br>
优先级：Vue组件模式 > H5 Plus模式 > window原生模式<br>
<b>true：不使用Vue组件</b><br>
优先级：H5 Plus模式 > window原生模式
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>msg</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>提示内容</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[options]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>其他选项</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| title | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 弹窗的标题<br>window.confirm下无效 |
| confirmText | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 确定按钮文字<br>window.confirm下无效 |
| cancelText | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 取消文字<br>window.confirm下无效 |
| onShow | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | confirm显示前执行方法 |
| onHide | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | confirm关闭后(确定或取消)执行方法 |
| onConfirm | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | 确定方法 |
| onCancel | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | 取消方法 |
| nativeFirst | <span class="type type-boolean">Boolean</span> | <span class="type type-false">No</span> | 【Vue组件】是否优先使用原生的，默认值false |
| maskTransition | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 【Vue组件】遮罩动画，默认值 'vux-fade' |
| dialogTransition | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 【Vue组件】弹窗主体动画，默认值 'vux-dialog' |


<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 简单示例 msg
$api.confirm('消息123')

// 完整示例 
$api.confirm('消息123',{
  title:'标题',
  confirmText:'YES',
  cancelText:'NO',
  onShow:()=>{
    console.log('confirm onShow')
  },
  onHide:()=>{
    console.log('confirm onHide')
  },
  onConfirm:()=>{
    console.log('confirm 确定')
  },
  onCancel:()=>{
    console.log('confirm 取消')
  }
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-feature">feature</span>  新增：调用Vue组件，实现！</span></li><li><span style="font-size:14px;"><span class="change change-change">change</span>  是否优先使用原生方法,nativeFirst</span></li></ul>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  confirm.show 改为 confirm</span></li></ul>

<span class="vux-params-property"> v1.0.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  msg 属性从 options中单独出来,为必填项,options为选填项</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>confirmClose</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">confirmClose()</b><br><br>关闭confirm弹窗信息<br>
主要用于Android中的后退键关闭弹窗


<p class="warning">只在Vue组件模式 并且 显示时传入的 options.<b>nativeFirst</b>为<b>false</b>时（默认值）可用
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 关闭弹窗
$api.confirmClose()

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  由alert.hide 改为 alertClose</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>loading</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">loading([msg,options])</b><br><br>等待对话框<br>
加载中的效果


<p class="tip">window原生模式不可用<br>
Vue组件模式、H5+模式 可用
</p>

<p class="warning">options.nativeFirst：<br>
（默认值）<b>false：使用Vue组件</b><br>
优先级：Vue组件模式 > H5 Plus模式<br>
<b>true：不使用Vue组件</b><br>
优先级：H5 Plus模式
</p>

<br><span class="vux-method-title">参数：</span>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[msg]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>加载中文字内容</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[options]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>其他选项</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| onShow | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | 提示前执行方法 |
| onHide | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | 提示关闭后执行方法 |
| position | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 【Vue组件】定位方式，默认为absolute，在100%的布局下用absolute可以避免抖动 |
| nativeFirst | <span class="type type-boolean">Boolean</span> | <span class="type type-false">No</span> | 【Vue组件】是否优先使用原生的，默认值false |


<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 简单示例 msg
$api.loading()
$api.loading('消息123')

// 完整示例 
$api.loading('消息123',{
  onShow:()=>{
    console.log('loading onShow')
  },
  onHide:()=>{
    console.log('loading onHide')
  }
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-feature">feature</span>  新增：调用Vue组件，实现！</span></li><li><span style="font-size:14px;"><span class="change change-change">change</span>  是否优先使用原生方法,nativeFirst</span></li></ul>

<span class="vux-params-property"> v1.0.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  msg 属性从 options中单独出来,为必填项,options为选填项</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>loadingClose</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">loadingClose()</b><br><br>关闭等待对话框<br>


<p class="tip">window原生模式不可用<br>
Vue组件模式、H5+模式 可用
</p>

<p class="warning">loading显示时传入的 options.<b>nativeFirst</b>：<br>
<b>false</b>（默认值）<br>
优先级：Vue组件模式 > H5 Plus模式<br>
<b>true</b><br>
优先级：H5 Plus模式
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 关闭等待对话框
$api.loadingClose()

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-feature">feature</span>  新增：调用Vue组件，实现！</span></li><li><span style="font-size:14px;"><span class="change change-change">change</span>  是否优先使用原生方法,nativeFirst</span></li></ul>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  从loading中分离出来loadingClose</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>login</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">login([reload,options])</b><br><br>登录层


<p class="tip">Vue组件模式下可用
</p>

<br><span class="vux-method-title">参数：</span>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[reload]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-boolean">Boolean</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>登录后是否需要重新载入来源页，默认值：true</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[options]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-function">Function</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>登录成功的回调</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 简单示例 
$api.login()
// 完整示例 
$api.login(false,()=>{
    alert('登录成功')
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-feature">feature</span>  新增：调用Vue组件，实现！</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>loginCancle</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">loginCancle()</b><br><br>取消登录（未登录关闭）


<p class="tip">Vue组件模式下可用
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 示例 
$api.loginCancle()

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-feature">feature</span>  新增：调用Vue组件，实现！</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>loginClose</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">loginClose()</b><br><br>关闭登录层（登录成功）


<p class="tip">Vue组件模式下可用
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 示例 
$api.loginClose()

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-feature">feature</span>  新增：调用Vue组件，实现！</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>toast</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">toast(msg,[options])</b><br><br>提示消息<br>
弹出的提示消息为非阻塞模式，显示指定时间后自动消失


<p class="tip">window原生模式不可用<br>
Vue组件模式、H5+模式 可用
</p>

<p class="warning">options.nativeFirst：<br>
（默认值）<b>false：使用Vue组件</b><br>
优先级：Vue组件模式 > H5 Plus模式<br>
<b>true：不使用Vue组件</b><br>
优先级：H5 Plus模式
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>msg</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>提示内容</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[options]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>其他选项</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| time | <span class="type type-number">Number</span> | <span class="type type-false">No</span> | 持续时间 |
| onShow | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | 提示前执行方法 |
| onHide | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | 提示关闭后执行方法 |
| nativeFirst | <span class="type type-boolean">Boolean</span> | <span class="type type-false">No</span> | 【Vue组件】是否优先使用原生的，默认值false |
| type | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 【Vue组件】类型，默认值 text，可选值 success, warn, cancel, text |
| width | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 【Vue组件】宽度，默认值 7.6em |
| isShowMask | <span class="type type-boolean">Boolean</span> | <span class="type type-false">No</span> | 【Vue组件】是否显示遮罩，如果显示，用户将不能点击页面上其他元素，默认值 true |


<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 简单示例 msg
$api.toast('消息123')

// 完整示例 
$api.toast('消息123',{
  time:2000,
  onShow:()=>{
    console.log('toast onShow')
  },
  onHide:()=>{
    console.log('toast onHide')
  }
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-feature">feature</span>  新增：调用Vue组件，实现！</span></li><li><span style="font-size:14px;"><span class="change change-change">change</span>  是否优先使用原生方法,nativeFirst</span></li></ul>

<span class="vux-params-property"> v1.0.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  msg 属性从 options中单独出来,为必填项,options为选填项</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>toastClose</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">toastClose()</b><br><br>关闭toast信息<br>
主要用于Android中的后退键关闭


<p class="warning">只在Vue组件模式 并且 显示时传入的 options.<b>nativeFirst</b>为<b>false</b>时（默认值）可用
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 关闭弹窗
$api.toastClose()

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-feature">feature</span>  新增：调用Vue组件，实现！</span></li></ul>

<span class="vux-params-property"> v1.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  由toast.hide 改为 toastClose</span></li></ul>
<br>

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>页面字典 </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>addPage</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">addPage(page)</b><br><br>添加新的页面到pages字典中


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>page</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>新的页面键值对</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-object">Object</span>

- 说明：完整的pages字典

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// {demo_setting:"demo_setting.html", index:"index.html", test:"test.html"}
$api.addPage({
  'test': 'test.html'
})

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe628;</i><span style="display:none"> </span>pages</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > 所有页面的字典


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// {demo_setting:"demo_setting.html", index:"index.html"}
$api.pages

```
<br>

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>窗体 </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>closeWindow</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">closeWindow(webview,[hideOpts])</b><br><br>关闭指定窗体


<p class="warning">只针对H5+
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>webview</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span> <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>plus窗体或窗体id</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[hideOpts]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>Webview窗口关闭的动画参数 aniHide：<a target='_blank' href='http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeClose'>[参考]</a>动画类型 duration：动画持续时间，Number，单位ms</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// String
$api.closeWindow('demo_setting',{
  duration:200,
  aniHide:'slide-out-right'
})    
// Object
$api.closeWindow($api.currentWebview(),{
  duration:200,
  aniHide:'slide-out-right'
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  新增</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>currentWebview</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">currentWebview()</b><br><br>当前窗体


<p class="warning">只针对H5+
</p>

<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-object">Object</span>

- 说明：当前窗体对象

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.currentWebview()

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>goHome</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">goHome()</b><br><br>回到首页


<p class="tip">web,5+ 有效<br>
web:页面跳转<br>
5+:关闭所有非首页,显示启动页
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.goHome()

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>hideWindow</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">hideWindow(webview,[hideOpts])</b><br><br>隐藏指定窗体


<p class="warning">只针对H5+
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>webview</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span> <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>plus窗体或窗体id</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[hideOpts]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>Webview窗口关闭的动画参数 aniHide：<a target='_blank' href='http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeClose'>[参考]</a>动画类型 duration：动画持续时间，Number，单位ms</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// String
$api.hideWindow('demo_setting',{
  duration:200,
  aniHide:'slide-out-right'
})    
// Object
$api.hideWindow($api.currentWebview(),{
  duration:200,
  aniHide:'slide-out-right'
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  新增</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>isHomePage</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">isHomePage()</b><br><br>是否主页


<p class="warning">只针对H5+
</p>

<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-boolean">Boolean</span>

- 说明：是否主页

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.isHomePage()

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>mounted</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">mounted(callback,[inRefresh])</b><br><br>Dom加载完成


<p class="tip">web：等同于onload <br/>
5+：‘plusready’后（window.plus存在）：立即执行，否则加入到‘plusready’事件中
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>callback</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-function">Function</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>窗体</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[inRefresh]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-boolean">Boolean</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>默认值:false,是否需要加入刷新列表中,提供给refresh使用</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-object">Object</span>

- 说明：$api对象

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.mounted(()=>{
  console.log('页面加载完成')
},false)

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  "inRefresh"参数，，默认值改为 false</span></li><li><span style="font-size:14px;"><span class="change change-fix">fix</span>  手机app中会调用2次的bug</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>onload</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">onload(callback,[inRefresh])</b><br><br>Dom加载完成


<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>callback</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-function">Function</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>窗体</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[inRefresh]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-boolean">Boolean</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>默认值:false,是否需要加入刷新列表中,提供给refresh使用</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-object">Object</span>

- 说明：$api对象

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.onload(()=>{
  console.log('页面加载完成')
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  新增"inRefresh"参数，表示是否要加入业务刷新列表中，默认值false</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>open</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">open(id,[opts])</b><br><br>打开新窗口


<p class="tip">web,5+ 有效<br>
web:直接打开新url<br>
5+:打开新窗口
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>id</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>窗体id,必须唯一</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[opts]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>选项,只在5+中有用</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| extras | <span class="type type-object">Object</span> | <span class="type type-false">No</span> | 显示Webview窗口扩展参数,将传递到新窗口 |
| styles | <span class="type type-object">Object</span> | <span class="type type-false">No</span> | Webview窗口的样式 |
| showOpts | <span class="type type-object">Object</span> | <span class="type type-false">No</span> | Webview窗口显示动画参数<br>aniShow：<a target='_blank' href='http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeShow'>[参考]</a>动画类型<br>duration：动画持续时间，Number，单位ms |


<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-object">Object</span>

- 说明：新开窗体(Webview),web:则返回null

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.open('demo_setting', {
  uid:'1358',
  uname:'test user'
  }
})

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>refresh</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">refresh()</b><br><br>业务逻辑刷新<br/>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-object">Object</span>

- 说明：$api对象

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.refresh()

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>showWindow</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">showWindow(webview,[showLoading,showOpts])</b><br><br>显示指定窗体


<p class="warning">只针对H5+
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>webview</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span> <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>plus窗体或窗体id</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[showLoading]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-boolean">Boolean</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>是否显示等待对话框，默认值true</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[showOpts]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>Webview窗口显示动画参数 aniShow：<a target='_blank' href='http://www.html5plus.org/doc/zh_cn/webview.html#plus.webview.AnimationTypeShow'>[参考]</a>动画类型 duration：动画持续时间，Number，单位ms</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// String
$api.showWindow('demo_setting',true,{
  duration:200,
  aniShow:'slide-in-right'
})    
// Object
$api.showWindow(webview,true,{
  duration:200,
  aniShow:'slide-in-right'
})

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>webError</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">webError([value])</b><br><br>通用网络错误


<br><span class="vux-method-title">参数：</span>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[value]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-boolean">Boolean</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>默认值:true，显示或隐藏</code>

<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-object">Object</span>

- 说明：$api对象

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 显示网络错误
$api.webError()
$api.webError(true)
// 关闭网络错误
$api.webError(false)

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v1.1.0</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  新增</span></li></ul>
<br>

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>Device </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>androidKeys</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">androidKeys()</b><br><br>监听back和menu按键


<p class="warning">只在5+下使用
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.androidKeys()

```
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>noNetwork</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">noNetwork()</b><br><br>是否网络无连接


<p class="warning">只在5+下使用
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.noNetwork()

```
<br>