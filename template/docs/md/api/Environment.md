

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