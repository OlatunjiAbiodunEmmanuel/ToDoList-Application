// alert('Please enter your to-do list');

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
  
    var zero = '';
    var out = document.getElementById('n1s').value = zero;
  
    list.style.wordBreak = 'break-word';
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
    list.style.background = 'white';
    list.style.borderRadius ='5px';
    list.style.width = '60%';
    list.style.position = 'relative';
    list.style.padding = '10px';
    can1.style.backgroundColor = 'gray';
    can1.style.border = 'none';
  
    but.onclick = function(){
    list.style.display = 'none';
    
  }
  
    can1.onclick = function(){
    list.style.textDecoration = 'line-through';
    can1.innerHTML = '-';
  
  }
  
  }
  
  function offs() {
  
    document.getElementById('holds').style.transition ='3s';
    document.getElementById('holds').style.background = 'black';
    document.getElementById('darks').style.background = 'black';
    document.getElementById('darks').style.color = 'white';
    document.getElementById('lights').style.background = '#B2E0A6';
    document.getElementById('lights').style.color = 'black';
    document.getElementById('alls').style.backgroundColor = 'white';
    document.getElementById('alls').style.transition = '3s';
    document.getElementById('goos').style.color = 'red';
    document.getElementById('goos').style.transition = '2s';
    
  }
  
  function ons() {
  
    document.getElementById('holds').style.background = '#B2E0A6';
    document.getElementById('lights').style.background = '#B2E0A6';
    document.getElementById('lights').style.color = 'white';
    document.getElementById('darks').style.background = '#B2E0A6';
    document.getElementById('darks').style.color = 'black';
    document.getElementById('goos').style.color = 'black';
    document.getElementById('alls').style.backgroundColor = 'gray';
    document.getElementById('alls').style.transition = '2s';
  
  }