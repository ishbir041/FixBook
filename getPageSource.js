// works for now 


function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;
    
    console.log("***New Script Start Point***")
    
    var badWords = ["dick","cock","pussy","testword","the"];


    /*Varnit Edit */
    var status=document.getElementsByClassName("_1mwp navigationFocus _395 _1mwq _4c_p _5bu_ _17nh _34nd _21mu _5yk1");
    
    if(status.length>1){
        var statusContent = status[0]['innerText'];   
        alert(statusContent)        //This displays the status, we have to implement NLTK on this, working on this
                                    //Cant get python to work
    }

    var allposts = document.getElementsByClassName("_5pbx userContent _3576");
    var allpostsContent = document.getElementsByClassName("_1dwg _1w_m");

    var i;

    for(i=0;i<allposts.length;i++){

        var inner=allposts[i].getElementsByTagName("p");  //Get each post
        console.log(inner[0]["innerText"]);  //Displays the post content
        var text = inner[0]["innerText"];

        var flag=0;

        for (var j=0; j<badWords.length; j++) {
            var tempWord = badWords[j];

            if (text.search(tempWord)!=-1){
                flag=1
            }

        }

        if(flag==1){
            var tmp=new String(inner[0].innerHTML);
            inner[0].style.visibility = 'hidden';
            // for (var k=0;k<inner.length;k++){
            //     inner[k].style.visibility = 'hidden';
            // }
            allpostsContent[i].style.visibility = 'hidden';
        }
        

        //change HTML for posts with objectionable words in content -- TO WRITE

    }
    
    //_1dwg _1w_m   -- class of post
    
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
                        
                            var flag2=0;


                            for(var j2=0;j2<badWords.length;j2++){

                                if(tmp.search(badWords[j2])!=-1)
                                {
                                    //alert(tmp)
                                    //xt.push(tmp)
                                    //x.innerHTML.innerHTML=tmp.strike()
                                    
                                    //tt[i].innerHTML=tmp.fontcolor('red');
                                    
                                    //xt.push(tmp)
                                    console.log('Found');
                                    flag2=1;
                                }


                            }   
                        
                            if (flag2==1){
                                tt[i].parentNode.style.visibility='hidden';
                            }
                        


                        }
                }   
        }

    console.log('***end***')
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
