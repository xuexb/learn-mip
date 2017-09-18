/**
 * @file id不能重复
 * @author xuexb <fe.xiaowu@gmail.com>
 */

HTMLHint.addRule({
    id: 'id-unique',
    description: 'ID属性的值必须是唯一的。',
    link: 'https://github.com/xuexb/learn-mip/#id-unique',
    init: function(parser, reporter){
        var self = this;
        var mapIdCount = {};
        parser.addListener('tagstart', function(event){
            var attrs = event.attrs,
                attr,
                id,
                col = event.col + event.tagName.length + 1;
            for(var i=0, l=attrs.length;i<l;i++){
                attr = attrs[i];
                if(attr.name.toLowerCase() === 'id'){
                    id = attr.value;
                    if(id){
                        if(mapIdCount[id] === undefined){
                            mapIdCount[id] = 1;
                        }
                        else{
                            mapIdCount[id] ++;
                        }
                        if(mapIdCount[id] > 1){
                            reporter.warn('ID的属性值 [ ' + id + ' ] 必须是唯一的。', event.line, col + attr.index, self, attr.raw);
                        }
                    }
                    break;
                }
            }
        });
    }
});
