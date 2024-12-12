var gname =document.getElementById("name");
var gurl=document.getElementById("url");

var alldata=[];

if(localStorage.getItem("all")!=null){
    alldata= JSON.parse(localStorage.getItem("all"))
    displaydata()
}
function getvalue(){
  if(validinput()==true){ 
    var data={
    name:gname.value,
    surl:gurl.value
  };
  
   validinput()
  localStorage.setItem("all", JSON.stringify(alldata))
  
  alldata.push(data);
   
   clearinput();
   displaydata()
  }
  
 
}

function clearinput(){
  gname.value=""
  gurl.value=""
}

function validinput(){
  var regex=/[a-z|A-Z]{3,9}/
  var  regexlink=/^(http:)[a-z|]{3,10}(.com)$/
 
  if(regex.test(gname.value)==true&&regex.test(gurl.value)==true){
    return true
    
  }
 
    document.getElementById("alarm").style.display="flex"
  
  return false;

}
function gclose(){
  document.getElementById("alarm").style.display="none"
  

}

function displaydata(){
  var cartoona;
  for(var i=0;i<alldata.length;i++){
    
     cartoona += `<tr>
              <td> ${i+1} </td>
              <td>${alldata[i].name}</td>              
              <td>
                <button class=" btn-visit" data-index="0" onclick="visitWebsite()">
                  <i class="fa-solid fa-eye pe-2"></i>Visit
                </button>
              </td>
              <td>
                <button class=" btn-visit " data-index="0" onclick="deletev(${i})">
                  <i class="fa-solid fa-trash-can"></i>
                  Delete
                </button>
              </td>
          </tr>`
  }
document.getElementById("tableContent").innerHTML=cartoona
}
function deletev(index)
  {
localStorage.setItem("all", JSON.stringify(alldata));
  
  alldata.splice(index,1)
  displaydata()
  }

 function visitWebsite(){
  window.open(url.value)
  
 }

