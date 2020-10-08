项目fork自 [Create React App](https://github.com/facebook/create-react-app).

## 背景说明
项目开发时需要使用一些特定的项目目录结构，方便自己也方便其他人按自己的套路进行开发，所以需要一套自己的```cli``` 工具脚手架，省去了创建固定目录的时间成本

## 使用说明
需要安装yarn，[yarn官网指引](https://classic.yarnpkg.com/en/docs/install/) 
```
// 语法结构 yarn create react-app <项目名称> --template <套用模板名称>

// 以下是示例
yarn create react-app myapp --template js-react
```

## 遗留问题
create-react-app 有个缺点，在template.json 当中没办法配置 devDependencies，所以需要一次性配置到dependencies 然后再手动取出来