// works for now 


function DOMtoString(document_root) {
/*
    var script = document.createElement('script');
    script.src='"https://cdn.firebase.com/v0/firebase.js;"';
    (document.head||document.documentElement).appendChild(script);
    script.remove();
 */   
    
    
    // Firebase.enableLogging(true);
    // var fr= new Firebase("https://fixbook-c76ed.firebaseio.com");
    // fr.push({testing: "final"});
    // console.log("Firebase done");
    
    
    var userName = document.getElementsByClassName("_2s25 _606w");
    var uName = userName[0]["pathname"];
    uName = uName.slice(1,uName.length);
                
    return uName
    //console.log("***New Script Start Point***");
    

    /*

    var word=new String('scholes');
    
    //Varnit Edit
    
    var status=document.getElementsByClassName("_1mwp navigationFocus _395 _1mwq _4c_p _5bu_ _17nh _34nd _21mu _5yk1");
    
    if(status.length>0)
    {
        
        alert(status[0]['innerText'])   //This displays the status, we have to implement NLTK on this, working on this
    }                            //Haven't made any significant progress.

    var allposts = document.getElementsByClassName("_5pbx userContent _3576");
    //alert(allposts.length)

    var i;

    // for(i=0;i<allposts.length;i++){

    //     var tt=allposts[i].getElementsByTagName("p");  //Get each post

    //     //console.log(tt[0]["innerText"]);  //Displays the post content

    //     //change HTML for posts with objectionable words in content -- TO WRITE
       
    //     if(tt.length>0)
    //             {
    //                 var i;
    //                 for(i=0;i<tt.length;i++)
    //                     {
    //                         tmp=new String(tt[i].innerHTML);
    //                         //xt.push(tmp);
    //                             console.log('i = '+i+' word='+tmp);
    //                         if(tmp.indexOf(word)!=-1)
    //                             {
    //                                 //alert(tmp)
    //                                 //xt.push(tmp)
    //                                 //x.innerHTML.innerHTML=tmp.strike()
    //                                 tt[i].innerHTML=tmp.fontcolor('red');
    //                                 //xt.push(tmp)
    //                                 console.log('Found');
    //                             }
    //                     }
    //             }
                

    // }
    
    //End Varnit Edit
    
    //var comm=document_root.getElementsByClassName("UFICommentBody");
    //alert(comm.length)
    var tmp;
    var comm=document.getElementsByClassName("UFICommentBody");
    //alert(comm.length)
    console.log('length='+comm.length)
    
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
                            if(tmp.toLowerCase().indexOf(word.toLowerCase())!=-1)
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
    //alert('end')

    */
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});