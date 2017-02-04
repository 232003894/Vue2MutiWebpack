

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