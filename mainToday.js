function collectToday() {
var list = document.createElement('li');
var can1 = document.createElement('button');
var cancel = document.createTextNode('x');
can1.appendChild(cancel);
list.appendChild(can1);
  
var but = document.createElement('button');
but.id = 'juj';
var del = document.createTextNode('Delete');
but.appendChild(del);
list.appendChild(but);
    
var out = document.getElementById('goo').innerText;
var add = document.createTextNode(out);
    
list.appendChild(add);
document.getElementById('tos').appendChild(list);
  
list.style.wordBreak = 'break-word';
list.style.fontFamily = "'Hanken Grotesk', sans-serif";
list.style.fontSize = '20px';
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
  
var listt = document.createElement('li');
var outt = document.getElementById('goo').innerText;
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
document.getElementById('goos').appendChild(listt);
    
listt.style.wordBreak = 'break-word';
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
list.style.textDecoration = 'line-through';
document.getElementById('tsk').style.display = 'inLine';
document.getElementById('tsk').style.backgroundColor = '#1877f2';
document.getElementById('tsk').style.color = 'white';
document.getElementById('readtos').style.display = 'inLine';
            
}

document.getElementById('today').innerHTML = 
Number(document.getElementById('today').innerHTML) + 1;
document.getElementById('today').style.display = 'inLine';
document.getElementById('today').style.backgroundColor = '#1877f2';
document.getElementById('today').style.color = 'white';
  
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
document.getElementById('tsk').innerHTML = 
Number(document.getElementById('tsk').innerHTML) + 1;  
list.style.textDecoration = 'line-through';
listt.style.textDecoration = 'line-through';

document.getElementById('tsk').style.display = 'inLine';
document.getElementById('tsk').style.backgroundColor = '#1877f2';
document.getElementById('tsk').style.color = 'white';
document.getElementById('readtos').style.display = 'inLine';
  
can1.innerHTML = '-';
  can11.innerHTML = '-';

}
  
var zero = '';
document.getElementById('goo').innerHTML = zero;
  
}

function today() {
document.getElementById('hold').style.display = 'none';
document.getElementById('todayList').style.display = 'block';
document.getElementById('upcomingList').style.display = 'none';
document.getElementById('debitList').style.display = 'none';
document.getElementById('frndList').style.display = 'none';
document.getElementById('personalList').style.display = 'none';
document.getElementById('workList').style.display = 'none';
document.getElementById('newNote').style.display = 'none';
document.getElementById('notereview').style.display = 'none';
document.getElementById('summary').style.display = 'none';

}
  
      
