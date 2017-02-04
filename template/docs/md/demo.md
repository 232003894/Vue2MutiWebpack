

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>文档示例 </span>



 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe628;</i><span style="display:none"> </span>Attr</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > 单属性类型文档


<p class="tip">提示样式
</p>

<p class="warning">警告样式
</p>

 <br><span class="vux-method-title">类型：</span><span class="type type-object">Object</span><br>

<br>

| 字段   | 类型 | 说明   |
|-------|-------|-------|
| title | <span class="type type-string">String</span> | 属性(Attr)的字段或选项 |
| onShow | <span class="type type-function">Function</span> | 属性(Attr)的方法 |


<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 简单示例 msg
$api.alert.show('消息123')

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v0.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-todo">todo</span>  0.0.1,options为选填项</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>Fn</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">Fn(abc,[initOpts])</b><br><br>单方法类型文档


<p class="tip">提示样式
</p>

<p class="warning">警告样式
</p>

<br><span class="vux-method-title">参数：</span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>abc</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>方法(Fn)的输入参数</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[initOpts]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>方法(Fn)的输入参数</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| title | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 方法(Fn)输入参数的字段或选项 |
| onShow | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | 方法(Fn)输入参数的方法 |


<br>


<br><span class="vux-method-title">返回值：</span>

- 类型：<span class="type type-any">Any</span> <span class="type type-array">Array</span>

- 说明：方法(Fn)的返回值

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 简单示例 msg
$api.alert.show('消息123')

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v0.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  msg 属性从 options中单独出来,为必填项,options为选填项</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe628;</i><span style="display:none"> </span>Obj</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > 对象类型文档


<p class="tip">提示样式
</p>

<p class="warning">警告样式
</p>

#### <span style="display:none;">　</span><span class="vux-method-title"><i class="iconfontDoc">&#xe628;</i><span style="display:none"> </span>abc</span>

 - <span class="type type-string">String</span>

 - <code>对象(Obj)的属性</code>

| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| title | <span class="type type-string">String</span> | <span class="type type-false">No</span> | 对象(Obj)属性(abc)的字段或选项 |
| onShow | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | 对象(Obj)属性(abc)的方法 |

#### <span style="display:none;">　</span><span class="vux-method-title"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>test</span>

<span><b>用法：</b>

<br/>

 > <b style="color:blue">test(msg,[options,title])</b><br><br>对象(Obj)的方法

<span><b>参数：</b></span>

<br>


 <span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>msg</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span> <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>对象(Obj)方法(test)的输入参数(msg),必填</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[options]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>对象(Obj)方法(test)的输入参数(options),非必填</code>

<br>

 <pre style="display:none;"></pre> 


| 字段   | 类型 | 必填    | 说明   |
|-------|-------|-------|-------|
| title | <span class="type type-string">String</span><br><span class="type type-object">Object</span> | <span class="type type-false">No</span> | 对象(Obj)方法(test)的输入参数(options)的字段或选项 |
| onShow | <span class="type type-function">Function</span> | <span class="type type-false">No</span> | 对象(Obj)方法(test)的输入参数(options)的方法 |


<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[title]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-string">String</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>对象(Obj)方法(test)的输入参数,非必填</code>

<br>


 <br><b>返回值：</b>

- 类型：<span class="type type-any">Any</span> <span class="type type-array">Array</span>

- 说明：对象(Obj)的方法(test)的返回值

<br><b>示例：</b>

<br>

``` js
// 简单示例 msg
$api.test('消息123')

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v0.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  msg 属性从 options中单独出来,为必填项,options为选填项</span></li></ul>
<br>