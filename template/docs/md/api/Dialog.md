

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