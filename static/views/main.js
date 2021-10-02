$("#openBackend").click(e=>{
    window.open(chrome.extension.getURL("backEnd.html"))
})

$("#getBackTitle").click(e=>{
    var bg = chrome.extension.getBackgroundPage();
    alert("bg:"+bg.document.title)    
})

$("#setBackTile").click(e=>{
    var title = prompt("input this title!")
    var bg = chrome.extension.getBackgroundPage();
    bg.document.title = title
})

$("#callmyfunction001").click(e=>{
    var bg = chrome.extension.getBackgroundPage();
    bg.myfunction001();    
})

$("#callmyfunction002").click(e=>{
    var bg = chrome.extension.getBackgroundPage();
    bg.myfunction002();    
})
// 显示badge
$("#showBadge").click(e=>{
    chrome.browserAction.setBadgeText({
        text:"new"
    })
    chrome.browserAction.setBadgeBackgroundColor({
        color:[0,0,255,255]
    })
})
// 隐藏badge
$("#hiddenBadge").click(e=>{
    chrome.browserAction.setBadgeText({
        text:""
    })
    chrome.browserAction.setBadgeBackgroundColor({
        color:[0,0,0,0]
    })
})

// 弹出通知
$("#popNotify").click(e=>{
    // chrome.notifications.create(null, opt, function (id) { console.log("notifacition created ,id : " + id); })
    chrome.notifications.create(null, {
        // type: "list",
        // title: "友情提醒",
        // message: "msg",
        // iconUrl: "./static/images/index_logo.png",
        // items: [
        //     { title: "1.", message: "五点半该下班了" },
        //     { title: "2.", message: "记得按时吃饭" }
        // ],
        // buttons: [
        //     { title: "call", iconUrl: "./static/images/index_logo.png" }, 
        //     { title: "email", iconUrl: "./static/images/index_logo.png" }
        // ]

        // type:'basic',
        // title:'kelvin MSG',
        // message:'this is a kelvin message!',
        // iconUrl:"./static/images/index_logo.png"

        type:'image',
        title:'kelvin MSG',
        message:'this is a kelvin message!',
        iconUrl:"./static/images/index_logo.png",
        imageUrl:"./static/images/index_logo.png"
    },
    function(id){
        console.log("notifacition created ,id : " + id);
    })

})
