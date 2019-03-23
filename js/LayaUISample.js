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
var test = ui.test.TestPageUI;
var Label = Laya.Label;
var Handler = Laya.Handler;
var Loader = Laya.Loader;
var WebGL = Laya.WebGL;
var TestUI = /** @class */ (function (_super) {
    __extends(TestUI, _super);
    function TestUI() {
        var _this = _super.call(this) || this;
        _this.url = "https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/view_repost?uid=13853971&dynamic_id=230626506709895866&offset=";
        //btn是编辑器界面设定的，代码里面能直接使用，并且有代码提示
        _this.btn_start.on(Laya.Event.CLICK, _this, _this.start);
        return _this;
    }
    TestUI.prototype.start = function () {
        this.datalist || (this.datalist = []);
        this.choosenList || (this.choosenList = []);
        this.datalist.length = 0;
        this.choosenList.length = 0;
        this.choosenNum = Number(this.txt_num.text);
        if (this.txt_t.text.indexOf("t.bilibili.com") != -1 && this.txt_uid.text != "") {
            var dynamic_id = this.txt_t.text.split("com/")[1].split("?")[0];
            this.url = "https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/view_repost?uid=" + this.txt_uid.text + "&dynamic_id=" + dynamic_id + "&offset=";
            this.send();
        }
    };
    TestUI.prototype.send = function () {
        var _this = this;
        var xhr = new Laya.HttpRequest();
        xhr.on(Laya.Event.COMPLETE, this, function (res) {
            _this.parseData(res);
        });
        xhr.send(this.url + this.datalist.length, null, "GET");
    };
    TestUI.prototype.parseData = function (res) {
        var data = JSON.parse(res);
        if (data.code != 0)
            return;
        for (var i = 0; i < data.data.comments.length; i++) {
            this.datalist.push(data.data.comments[i]);
        }
        if (data.data.has_more) {
            this.send();
        }
        else {
            if (this.choosenNum == 0) {
                this.choosenNum = this.datalist.length;
            }
            else if (this.choosenNum > this.datalist.length) {
                this.choosenNum = this.datalist.length;
            }
            this.getRandomList();
        }
    };
    TestUI.prototype.getRandomList = function () {
        while (this.choosenList.length < this.choosenNum) {
            var randomIndex = Math.floor(Math.random() * this.datalist.length);
            this.choosenList.push(this.datalist[randomIndex]);
            this.datalist.splice(randomIndex, 1);
        }
        this.onBtn2Click();
    };
    TestUI.prototype.onBtn2Click = function () {
        //通过赋值可以简单快速修改组件属性
        //赋值有两种方式：
        //简单赋值，比如：progress:0.2，就是更改progress组件的value为2
        //复杂复制，可以通知某个属性，比如：label:{color:"#ff0000",text:"Hello LayaAir"}
        // this.box.dataSource = { slider: 50, scroll: 80, progress: 0.2, input: "This is a input", label: { color: "#ff0000", text: "Hello LayaAir" } };
        var _this = this;
        //list赋值，先获得一个数据源数组
        var arr = [];
        for (var i = 0; i < this.choosenList.length; i++) {
            arr.push({ label: this.choosenList[i].uname });
        }
        this.list.mouseHandler = new Laya.Handler(this, function (e, index) {
            if (e.type == "click") {
                if (e.target.name == "btn1") {
                    console.log(e, index);
                    var uid = _this.choosenList[index].uid;
                    window.open("https://space.bilibili.com/" + uid);
                }
                else if (e.target.name == "btn2") {
                    console.log(e, index);
                    _this.choosenList.splice(index, 1);
                    var randomIndex = Math.floor(Math.random() * _this.datalist.length);
                    _this.choosenList.splice(index, 0, _this.datalist[randomIndex]);
                    _this.datalist.splice(randomIndex, 1);
                    _this.onBtn2Click();
                }
            }
        });
        //给list赋值更改list的显示
        this.list.array = arr;
        this.list.scrollBar.visible = true;
        //还可以自定义list渲染方式，可以打开下面注释看一下效果
        //list.renderHandler = new Handler(this, onListRender);
    };
    TestUI.prototype.onListRender = function (item, index) {
        //自定义list的渲染方式
        var label = item.getChildByName("label");
        if (index % 2) {
            label.color = "#ff0000";
        }
        else {
            label.color = "#000000";
        }
    };
    return TestUI;
}(ui.test.TestPageUI));
//程序入口
Laya.init(1000, 1200, WebGL);
//激活资源版本控制
Laya.ResourceVersion.enable("version.json", Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);
function beginLoad() {
    Laya.loader.load("res/atlas/comp.atlas", Handler.create(null, onLoaded));
}
function onLoaded() {
    //实例UI界面
    var testUI = new TestUI();
    Laya.stage.addChild(testUI);
}
//# sourceMappingURL=LayaUISample.js.map