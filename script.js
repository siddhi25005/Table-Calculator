let num=document.querySelector(".input");
let rbox=document.querySelector(".res");
num.addEventListener("input",function(){
    rbox.innerHTML="";
    let n=Number(num.value);
    for(let i=1;i<=10;i++) {
        rbox.innerHTML+=${n}x${i}=${n*i} <br>;
    }
})

