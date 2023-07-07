function collectPersonal() {
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
    document.getElementById('pos').appendChild(list);
  
  
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
  
    document.getElementById('pid').innerHTML = 
    Number(document.getElementById('pid').innerHTML) + 1;
    document.getElementById('pid').style.display = 'inLine';
    document.getElementById('pid').style.backgroundColor = '#1877f2';
    document.getElementById('pid').style.color = 'white';
  
    
  
  
    but.onclick = function(){
    list.style.display = 'none';
    document.getElementById('pid').innerHTML = 
    Number(document.getElementById('pid').innerHTML) - 1;
    document.getElementById('peb').innerHTML = 
    Number(document.getElementById('peb').innerHTML) -1;
    if (document.getElementById('peb').innerHTML == '0') {
      document.getElementById('readpid').style.display = 'none';
    }
    if (document.getElementById('pid').innerHTML =='0') {
      document.getElementById('pid').style.display = 'none';
    }
  
    }
  
    can1.onclick = function(){
    document.getElementById('peb').innerHTML = 
    Number(document.getElementById('peb').innerHTML) + 1;  
    list.style.textDecoration = 'line-through';
    document.getElementById('peb').style.display = 'inLine';
    document.getElementById('peb').style.backgroundColor = '#1877f2';
    document.getElementById('peb').style.color = 'white';
    document.getElementById('readpid').style.display = 'inLine';
  
    can1.innerHTML = '-';
    
    }
  
    var zero = '';
    document.getElementById('goo').innerHTML = zero;
  
  }

  function personal() {
    document.getElementById('hold').style.display = 'none';
    document.getElementById('upcomingList').style.display = 'none';
    document.getElementById('todayList').style.display = 'none';
    document.getElementById('debitList').style.display = 'none';
    document.getElementById('frndList').style.display = 'none';
    document.getElementById('personalList').style.display = 'block';
    document.getElementById('workList').style.display = 'none';
    document.getElementById('newNote').style.display = 'none';
    document.getElementById('notereview').style.display = 'none';
    document.getElementById('summary').style.display = 'none';

  }


  
  
  