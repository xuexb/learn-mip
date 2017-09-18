/**
 * @file alt-require
 * @author xuexb <fe.xiaowu@gmail.com>
 */

HTMLHint.addRule({
    id: 'alt-require',
    description: '图片标签建议使用 alt 属性。',
    link: 'https://github.com/xuexb/learn-mip/#alt-require',
    init: function (parser, reporter) {
        var self = this;
        parser.addListener('tagstart', function (event) {
            var tagName = event.tagName.toLowerCase();
            var mapAttrs = parser.getMapAttrs(event.attrs);
            var col = event.col + tagName.length + 1;
            var selector;
            if ((tagName === 'img' || tagName === 'mip-img') && !('alt' in mapAttrs)) {
                reporter.warn('建议 <' + tagName + '> 元素中添加 alt 属性。', event.line, col, self, event.raw);
            }
        });
    }
});
