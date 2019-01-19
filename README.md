

## umi intro

umi 的定位是开发框架，目前包含工具 + 路由，不包含数据和视图。 所以 umi[工具 + 路由] + dva[数据] + antd(-mobile)[视图]，很配哦。另外，umi 目前基于 React，不支持 Vue 和其他框架或者无框架的开发方式。

* 开箱即用
* 极快
* 多端
* 开发友好

详细请看：
https://juejin.im/post/5a71322cf265da3e4e25eff3


## dva intro

[源码](https://github.com/dvajs/dva/blob/master/README_zh-CN.md)

[dva文档](https://dvajs.com/guide/concepts.html#%E6%95%B0%E6%8D%AE%E6%B5%81%E5%90%91)


props 和 state 对于一个组件来讲都是数据的来源，而 state 又可以通过 props 传递给子组件，这像是一个鸡生蛋蛋生鸡的问题：到底谁是数据的源头 ？答案是 state，而且是广义的 state：它可以是 react 组件树中各级组件的 state，也可以是 react 组件树外部由其他 js 数据结构表示的 state，而 dva 管理的就是 react 组件树之外的 state: Redux。归根结底，props 是用来传导数据的，而 state 是数据改变的源泉。

> reducer 干的事情和 React 中 setState(prevState => { ... }) 很像，都要返回一个新构造的对象，但区别是：reducer 的返回值会 整个取代 (Replace) 老的 state，而 setState 中回调函数的返回值是会 融合(Merge) 到老的 state 中去。


## css
RGBA(R,G,B,A)

取值：
R：
红色值。正整数 | 百分数
G：
绿色值。正整数 | 百分数
B：
蓝色值。正整数 | 百分数
A：
Alpha透明度。取值0~1之间。

rgba(125, 0, 0, .3); 表示的是30%不透明度的红色背景。把30%的不透明度转换成十六制呢的方法如下：先计算#AA的的十进制x，x/255 = 3/10，解得x=3*255/10，然后再把x换算成十六进制，约等于4C。

常用透明度对应16进制关系：
.0（00） .1（19） .05（0C） .15（26）
.2（33） .3（4C） .25（3F） .35（59）
.4（66） .5（7F） .45（72） .55（8C）
.6（99） .7（B2） .65（A5） .75（BF）
.8（CC） .9（E5） .85（D8） .95（F2）