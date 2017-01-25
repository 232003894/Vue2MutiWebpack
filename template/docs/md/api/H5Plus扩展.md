

 ## <span class="vux-group-name"><i class="iconfontDoc">&#xe62b;</i><span style="display:none"> </span>H5Plus扩展 </span>



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

<span class="vux-params-property"> v0.0.2</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  新增name字段</span></li></ul>

<span class="vux-params-property"> v0.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  去掉wechat.version</span></li></ul>
<br>

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

<span class="vux-params-property"> v0.0.2</span>
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

<span class="vux-params-property"> v0.0.2</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  增加返回值,表示是否执行完成</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>alert</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">alert(msg,[options])</b><br><br>弹窗信息<br>
显示一个用户必须注意到并且必须点击按钮确认才能关闭的信息


<p class="tip">Vue组件模式、H5+模式、window原生模式 都可用<br>
优先级：Vue组件模式 > H5 Plus模式 > window原生模式
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
    console.log('onShow')
  },
  onHide:()=>{
    console.log('onHide')
  }
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v0.0.2</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  由alert.show 改为 alert</span></li><li><span style="font-size:14px;"><span class="change change-todo">todo</span>  暂未实现Vue组件模式</span></li></ul>

<span class="vux-params-property"> v0.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  msg 属性从 options中单独出来,为必填项,options为选填项</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>confirm</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">confirm(msg,[options])</b><br><br>用于显示一个带有指定消息和 OK 及取消按钮的对话框<br>


<p class="tip">Vue组件模式、H5+模式、window原生模式 都可用<br>
优先级：Vue组件模式 > H5 Plus模式 > window原生模式
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
    console.log('onShow')
  },
  onHide:()=>{
    console.log('onHide')
  },
  onConfirm:()=>{
    console.log('确定')
  },
  onCancel:()=>{
    console.log('取消')
  }
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v0.0.2</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  confirm.show 改为 confirm</span></li><li><span style="font-size:14px;"><span class="change change-todo">todo</span>  暂未实现Vue组件模式</span></li></ul>

<span class="vux-params-property"> v0.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  msg 属性从 options中单独出来,为必填项,options为选填项</span></li></ul>
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

<p class="warning">优先级：H5 Plus模式 > Vue组件模式
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
    console.log('onShow')
  },
  onHide:()=>{
    console.log('onHide')
  }
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v0.0.2</span>
 <ul><li><span style="font-size:14px;"><span class="change change-todo">todo</span>  暂未实现Vue组件模式</span></li></ul>

<span class="vux-params-property"> v0.0.1</span>
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

<p class="warning">优先级：H5 Plus模式 > Vue组件模式
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
// 关闭等待对话框
$api.loadingClose()

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v0.0.2</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  从loading中分离出来loadingClose</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe65d;</i><span style="display:none"> </span>toast</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > <b style="color:blue">toast(msg,[options])</b><br><br>提示消息<br>
弹出的提示消息为非阻塞模式，显示指定时间后自动消失


<p class="tip">window原生模式不可用<br>
Vue组件模式、H5+模式 可用<br>
优先级：Vue组件模式 > H5 Plus模式
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
    console.log('onShow')
  },
  onHide:()=>{
    console.log('onHide')
  }
})

```

<br><span class="vux-method-title">日志</span>

<br>

<span class="vux-params-property"> v0.0.2</span>
 <ul><li><span style="font-size:14px;"><span class="change change-todo">todo</span>  暂未实现Vue组件模式</span></li></ul>

<span class="vux-params-property"> v0.0.1</span>
 <ul><li><span style="font-size:14px;"><span class="change change-change">change</span>  msg 属性从 options中单独出来,为必填项,options为选填项</span></li></ul>
<br>

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe628;</i><span style="display:none"> </span>currentWebview</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > 当前窗体


<p class="warning">只针对H5+
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.currentWebview

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

 ### <span style="display:none;">　</span><span class="vux-root-name"><i class="iconfontDoc">&#xe628;</i><span style="display:none"> </span>isHomePage</span>


 ------------ 

<br><span class="vux-method-title">用法：</span>

 <br> 

 > 是否主页


<p class="warning">只针对H5+
</p>

<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.isHomePage

```
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
| showOpts | <span class="type type-object">Object</span> | <span class="type type-false">No</span> | Webview窗口显示动画参数,aniShow:动画类型,duration:动画持续时间 |


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

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>窗体</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[showLoading]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-boolean">Boolean</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>是否显示等待对话框</code>

<br>


<span class="vux-arg-title"><i class="iconfontDoc">&#xe62c;</i><span style="display:none"> </span>[showOpts]</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;类型： <span class="type type-object">Object</span>

<br>

 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;说明： <code>Webview窗口显示动画参数,aniShow:动画类型,duration:动画持续时间</code>

<br>


<br><span class="vux-method-title">示例：</span>

<br>

``` js
$api.showWindow('demo_setting',true,{
  duration:200,
  aniShow:'slide-in-right'
})

```
<br>

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