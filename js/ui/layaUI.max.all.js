var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var test;
    (function (test) {
        var TestPageUI = /** @class */ (function (_super) {
            __extends(TestPageUI, _super);
            function TestPageUI() {
                return _super.call(this) || this;
            }
            TestPageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.test.TestPageUI.uiView);
            };
            TestPageUI.uiView = { "type": "View", "props": { "width": 1000, "height": 1200 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 1000, "skin": "comp/bg.png", "sizeGrid": "30,4,4,4", "height": 1200 } }, { "type": "Button", "props": { "y": 29, "x": 11, "width": 150, "var": "btn_start", "skin": "comp/button.png", "sizeGrid": "4,4,4,4", "label": "开始抽奖", "height": 37 } }, { "type": "List", "props": { "y": 106, "x": 23, "width": 964, "var": "list", "vScrollBarSkin": "comp/vscroll.png", "repeatX": 1, "height": 1068 }, "child": [{ "type": "Box", "props": { "y": 0, "x": 0, "width": 112, "name": "render", "height": 30 }, "child": [{ "type": "Label", "props": { "y": 5, "x": 26, "width": 78, "var": "txt_name", "text": "this is a list", "skin": "comp/label.png", "name": "label", "height": 20, "fontSize": 14, "color": "#000000" } }, { "type": "Clip", "props": { "y": 2, "x": 0, "skin": "comp/clip_num.png", "name": "clip", "clipX": 10 } }, { "type": "Button", "props": { "x": 188, "var": "btn_homepage", "skin": "comp/button.png", "name": "btn1", "label": "他的主页" } }, { "type": "Button", "props": { "x": 307, "var": "btn_another", "skin": "comp/button.png", "name": "btn2", "label": "换一个" } }] }] }, { "type": "TextInput", "props": { "y": 36, "x": 245, "var": "txt_num", "skin": "comp/textinput.png", "restrict": "0-9", "color": "#000000" } }, { "type": "Label", "props": { "y": 39, "x": 197, "width": 78, "text": "人数：", "skin": "comp/label.png", "name": "label", "height": 20, "fontSize": 14, "color": "#000000" } }, { "type": "TextInput", "props": { "y": 39, "x": 488, "width": 462, "var": "txt_t", "skin": "comp/textinput.png", "sizeGrid": "0,10,0,8", "height": 22, "color": "#000000" } }, { "type": "Label", "props": { "y": 41, "x": 414, "width": 78, "text": "动态地址：", "skin": "comp/label.png", "name": "label", "height": 20, "fontSize": 14, "color": "#000000" } }, { "type": "TextInput", "props": { "y": 66, "x": 479, "var": "txt_uid", "skin": "comp/textinput.png", "restrict": "0-9", "color": "#000000" } }, { "type": "Label", "props": { "y": 69, "x": 414, "width": 78, "text": "UID：", "skin": "comp/label.png", "name": "label", "height": 20, "fontSize": 14, "color": "#000000" } }] };
            return TestPageUI;
        }(View));
        test.TestPageUI = TestPageUI;
    })(test = ui.test || (ui.test = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map