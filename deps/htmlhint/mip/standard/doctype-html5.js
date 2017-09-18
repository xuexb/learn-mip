/**
 * @file 必须使用 html5 文档头
 * @author xuexb <fe.xiaowu@gmail.com>
 */

HTMLHint.addRule({
    id: 'doctype-html5',
    description: 'doctype 必须使用 html5 标准头部。',
    link: 'https://github.com/xuexb/learn-mip/#doctype-html5',
    init: function(parser, reporter){
        var self = this;
        function onComment(event){
            if(event.long === false && event.content.toLowerCase() !== 'doctype html'){
                reporter.warn('doctype 必须使用 html5 标准头部。 使用: "<!DOCTYPE html>"', event.line, event.col, self, event.raw);
            }
        }
        function onTagStart(){
            parser.removeListener('comment', onComment);
            parser.removeListener('tagstart', onTagStart);
        }
        parser.addListener('all', onComment);
        parser.addListener('tagstart', onTagStart);
    }
});
