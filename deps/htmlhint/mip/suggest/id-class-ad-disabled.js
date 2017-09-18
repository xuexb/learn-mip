/**
 * @file id和class中不建议使用 ad 关键词
 * @author xuexb <fe.xiaowu@gmail.com>
 */

HTMLHint.addRule({
    id: 'id-class-ad-disabled',
    description: 'ID和类属性不建议使用 ad 关键字，它可能会被adblock软件阻止。',
    link: 'https://github.com/xuexb/learn-mip/#id-class-ad-disabled',
    init: function(parser, reporter){
        var self = this;
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs;
            var attr;
            var attrName;
            var col = event.col + event.tagName.length + 1;

            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                attrName = attr.name;
                if(/^(id|class)$/i.test(attrName)){
                    if(/(\b|[-_])ad(\b|[-_])/i.test(attr.value)){
                        reporter.warn(attrName + ' 属性不建议使用 ad 关键写。', event.line, col + attr.index, self, attr.raw);
                    }
                }
            }
        });
    }
});
