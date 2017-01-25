

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

<span class="vux-params-property"> v0.0.2</span>
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