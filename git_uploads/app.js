
var ul=document.getElementById('users')
var form1=document.getElementById('add-form');
form1.addEventListener('submit',onsubmit);


function onsubmit(e){
    e.preventDefault();
    
    var name1=document.getElementById('name').value;
    var emailid=document.getElementById('email').value;
    var phone1=document.getElementById('phone').value;

    let myob={
        uname:name1,
        mailid:emailid,
        phone:phone1
    }
    axios.post('https://crudcrud.com/api/bba7352ac1a2477098ee11ba8bff6be7/book-app',myob)
    .then(response=>{
        
            showuseronscreen(response.data);
        
    })
    .catch(err=>console.log(err));
    
}
    function showuseronscreen(obj){
    
    var li=document.createElement('li');
    li.className='users-list';
    var name1=obj.uname;
    var emailid=obj.mailid;
    var phone1=obj.phone;

    li.appendChild(document.createTextNode(name1));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(emailid));
    li.appendChild(document.createTextNode(" "));
    li.appendChild(document.createTextNode(phone1));
    var btn=document.createElement('button');
    btn.textContent="edit";
    btn.className="btn btn-dark"
    var btn2=document.createElement('button');
    btn2.textContent="delete";
    btn2.className="btn"
    li.id=obj._id;
    btn2.setAttribute("onclick",`ondelete(${li.id})`);
    btn.setAttribute("onclick",`onedit(${li.id}})`);
    li.appendChild(btn);
    li.appendChild(btn2);
    ul.appendChild(li);
    console.log(li);
    }
    
    
    
    //myob_serialized= JSON.stringify(myob);
    //localStorage.setItem(count,myob_serialized);    
    



//li=document.getElementById('users-list');

//li.addEventListener("delete",ondelete);
function ondelete(id1){
    
    
    var childnode=document.getElementById(id1);
    ul.removeChild(childnode);
    //localStorage.removeItem(id1);
    axios.delete('https://crudcrud.com/api/bba7352ac1a2477098ee11ba8bff6be7/book-app/id1')
    .then(response=>console.log(response.data))
    .catch(e=>console.log(e));
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/bba7352ac1a2477098ee11ba8bff6be7/book-app')
    .then(response=>{
        for(var i=0;i<response.data.length;i++){
            showuseronscreen(response.data[i]);
        }
    })
})

function onedit(id2){
    var li=getElementById(id2);
}