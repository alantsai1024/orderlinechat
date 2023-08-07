// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
    channelId: '2000338776',
    channelSecret: '622afe9ba18595b83167fa0b251baaf6',
    channelAccessToken: 'yosH2za6mcCAHA9hYB1VKZZUP3tRyTNQm/k+PMgPJtt0MgUoA2PoPkThi1AaL/3MWftgXqMS+99S3Yws8oKSll3UF0kKp6IDGvm+9Mn+2/i0/fJ9Ejw3tvQyQmELEUvDvgNnuF69mPiQxf7cz5szLAdB04t89/1O/w1cDnyilFU='
});
// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息 
    // 準備要回傳的內容 
    console.log(event);
    var replyMsg = `Hello你剛才說的是:${event.message.text}`;
    // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者 
    event.reply(replyMsg).then(function (data) {
        // 當訊息成功回傳後的處理 
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理 
    });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});

