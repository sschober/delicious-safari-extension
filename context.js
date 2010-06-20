document.addEventListener("contextmenu", handleContextMenu, false);

function findLink(str) {
    var link = $("a:contains('"+str+"')");
    if(link.length){
        link.addClass("highlighted");
        return { "uri" : link.attr("href"),
                 "title" : link.text()};
    }
    return {"uri":""};
}

function handleContextMenu(event){
    var sel = getSelection().toString();
    console.log("Looking for: "+sel);
    var link = findLink(sel);
    console.log("Found link: "+link.uri + " length: " + link.uri.length);
    safari.self.tab.setContextMenuEventUserInfo(event,link);
}