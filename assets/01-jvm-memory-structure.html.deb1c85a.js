const l=JSON.parse('{"key":"v-439ee413","path":"/01-jvm-memory-structure.html","title":"JVM \u5185\u5B58\u7ED3\u6784","lang":"zh-CN","frontmatter":{},"excerpt":"","headers":[{"level":2,"title":"\u7A0B\u5E8F\u8BA1\u6570\u5668\uFF08PC \u5BC4\u5B58\u5668\uFF09","slug":"\u7A0B\u5E8F\u8BA1\u6570\u5668-pc-\u5BC4\u5B58\u5668","children":[{"level":3,"title":"\u7A0B\u5E8F\u8BA1\u6570\u5668\u7684\u5B9A\u4E49","slug":"\u7A0B\u5E8F\u8BA1\u6570\u5668\u7684\u5B9A\u4E49","children":[]},{"level":3,"title":"\u7A0B\u5E8F\u8BA1\u6570\u5668\u7684\u4F5C\u7528","slug":"\u7A0B\u5E8F\u8BA1\u6570\u5668\u7684\u4F5C\u7528","children":[]},{"level":3,"title":"\u7A0B\u5E8F\u8BA1\u6570\u5668\u7684\u7279\u70B9","slug":"\u7A0B\u5E8F\u8BA1\u6570\u5668\u7684\u7279\u70B9","children":[]}]},{"level":2,"title":"Java \u865A\u62DF\u673A\u6808\uFF08Java \u6808\uFF09","slug":"java-\u865A\u62DF\u673A\u6808-java-\u6808","children":[{"level":3,"title":"Java \u865A\u62DF\u673A\u6808\u7684\u5B9A\u4E49","slug":"java-\u865A\u62DF\u673A\u6808\u7684\u5B9A\u4E49","children":[]},{"level":3,"title":"\u538B\u6808\u51FA\u6808\u8FC7\u7A0B","slug":"\u538B\u6808\u51FA\u6808\u8FC7\u7A0B","children":[]},{"level":3,"title":"\u5C40\u90E8\u53D8\u91CF\u8868","slug":"\u5C40\u90E8\u53D8\u91CF\u8868","children":[]},{"level":3,"title":"\u64CD\u4F5C\u6570\u6808","slug":"\u64CD\u4F5C\u6570\u6808","children":[]},{"level":3,"title":"\u65B9\u6CD5\u7684\u8C03\u7528","slug":"\u65B9\u6CD5\u7684\u8C03\u7528","children":[]},{"level":3,"title":"Java \u865A\u62DF\u673A\u6808\u7684\u7279\u70B9","slug":"java-\u865A\u62DF\u673A\u6808\u7684\u7279\u70B9","children":[]}]},{"level":2,"title":"\u672C\u5730\u65B9\u6CD5\u6808\uFF08C \u6808\uFF09","slug":"\u672C\u5730\u65B9\u6CD5\u6808-c-\u6808","children":[{"level":3,"title":"\u672C\u5730\u65B9\u6CD5\u6808\u7684\u5B9A\u4E49","slug":"\u672C\u5730\u65B9\u6CD5\u6808\u7684\u5B9A\u4E49","children":[]},{"level":3,"title":"\u6808\u5E27\u53D8\u5316\u8FC7\u7A0B","slug":"\u6808\u5E27\u53D8\u5316\u8FC7\u7A0B","children":[]}]},{"level":2,"title":"\u5806","slug":"\u5806","children":[{"level":3,"title":"\u5806\u7684\u5B9A\u4E49","slug":"\u5806\u7684\u5B9A\u4E49","children":[]},{"level":3,"title":"\u5806\u7684\u7279\u70B9","slug":"\u5806\u7684\u7279\u70B9","children":[]},{"level":3,"title":"\u65B0\u751F\u4EE3\u4E0E\u8001\u5E74\u4EE3","slug":"\u65B0\u751F\u4EE3\u4E0E\u8001\u5E74\u4EE3","children":[]},{"level":3,"title":"\u5BF9\u8C61\u5206\u914D\u8FC7\u7A0B","slug":"\u5BF9\u8C61\u5206\u914D\u8FC7\u7A0B","children":[]},{"level":3,"title":"Full GC /Major GC \u89E6\u53D1\u6761\u4EF6","slug":"full-gc-major-gc-\u89E6\u53D1\u6761\u4EF6","children":[]},{"level":3,"title":"\u9003\u9038\u5206\u6790","slug":"\u9003\u9038\u5206\u6790","children":[]},{"level":3,"title":"TLAB","slug":"tlab","children":[]},{"level":3,"title":"\u56DB\u79CD\u5F15\u7528\u65B9\u5F0F","slug":"\u56DB\u79CD\u5F15\u7528\u65B9\u5F0F","children":[]}]},{"level":2,"title":"\u65B9\u6CD5\u533A","slug":"\u65B9\u6CD5\u533A","children":[{"level":3,"title":"\u65B9\u6CD5\u533A\u7684\u5B9A\u4E49","slug":"\u65B9\u6CD5\u533A\u7684\u5B9A\u4E49","children":[]},{"level":3,"title":"\u65B9\u6CD5\u533A\u7684\u7279\u70B9","slug":"\u65B9\u6CD5\u533A\u7684\u7279\u70B9","children":[]},{"level":3,"title":"\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60","slug":"\u8FD0\u884C\u65F6\u5E38\u91CF\u6C60","children":[]}]},{"level":2,"title":"\u76F4\u63A5\u5185\u5B58\uFF08\u5806\u5916\u5185\u5B58\uFF09","slug":"\u76F4\u63A5\u5185\u5B58-\u5806\u5916\u5185\u5B58","children":[{"level":3,"title":"\u64CD\u4F5C\u76F4\u63A5\u5185\u5B58","slug":"\u64CD\u4F5C\u76F4\u63A5\u5185\u5B58","children":[]},{"level":3,"title":"\u76F4\u63A5\u5185\u5B58\u4E0E\u5806\u5185\u5B58\u6BD4\u8F83","slug":"\u76F4\u63A5\u5185\u5B58\u4E0E\u5806\u5185\u5B58\u6BD4\u8F83","children":[]}]}],"git":{"updatedTime":1695940621000,"contributors":[{"name":"yanglbme","email":"szuyanglb@outlook.com","commits":11},{"name":"Yang Libin","email":"szuyanglb@outlook.com","commits":2},{"name":"yang520-bye","email":"78717426+yang520-bye@users.noreply.github.com","commits":2},{"name":"Oliver","email":"wqdyxnbd@163.com","commits":1},{"name":"biubiue","email":"hichuanbiao@gmail.com","commits":1},{"name":"chenqiao","email":"bigjoechan@163.com","commits":1},{"name":"kenny","email":"ue4sprite@gmail.com","commits":1},{"name":"weloe","email":"87379877+weloe@users.noreply.github.com","commits":1},{"name":"yanglbme","email":"yanglbme@users.noreply.github.com","commits":1}]},"filePathRelative":"01-jvm-memory-structure.md"}');export{l as data};
