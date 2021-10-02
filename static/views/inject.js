// alert("maopu")

var div01 = document.createElement("div");
var div02 = document.createElement("div");
var div03 = document.createElement("div");
var h101 = document.createElement("h1");

div03.setAttribute("id","root")
div03.setAttribute("style","margin-top:5px;padding:5px")

var txt02 = document.createTextNode("kelvin's Tools");
div02.appendChild(txt02);
div02.appendChild(div03);

div01.setAttribute("style","position: fixed;top:100px;right:2%;width:180px;height:120px;color:#ffb800;font-size:16px;display:block;background:#01aaed;border-radius:5px;text-align:center")
div01.appendChild(div02);
document.body.append(div01);

let html = "<div>"
+"<input type=button class='btn' value='获取数据1' id='getDataBtn1' style='margin-top:5px;' />"
+"<br/>"
+"<input type=button class='btn' value='获取数据2' id='getDataBtn2' style='margin-top:5px;' />"
+"</div>"
document.getElementById("root").innerHTML = html

let getDataBtn1 = document.getElementById("getDataBtn1")
getDataBtn1.onclick = function(){
    let arrayName = []
    for(let i=1;i<15;i++){
        let headings01 = document.evaluate('/html/body/div[4]/div/div[1]/div[1]/ul/li['+i+']/h3/a/text()', document, null, XPathResult.ANY_TYPE, null );
        let thisHeading01 = headings01.iterateNext()
        let name01 = thisHeading01.textContent
        name01 = name01.trim();
        arrayName.push(name01)
    }    
    alert(JSON.stringify(arrayName))
    
}

let getDataBtn2 = document.getElementById("getDataBtn2")
getDataBtn2.onclick = function(){
    alert("getDataBtn2");
}
