var nameslist=[]

function check(){
    for(a=1 ;a<=8; a++){
        names=document.getElementById("name"+a).value;
        nameslist.push(names)
    }
    document.getElementById("dis").innerHTML=nameslist
}