"use strict"

require('shelljs/global')
var glob = require("glob")
var fs = require('fs')
var yaml = require('js-yaml')

var _basic = require('./utils-doc.js')
var t = _basic.t
var getPath = _basic.getPath
var getFileName = _basic.getFileName
var getWarn = _basic.getWarn
var getChanges = _basic.getChanges
var buildChanges = _basic.buildChanges
var getTip = _basic.getTip
var getDescription = _basic.getDescription
var getReturn = _basic.getReturn
var getCode = _basic.getCode
var getAttrsInfo = _basic.getAttrsInfo
var getArgsInfo = _basic.getArgsInfo
var getIcon = _basic.getIcon
var getMethodName = _basic.getMethodName
var getAttrInfo = _basic.getAttrInfo

var getMethod = _basic.getMethod

let infos = []


rm('-rf', getPath(`../docs/md`))
mkdir('-p', getPath(`../docs/md`))

glob(getPath('../yaml/api/**/*.yml'), {}, function (err, files) {
  render(files, 'api', true)
  buildChanges(infos)
})


glob(getPath('../yaml/demo/**/*.yml'), {}, function (err, files) {
  render(files, 'demo', false)
})

function render(files, prefix, getInfo) {
  let allFiles = {}
  let allFiles0 = {}

  files.forEach(function (file) {
    const name = getFileName(file)
    const content = fs.readFileSync(file, 'utf-8')
    const json = yaml.safeLoad(content)
    let rs = {
      name: json.name || name,
      filetype: (json.filetype || 'method').toLowerCase(),
      tip: json.tip || '',
      warn: json.warn || '',
      note: json.note || '',
      methods: json.methods,
      attrs: json.attrs,
      args: json.args,
      code: json.code,
      return: json.return,
      tags: json.tags,
      type: json.type || 'string',
      fields: json.fields,
      json: json
    }

    if (getInfo && json.changes) {
      infos.push({
        name: rs.name,
        changes: json.changes || {}
      })
    }

    if (!json.tags || json.tags.length < 1) {
      return
    }

    if (json.color) {
      rs.color = json.color
    }
    if (rs.name) {
      json.tags.forEach(function (_tag) {
        if (_tag) {
          if (!allFiles[_tag]) {
            allFiles[_tag] = []
          }
          allFiles[_tag].push(rs)
        }
      })

      if (json.tags[0]) {
        if (!allFiles0[json.tags[0]]) {
          allFiles0[json.tags[0]] = []
        }
        allFiles0[json.tags[0]].push(rs)
      }
    }
  })

  let docs = ``

  // 全部--主要分组
  for (let group in allFiles0) {
    docs += renderTag(allFiles0[group], prefix, group)
  }

  // 分组文件
  for (let group in allFiles) {
    renderTag(allFiles[group], prefix, group)
  }

  fs.writeFileSync(getPath(`../docs/md/` + prefix + `.md`), docs)
}

function renderTag(groupFiles, prefix, tag) {
  let docs = `\n\n ## <span class="vux-group-name">${getIcon('group')}${tag} </span>\n\n`
  groupFiles.forEach(function (one) {

    docs += `\n\n ### <span style="display:none;">　</span><span class="vux-root-name">${getIcon(one.filetype)}${one.name}</span>\n\n`
    docs += `\n ------------ \n`

    // 说明
    if (one.note) {
      if (one.filetype === 'method') {
        docs += getDescription(getMethodName(one.args, one.name) + '<br><br>' + one.note, true)
      } else {
        docs += getDescription(one.note, true)
      }
    }

    // 提示
    if (one.tip) {
      docs += getTip(one.tip)
    }
    // 警告
    if (one.warn) {
      docs += getWarn(one.warn)
    }

    if (one.filetype === 'attr') {
      // 字段
      if (one.fields) {
        docs += getAttrInfo(true, one.type, one.fields)
      }
    }

    if (one.filetype === 'method') {
      // 输入参数
      if (one.args) {
        docs += getArgsInfo(one.args, true)
      }
      // 返回值
      if (one.return) {
        docs += getReturn(one.return, true)
      }
    }

    // 示例代码
    if (one.code) {
      docs += getCode(one.code, true)
    }

    if (one.filetype === 'object') {
      // 属性列表
      if (one.attrs) {
        // docs += `\n <span class="vux-methods">${t('属性')}</span>\n`
        docs += getAttrsInfo(one.attrs)
      }
      // 方法列表
      if (one.methods) {
        // docs += `\n <span class="vux-methods">${t('方法')}</span>\n`
        for (let i in one.methods) {
          docs += getMethod(one.methods[i], i)
        }
      }
    }

    // 日志
    if (one.json && one.json.changes) {
      docs += getChanges(one.json.changes)
    }

    docs += `<br>`
  })
  if (tag) {
    mkdir('-p', getPath(`../docs/md/` + prefix))
    fs.writeFileSync(getPath(`../docs/md/` + prefix + `/${tag}.md`), docs)
  }
  return docs
}
