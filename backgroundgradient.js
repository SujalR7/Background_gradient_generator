let btn1=document.querySelector("#btn1");
let btn2=document.querySelector("#btn2");
let body=document.querySelector("body");
let copy=document.querySelector(".desc");
let title=document.querySelector(".title");
let icons=document.querySelectorAll("i");
icons.forEach((arrow)=>{arrow.addEventListener("click",()=>{
    if(arrow.id=="arrow1")
    {
        body.style.backgroundImage=`linear-gradient(${str1},${str2})`;
        copy.innerHTML=`background-image:linear-gradient(${str1},${str2});`;
    }
    if(arrow.id=="arrow2")
    {
        body.style.backgroundImage=`linear-gradient(${str2},${str1})`;
        copy.innerHTML=`background-image:linear-gradient(${str2},${str1});`;
    }
    if(arrow.id=="arrow3")
        {
            body.style.backgroundImage=`linear-gradient(to right,${str1},${str2})`;
            copy.innerHTML=`background-image:linear-gradient(to right,${str1},${str2});`;
        }
    if(arrow.id=="arrow4")
        {
            body.style.backgroundImage=`linear-gradient(to left,${str1},${str2})`;
            copy.innerHTML=`background-image:linear-gradient(to left,${str1},${str2});`;
        }
})})
let hexa="0123456789ABCDEF";
let i,idx;
let str1="#FFA99F";
let str2="#FF719A"
const handlebtn1=()=>{
    str1="#";
    for(i=0;i<6;i++)
    {
        idx=Math.floor(Math.random()*16);
        str1=str1+hexa[idx];
    }
    btn1.style.backgroundColor=str1;
    btn1.innerText=str1;
    body.style.backgroundImage=`linear-gradient(to left,${str2},${str1})`;
    copy.innerHTML=`background-image:linear-gradient(to left,${str2},${str1});`
}
const handlebtn2=()=>{
    str2="#";
    for(i=0;i<6;i++)
        {
            idx=Math.floor(Math.random()*16);
            str2=str2+hexa[idx];
        }
        btn2.style.backgroundColor=str2;
        btn2.innerText=str2;
        body.style.backgroundImage=`linear-gradient(to left,${str2},${str1})`;
        copy.innerHTML=`background-image:linear-gradient(to left,${str2},${str1});`;
}
const copyingtext=()=>{
    navigator.clipboard.writeText(copy.innerText);
    alert("code has been copied to clipboard");
}
copy.addEventListener("click",copyingtext);
title.addEventListener("click",copyingtext);
btn1.addEventListener("click",handlebtn1);
btn2.addEventListener("click",handlebtn2);