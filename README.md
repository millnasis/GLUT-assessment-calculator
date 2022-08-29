# 桂林理工大学-综测计算器
---
在信息化的今天，桂工的学生甚至还在手动计算自己的综测分数，在我受够了那些乱七八糟的计算公式之后，就有了这个项目
## 介绍
这是一个适用于**桂林理工大学**的综测计算器，用它可以来帮助你快速计算综测，填入你的各项成绩、加分、扣分，按照综测计算规则会自动计算结果，并实时反馈出来

使用React + Antd开发，目前只有基于Electron开发的桌面版，网页版还在开发中

## 使用
为了计算综测，自然就需要获取你的各项分数，计算器基于综测评分表开发，点击相应的位置即可开始填入对应成绩，同时还提供了一点ECharts实现的图表，让你的分数体现得更直观

作者本人为信院学生，考虑到不同学院模块分数占比可能有区别，所以在分数占比这块是可以调整的

此外，还支持一些与文件交互的功能（这些功能还在改进中，有一定的局限性），包括：
+ 解析综测评分表，格式改动过也能解析，但是表格的行列数必须原封不动，且仅支持`xlsx`格式
+ 将计算的结果使用一份项目内置的评分表模板直接导出为excel表单，同样仅支持`xlsx`格式

## 下载并使用

下载release文件夹中的压缩包，解压后运行GLUT-assessment-calculator.exe即可

## 环境

node @16.13.1

## 运行

项目根目录运行
```shell
调试：
npm run start 

打包：
npm run make
```

## 运行截图
![QQ截图20220828162707](https://user-images.githubusercontent.com/70905899/187103744-da0a7bed-97cd-4e6a-b10a-1ea4a2a379e1.jpg)
![QQ截图20220828162442](https://user-images.githubusercontent.com/70905899/187103752-4e32fe14-97de-4ae1-9cc4-974297b5d19b.jpg)
![QQ截图20220828162503](https://user-images.githubusercontent.com/70905899/187103768-ac69aac4-5953-4f27-b8ed-3a84c8d7b320.jpg)
![QQ图片20220828162740](https://user-images.githubusercontent.com/70905899/187103777-d0b4bed9-a389-4b82-a27a-a8fbdcc67084.png)
![QQ截图20220828162919](https://user-images.githubusercontent.com/70905899/187103782-8d83ab72-409b-482b-9b39-f83d496cea63.jpg)
![image](https://user-images.githubusercontent.com/70905899/176999340-f110be44-8f72-435b-ae58-b4622744bc45.png)

## 联系我
qq:1985551393
