// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        this.url = "https://api.vc.bilibili.com/dynamic_repost/v1/dynamic_repost/view_repost?uid=13853971&dynamic_id=230626506709895866&offset=";
        Laya.init(1920, 1280, WebGL);
        Laya.stage.bgColor = "#aaaaaa";
        this.list = [];
        var view = new ui.mainUI();
        Laya.stage.addChild(view);
        view.btn_start.on(Laya.Event.CLICK, this, this.send);
        // this.send();
    }
    GameMain.prototype.send = function () {
        var _this = this;
        var xhr = new Laya.HttpRequest();
        xhr.on(Laya.Event.COMPLETE, this, function (res) {
            _this.parseData(res);
        });
        xhr.send(this.url + this.list.length, null, "GET");
    };
    GameMain.prototype.parseData = function (res) {
        var data = JSON.parse(res);
        if (data.code != 0)
            return;
        for (var i = 0; i < data.data.comments.length; i++) {
            this.list.push(data.data.comments[i]);
        }
        if (data.data.has_more) {
            this.send();
        }
        else {
            console.log(this.list);
        }
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map