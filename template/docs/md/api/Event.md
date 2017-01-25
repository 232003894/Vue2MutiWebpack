

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