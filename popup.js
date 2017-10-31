chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    message.innerText = request.source;
  }
});

function onWindowLoad() {
    var message = document.querySelector('#message');
    var message = document.querySelector('#message');
    /*
    var tmp;
    var word=new String('Martial');
    var comm=document.getElementsByClassName("UFICommentBody");
    //var xt=new Array()
    var x;
    //alert(comm.length)
    for(x=0;x<comm.length;x++)
        {
            
            
            var tt=comm[x].getElementsByTagName("span");
            tmp=new String(tt[0].innerHTML);
            //xt.push(tmp);
            if(tmp.contains(word))
                {
                    //alert(tmp)
                    //xt.push(tmp)
                    //x.innerHTML.innerHTML=tmp.strike()
                    tt[0].innerHTML=tmp.strike();
                }
            
        }
    //alert(xt)
    */
  chrome.tabs.executeScript(null, {
    file: "getPageSource.js"
  }, function() {
    // If you try and inject into an extensions page or the webstore/NTP you'll get an error
    if (chrome.runtime.lastError) {
      message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
    }
  });
    //alert(message);

}

window.onload = onWindowLoad;
