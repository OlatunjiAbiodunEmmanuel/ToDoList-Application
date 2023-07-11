
function adds() {

var list = document.createElement('li');
var out = document.getElementById('n1s').value;
var hen = document.createTextNode(out);
    
var can1 = document.createElement('button');
var cancel = document.createTextNode('x');
can1.appendChild(cancel);
list.appendChild(can1);
  
var but = document.createElement('button');
but.id = 'jujs';
var del = document.createTextNode('Delete');
but.appendChild(del);
list.appendChild(but);
  
list.appendChild(hen);
document.getElementById('goos').appendChild(list);

var listt = document.createElement('li');
var outt = document.getElementById('n1s').value;
var henn = document.createTextNode(outt);

var can11 = document.createElement('button');
var cancell = document.createTextNode('x');
can11.appendChild(cancell);
listt.appendChild(can11);

var butt = document.createElement('button');
butt.id = 'jujss';
var dell = document.createTextNode('Delete');
butt.appendChild(dell);
listt.appendChild(butt);

listt.appendChild(henn);
document.getElementById('tos').appendChild(listt);

listt.style.wordBreak = 'break-word';
listt.style.fontFamily = "'Hanken Grotesk', sans-serif";
listt.style.fontSize = '20px';
can11.style.marginRight = '3%';
butt.style.marginRight = '3%';
butt.style.marginLeft = '3%';
butt.style.backgroundColor = 'red';
butt.style.border = 'none';
butt.style.padding = '1%';
butt.style.borderRadius = '3px';
listt.style.marginBottom = '10px';
listt.style.marginLeft = '5%';
listt.style.border = '1px solid black';
listt.style.background = '#bad8eb2d';
listt.style.borderRadius ='5px';
listt.style.width = '60%';
listt.style.position = 'relative';
listt.style.padding = '10px';
can11.style.backgroundColor = 'gray';
can11.style.border = 'none';

document.getElementById('today').innerHTML = 
Number(document.getElementById('today').innerHTML) + 1;
document.getElementById('today').style.display = 'inLine';
document.getElementById('today').style.backgroundColor = '#1877f2';
document.getElementById('today').style.color = 'white';

butt.onclick = function(){
listt.style.display = 'none';
list.style.display = 'none';

document.getElementById('today').innerHTML = 
Number(document.getElementById('today').innerHTML) - 1;
document.getElementById('tsk').innerHTML = 
Number(document.getElementById('tsk').innerHTML) -1;
if (document.getElementById('tsk').innerHTML == '0') {
  document.getElementById('readtos').style.display = 'none';
}
if (document.getElementById('today').innerHTML =='0') {
  document.getElementById('today').style.display = 'none';
}

}

can11.onclick = function(){
listt.style.textDecoration = 'line-through';
list.style.textDecoration = 'line-through';
can11.innerHTML = '-';
can1.innerHTML = '-';

document.getElementById('tsk').innerHTML = 
Number(document.getElementById('tsk').innerHTML) + 1;  
document.getElementById('tsk').style.display = 'inLine';
document.getElementById('tsk').style.backgroundColor = '#1877f2';
document.getElementById('tsk').style.color = 'white';
document.getElementById('readtos').style.display = 'inLine';

}

var zero = '';
var out = document.getElementById('n1s').value = zero;

  
list.style.wordBreak = 'break-word';
listt.style.wordBreak = 'break-word';
list.style.fontSize = '20px';
list.style.fontFamily = "'Hanken Grotesk', sans-serif";
can1.style.marginRight = '3%';
but.style.marginRight = '3%';
but.style.marginLeft = '3%';
but.style.backgroundColor = 'red';
but.style.border = 'none';
but.style.padding = '1%';
but.style.borderRadius = '3px';
list.style.marginBottom = '10px';
list.style.marginLeft = '5%';
list.style.border = '1px solid black';
list.style.background = '#bad8eb2d';
list.style.borderRadius ='5px';
list.style.width = '60%';
list.style.position = 'relative';
list.style.padding = '10px';
can1.style.backgroundColor = 'gray';
can1.style.border = 'none';
  
but.onclick = function(){
list.style.display = 'none';
listt.style.display = 'none';

document.getElementById('today').innerHTML = 
Number(document.getElementById('today').innerHTML) - 1;
document.getElementById('tsk').innerHTML = 
Number(document.getElementById('tsk').innerHTML) -1;
if (document.getElementById('tsk').innerHTML == '0') {
  document.getElementById('readtos').style.display = 'none';
}
if (document.getElementById('today').innerHTML =='0') {
  document.getElementById('today').style.display = 'none';
}  
}
  
can1.onclick = function(){
list.style.textDecoration = 'line-through';
listt.style.textDecoration = 'line-through';
    
can1.innerHTML = '-';
can11.innerHTML = '-';

document.getElementById('tsk').innerHTML = 
Number(document.getElementById('tsk').innerHTML) - 1;  
document.getElementById('tsk').style.display = 'inLine';
document.getElementById('tsk').style.backgroundColor = '#1877f2';
document.getElementById('tsk').style.color = 'white';
document.getElementById('readtos').style.display = 'inLine';
}
  
}

function offs() {
  document.getElementById('lights').style.color = 'white';
  document.getElementById('onis').style.transition ='3s';
  document.getElementById('onis').style.color = 'white'; 

  document.getElementById('holds').style.transition ='3s';
  document.getElementById('all').style.transition = '3s';
  document.getElementById('aside').style.transition ='3s';
  document.getElementById('oni').style.transition ='3s';
  document.getElementById('content').style.transition ='3s';
  document.getElementById('content').style.background = '#15202b';
  document.getElementById('all').style.color = 'white';
  document.getElementById('all').style.backgroundColor = '#15202b';    
  document.getElementById('aside').style.background = '#15202b';
  document.getElementById('oni').style.color = 'white'; 
  document.getElementById('holds').style.background = '#15202b';
  document.getElementById('holds').style.boxShadow = '0px 0px 5px white';
  document.getElementById('aside').style.boxShadow= '0px 0px 5px white';
  document.getElementById('content').style.border= '2px solid #38444d';
  document.getElementById('hold').style.boxShadow= '0px 0px 5px white';
  document.getElementById('debitList').style.boxShadow= '0px 0px 5px white';
  document.getElementById('frndList').style.boxShadow= '0px 0px 5px white';
  document.getElementById('newNote').style.boxShadow= '0px 0px 5px white';
  document.getElementById('personalList').style.boxShadow= '0px 0px 5px white';
  document.getElementById('todayList').style.boxShadow= '0px 0px 5px white';
  document.getElementById('upcomingList').style.boxShadow= '0px 0px 5px white';
  document.getElementById('workList').style.boxShadow= '0px 0px 5px white';  

  var x = document.getElementsByTagName('button');
  var i;
  for (i = 0;i< x.length; i++){
    x[i].style.color = 'white';
  }
  var x = document.getElementsByTagName('button');
  var i;
  for (i = 0;i< x.length; i++){
    x[i].style.transition ='3s';
  } 
    
}
  
function ons() {
  document.getElementById('onis').style.transition ='3s';  
  document.getElementById('onis').style.color = 'black'; 




  document.getElementById('holds').style.transition ='3s';
  document.getElementById('all').style.transition ='3s';
  document.getElementById('aside').style.transition ='3s';
  document.getElementById('oni').style.transition ='3s';  
  document.getElementById('content').style.transition ='3s';
  document.getElementById('content').style.background = '#f7f9f9';
  document.getElementById('all').style.color = 'black';
  document.getElementById('all').style.backgroundColor = 'white';
  document.getElementById('aside').style.background = '#f7f9f9';
  document.getElementById('oni').style.color = 'black'; 
  document.getElementById('holds').style.background = '#bfc4c4';
  document.getElementById('holds').style.boxShadow = '0px 0px 5px #15202b';
  document.getElementById('aside').style.boxShadow = '0px 0px 5px #15202b';
  document.getElementById('content').style.boxShadow = '0px 0px 5px #15202b';
  document.getElementById('content').style.border= 'none';
  document.getElementById('hold').style.boxShadow = '0px 0px 5px #15202b';
  document.getElementById('debitList').style.boxShadow = '0px 0px 5px #15202b';
  document.getElementById('frndList').style.boxShadow= '0px 0px 5px #15202b';
  document.getElementById('newNote').style.boxShadow = '0px 0px 5px #15202b';
  document.getElementById('personalList').style.boxShadow = '0px 0px 5px #15202b';
  document.getElementById('todayList').style.boxShadow = '0px 0px 5px #15202b';
  document.getElementById('upcomingList').style.boxShadow = '0px 0px 5px #15202b';
  document.getElementById('workList').style.boxShadow = '0px 0px 5px #15202b';



  var x = document.getElementsByTagName('button');
  var i;
  for (i = 0;i< x.length; i++){
    x[i].style.color = 'black';
  }   
  var x = document.getElementsByTagName('button');
  var i;
  for (i = 0;i< x.length; i++){
    x[i].style.transition ='3s';
  }     


  
}
