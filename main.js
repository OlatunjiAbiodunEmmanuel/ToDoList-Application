// alert('Please enter your to-do list');

function add() {

  var list = document.createElement('li');
  var out = document.getElementById('n1').value;
  var hen = document.createTextNode(out);
  
  list.appendChild(hen);
  document.getElementById('goo').appendChild(list);

  var zero = '';
  var out = document.getElementById('n1').value = zero;

 document.getElementById('clear').onclick = function (){
  document.getElementById('goo').innerHTML = '';}

}
function addevent() {
  document.getElementById('todayList').style.display = 'none';
  document.getElementById('hold').style.display = 'block';
  document.getElementById('upcomingList').style.display = 'none';
  document.getElementById('debitList').style.display = 'none';
  document.getElementById('frndList').style.display = 'none';
  document.getElementById('personalList').style.display = 'none';
  document.getElementById('workList').style.display = 'none';
  document.getElementById('newNote').style.display = 'none';
  document.getElementById('summary').style.display = 'none';

}
