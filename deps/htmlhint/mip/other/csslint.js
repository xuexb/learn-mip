/**
 * Copyright (c) 2015, Yanis Wang <yanis.wang@gmail.com>
 * MIT Licensed
 */
HTMLHint.addRule({
    id: 'csslint',
    description: 'Scan css with csslint.',
    link: null,
    init: function (parser, reporter, options) {
        var self = this;
        parser.addListener('cdata', function (event) {
            if (event.tagName.toLowerCase() === 'style') {

                var cssVerify = CSSLint.verify;

                if (options !== undefined) {
                    var styleLine = event.line - 1;
                    var styleCol = event.col - 1;
                    try {
                        var messages = cssVerify(event.raw, options).messages;
                        messages.forEach(function (error) {
                            var type = error.type === 'warning' ? 'warn' : 'error';
                            var message = '[' + error.rule.id + '] ' + error.message;
                            var line = styleLine + error.line - 1;
                            var col = (line === 1 ? styleCol : 0) + error.col;

                            // 替换 line, col
                            message = message.replace(/line\s+\d+/, 'line ' + line);
                            message = message.replace(/col\s+\d+/, 'col ' + col);

                            reporter[type](message, line, col, self, error.evidence);
                        });
                    }
                    catch (e) {}
                }
            }

        });
    }
});
