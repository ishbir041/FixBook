    
  // doesnt work right now  
function change()
{
    var tmp;
    var word=new String("Referee");
    var comm=document.getElementsByClassName("UFICommentBody");
    //var xt=new Array()
    var x;
    alert("HI")
    alert(comm.length)
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
    }
    
    
    
window.onload=change()