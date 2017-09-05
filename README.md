##框架简介
react技术栈框架,默认引入了react-router和ant-design.
page目录下有两个例子,第一个为使用react的多页用例,只使用了view的功能;第二个例子比较全,使用了fetch作为新ajax模块,并用到了单页路由以及ant-design组件库

## 本地开发

### 编辑localConf.json文件

```javascript
{
  "port": "",  //生成网站的端口号
  "projectPath": "reactBiz", //业务名
  "pageName": "",  //页面名,为空会编译该业务下的所有页面.可通过","分隔页面名进行枚举
  "platform": "web",  //平台,目前只有web和mobile,前者表示pc端,后者是移动端
  "moduleName": ""  //暂时用不到,用以发布hybrid增量包
}
```

###安装node_modules

```javascript
    npm install 
    建议使用淘宝镜像:
    npm install --registry=https://registry.npm.taobao.org
```

###运行项目

```javascript
    npm start
```

###访问路径

localhost:端口号/platform-(projectPath的转义)/pageName.html
eg: localhost:7777/web-reactBiz/wholeTest.html

##本地构建

```javascript
    npm run local-build
```
根据localConf的配置增量构建项目,默认产出到output目录下

##mockServer使用
框架自带mockServer功能,可以在本地开发的时候发起ajax请求并通过本地node服务器快速得到response
默认会根据js中的ajax请求url在架构的业务目录中寻找对应的mock文件,具体规则如下:
假设在web-reactBiz/wholeTest这个业务下发起一个名为/a/b的ajax请求,则mockServer会在reactBiz下的mockData目录下找到名为wholeTest的页面目录,并在其中找寻a-b.json文件(url路径转换为以"-"相连接的文件名).如果不想使用默认规则的话也可以在mockData目录下的mappingList.josn文件中配置直接转换规则.