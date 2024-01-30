"use strict";(self.webpackChunklx_music_doc=self.webpackChunklx_music_doc||[]).push([[4756],{8489:function(e,n,l){l.r(n),l.d(n,{assets:function(){return d},contentTitle:function(){return i},default:function(){return x},frontMatter:function(){return r},metadata:function(){return o},toc:function(){return t}});var c=l(5893),s=l(1151);const r={id:"custom-source",title:"\u81ea\u5b9a\u4e49\u6e90\u811a\u672c\u7f16\u5199\u8bf4\u660e"},i=void 0,o={id:"desktop/custom-source",title:"\u81ea\u5b9a\u4e49\u6e90\u811a\u672c\u7f16\u5199\u8bf4\u660e",description:"\u6587\u4ef6\u8bf7\u4f7f\u7528UTF-8\u7f16\u7801\u683c\u5f0f\u7f16\u5199\uff0c\u811a\u672c\u6240\u7528\u7f16\u7a0b\u8bed\u8a00\u4e3aJavaScript\uff0c\u53ef\u4ee5\u4f7f\u7528ES6+\u8bed\u6cd5\uff0c\u811a\u672c\u4e0e\u5e94\u7528\u7684\u4ea4\u4e92\u662f\u4f7f\u7528\u7c7b\u4f3c\u4e8b\u4ef6\u6536\u53d1\u7684\u65b9\u5f0f\u8fdb\u884c\uff0c\u8fd9\u662f\u4e00\u4e2a\u57fa\u672c\u7684\u811a\u672c\u4f8b\u5b50\uff1a",source:"@site/docs/desktop/custom-source.md",sourceDirName:"desktop",slug:"/desktop/custom-source",permalink:"/desktop/custom-source",draft:!1,unlisted:!1,editUrl:"https://github.com/lyswhut/lx-music-doc/tree/master/docs/desktop/custom-source.md",tags:[],version:"current",lastUpdatedAt:1706616796,formattedLastUpdatedAt:"2024\u5e741\u670830\u65e5",frontMatter:{id:"custom-source",title:"\u81ea\u5b9a\u4e49\u6e90\u811a\u672c\u7f16\u5199\u8bf4\u660e"},sidebar:"desktopSidebar",previous:{title:"\u6570\u636e\u5b58\u50a8\u8def\u5f84",permalink:"/desktop/datapath"},next:{title:"\u6e90\u7801\u4f7f\u7528\u65b9\u6cd5",permalink:"/desktop/use-source-code"}},d={},t=[{value:"\u81ea\u5b9a\u4e49\u6e90\u4fe1\u606f",id:"\u81ea\u5b9a\u4e49\u6e90\u4fe1\u606f",level:2},{value:"<code>globalThis.lx</code>",id:"globalthislx",level:2},{value:"<code>globalThis.lx.version</code>",id:"globalthislxversion",level:3},{value:"<code>globalThis.lx.env</code>",id:"globalthislxenv",level:3},{value:"<code>globalThis.lx.currentScriptInfo</code>",id:"globalthislxcurrentscriptinfo",level:3},{value:"<code>globalThis.lx.EVENT_NAMES</code>",id:"globalthislxevent_names",level:3},{value:"<code>globalThis.lx.on</code>",id:"globalthislxon",level:3},{value:"<code>globalThis.lx.send</code>",id:"globalthislxsend",level:3},{value:"<code>globalThis.lx.request</code>",id:"globalthislxrequest",level:3},{value:"<code>globalThis.lx.utils</code>",id:"globalthislxutils",level:3},{value:"PC\u7aef\u81ea\u5b9a\u4e49\u6e90\u4e0e\u79fb\u52a8\u7aef\u81ea\u5b9a\u4e49\u6e90\u7684\u533a\u522b",id:"pc\u7aef\u81ea\u5b9a\u4e49\u6e90\u4e0e\u79fb\u52a8\u7aef\u81ea\u5b9a\u4e49\u6e90\u7684\u533a\u522b",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u6587\u4ef6\u8bf7\u4f7f\u7528UTF-8\u7f16\u7801\u683c\u5f0f\u7f16\u5199\uff0c\u811a\u672c\u6240\u7528\u7f16\u7a0b\u8bed\u8a00\u4e3aJavaScript\uff0c\u53ef\u4ee5\u4f7f\u7528ES6+\u8bed\u6cd5\uff0c\u811a\u672c\u4e0e\u5e94\u7528\u7684\u4ea4\u4e92\u662f\u4f7f\u7528\u7c7b\u4f3c\u4e8b\u4ef6\u6536\u53d1\u7684\u65b9\u5f0f\u8fdb\u884c\uff0c\u8fd9\u662f\u4e00\u4e2a\u57fa\u672c\u7684\u811a\u672c\u4f8b\u5b50\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"/**\n * @name \u6d4b\u8bd5\u97f3\u4e50\u6e90\n * @description \u6211\u53ea\u662f\u4e00\u4e2a\u6d4b\u8bd5\u97f3\u4e50\u6e90\u54e6\n * @version 1.0.0\n * @author xxx\n * @homepage http://xxx\n */\n\n\nconst { EVENT_NAMES, request, on, send } = globalThis.lx\n\nconst qualitys = {\n  kw: {\n    '128k': '128',\n    '320k': '320',\n    flac: 'flac',\n    flac24bit: 'flac24bit',\n  },\n}\nconst httpRequest = (url, options) => new Promise((resolve, reject) => {\n  request(url, options, (err, resp) => {\n    if (err) return reject(err)\n    resolve(resp.body)\n  })\n})\n\nconst apis = {\n  kw: {\n    musicUrl({ songmid }, quality) {\n      return httpRequest('http://xxx').then(data => {\n        return data.url\n      })\n    },\n  },\n  local: {\n    musicUrl(info) {\n      ireturn httpRequest('http://xxx').then(data => {\n        return data.url\n      })\n    },\n    pic(info) {\n      return httpRequest('http://xxx').then(data => {\n        return data.url\n      })\n    },\n    lyric(info) {\n      return httpRequest('http://xxx').then(data => {\n        return {\n          lyric: '...', // \u6b4c\u66f2\u6b4c\u8bcd\n          tlyric: '...', // \u7ffb\u8bd1\u6b4c\u8bcd\uff0c\u6ca1\u6709\u53ef\u4e3a null\n          rlyric: '...', // \u7f57\u9a6c\u97f3\u6b4c\u8bcd\uff0c\u6ca1\u6709\u53ef\u4e3a null\n          lxlyric: '...', // lx \u9010\u5b57\u6b4c\u8bcd\uff0c\u6ca1\u6709\u53ef\u4e3a null\uff0c\u6b4c\u8bcd\u683c\u5f0f\u4e3a [\u5206\u949f:\u79d2.\u6beb\u79d2]<\u5f00\u59cb\u65f6\u95f4\uff08\u57fa\u4e8e\u8be5\u53e5\uff09,\u6301\u7eed\u65f6\u95f4>\u6b4c\u8bcd\u6587\u5b57\n                          // \u4f8b\u5982\uff1a [00:00.000]<0,36>\u6d4b<36,36>\u8bd5<50,60>\u6b4c<80,75>\u8bcd\n        }\n      })\n    }\n  }\n}\n\n// \u6ce8\u518c\u5e94\u7528API\u8bf7\u6c42\u4e8b\u4ef6\n// source \u97f3\u4e50\u6e90\uff0c\u53ef\u80fd\u7684\u503c\u53d6\u51b3\u4e8e\u521d\u59cb\u5316\u65f6\u4f20\u5165\u7684sources\u5bf9\u8c61\u7684\u6e90key\u503c\n// info \u8bf7\u6c42\u9644\u52a0\u4fe1\u606f\uff0c\u5185\u5bb9\u6839\u636eaction\u53d8\u5316\n// action \u8bf7\u6c42\u64cd\u4f5c\u7c7b\u578b\uff0c\u76ee\u524d\u53ea\u6709musicUrl\uff0c\u5373\u83b7\u53d6\u97f3\u4e50URL\u94fe\u63a5\uff0c\n//    \u5f53action\u4e3amusicUrl\u65f6info\u7684\u7ed3\u6784\uff1a{type, musicInfo}\uff0c\n//        info.type\uff1a\u97f3\u4e50\u8d28\u91cf\uff0c\u53ef\u80fd\u7684\u503c\u6709128k / 320k / flac / flac24bit\uff08\u53d6\u51b3\u4e8e\u521d\u59cb\u5316\u65f6\u5bf9\u5e94\u6e90\u4f20\u5165\u7684qualitys\u503c\u4e2d\u7684\u4e00\u4e2a\uff09\n//                   \u7279\u6b8a\u60c5\u51b5\uff1a\u6e90\u4e3alocal\u65f6\uff0c\u8be5\u503c\u4e3a null\n//        info.musicInfo\uff1a\u97f3\u4e50\u4fe1\u606f\u5bf9\u8c61\uff0c\u91cc\u9762\u6709\u97f3\u4e50ID\u3001\u540d\u5b57\u7b49\u4fe1\u606f\non(EVENT_NAMES.request, ({ source, action, info }) => {\n  // \u88ab\u8c03\u7528\u65f6\u5fc5\u987b\u8fd4\u56de Promise \u5bf9\u8c61\n  switch (action) {\n    // action \u4e3a musicUrl \u65f6\u9700\u8981\u5728 Promise \u8fd4\u56de\u6b4c\u66f2 url\n    case 'musicUrl':\n      return apis[source].musicUrl(info.musicInfo, qualitys[source][info.type]).catch(err => {\n        console.log(err)\n        return Promise.reject(err)\n      })\n    // action \u4e3a lyric \u65f6\u9700\u8981\u5728 Promise \u8fd4\u56de\u6b4c\u8bcd\u4fe1\u606f\n    case 'lyric':\n      return apis[source].musicUrl(info.musicInfo, qualitys[source][info.type]).catch(err => {\n        console.log(err)\n        return Promise.reject(err)\n      })\n    // action \u4e3a pic \u65f6\u9700\u8981\u5728 Promise \u8fd4\u56de\u6b4c\u66f2\u5c01\u9762 url\n    case 'pic':\n      return apis[source].musicUrl(info.musicInfo, qualitys[source][info.type]).catch(err => {\n        console.log(err)\n        return Promise.reject(err)\n      })\n  }\n})\n\n// \u811a\u672c\u521d\u59cb\u5316\u5b8c\u6210\u540e\u9700\u8981\u53d1\u9001inited\u4e8b\u4ef6\u544a\u77e5\u5e94\u7528\n// \u6ce8\u610f\uff1a\u521d\u59cb\u5316\u4e8b\u4ef6\u88ab\u53d1\u9001\u524d\uff0c\u6267\u884c\u811a\u672c\u7684\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u5c06\u89c6\u4e3a\u811a\u672c\u521d\u59cb\u5316\u5931\u8d25\nsend(EVENT_NAMES.inited, {\n  openDevTools: false, // \u662f\u5426\u6253\u5f00\u5f00\u53d1\u8005\u5de5\u5177\uff0c\u65b9\u4fbf\u7528\u4e8e\u8c03\u8bd5\u811a\u672c\n  sources: { // \u5f53\u524d\u811a\u672c\u652f\u6301\u7684\u6e90\n    kw: { // \u652f\u6301\u7684\u6e90\u5bf9\u8c61\uff0c\u53ef\u7528key\u503c\uff1akw/kg/tx/wy/mg/local\n      name: '\u9177\u6211\u97f3\u4e50',\n      type: 'music',  // \u76ee\u524d\u56fa\u5b9a\u4e3a music\n      actions: ['musicUrl'], // \u9664\u4e86local\u5916\uff0c\u5176\u4ed6\u7684\u56fa\u5b9a\u4e3a ['musicUrl']\n      qualitys: ['128k', '320k', 'flac', 'flac24bit'], // \u5f53\u524d\u811a\u672c\u7684\u8be5\u6e90\u6240\u652f\u6301\u83b7\u53d6\u7684Url\u97f3\u8d28\uff0c\u6709\u6548\u7684\u503c\u6709\uff1a['128k', '320k', 'flac', 'flac24bit']\n    },\n    // ...\n    local: {\n      name: '\u672c\u5730\u97f3\u4e50',\n      type: 'music',  // \u76ee\u524d\u56fa\u5b9a\u4e3a music\n      actions: ['musicUrl', 'lyric', 'pic'], // \u6e90\u4e3a local \u65f6\uff0c\u652f\u6301 ['musicUrl', 'lyric', 'pic']\n      qualitys: [], // \u6e90\u4e3a local \u65f6\uff0c\u8be5\u503c\u4f20\u5165\u7a7a\u6570\u7ec4\u5373\u53ef\n    },\n  },\n})\n\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49\u6e90\u4fe1\u606f",children:"\u81ea\u5b9a\u4e49\u6e90\u4fe1\u606f"}),"\n",(0,c.jsx)(n.p,{children:"\u6587\u4ef6\u7684\u5f00\u5934\u5fc5\u987b\u5305\u542b\u4ee5\u4e0b\u6ce8\u91ca\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"/**\n * @name \u6d4b\u8bd5\u811a\u672c\n * @description \u6211\u53ea\u662f\u4e00\u4e2a\u6d4b\u8bd5\u811a\u672c\n * @version 1.0.0\n * @author xxx\n * @homepage http://xxx\n */\n\n"})}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"@name "}),"\uff1a\u6e90\u7684\u540d\u5b57\uff0c\u5efa\u8bae\u4e0d\u8981\u8fc7\u957f\uff0c24\u4e2a\u5b57\u7b26\u4ee5\u5185"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"@description "}),"\uff1a\u6e90\u7684\u63cf\u8ff0\uff0c\u5efa\u8bae\u4e0d\u8981\u8fc7\u957f\uff0c36\u4e2a\u5b57\u7b26\u4ee5\u5185\uff0c\u53ef\u4e0d\u586b\uff0c\u4e0d\u586b\u65f6\u53ef\u4ee5\u5220\u9664 @description"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"@version"}),"\uff1a\u6e90\u7684\u7248\u672c\u53f7\uff0c\u53ef\u4e0d\u586b\uff0c\u4e0d\u586b\u65f6\u53ef\u4ee5\u5220\u9664 @version"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"@author "}),"\uff1a\u811a\u672c\u4f5c\u8005\u540d\u5b57\uff0c\u53ef\u4e0d\u586b\uff0c\u4e0d\u586b\u65f6\u53ef\u4ee5\u5220\u9664 @author"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"@homepage "}),"\uff1a\u811a\u672c\u4e3b\u9875\uff0c\u53ef\u4e0d\u586b\uff0c\u4e0d\u586b\u65f6\u53ef\u4ee5\u5220\u9664 @homepage"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"globalthislx",children:(0,c.jsx)(n.code,{children:"globalThis.lx"})}),"\n",(0,c.jsx)(n.p,{children:"\u5e94\u7528\u4e3a\u811a\u672c\u66b4\u9732\u7684API\u5bf9\u8c61\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"globalthislxversion",children:(0,c.jsx)(n.code,{children:"globalThis.lx.version"})}),"\n",(0,c.jsx)(n.p,{children:"\u81ea\u5b9a\u4e49\u6e90API\u7248\u672c\uff0cAPI\u53d8\u66f4\u65f6\u6b64\u7248\u672c\u53f7\u5c06\u4f1a\u66f4\u6539"}),"\n",(0,c.jsx)(n.h3,{id:"globalthislxenv",children:(0,c.jsx)(n.code,{children:"globalThis.lx.env"})}),"\n",(0,c.jsxs)(n.p,{children:["\u81ea\u5b9a\u4e49\u6e90\u8fd0\u884c\u73af\u5883\uff0cPC\u7aef\u5c06\u56fa\u5b9a\u662f ",(0,c.jsx)(n.code,{children:"desktop"})]}),"\n",(0,c.jsx)(n.h3,{id:"globalthislxcurrentscriptinfo",children:(0,c.jsx)(n.code,{children:"globalThis.lx.currentScriptInfo"})}),"\n",(0,c.jsx)(n.p,{children:"\u5f53\u524d\u81ea\u5b9a\u4e49\u6e90\u811a\u672c\u4fe1\u606f\uff08\u5bfc\u5165\u65f6\u5728\u5934\u90e8\u89e3\u6790\u5230\u7684\uff09\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.currentScriptInfo.name"}),"\uff1a\u6e90\u540d\u5b57\uff0c\u5373 ",(0,c.jsx)(n.code,{children:"@name"})," \u7684\u5185\u5bb9"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.currentScriptInfo.description"}),"\uff1a\u6e90\u63cf\u8ff0\uff0c\u5373 ",(0,c.jsx)(n.code,{children:"@description"})," \u7684\u5185\u5bb9"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.currentScriptInfo.version"}),"\uff1a\u6e90\u7248\u672c\uff0c\u5373 ",(0,c.jsx)(n.code,{children:"@version"})," \u7684\u5185\u5bb9"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.currentScriptInfo.author"}),"\uff1a\u6e90\u4f5c\u8005\uff0c\u5373 ",(0,c.jsx)(n.code,{children:"@author"})," \u7684\u5185\u5bb9"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.currentScriptInfo.homepage"}),"\uff1a\u6e90\u4e3b\u9875\uff0c\u5373 ",(0,c.jsx)(n.code,{children:"@homepage"})," \u7684\u5185\u5bb9"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.currentScriptInfo.rawScript"}),"\uff1a\u6e90\u539f\u59cb\u4ee3\u7801"]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"globalthislxevent_names",children:(0,c.jsx)(n.code,{children:"globalThis.lx.EVENT_NAMES"})}),"\n",(0,c.jsx)(n.p,{children:"\u5e38\u91cf\u4e8b\u4ef6\u540d\u79f0\u5bf9\u8c61\uff0c\u53d1\u9001\u3001\u6ce8\u518c\u4e8b\u4ef6\u65f6\u4f20\u5165\u4e8b\u4ef6\u540d\u65f6\u4f7f\u7528\uff0c\u53ef\u7528\u503c\uff1a"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u4e8b\u4ef6\u540d"}),(0,c.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"inited"})}),(0,c.jsxs)(n.td,{children:["\u811a\u672c\u521d\u59cb\u5316\u5b8c\u6210\u540e\u53d1\u9001\u7ed9\u5e94\u7528\u7684\u4e8b\u4ef6\u540d\uff0c\u53d1\u9001\u8be5\u4e8b\u4ef6\u65f6\u9700\u8981\u4f20\u5165\u4ee5\u4e0b\u4fe1\u606f\uff1a",(0,c.jsx)(n.code,{children:"{ sources, openDevTools }"}),(0,c.jsx)("br",{}),(0,c.jsx)(n.code,{children:"openDevTools"}),"\uff1a\u662f\u5426\u6253\u5f00DevTools\uff0c\u6b64\u9009\u9879\u53ef\u7528\u4e8e\u5f00\u53d1\u811a\u672c\u65f6\u7684\u8c03\u8bd5",(0,c.jsx)("br",{}),(0,c.jsx)(n.code,{children:"sources"}),"\uff1a\u652f\u6301\u7684\u6e90\u4fe1\u606f\u5bf9\u8c61\uff0c",(0,c.jsx)("br",{}),(0,c.jsx)(n.code,{children:"sources[kw/kg/tx/wy/mg/local].name"}),"\uff1a\u6e90\u7684\u540d\u5b57\uff08\u76ee\u524d\u975e\u5fc5\u987b\uff09",(0,c.jsx)("br",{}),(0,c.jsx)(n.code,{children:"sources[kw/kg/tx/wy/mg/local].type"}),"\uff1a\u6e90\u7c7b\u578b\uff0c\u76ee\u524d\u56fa\u5b9a\u503c\u9700\u4e3a",(0,c.jsx)(n.code,{children:"music"}),(0,c.jsx)("br",{}),(0,c.jsx)(n.code,{children:"sources[kw/kg/tx/wy/mg/local].actions"}),"\uff1a\u652f\u6301\u7684actions\u6570\u7ec4\uff0c",(0,c.jsx)(n.code,{children:"local"}),"\u6e90\u53ef\u7528\u503c\u4e3a",(0,c.jsx)(n.code,{children:"musicUrl"}),"\u3001",(0,c.jsx)(n.code,{children:"lyric"}),"\u3001",(0,c.jsx)(n.code,{children:"pic"}),"\uff0c\u5176\u4ed6\u6e90\u53ea\u652f\u6301",(0,c.jsx)(n.code,{children:"musicUrl"}),(0,c.jsx)("br",{}),(0,c.jsx)(n.code,{children:"sources[kw/kg/tx/wy/mg/local].qualitys"}),"\uff1a\u8be5\u6e90\u652f\u6301\u7684\u97f3\u8d28\u5217\u8868\uff0c\u6709\u6548\u7684\u503c\u4e3a",(0,c.jsx)(n.code,{children:"['128k', '320k', 'flac', 'flac24bit']"}),"\uff0c\u8be5\u5b57\u6bb5\u7528\u4e8e\u63a7\u5236\u5e94\u7528\u53ef\u7528\u7684\u97f3\u8d28\u7c7b\u578b\uff0c\u5f53",(0,c.jsx)(n.code,{children:"source"}),"\u4e3a",(0,c.jsx)(n.code,{children:"local"}),"\u65f6\uff0c\u4f20\u5165",(0,c.jsx)(n.code,{children:"[]"}),"\u5373\u53ef"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"request"})}),(0,c.jsxs)(n.td,{children:["\u5e94\u7528API\u8bf7\u6c42\u4e8b\u4ef6\u540d\uff0c\u56de\u8c03\u5165\u53c2\uff1a",(0,c.jsx)(n.code,{children:"handler({ source, action, info})"}),"\uff0c\u56de\u8c03\u5fc5\u987b\u8fd4\u56de",(0,c.jsx)(n.code,{children:"Promise"}),"\u5bf9\u8c61",(0,c.jsx)("br",{}),(0,c.jsx)(n.code,{children:"source"}),"\uff1a\u97f3\u4e50\u6e90\uff0c\u53ef\u80fd\u7684\u503c\u53d6\u51b3\u4e8e\u521d\u59cb\u5316\u65f6\u4f20\u5165\u7684",(0,c.jsx)(n.code,{children:"sources"}),"\u5bf9\u8c61\u7684\u6e90key\u503c",(0,c.jsx)("br",{}),(0,c.jsx)(n.code,{children:"info"}),"\uff1a\u8bf7\u6c42\u9644\u52a0\u4fe1\u606f\uff0c\u5185\u5bb9\u6839\u636e",(0,c.jsx)(n.code,{children:"action"}),"\u53d8\u5316",(0,c.jsx)("br",{}),(0,c.jsx)(n.code,{children:"action"}),"\uff1a\u8bf7\u6c42\u64cd\u4f5c\u7c7b\u578b\uff0c\u53d6\u51b3\u4e8e\u53d1\u9001",(0,c.jsx)(n.code,{children:"inited"}),"\u4e8b\u4ef6\u65f6\u4f20\u5165\u7684",(0,c.jsx)(n.code,{children:"actions"}),"\u6570\u7ec4\u4e2d\u7684\u503c",(0,c.jsx)("br",{}),"\u5f53\u4e3a",(0,c.jsx)(n.code,{children:"musicUrl"}),"\u65f6\u8868\u793a\u83b7\u53d6\u97f3\u4e50URL\u94fe\u63a5\uff0c",(0,c.jsx)(n.code,{children:"info"}),"\u7684\u7ed3\u6784\uff1a",(0,c.jsx)(n.code,{children:"{type, musicInfo}"}),"\uff0c",(0,c.jsx)(n.code,{children:"info.type"}),"\uff1a\u97f3\u4e50\u8d28\u91cf\uff0c\u53ef\u80fd\u7684\u503c\u6709",(0,c.jsx)(n.code,{children:"128k"})," / ",(0,c.jsx)(n.code,{children:"320k"})," / ",(0,c.jsx)(n.code,{children:"flac"})," / ",(0,c.jsx)(n.code,{children:"flac24bit"})," \uff08\u53d6\u51b3\u4e8e\u521d\u59cb\u5316\u65f6\u5bf9\u5e94\u6e90\u4f20\u5165\u7684",(0,c.jsx)(n.code,{children:"qualitys"}),"\u503c\u4e2d\u7684\u4e00\u4e2a\uff0c",(0,c.jsx)(n.code,{children:"source"}),"\u4e3a",(0,c.jsx)(n.code,{children:"local"}),"\u65f6\u8be5\u503c\u4e3a",(0,c.jsx)(n.code,{children:"null"}),"\uff09\uff0c",(0,c.jsx)(n.code,{children:"info.musicInfo"}),"\uff1a\u97f3\u4e50\u4fe1\u606f\u5bf9\u8c61\uff0c\u91cc\u9762\u6709\u97f3\u4e50ID\u3001\u540d\u5b57\u7b49\u4fe1\u606f\uff0c\u8be5\u64cd\u4f5c\u9700\u8981\u5728 Promise \u8fd4\u56dehttp\u5f62\u5f0f\u7684\u6b4c\u66f2 url",(0,c.jsx)("br",{}),"\u5f53\u4e3a",(0,c.jsx)(n.code,{children:"lyric"}),"\u65f6\uff0c\u8868\u793a\u83b7\u53d6\u97f3\u4e50\u6b4c\u8bcd\uff0c",(0,c.jsx)(n.code,{children:"info"}),"\u7684\u7ed3\u6784\uff1a",(0,c.jsx)(n.code,{children:"{musicInfo}"}),"\uff0c\u8be5\u64cd\u4f5c\u9700\u8981\u5728 Promise \u8fd4\u56de\u6b4c\u66f2\u7684\u6b4c\u8bcd\u4fe1\u606f\uff08\u7ed3\u6784\u4e3a",(0,c.jsx)(n.code,{children:"{lryic,tlryic,rlyric,lxlyric}"}),"\uff0c\u4f8b\u5982\uff1a",(0,c.jsx)(n.code,{children:"{lyric:'..',tlryic:...}"}),"\uff09",(0,c.jsx)("br",{}),"\u5f53\u4e3a",(0,c.jsx)(n.code,{children:"pic"}),"\u65f6\uff0c\u8868\u793a\u83b7\u53d6\u97f3\u4e50\u5c01\u9762\u56fe\u7247\uff0c",(0,c.jsx)(n.code,{children:"info"}),"\u7684\u7ed3\u6784\uff1a",(0,c.jsx)(n.code,{children:"{musicInfo}"}),"\uff0c\u8be5\u64cd\u4f5c\u9700\u8981\u5728 Promise \u8fd4\u56dehttp\u5f62\u5f0f\u7684\u6b4c\u66f2\u5c01\u9762\u56fe\u7247url"]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"updateAlert"})}),(0,c.jsxs)(n.td,{children:["\u663e\u793a\u6e90\u66f4\u65b0\u5f39\u7a97\uff0c\u53d1\u9001\u8be5\u4e8b\u4ef6\u65f6\u7684\u53c2\u6570\uff1a",(0,c.jsx)(n.code,{children:"{log, updateUrl}"}),(0,c.jsx)("br",{}),(0,c.jsx)(n.code,{children:"log"}),"\uff1a\u66f4\u65b0\u65e5\u5fd7\uff0c\u5fc5\u4f20\uff0c\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u5185\u5bb9\u53ef\u4ee5\u4f7f\u7528",(0,c.jsx)(n.code,{children:"\\n"}),"\u6362\u884c\uff0c\u6700\u5927\u957f\u5ea61024\uff0c\u8d85\u8fc7\u6b64\u957f\u5ea6\u540e\u5c06\u88ab\u622a\u53d6\u8d85\u51fa\u7684\u90e8\u5206",(0,c.jsx)("br",{}),(0,c.jsx)(n.code,{children:"updateUrl"}),"\uff1a\u66f4\u65b0\u5730\u5740\uff0c\u7528\u4e8e\u5f15\u5bfc\u7528\u6237\u53bb\u8be5\u5730\u5740\u66f4\u65b0\u6e90\uff0c\u9009\u4f20\uff0c\u9700\u4e3ahttp\u534f\u8bae\u7684url\u5730\u5740\uff0c\u6700\u5927\u957f\u5ea61024",(0,c.jsx)("br",{}),"\u6b64\u4e8b\u4ef6\u6bcf\u6b21\u8fd0\u884c\u811a\u672c\u53ea\u80fd\u8c03\u7528\u4e00\u6b21",(0,c.jsx)("br",{}),"\u4f8b\u5b50\uff1a",(0,c.jsx)(n.code,{children:"lx.send(lx.EVENT_NAMES.updateAlert, { log: 'hello world', updateUrl: 'https://xxx.com' })"})]})]})]})]}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a\u521d\u59cb\u5316\u4e8b\u4ef6\u88ab\u53d1\u9001\u524d\uff0c\u6267\u884c\u811a\u672c\u7684\u8fc7\u7a0b\u4e2d\u51fa\u73b0\u4efb\u4f55\u9519\u8bef\u5c06\u89c6\u4e3a\u811a\u672c\u521d\u59cb\u5316\u5931\u8d25"})}),"\n",(0,c.jsx)(n.h3,{id:"globalthislxon",children:(0,c.jsx)(n.code,{children:"globalThis.lx.on"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e8b\u4ef6\u6ce8\u518c\u65b9\u6cd5\uff0c\u5e94\u7528\u4e3b\u52a8\u4e0e\u811a\u672c\u901a\u4fe1\u65f6\u4f7f\u7528\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"/**\n * @param event_name \u4e8b\u4ef6\u540d\n * @param handler \u4e8b\u4ef6\u5904\u7406\u56de\u8c03 -- \u6ce8\u610f\uff1a\u6ce8\u518c\u7684\u56de\u8c03\u5728\u88ab\u8c03\u7528\u65f6\u5fc5\u987b\u8fd4\u56de Promise \u5bf9\u8c61\n */\nglobalThis.lx.on(event_name, handler)\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"\u6ce8\u610f\uff1a"})," \u6ce8\u518c\u7684\u56de\u8c03\u5728\u88ab\u8c03\u7528\u65f6\u5fc5\u987b\u8fd4\u56de ",(0,c.jsx)(n.code,{children:"Promise"})," \u5bf9\u8c61\u3002"]}),"\n",(0,c.jsx)(n.h3,{id:"globalthislxsend",children:(0,c.jsx)(n.code,{children:"globalThis.lx.send"})}),"\n",(0,c.jsx)(n.p,{children:"\u4e8b\u4ef6\u53d1\u9001\u65b9\u6cd5\uff0c\u811a\u672c\u4e3b\u52a8\u4e0e\u5e94\u7528\u901a\u4fe1\u65f6\u4f7f\u7528\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"/**\n * @param event_name \u4e8b\u4ef6\u540d\n * @param datas \u8981\u4f20\u7ed9\u5e94\u7528\u7684\u6570\u636e\n */\nglobalThis.lx.send(event_name, datas)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"globalthislxrequest",children:(0,c.jsx)(n.code,{children:"globalThis.lx.request"})}),"\n",(0,c.jsx)(n.p,{children:"HTTP\u8bf7\u6c42\u65b9\u6cd5\uff0c\u7528\u4e8e\u53d1\u9001HTTP\u8bf7\u6c42\uff0c\u6b64HTTP\u8bf7\u6c42\u65b9\u6cd5\u4e0d\u53d7\u8de8\u57df\u89c4\u5219\u9650\u5236\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-js",children:"/**\n * @param url \u8bf7\u6c42\u7684URL\n * @param options \u8bf7\u6c42\u9009\u9879\uff0c\u53ef\u7528\u9009\u9879\u6709 method / headers / body / form / formData / timeout\n * @param callback \u8bf7\u6c42\u7ed3\u679c\u7684\u56de\u8c03 \u5165\u53c2\uff1aerr, resp, body\n * @return \u8fd4\u56de\u4e00\u4e2a\u65b9\u6cd5\uff0c\u8c03\u7528\u6b64\u65b9\u6cd5\u53ef\u4ee5\u7ec8\u6b62HTTP\u8bf7\u6c42\n */\nconst cancelHttp = globalThis.lx.request(url, options, callback)\n"})}),"\n",(0,c.jsx)(n.h3,{id:"globalthislxutils",children:(0,c.jsx)(n.code,{children:"globalThis.lx.utils"})}),"\n",(0,c.jsx)(n.p,{children:"\u5e94\u7528\u63d0\u4f9b\u7ed9\u811a\u672c\u7684\u5de5\u5177\u65b9\u6cd5\uff1a"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.utils.buffer.from"}),"\uff1a\u5bf9\u5e94Node.js\u7684 ",(0,c.jsx)(n.code,{children:"Buffer.from"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.utils.buffer.bufToString"}),"\uff1aBuffer\u8f6c\u5b57\u7b26\u4e32 ",(0,c.jsx)(n.code,{children:"bufToString(buffer, format)"}),"\uff0c",(0,c.jsx)(n.code,{children:"format"}),"\u5bf9\u5e94Node.js ",(0,c.jsx)(n.code,{children:"Buffer.toString"}),"\u7684\u53c2\u6570"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.utils.crypto.aesEncrypt"}),"\uff1aAES\u52a0\u5bc6 ",(0,c.jsx)(n.code,{children:"aesEncrypt(buffer, mode, key, iv)"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.utils.crypto.md5"}),"\uff1aMD5\u52a0\u5bc6 ",(0,c.jsx)(n.code,{children:"md5(str)"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.utils.crypto.randomBytes"}),"\uff1a\u751f\u6210\u968f\u673a\u5b57\u7b26\u4e32 ",(0,c.jsx)(n.code,{children:"randomBytes(size)"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.utils.crypto.rsaEncrypt"}),"\uff1aRSA\u52a0\u5bc6 ",(0,c.jsx)(n.code,{children:"rsaEncrypt(buffer, key)"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.utils.zlib.inflate"}),"\uff1a\u89e3\u538b ",(0,c.jsx)(n.code,{children:"inflate(buffer: Buffer) => Promise<Buffer>"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"globalThis.lx.utils.zlib.deflate"}),"\uff1a\u538b\u7f29 ",(0,c.jsx)(n.code,{children:"deflate(buffer: Buffer) => Promise<Buffer>"})]}),"\n"]}),"\n",(0,c.jsx)(n.h3,{id:"pc\u7aef\u81ea\u5b9a\u4e49\u6e90\u4e0e\u79fb\u52a8\u7aef\u81ea\u5b9a\u4e49\u6e90\u7684\u533a\u522b",children:"PC\u7aef\u81ea\u5b9a\u4e49\u6e90\u4e0e\u79fb\u52a8\u7aef\u81ea\u5b9a\u4e49\u6e90\u7684\u533a\u522b"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\u79fb\u52a8\u7aef ",(0,c.jsx)(n.code,{children:"inited"})," \u4e8b\u4ef6\u65e0 ",(0,c.jsx)(n.code,{children:"openDevTools"})," \u9009\u9879"]}),"\n",(0,c.jsxs)(n.li,{children:["\u79fb\u52a8\u7aef ",(0,c.jsx)(n.code,{children:"lx.utils"})," \u7684\u67d0\u4e9b\u65b9\u6cd5\u4e0d\u53ef\u7528\uff0c\u5bf9\u4e8e\u4e0d\u53ef\u7528\u6216\u90e8\u5206\u53ef\u7528\u7684\u65b9\u6cd5\uff0c\u80cc\u540e\u4f1a\u6709\u62ec\u53f7\u8bf4\u660e"]}),"\n",(0,c.jsx)(n.li,{children:"\u79fb\u52a8\u7aef\u53ea\u6709\u6781\u5c11\u90e8\u5206\u5bbf\u4e3b\u73af\u5883API\u53ef\u7528\uff0c\u8be6\u60c5\u770b \u53ef\u7528\u5bbf\u4e3b\u73af\u5883API \u8bf4\u660e"}),"\n",(0,c.jsxs)(n.li,{children:["\u79fb\u52a8\u7aef\u7531\u4e8e\u9884\u52a0\u8f7d\u811a\u672c\u4e0e\u81ea\u5b9a\u4e49\u811a\u672c\u8fd0\u884c\u5728\u540c\u4e00\u4e2a\u73af\u5883\u4e0b\uff0c\u51fa\u4e8e\u5bf9\u9884\u52a0\u8f7d\u811a\u672c\u7684\u5b89\u5168\u6027\u8003\u8651\uff0c\u9664\u4e86 ",(0,c.jsx)(n.code,{children:"Function.prototype.toString"}),"\u3001",(0,c.jsx)(n.code,{children:"Function.prototype.toLocaleString"}),"\u3001",(0,c.jsx)(n.code,{children:"Object.prototype.toString"})," \u5916\u7684\u5176\u4ed6JavaScript\u5185\u7f6e\u5c5e\u6027\u90fd\u4f1a\u88ab\u51bb\u7ed3\uff0c\u6240\u4ee5\u7c7b\u4f3c ",(0,c.jsx)(n.code,{children:"Array.prototype.push = ..."})," \u7684\u4ee3\u7801\u90fd\u5c06\u65e0\u6548\uff0c\u4f46\u6269\u5c55\u5185\u7f6e\u5bf9\u8c61\u7684\u884c\u4e3a\u662f\u5141\u8bb8\u7684\uff0c\u4f8b\u5982\uff1a",(0,c.jsx)(n.code,{children:"Array.prototype.myPush = ..."})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u4ee5\u4e0a\u662f\u81ea\u5b9a\u4e49\u6e90\u529f\u80fd\u5728PC\u7aef\u4e0e\u79fb\u52a8\u7aef\u7684\u533a\u522b\uff0c\u76ee\u524d\u4ec5\u63d0\u4f9b\u4ee5\u4e0a\u5de5\u5177\u65b9\u6cd5\uff0c\u5982\u679c\u9700\u8981\u5176\u4ed6\u65b9\u6cd5\u53ef\u4ee5\u5f00issue\u8ba8\u8bba\u3002"})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},1151:function(e,n,l){l.d(n,{Z:function(){return o},a:function(){return i}});var c=l(7294);const s={},r=c.createContext(s);function i(e){const n=c.useContext(r);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),c.createElement(r.Provider,{value:n},e.children)}}}]);