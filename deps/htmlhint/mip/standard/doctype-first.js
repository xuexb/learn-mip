/**
 * @file 文档头必须是第一个元素
 * @author xuexb <fe.xiaowu@gmail.com>
 */

HTMLHint.addRule({
    id: 'doctype-first',
    description: 'doctype 文档定义必须是第一个元素。',
    link: 'https://github.com/xuexb/learn-mip/#doctype-first',
    init: function(parser, reporter){
        var self = this;
        var allEvent = function(event){
            if(event.type === 'start' || (event.type === 'text' && /^\s*$/.test(event.raw))){
                return;
            }
            if((event.type !== 'comment' && event.long === false) || /^DOCTYPE\s+/i.test(event.content) === false){
                reporter.error('doctype 文档定义必须是第一个元素。', event.line, event.col, self, event.raw);
            }
            parser.removeListener('all', allEvent);
        };
        parser.addListener('all', allEvent);
    }
});
