function myfunction001(){
    chrome.tabs.getSelected(null,function(tab){
        var title = tab.title
        chrome.tabs.executeScript(null,{
            code:"javascript:alert('title:"+ title +"')"
        })
    })
}

function myfunction002(){
    chrome.tabs.getSelected(null,function(tab){
        chrome.tabs.executeScript(null,{
            code:`var kw=document.querySelector('#kw'); kw.value='kelvin'; var button=document.querySelector('#su'); button.click();`
        })
    })
}

// 鼠标右键菜单（父菜单）
chrome.contextMenus.create({
    title:"自动提交搜索",
    id:'1',
    onclick:function(){
        chrome.tabs.executeScript(null,{
            code:`var kw=document.querySelector('#kw'); kw.value='kelvin'; var button=document.querySelector('#su'); button.click();`
        })
    },
    // 指定网站右键才有该menu
    documentUrlPatterns:[
        "http://*.baidu.com/*",
        "https://*.baidu.com/*"
    ]
})
// 子菜单
chrome.contextMenus.create({
    type:"radio",
    parentId:"1",
    title:"自动提交搜索1",
    onclick:function(){
        chrome.tabs.executeScript(null,{
            code:`var kw=document.querySelector('#kw'); kw.value='kelvin'; var button=document.querySelector('#su'); button.click();`
        })
    },
    // 指定网站右键才有该menu
    documentUrlPatterns:[
        "http://*.baidu.com/*",
        "https://*.baidu.com/*"
    ]
})
// 子菜单
chrome.contextMenus.create({
    type:"radio",
    parentId:"1",
    title:"自动提交搜索2",
    onclick:function(){
        chrome.tabs.executeScript(null,{
            code:`var kw=document.querySelector('#kw'); kw.value='kelvin'; var button=document.querySelector('#su'); button.click();`
        })
    },
    // 指定网站右键才有该menu
    documentUrlPatterns:[
        "http://*.baidu.com/*",
        "https://*.baidu.com/*"
    ]
})
// 选中后右键菜单
chrome.contextMenus.create({
    title:"选中后菜单",
    contexts:["selection"],
    onclick:function(){
        chrome.tabs.executeScript(null,{
            code:`var kw=document.querySelector('#kw'); kw.value='kelvin'; var button=document.querySelector('#su'); button.click();`
        })
    },
    // 指定网站右键才有该menu
    documentUrlPatterns:[
        "http://*.baidu.com/*",
        "https://*.baidu.com/*"
    ]
})
// 监听 url 输入
chrome.omnibox.onInputChanged.addListener((text,suggest)=>{
    if(!text){
        return
    }
    if(text == "kelvin"){
        suggest([
            {
                content: text + "视频",
                description:"你要找 这个 视频 吗？"
            },
            {
                content: text + "网站",
                description:"你要找 这个 网站 吗？"
            },
        ])
    }
})

