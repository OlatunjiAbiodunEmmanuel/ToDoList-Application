function addnote() {
    document.getElementById('hold').style.display = 'none';
    document.getElementById('upcomingList').style.display = 'none';
    document.getElementById('todayList').style.display = 'none';
    document.getElementById('debitList').style.display = 'none';
    document.getElementById('frndList').style.display = 'none';
    document.getElementById('personalList').style.display = 'none';
    document.getElementById('workList').style.display = 'none';
    document.getElementById('newNote').style.display = 'block';
    document.getElementById('notereview').style.display = 'none';
    document.getElementById('summary').style.display = 'none';

}

function addnt() {
    var list = document.createElement('div');

    var but = document.createElement('button');
    but.id = 'juj';
    var del = document.createTextNode('Delete');
    but.appendChild(del);
    list.appendChild(but);

    var out = document.getElementById('area').value;
    var add = document.createTextNode(out);

    list.appendChild(add);
    document.getElementById('neww').appendChild(list);

    var zero = '';
    document.getElementById('area').value = zero;



    list.style.wordBreak = 'break-word';
    list.style.fontFamily = "'Hanken Grotesk', sans-serif";
    but.style.marginRight = '3%';
    list.style.marginBottom = '10px';
    list.style.marginLeft = '5%';
    list.style.border = '1px solid black';
    list.style.background = '#bad8eb2d';
    list.style.borderRadius ='5px';
    list.style.width = '60%';
    list.style.position = 'relative';
    list.style.padding = '30px';


    document.getElementById('fidd').innerHTML = 
    Number(document.getElementById('fidd').innerHTML) + 1;
    document.getElementById('fidd').style.display = 'inLine';
    document.getElementById('fidd').style.backgroundColor = '#1877f2';
    document.getElementById('fidd').style.color = 'white';




    but.onclick = function(){
        list.style.display = 'none';
        Number(document.getElementById('fidd').innerHTML) - 1;
    document.getElementById('fidd').innerHTML = 
    Number(document.getElementById('fidd').innerHTML) -1;
    if (document.getElementById('fidd').innerHTML == '0') {
      document.getElementById('fidd').style.display = 'none';
    }
   
    }

}

function note() {
    document.getElementById('hold').style.display = 'none';
    document.getElementById('upcomingList').style.display = 'none';
    document.getElementById('todayList').style.display = 'none';
    document.getElementById('debitList').style.display = 'none';
    document.getElementById('frndList').style.display = 'none';
    document.getElementById('personalList').style.display = 'none';
    document.getElementById('workList').style.display = 'none';
    document.getElementById('notereview').style.display = 'block';
    document.getElementById('newNote').style.display = 'none';
    document.getElementById('summary').style.display = 'none';



  }