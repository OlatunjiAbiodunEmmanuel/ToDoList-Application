// alert('Please enter your to-do list');

function add() {

  var list = document.createElement('li');
  var out = document.getElementById('n1').value;
  var hen = document.createTextNode(out);
  
  var can1 = document.createElement('button');
  var cancel = document.createTextNode('x');
  can1.appendChild(cancel);
  list.appendChild(can1);

  var but = document.createElement('button');
  but.id = 'juj';
  var del = document.createTextNode('Delete');
  but.appendChild(del);
  list.appendChild(but);

  list.appendChild(hen);
  document.getElementById('goo').appendChild(list);

  var zero = '';
  var out = document.getElementById('n1').value = zero;

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

function off() {

  document.getElementById('hold').style.transition ='3s';
  document.getElementById('hold').style.background = 'black';
  document.getElementById('dark').style.background = 'black';
  document.getElementById('dark').style.color = 'white';
  document.getElementById('light').style.background = '#B2E0A6';
  document.getElementById('light').style.color = 'black';
  document.getElementById('all').style.backgroundColor = 'white';
  document.getElementById('all').style.transition = '3s';
  document.getElementById('goo').style.color = 'red';
  document.getElementById('goo').style.transition = '2s';
  
}

function on() {

  document.getElementById('hold').style.background = '#B2E0A6';
  document.getElementById('light').style.background = '#B2E0A6';
  document.getElementById('light').style.color = 'white';
  document.getElementById('dark').style.background = '#B2E0A6';
  document.getElementById('dark').style.color = 'black';
  document.getElementById('goo').style.color = 'black';
  document.getElementById('all').style.backgroundColor = 'gray';
  document.getElementById('all').style.transition = '2s';

}