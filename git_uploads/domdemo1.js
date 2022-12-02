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
var li=document.getElementsByTagName('li');
for (let i=0;i<li.length;i++)
{
    li[i].style.color="red";
    li[i].style.backgroundColor="gray";
}

//task3
var item=document.querySelector('li:nth-child(2)');
item.style.backgroundColor="green";
var item=document.querySelector('li:nth-child(4)');
item.style.visibility="hidden";
var items=document.querySelectorAll('li');
items[1].style.color="blue";
var li=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<li.length;i++)
{
    li[i].style.backgroundColor="pink";
}

var parele=document.querySelector('#items');
//task4
console.log(parele.parentElement);
console.log(parele.lastElementChild);
console.log(parele.lastChild);
console.log(parele.firstElementChild);
console.log(parele.firstChild);
console.log(parele.nextSibling);
console.log(parele.previousSibling);
console.log(parele.nextElementSibling);
console.log(parele.previousElementSibling);
var newdiv=document.createElement('div');
console.log(newdiv);
newdiv.setAttribute("class", "hello");
newdiv.setAttribute("id","hw");
var newtext=document.createTextNode("HEllo");
console.log(newtext)
newdiv.appendChild(newtext);
console.log(newdiv);
var container=document.querySelector("header .container");
var h1=document.querySelector("header h1");
container.insertBefore(newdiv,h1);
var par=document.querySelector("div ul");
var ul=document.querySelector("ul li");
par.insertBefore(newtext,ul);


