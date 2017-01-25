

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