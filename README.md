
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