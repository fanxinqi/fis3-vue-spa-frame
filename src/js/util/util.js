
var printAreaCount = 0;
var printArea=function(el){
    var el=el;
    var idPrefix = "printArea_";
    removePrintArea(idPrefix + printAreaCount);
    printAreaCount++;
    var iframeId = idPrefix + printAreaCount;
    var iframeStyle = 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;';
    var iframe = document.createElement('IFRAME');
    iframe.style.cssText = iframeStyle;
    iframe.setAttribute('id', iframeId);
    document.body.appendChild(iframe);
    var doc = iframe.contentWindow.document;
    var links=document.getElementsByTagName("link");
    for(var index in links){
        if(links[index].getAttribute&&links[index].getAttribute("rel").toLowerCase()=="stylesheet"){
            doc.write('<link type="text/css" rel="stylesheet" href="'
                + links[index].getAttribute("href") + '" >');
        }
    }

    doc.write('<div class="' + el.getAttribute("class") + '">' + el.outerHTML
        + '</div>');
    setTimeout(function(){
        var frameWindow = iframe.contentWindow;
        frameWindow.close();
        frameWindow.focus();
        frameWindow.print();
    },1000);

};
var removePrintArea = function (id) {
    var iframe=document.getElementById(id);
    var body=document.getElementsByTagName("body");
    iframe&&body[0].removeChild(iframe);
};
module.exports.printArea=printArea ;