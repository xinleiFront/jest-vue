# toMatchSnapshot 组件快照

UI测试，渲染dom 不测功能
只要组件渲染不出错，就会生成一个快照 HelloWorld.test.js.snapshot toMatchSnapshot
若添加一个东西，测试就会不通过，提示增加了什么东西
及时捕获UI的变化， 按`u`就会更新快照，测试通过