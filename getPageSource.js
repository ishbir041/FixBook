// works for now 


function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    
    
    
    /*Varnit Edit */
    
    var status=document.getElementsByClassName("_1mwp navigationFocus _395 _1mwq _4c_p _5bu_ _17nh _34nd _21mu _5yk1");
    alert(status[0]['innerText'])   //This displays the status, we have to implement NLTK on this, working on this
                                    //Haven't made any significant progress.

    var allposts = document.getElementsByClassName("_5pbx userContent _3576");
    alert(allposts.length)

    var i;

    for(i=0;i<allposts.length;i++){

        var inner=allposts[i].getElementsByTagName("p");  //Get each post

        console.log(inner[0]["innerText"]);  //Displays the post content

        //change HTML for posts with objectionable words in content -- TO WRITE

    }
    
    /*End Varnit Edit*/
    
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
