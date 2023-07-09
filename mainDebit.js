function collectDebit() {
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
    document.getElementById('dos').appendChild(list);
  
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
  
    document.getElementById('debit').innerHTML = 
    Number(document.getElementById('debit').innerHTML) + 1;
    document.getElementById('debit').style.display = 'inLine';
    document.getElementById('debit').style.backgroundColor = '#1877f2';
    document.getElementById('debit').style.color = 'white';
  

    but.onclick = function(){
    list.style.display = 'none';
    document.getElementById('debit').innerHTML = 
    Number(document.getElementById('debit').innerHTML) - 1;
    document.getElementById('deb').innerHTML = 
    Number(document.getElementById('deb').innerHTML) -1;
    if (document.getElementById('deb').innerHTML == '0') {
      // document.getElementById('deb').innerHTML = 0;
      document.getElementById('readDebit').style.display = 'none';
    }
    if (document.getElementById('debit').innerHTML =='0') {
      document.getElementById('debit').style.display = 'none';
    }
  
    }
  
    can1.onclick = function(){
    document.getElementById('deb').innerHTML = 
    Number(document.getElementById('deb').innerHTML) + 1;  
    list.style.textDecoration = 'line-through';
    document.getElementById('deb').style.display = 'inLine';
    document.getElementById('deb').style.backgroundColor = '#1877f2';
    document.getElementById('deb').style.color = 'white';
    document.getElementById('readDebit').style.display = 'inLine';
  
    can1.innerHTML = '-';
    
    }
  
    var zero = '';
    document.getElementById('goo').innerHTML = zero;
  
  }

  function debt() {
    document.getElementById('debitList').style.display = 'block';
    document.getElementById('hold').style.display = 'none';
    document.getElementById('todayList').style.display = 'none';
    document.getElementById('upcomingList').style.display = 'none';
    document.getElementById('frndList').style.display = 'none';
    document.getElementById('personalList').style.display = 'none';
    document.getElementById('workList').style.display = 'none';
    document.getElementById('newNote').style.display = 'none';
    document.getElementById('notereview').style.display = 'none';
    document.getElementById('summary').style.display = 'none';

  }
  
      
