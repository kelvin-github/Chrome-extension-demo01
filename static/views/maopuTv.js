document.addEventListener("DOMContentLoaded",function(){
    // alert("maopuTV")
    
    
    let jsPath02 = "static/js/jquery-2.1.1.min.js"
    let temp02 = document.createElement('script')
    temp02.src = chrome.extension.getURL(jsPath02)
    temp02.setAttribute('type','text/javascript')
    document.head.appendChild(temp02)

    let jsPath01 = "static/views/inject.js"
    let temp01 = document.createElement('script')
    temp01.src = chrome.extension.getURL(jsPath01)
    temp01.setAttribute('type','text/javascript')
    document.head.appendChild(temp01)

})


