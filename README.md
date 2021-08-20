## 项目开发指南
1、根目录下安装依赖
```bash
$ yarn
```

2、创建组件目录
```bash
$ lerna create @chan-ui-vue3/组件名称
```

3、预览组件效果及文档
```bash
$ npm run storybook
```

4、项目发布
```bash
$ npm run publish
```

## TODO
1、

## lerna相关
1、在package中创建npm包
```bash
$ lerna create @chan-ui/table
```

1、删除packages中的所有依赖
```bash
$ lerna clean
```

# nrm
nrm(npm registry manager )是npm的镜像源管理工具，有时候国外资源太慢，使用这个就可以快速地在 npm 源间切换
```bash
$ npm install -g nrm
```

## nrm相关
1、查询当前可发布仓库
```bash
$ nrm ls
```

2、添加仓库
```bash
$ nrm add 仓库名 仓库地址
```
比如：nrm add taobao http://registry.npm.taobao.org/

3、切换仓库
```bash
$ nrm use taobao
```

3、删除仓库
```bash
$ nrm del taobao
```

