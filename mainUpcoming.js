function collectUpComing() {
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
    document.getElementById('ji').appendChild(list);
  
  
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
  
    document.getElementById('upc').innerHTML = 
    Number(document.getElementById('upc').innerHTML) + 1;
    document.getElementById('upc').style.display = 'inLine';
    document.getElementById('upc').style.backgroundColor = '#1877f2';
    document.getElementById('upc').style.color = 'white';
  
    
  
  
    but.onclick = function(){
    list.style.display = 'none';
    document.getElementById('upc').innerHTML = 
    Number(document.getElementById('upc').innerHTML) - 1;
    document.getElementById('strike').innerHTML = 
    Number(document.getElementById('strike').innerHTML) -1;
    if (document.getElementById('strike').innerHTML == '0') {
      // document.getElementById('strike').innerHTML = 0;
      document.getElementById('readUp').style.display = 'none';
    }
    if (document.getElementById('upc').innerHTML =='0') {
      document.getElementById('upc').style.display = 'none';
    }
  
    }
  
    can1.onclick = function(){
    document.getElementById('strike').innerHTML = 
    Number(document.getElementById('strike').innerHTML) + 1;  
    list.style.textDecoration = 'line-through';
    document.getElementById('strike').style.display = 'inLine';
    document.getElementById('strike').style.backgroundColor = '#1877f2';
    document.getElementById('strike').style.color = 'white';
    document.getElementById('readUp').style.display = 'inLine';
  
    can1.innerHTML = '-';
    
    }
  
    var zero = '';
    document.getElementById('goo').innerHTML = zero;
  
  }

  function upcoming() {
    document.getElementById('hold').style.display = 'none';
    document.getElementById('upcomingList').style.display = 'block';
    document.getElementById('todayList').style.display = 'none';
    document.getElementById('debitList').style.display = 'none';
    document.getElementById('frndList').style.display = 'none';
    document.getElementById('personalList').style.display = 'none';
    document.getElementById('workList').style.display = 'none';
    document.getElementById('newNote').style.display = 'none';
    document.getElementById('notereview').style.display = 'none';
    document.getElementById('summary').style.display = 'none';

  }
  
  