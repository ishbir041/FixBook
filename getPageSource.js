// works for now 


function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    //var comm=document_root.getElementsByClassName("UFICommentBody");
    //alert(comm.length)
    var tmp;
    var word=new String('Boss');
    var comm=document.getElementsByClassName("UFICommentBody");
    //alert(comm.length)
    console.log('length='+comm.length)
    var xt=new Array()
    var x;
    //alert(comm.length)
    for(x=0;x<comm.length;x++)
        {
            
            
            var tt=comm[x].getElementsByTagName("span");
            console.log('length of span ='+tt.length)
            if(tt.length>0)
                {
                    var i;
                    for(i=0;i<tt.length;i++)
                        {
                            tmp=new String(tt[i].innerHTML);
                            //xt.push(tmp);
                                console.log('i = '+i+' word='+tmp);
                            if(tmp.indexOf(word)!=-1)
                                {
                                    //alert(tmp)
                                    //xt.push(tmp)
                                    //x.innerHTML.innerHTML=tmp.strike()
                                    tt[i].innerHTML=tmp.fontcolor('red');
                                    //xt.push(tmp)
                                    console.log('Found');
                                }
                        }
                }
            
            
        }
    alert('end')
    return xt
    /*
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html += node.outerHTML;
            break;
        case Node.TEXT_NODE:
            html += node.nodeValue;
            break;
        case Node.CDATA_SECTION_NODE:
            html += '<![CDATA[' + node.nodeValue + ']]>';
            break;
        case Node.COMMENT_NODE:
            html += '<!--' + node.nodeValue + '-->';
            break;
        case Node.DOCUMENT_TYPE_NODE:
            // (X)HTML documents are identified by public identifiers
            html += "<!DOCTYPE " + node.name + (node.publicId ? ' PUBLIC "' + node.publicId + '"' : '') + (!node.publicId && node.systemId ? ' SYSTEM' : '') + (node.systemId ? ' "' + node.systemId + '"' : '') + '>\n';
            break;
        }
        node = node.nextSibling;
    }
    return html;
    */
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});