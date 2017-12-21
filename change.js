//function change()

var allWords;

chrome.storage.sync.get('words',function(result){
    console.log('words='+result.words);
    allWords = result.words.split(",");
    commentfunc();
    
})
function mainfunc(str){
    allWords = str.split(",");
    // console.log("Async call")
    // console.log(arr);

}
function commentfunc()
{
$(document).ready(function() {
    var observeDOM = (function() {
        var MutationObserver = window.MutationObserver || window.WebKitMutationObserver, eventListenerSupported = window.addEventListener;

        return function(obj, callback) {
          if( MutationObserver ) {
            // define a new observer
            var obs = new MutationObserver(function(mutations, observer){
                if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
                    callback();
            });
            // have the observer observe foo for changes in children
            obs.observe( obj, { childList:true, subtree:true });
          }
          else if( eventListenerSupported ) {
            obj.addEventListener('DOMNodeInserted', callback, false);
            obj.addEventListener('DOMNodeRemoved', callback, false);
          }
        }
      })();

    
    if( document.getElementById("globalContainer") !== null ) {
            observeDOM( document.getElementById('globalContainer') ,function(){
            // For posts in feed with public view
            $(".UFICommentBody").each(function() {
                //console.log(this);

                var flag=0;
                $("span",this).each(function(){

                    var allhtml = $(this).html();

                    console.log(allhtml);
                    console.log(allWords);

                    var tempcomm = new String(allhtml);
                    flag=0;

                    for( var k=0;k<allWords.length;k++){
                        if (tempcomm.toLowerCase().indexOf(allWords[k])!=-1){
                            flag=1;
                        }
                    }

                    // $.each(allWords, function( index, value ) {
                    //     console.log(index + ": " + value);
                    // });

                });

                
                if(flag==1){
                    $(this).attr('hidden',"true");
                }
                

            });
                $("._5pcr.userContentWrapper").each(function() {
                //console.log('Inside post');
                //console.log(this);
                //console.log("words="+allWords);
                var flag=0;
                $("p",this).each(function(){
                    //console.log(this);
                    var allhtml = $(this).html();

                    //console.log(allhtml);
                    //console.log(allWords);
                    //console.log(this);
                    var tempcomm = new String(allhtml);
                    flag=0;

                    for( var k=0;k<allWords.length;k++){
                        if (tempcomm.toLowerCase().indexOf(allWords[k].toLowerCase())!=-1){
                            flag=1;
                        }
                    }

                    // $.each(allWords, function( index, value ) {
                    //     console.log(index + ": " + value);

                });

                
                if(flag==1){
                    console.log("Post hidden");
                    $(this).attr('hidden',"true");
                }
                

            });
          });
        }
});
}


window.addEventListener ("load", myMain, false);

function fireWrite(id,status,time){
    console.log("start F")
    Firebase.enableLogging(true);
    var fr= new Firebase("https://fixbook-c76ed.firebaseio.com");
    fr.push({userId: id,userStatus: status, userTime: time});
    console.log("Firebase done");
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {

    console.log("running1");
    var currStat="";
    var i=1;

    var toRemove = [];
    var toRemoveIndex=0;

    while(1){
        var status=document.getElementsByClassName("_5rpb");
        var typing=0;
        if (status.length>0) typing=1;
        try{
            while(status[0]['innerText']!=currStat)
            {
                if(document.getElementById('NUDGE')!=null)
                {
                        var elem=document.getElementById('NUDGE');
                        elem.remove();
                }
                //console.log("running4")
                var userName = document.getElementsByClassName("_2s25 _606w");
                var uName = userName[0]["pathname"];
                uName = uName.slice(1,uName.length);
                var d = new Date();
                var nowT = d.getTime();

                var toedit = status[0]['innerText'];
                var endingString = "";

                for(var j=0;j<toedit.length;j++){
                    if(toedit[j]==' '){
                        endingString+='%20';
                    }else{
                        endingString+=toedit[j];
                    }
                }

                //console.log(toedit.charAt(toedit.length-2));
                if(toedit.charAt(toedit.length-2)==" "){
                    //console.log(toedit);
                    //console.log("TR: " + toRemove);
                    for(var i=0;i<toRemoveIndex;i++){
                        //toedit.replace(toRemove[i], "");
                        //console.log(toRemove[i]);
                        //var re = "/" + toRemove[i] + "/gi";
                        //console.log(re);
                        toedit = toedit.replace(toRemove[i], "");
                        //toedit.remove
                    }
                    console.log(toedit);

                    //console.log(localStorage.getItem('words'));
                    

                    var request = new XMLHttpRequest();
                    var url = "https://192.168.1.17:5002/test/"+toedit;

                    if(url.length<35){
                        currStat=status[0]['innerText'];
                        break;
                    }

                    request.open("GET", url, false);
                    request.send();

                    var response = request.response;

                    var rjson = JSON.parse(response);

                    var sendtArray = toedit.split(" ");
                    //console.log("push: " + sendtArray[sendtArray.length-2]);


                    var t=document.getElementsByClassName('_1mwp navigationFocus _395 _1mwq _4c_p _5bu_ _34nd _21mu _5yk1')
                    var tt=t[0];
                    var t=document.getElementsByClassName('_1mwp navigationFocus _395 _1mwq _4c_p _5bu_ _34nd _21mu _5yk1')
                    var tt=t[0]
                    var element = document.createElement("textarea");
                    element.setAttribute('id','NUDGE')
                    element.value = "nudge";
                    element.style.padding="10px";
                    element.style.backgroundColor = 'yellow';
                    element.style.border= "0px";
                    element.style.borderRadius= "10px";
                    element.style.textAlign= "center";
                    element.style.textDecorationColor= "#555";
                    element.style.fontSize= "15px";
                    element.style.fontFamily= "Roboto";
                    element.style.alignSelf = "center";
                    element.style.opacity = "0.6";
                    
                    console.log('OUT')
                    if(rjson['location']==true){
                        //alert("check location");
                        toRemove[toRemoveIndex] = sendtArray[sendtArray.length-2];
                        toRemoveIndex++;
                        if(document.getElementById('NUDGE')==null)
                            {
                                console.log("INSIDE")
                                console.log(element);
                                element.value="Check Location";
                                tt.appendChild(element)
                            }
                        else
                            {
                                console.log('Nudge already there');
                                var xt=document.getElementById('NUDGE')
                                xt.remove();
                                console.log("removed");
                                element.value="Check Location";
                                tt.appendChild(element)
                            }
                        
                    }
                    /*
                    if(flag==1)
                        {
                            flag=0;
                            toRemove[toRemoveIndex] = sendtArray[sendtArray.length-2];
                            toRemoveIndex++;
                            if(document.getElementById('NUDGE')==null)
                                {
                                    console.log("INSIDE")
                                    //console.log(element);
                                    element.value="Check Language";
                                    tt.appendChild(element)
                                }
                            else
                                {
                                    console.log('Nudge already there');
                                    var xt=document.getElementById('NUDGE')
                                    xt.remove();
                                    console.log("removed");
                                    element.value="Check Phone";
                                    tt.appendChild(element)
                                }
                        }
                        */
                    if(rjson['phone']==true){
                        //alert("check phone");
                        toRemove[toRemoveIndex] = sendtArray[sendtArray.length-2];
                        toRemoveIndex++;
                        if(document.getElementById('NUDGE')==null)
                            {
                                console.log("INSIDE")
                                //console.log(element);
                                element.value="Check Phone";
                                tt.appendChild(element)
                            }
                        else
                            {
                                console.log('Nudge already there');
                                var xt=document.getElementById('NUDGE')
                                xt.remove();
                                console.log("removed");
                                element.value="Check Phone";
                                tt.appendChild(element)
                            }
                        
                    }
                    if(rjson['email']==true){
                        //alert("check email");
                        toRemove[toRemoveIndex] = sendtArray[sendtArray.length-2];
                        toRemoveIndex++;
                        if(document.getElementById('NUDGE')==null)
                            {
                                console.log("INSIDE")
                                //console.log(element);
                                element.value="Check Email";
                                tt.appendChild(element)
                            }
                        else
                            {
                                console.log('Nudge already there');
                                var xt=document.getElementById('NUDGE')
                                xt.remove();
                                console.log("removed");
                                element.value="Check Email";
                                tt.appendChild(element)
                            }
                        
                    }




                }else{
                    //console.log("nc");
                }

                
                // console.log(rjson['location']);
                // console.log(rjson['phone']);
                // console.log(rjson['email']);

                // var toPost = "https://192.168.57.80:5002/test/"+toedit;

                // xhr.open("GET", toPost, false);
                // xhr.send();

                // console.log(xhr.response);

                currStat=status[0]['innerText'];
                // console.log(uName);
                // console.log(status[0]['innerText']);
                // console.log(nowT);
                fireWrite(uName,status[0]['innerText'],nowT);
                await sleep(20);
                
            }
        }catch(err){

        }
        
        i+=1;
        await sleep(500);
        //console.log(i);
    }
}


function myMain (evt) {
    
    demo();

    var s = document.createElement('script');
    // TODO: add "script.js" to web_accessible_resources in manifest.json
    s.src = chrome.extension.getURL('test3.js');
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
}



