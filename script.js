let aid1=localStorage.getItem("aid");
console.log(aid1)

if(aid1==null){
    let box=document.getElementById("box2")
    box.style.display="none"
}
else{
    let p1=document.getElementById("aidp")
    p1.innerText="Your Amazon Affilate ID is "
    let spn=document.getElementById("spn")
    spn.innerText=aid1
    let box=document.getElementById("box1")
    box.style.display="none"
}

function myFunction2(){
    window.localStorage.removeItem("aid");
    location.reload();
}

document.getElementById("f1").addEventListener("submit",function(){
    myFunction3(event)
})
document.getElementById("f2").addEventListener("submit",function(){
    myFunction1(event)
})

function myFunction3(event){
    event.preventDefault();
    let val=document.getElementById("aid").value
    localStorage.setItem("aid",val);
    location.reload();
}


function myFunction1(event){
    event.preventDefault();
    
    let a="&tag="+aid1;
    let b="?tag="+aid1;

    let url=document.getElementById("link").value;
    let start;
    let end;
    let flag=false;
    if(url[22]=="d"&&url[23]=="p"){
        flag=true;
        start=35;
    }
    else{
        for(let i=0; i<url.length; i++){
            if((url[i]=="?"&&url[i+1]=="t"&&url[i+2]=="a"&&url[i+3]=="g")||(url[i]=="&"&&url[i+1]=="t"&&url[i+2]=="a"&&url[i+3]=="g")){
                start=i;
                end=i+1
                let char=url[end];
                
                while(char!="&"&&char!="?"){
                    end++;
                    char=url[end];
                    if(end==url.length){
                        break;
                    }
                }  
            }
        }
    }

    let res;

    if(flag){
        let temp1=url.slice(0,start);
        res=temp1+b;
    }
    else if(start==undefined){
        res=url+a;
    }
    else{
        let temp=url.slice(0,start);
        let temp2=url.slice(end);
        res=temp+a+temp2;
    }

    let inp=document.getElementById("myInput")
    inp.setAttribute("value",res)
}

function myFunction() {
    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    alert("Link Copied");
    location.reload();
}
