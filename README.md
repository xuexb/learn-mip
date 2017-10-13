# learn-mip

[![mip](https://img.shields.io/badge/Powered%20by-MIP-brightgreen.svg)](https://www.mipengine.org/)
[![Build Status](https://img.shields.io/travis/xuexb/learn-mip/master.svg)](https://travis-ci.org/xuexb/learn-mip)

## list

- [在线编辑器](https://xuexb.github.io/learn-mip/editor.html) - 支持自动校验哦~
- [校验提示case](https://xuexb.github.io/learn-mip/editor.html?case/error.html)
- [hello-world](https://xuexb.github.io/learn-mip/src/hello-world) - [在线编辑](https://xuexb.github.io/learn-mip/editor.html?src/hello-world/index.html)
- [mip-demo](https://xuexb.github.io/learn-mip/src/mip-demo) - [在线编辑](https://xuexb.github.io/learn-mip/editor.html?src/mip-demo/index.html)
- [noscript](https://xuexb.github.io/learn-mip/src/noscript) - [在线编辑](https://xuexb.github.io/learn-mip/editor.html?src/noscript/index.html)
- [mip-link](https://xuexb.github.io/learn-mip/src/mip-link) - [在线编辑](https://xuexb.github.io/learn-mip/editor.html?src/mip-link/index.html)
- [mip-carousel](https://xuexb.github.io/learn-mip/src/mip-carousel) - [在线编辑](https://xuexb.github.io/learn-mip/editor.html?src/mip-carousel/index.html)
- [mip-iframe](https://xuexb.github.io/learn-mip/src/mip-iframe) - [在线编辑](https://xuexb.github.io/learn-mip/editor.html?src/mip-iframe/index.html)
- [mip-img](https://xuexb.github.io/learn-mip/src/mip-img) - [在线编辑](https://xuexb.github.io/learn-mip/editor.html?src/mip-img/index.html)
- [mip-pix](https://xuexb.github.io/learn-mip/src/mip-pix) - [在线编辑](https://xuexb.github.io/learn-mip/editor.html?src/mip-pix/index.html)
- [mip-video](https://xuexb.github.io/learn-mip/src/mip-video) - [在线编辑](https://xuexb.github.io/learn-mip/editor.html?src/mip-video/index.html)

## rules

> 在线编辑器里添加了 [mipengine/mip-validator](https://github.com/mipengine/mip-validator) 的校验外又额外添加的基于 <http://htmlhint.com/> 的校验规则

### 标准

> 强制的、错误的

#### doctype-first

doctype 文档定义必须是第一个元素。

#### doctype-html5

doctype 必须使用 html5 标准头部。

#### tag-pair

标签必须闭合。

### 建议

> 建议的、警告的

#### alt-require

图片标签建议使用 alt 属性。

#### h1-require

建议页面中添加 `<h1>` 标签。

#### id-class-ad-disabled

ID和类属性不建议使用 ad 关键字，它可能会被adblock软件阻止。

#### id-unique

ID属性的值必须是唯一的。

#### title-require

`<title>` 标签必须在 `<head>` 内。


## 开发

```bash
# 安装依赖
npm install

# 启动 http-server 预览
npm start

# 使用 mip-validator 验证 src 下的html文件
npm run validator
```

## todo

- [x] 输入`<div>`时自动闭合
- [x] 页面代码自动规范检查
- [x] 页面错误智能提示
- [ ] server端抓取

## thanks

- [百度MIP](https://www.mipengine.org/)
- [codemirror](http://codemirror.net/)
- [htmlhint](http://htmlhint.com/)
- [csslint](http://csslint.net/)
- [Wei](https://whe.me/)

## changelog

- 0918 - 基于 htmllint 开发在线 HTML 校验
- 0917 - 基于 codemirror 开发在线编辑器, 支持校验
- 0916 - 根据 MIP 官网写些小 demo

## License

[Apache 2.0](./LICENSE)
