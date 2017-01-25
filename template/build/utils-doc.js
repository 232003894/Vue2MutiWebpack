"use strict"
var path = require('path')
var fs = require('fs')

////////////////////////////////////////////
// utils
////////////////////////////////////////////

let tMaps = {
  // '组件列表': 'Components',
  // '名字': 'name',
  // '类型': 'type',
  // '必填': '是否必填',
  // '方法': '方法',
  // '属性': '属性',
  // '参数': 'arg'
  // '默认值': 'default',
  // '说明': '说明',
  // '对象': 'Object'
}

/**
 * 获取名称
 * @export
 * @param {String} key
 * @returns
 */
exports.t = function (key) {
  return tMaps[key] || key
}

function camelCase(input) {
  let str = input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });

  str = str.replace(/_(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
  return str
}

function _camelCase(input) {
  let str = camelCase(input)
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

exports.getTypeHTML = function (type) {
  type = type || 'String'
  var str = type.split('|').map(function (item) {
    return `<span class="type type-${item ? item.toLowerCase() : 'string'}">${_camelCase(item)}</span>`
  })
  return str
}

exports.getKeyHTML = function (key) {
  return `<span class="prop-key">${key}</span>`
}

exports.getColorHTML = function (one) {
  one = typeof one === 'undefined' ? '' : one
  let value = one
  var str = value.toString().toLowerCase()
  if (str === "yes" || str === "true") {
    return `<span class="type type-boolean">${value}</span>`
  } else if (str === "no" || str === "false") {
    return `<span class="type type-false">${value}</span>`
  }
  return value
}

exports.getIcon = function (type) {
  var str = ``
  type = type.toLowerCase()
  if (type.toLowerCase() === 'attr') {
    // 属性
    str = `&#xe628;`
  } else if (type.toLowerCase() === 'arg') {
    // 参数
    str = `&#xe62c;`
  } else if (type.toLowerCase() === 'method') {
    // 方法
    str = `&#xe65d;`
  } else if (type.toLowerCase() === 'object') {
    // 对象
    str = `&#xe628;`
  } else if (type.toLowerCase() === 'group') {
    // 分组
    str = `&#xe62b;`
  }
  return `<i class="iconfontDoc">` + str + `</i><span style="display:none"> </span>`
}


////////////////////////////////////////////
// 路径 文件
////////////////////////////////////////////

/**
 * 获取路径
 * @export
 * @param {String} dir
 * @returns
 */
exports.getPath = function (dir) {
  return path.join(__dirname, dir)
}

/**
 * 获取文件名称
 * @export
 * @param {String} file
 * @returns
 */
exports.getFileName = function (file) {
  return path.basename(file).replace('.yml', '')
}

////////////////////////////////////////////
// warn tip note return code
////////////////////////////////////////////

/**
 * warn
 * @export
 * @param {String} warn
 * @returns
 */
exports.getWarn = function (warn) {
  return `\n<p class="warning">${warn}</p>\n`
}

/**
 * tip
 * @export
 * @param {String} tip
 * @returns
 */
exports.getTip = function (tip) {
  return `\n<p class="tip">${tip}</p>\n`
}

/**
 * note
 * @export
 * @param {String} note
 * @returns
 */
exports.getDescription = function (note, isRoot) {
  var str = ``
  if (isRoot === true) {
    // str = `\n <br/><span class="vux-methods">${exports.t('用法')}</span>\n`
    str = `\n<br><span class="vux-method-title">${exports.t('用法')}：</span>\n`
    str += `\n <br> \n`
    str += `\n > ${note}\n`
  } else {
    str = `\n<span><b>${exports.t('用法')}：</b>\n\n<br/>\n`
    str += `\n > ${note}\n`
  }
  return str
}

exports.getMethodName = function (args, name) {
  var str = '<b style="color:blue">' + name
  str += `(`
  if (args) {
    var arr1 = []
    var arr2 = []
    var arr = []
    // docs += `\n<span><b>${exports.t('参数')}：</b></span>\n`
    for (let i in args) {
      let prop = args[i]
      if (prop.required === false) {
        arr2.push(i)
      } else {
        arr1.push(i)
      }
    }
    if (arr1.length > 0) {
      arr.push(arr1.join(','))
    }
    if (arr2.length > 0) {
      arr.push(`[` + arr2.join(',') + `]`)
    }
    str += arr.join(',')
  }
  str += `)</b>`
  return str
}

/**
 * note
 * @export
 * @param {String} note
 * @returns
 */
exports.getCode = function (code, isRoot) {
  var str = ``
  if (isRoot) {
    str += `\n<br><span class="vux-method-title">${exports.t('示例')}：</span>\n\n<br>\n`
  } else {
    str += `\n<br><b>${exports.t('示例')}：</b>\n\n<br>\n`
  }
  str += '\n``` js'
  str += `\n${code}`
  str += '\n```\n'
  return str
}

/**
 * return
 * @export
 * @param {String} ret
 * @returns
 */
exports.getReturn = function (ret, isRoot) {
  var str = ''
  if (isRoot) {
    str += `\n<br><span class="vux-method-title">${exports.t('返回值')}：</span>\n`
  } else {
    str += `\n <br><b>${exports.t('返回值')}：</b>\n`
  }
  str += `\n- ${exports.t('类型')}：${exports.getTypeHTML(ret.type).join(' ')}\n`
  str += `\n- ${exports.t('说明')}：${ret.note}\n`
  return str
}

////////////////////////////////////////////
// 属性列表 参数列表 参数字段列表
////////////////////////////////////////////

/**
 * 生成属性列表
 * @param {any} attrs
 * @param {any} name
 * @returns
 */
exports.getAttrsInfo = function (attrs) {
  var docs = ''
  if (attrs) {
    for (let i in attrs) {
      let prop = attrs[i]
      docs += `\n#### <span style="display:none;">　</span><span class="vux-method-title">${exports.getIcon('attr')}${i}</span>\n`
      docs += exports.getAttrInfo(false, prop.type, prop.fields, prop.note, i)
    }
  }
  return docs
}

/**
 * 生成属性列表
 * @param {any} attrs
 * @param {any} name
 * @returns
 */
exports.getAttrInfo = function (isRoot, type, fields, note, name) {
  var docs = ''
  if (type) {
    if (isRoot) {
      docs += `\n <br><span class="vux-method-title">${exports.t('类型')}：</span>${exports.getTypeHTML(type).join(' ')}<br>\n`
    } else {
      docs += `\n - ${exports.getTypeHTML(type).join(' ')}\n`
    }
  }
  if (note) {
    docs += `\n - <code>${note}</code>\n`
  }
  if (fields) {
    if (isRoot) {
      docs += `\n<br>\n`
      docs += getFiledsInfoForAttr(fields, name)
      docs += `\n`
    } else {
      docs += getFiledsInfo(fields, name)
    }
  }
  return docs
}

/**
 * 生成参数列表
 * @param {any} args
 * @param {any} name
 * @returns
 */
exports.getArgsInfo = function (args, isRoot) {
  let docs = ''
  let _class = 'vux-arg-title'
  if (args) {
    if (isRoot === true) {
      // _class = `vux-method-title`
      docs += `\n<br><span class="vux-method-title">${exports.t('参数')}：</span>\n\n<br>\n`
    } else {
      docs += `\n<span><b>${exports.t('参数')}：</b></span>\n\n<br>\n`
    }
    for (let i in args) {
      let prop = args[i]
      if (prop.required === false) {
        docs += `\n\n<span class="${_class}">${exports.getIcon('arg')}[${i}]</span>\n\n<br>\n`
      } else {
        docs += `\n\n <span class="${_class}">${exports.getIcon('arg')}${i}</span>\n\n<br>\n`
      }
      if (prop.type) {
        docs += `\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${exports.t('类型')}： ${exports.getTypeHTML(prop.type).join(' ')}\n\n<br>\n`
      }
      if (prop.note) {
        docs += `\n &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${exports.t('说明')}： <code>${prop.note}</code>\n\n<br>\n`
      }
      if (prop.fields) {
        docs += `\n <pre style="display:none;"></pre> \n`
        docs += `\n` + getFiledsInfo(prop.fields, i) + `\n\n<br>\n`
      }
      docs + `\n<br>\n`
    }
  }
  return docs + `\n`
}


/**
 * 选项列表 
 * @param {any} args
 * @param {any} name
 * @returns
 */
function getFiledsInfo(args, name) {
  var docs = ''
  if (args) {
    // ${exports.getColorHTML(name)||
    docs += `\n| ${exports.t('字段')}   | ${exports.t('类型')} | ${exports.t('必填')}    | ${exports.t('说明')}   |
|-------|-------|-------|-------|
`
    for (let i in args) {
      let prop = args[i]
      docs += `| ${exports.getColorHTML(i)} | ${exports.getTypeHTML(prop.type).join('<br>')} | ${exports.getColorHTML(prop.required||'No')} | ${prop.note||'-'} |\n`
    }
  }
  return docs
}

/**
 * 选项列表 
 * @param {any} args
 * @param {any} name
 * @returns
 */
function getFiledsInfoForAttr(args, name) {
  var docs = ''
  if (args) {
    // ${exports.getColorHTML(name)||
    docs += `\n| ${exports.t('字段')}   | ${exports.t('类型')} | ${exports.t('说明')}   |
|-------|-------|-------|
`
    for (let i in args) {
      let prop = args[i]
      docs += `| ${exports.getColorHTML(i)} | ${exports.getTypeHTML(prop.type).join('<br>')} | ${prop.note||'-'} |\n`
    }
  }
  return docs
}

////////////////////////////////////////////
// 方法
////////////////////////////////////////////

/**
 * 单个方法
 * @param {any} method
 * @param {any} name
 * @returns
 */
exports.getMethod = function (method, name) {
  var docs = `\n#### <span style="display:none;">　</span><span class="vux-method-title">${exports.getIcon('method')}${name}</span>\n`
  if (method.note) {
    docs += exports.getDescription(exports.getMethodName(method.args, name) + '<br><br>' + method.note)
  }
  if (method.tip) {
    docs += exports.getTip(method.tip)
  }
  if (method.warn) {
    docs += exports.getDescription(method.warn)
  }
  if (method.args) {
    // docs += `\n<span><b>${exports.t('参数')}：</b></span>\n`
    docs += exports.getArgsInfo(method.args)
  }
  if (method.return) {
    docs += exports.getReturn(method.return)
  }
  if (method.code) {
    docs += exports.getCode(method.code)
  }
  return docs
}

////////////////////////////////////////////
// 日志
////////////////////////////////////////////

/**
 * 单条日志转换为日志对象
 * @param {any} one
 * @returns {Object} 日志对象(type,content)
 */
function getChangeObj(one) {
  const _split = one.split(']')
  const type = _split[0].replace('[', '')
  const content = _split[1]
  return {
    type: type,
    content: content
  }
}

/**
 * 单个日志
 * @export
 * @param {any} one 单条日志对象
 * @param {String} fontSize
 * @returns
 */
function getSingleChange(one, fontSize) {
  if (!fontSize) {
    fontSize = '15px'
  }
  return `<li><span style="font-size:${fontSize};"><span class="change change-${one.type}">${one.type}</span> ${one.content}</span></li>`
}

/**
 * 取得某个文件的日志html
 * @export
 * @param {any} changes
 * @returns
 */
exports.getChanges = function (changes) {
  var docs = ''
  if (changes) {
    docs += `\n<br><span class="vux-method-title">${exports.t('日志')}</span>\n`
    docs += `\n<br>\n`
    sortAttr(changes, function (i) {
      docs += `\n<span class="vux-params-property"> ${i}</span>\n`
      docs += ` <ul>`
      changes[i].forEach(one => {
        let obj = getChangeObj(one)
        docs += `${getSingleChange(obj, '14px')}`
      })
      docs += `</ul>\n`
    })
  }
  return docs
}

function sortAttr(obj, callback) {
  var tmp = Object.keys(obj).sort(function (a, b) {
    return b.localeCompare(a)
  })
  if (callback) {
    for (let i in tmp) {
      callback(tmp[i])
    }
  } else {
    return tmp
  }
}

/**
 * 生成日志md文件
 * @export
 * @param {any} infos
 */
exports.buildChanges = function (infos) {
  let rs = {}
  infos.forEach(one => {
    let name = one.name
    let changes = one.changes
    if (changes) {
      for (let i in changes) {
        if (!rs[i]) {
          rs[i] = {}
        }
        rs[i][name] = changes[i]
      }
    }
  })
  let str = `<span></span>\n`
  let str_todo = `<span></span>\n`
  sortAttr(rs, function (i) {
    let _str = `## <span class="vux-version-name">${i}</span>\n`
    let _str_todo = `## <span class="vux-version-name">${i}</span>\n`
    let versionTodoCount = 0
    let versionOtherCount = 0
    for (let j in rs[i]) {

      let __str = ``
      let __str_todo = ``

      // all
      __str += `\n#### ${j}\n`
      __str += ` <ul>`
      // todo
      __str_todo += `\n#### ${j}\n`
      __str_todo += `<ul>`

      let todosCount = 0
      let othersCount = 0
      rs[i][j].forEach(one => {
        let obj = getChangeObj(one)
        if (obj.type === 'todo') {
          todosCount++
          versionTodoCount++
          __str_todo += `${getSingleChange(obj)}`
        } else {
          othersCount++
          versionOtherCount++
          __str += `${getSingleChange(obj)}`
        }
      })
      __str += `</ul>\n`
      __str += `\n`

      __str_todo += `</ul>\n`
      __str_todo += `\n`
      if (todosCount > 0) {
        _str_todo += __str_todo
      }
      if (othersCount > 0) {
        _str += __str
      }
    }
    if (versionTodoCount > 0) {
      str_todo += _str_todo
    }
    if (versionOtherCount > 0) {
      str += _str
    }
  })
  for (let i in sort) {

  }

  str += '\n'
  str_todo += '\n'
  fs.writeFileSync(exports.getPath(`../docs/md/changes.md`), str)
  fs.writeFileSync(exports.getPath(`../docs/md/todos.md`), str_todo)
}
