console.dir(document);
console.log(document.domain);
console.log(document.title);
var title=document.getElementById("tname");
title.innerText="Goods list";
console.log(title);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
console.log(document.all);
console.log(document.all[10]);
console.log(document.all[24]);
var htitle=document.getElementById("header-title");

console.log(htitle.textContent);
console.log(htitle.innerText);
htitle.textContent="Goods list";
console.log(htitle.innerText);
var header=document.getElementById("main-header");
header.style.borderBottom="solid 3px black";
var h2=document.getElementsByClassName("title");
console.log(h2)
h2[0].style.fontWeight="bold";
h2[0].style.color="green";
var items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="green";

for (let i =0; i<items.length;i++)
{
    items[i].style.fontWeight="bold";
    items[i].style.color="blue";
}