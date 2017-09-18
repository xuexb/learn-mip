/**
 * @file 建议使用标题标签
 * @author xuexb <fe.xiaowu@gmail.com>
 */

HTMLHint.addRule({
    id: 'title-require',
    description: '<title> 标签必须在 <head> 内。',
    link: 'https://github.com/xuexb/learn-mip/#title-require',
    init: function(parser, reporter){
        var self = this;
        var headBegin = false;
        var hasTitle = false;
        function onTagStart(event){
            var tagName = event.tagName.toLowerCase();
            if(tagName === 'head'){
                headBegin = true;
            }
            else if (tagName === 'title' && hasTitle) {
                reporter.warn('<title> 标签重复定义。', event.line, event.col, self, event.raw);
            }
            else if(tagName === 'title' && headBegin){
                hasTitle = true;
            }
        }
        function onTagEnd(event){
            var tagName = event.tagName.toLowerCase();
            if(hasTitle && tagName === 'title'){
                var lastEvent = event.lastEvent;
                if(lastEvent.type !== 'text' || (lastEvent.type === 'text' && /^\s*$/.test(lastEvent.raw) === true)){
                    reporter.warn('<title></title> 不建议为空。', event.line, event.col, self, event.raw);
                }
            }
            else if(tagName === 'head'){
                if(hasTitle === false){
                    reporter.warn('<title> 必须在 <head> 内。', event.line, event.col, self, event.raw);
                }
            }
        }
        parser.addListener('tagstart', onTagStart);
        parser.addListener('tagend', onTagEnd);
    }
});
