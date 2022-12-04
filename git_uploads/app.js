
var ul=document.getElementById('users')
var form1=document.getElementById('add-form');
form1.addEventListener('submit',onsubmit);

function onsubmit(e){
    e.preventDefault();
    var name1=document.getElementById('name').value;
    var emailid=document.getElementById('email').value;
    var li=document.createElement('li');
    li.className='users-list';
    li.appendChild(document.createTextNode(name1));
    li.appendChild(document.createTextNode(" "))
    li.appendChild(document.createTextNode(emailid));
    var btn=document.createElement('button');
    btn.textContent="edit";
    btn.className="btn btn-dark"
    var btn2=document.createElement('button');
    btn2.textContent="delete";
    btn2.className="btn"
    li.appendChild(btn);
    li.appendChild(btn2);
    ul.appendChild(li);
    console.log(li);
    let myob={
        uname:name1,
        mailid:emailid
    }
    myob_serialized= JSON.stringify(myob);
    localStorage.setItem(myob.uname,myob_serialized);    
    

}

for (var i=0;i<localStorage.length;i++)
{
   var myob_deserialized=JSON.parse(localStorage.getItem(localStorage.key(i)));
   console.log(myob_deserialized);
   document.write("\n");
   document.write(myob_deserialized.uname);
    document.write(" ",myob_deserialized.mailid);
   document.write("\n");
   //console.log(localStorage.myob_deserialized);
   
}
