(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{367:function(s,t,n){"use strict";n.r(t);var e=n(42),a=Object(e.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[s._v("#")]),s._v(" 队列")]),s._v(" "),n("h2",{attrs:{id:"特点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[s._v("#")]),s._v(" 特点")]),s._v(" "),n("ul",[n("li",[n("strong",[s._v("先进先出")])]),s._v(" "),n("li",[s._v("JS里没有队列，可以使用Array实现队列所有功能")]),s._v(" "),n("li",[s._v("队列的常用操作：\n"),n("ul",[n("li",[s._v("进："),n("code",[s._v("push")])]),s._v(" "),n("li",[s._v("出："),n("code",[s._v("shift")])])])])]),s._v(" "),n("h2",{attrs:{id:"应用场景"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),n("p",[s._v("先进先出场景都可使用队列来解决。")]),s._v(" "),n("ul",[n("li",[s._v("JS异步中的任务队列")]),s._v(" "),n("li",[s._v("计算最近请求次数")])]),s._v(" "),n("h3",{attrs:{id:"js异步中的任务队列"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#js异步中的任务队列"}},[s._v("#")]),s._v(" JS异步中的任务队列")]),s._v(" "),n("ul",[n("li",[s._v("JS是单线程，无法同时处理异步中的并发任务")]),s._v(" "),n("li",[s._v("使用任务队列先后处理异步任务")])]),s._v(" "),n("h2",{attrs:{id:"leetcode"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#leetcode"}},[s._v("#")]),s._v(" Leetcode")]),s._v(" "),n("h3",{attrs:{id:"_933-最近的请求次数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_933-最近的请求次数"}},[s._v("#")]),s._v(" 933. 最近的请求次数")]),s._v(" "),n("p",[s._v("题目链接："),n("a",{attrs:{href:"https://leetcode-cn.com/problems/number-of-recent-calls/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://leetcode-cn.com/problems/number-of-recent-calls/"),n("OutboundLink")],1),s._v("\n时间复杂度O(N)\n空间复杂度O(N)")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("var RecentCounter = function() {\n    this.q = [];\n};\n\n/** \n * @param {number} t\n * @return {number}\n */\nRecentCounter.prototype.ping = function(t) {\n    this.q.push(t)\n    while(this.q[0] < t - 3000) {\n        this.q.shift();\n    }\n    return this.q.length;\n};\n\n/**\n * Your RecentCounter object will be instantiated and called as such:\n * var obj = new RecentCounter()\n * var param_1 = obj.ping(t)\n */\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);