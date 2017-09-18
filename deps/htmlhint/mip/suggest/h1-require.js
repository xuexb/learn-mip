/**
 * @file h1-require
 * @author xuexb <fe.xiaowu@gmail.com>
 */

HTMLHint.addRule({
    id: 'h1-require',
    description: '建议页面中添加 <h1> 标签。',
    link: 'https://github.com/xuexb/learn-mip/#h1-require',
    init: function (parser, reporter) {
        var self = this;
        var body = null;
        var hasH1 = false;

        function tagstart(event) {
            var tagName = event.tagName.toLowerCase();
            if (tagName === 'body') {
                body = event;
            }
            else if (tagName === 'h1') {
                hasH1 = true;
            }
        }

        function onEnd(event) {
            if (!hasH1) {
                reporter.warn('建议页面中添加 <h1> 标签。', body.line, body.col, self, body.raw);
            }
        }

        parser.addListener('tagstart', tagstart);
        parser.addListener('end', onEnd);
    }
});
