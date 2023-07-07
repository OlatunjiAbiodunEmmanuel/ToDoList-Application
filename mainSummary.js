const summary =()=>{
var upc = document.getElementById('upc').innerHTML;
var strike = document.getElementById('strike').innerHTML;
var today = document.getElementById('today').innerHTML;
var tsk = document.getElementById('tsk').innerHTML;
var debit = document.getElementById('debit').innerHTML;
var deb = document.getElementById('deb').innerHTML;
var fid = document.getElementById('fid').innerHTML;
var feb = document.getElementById('feb').innerHTML;
var pid = document.getElementById('pid').innerHTML;
var peb = document.getElementById('peb').innerHTML;
var wid = document.getElementById('wid').innerHTML;
var web = document.getElementById('web').innerHTML;
var fidd = document.getElementById('fidd').innerHTML;

document.getElementById('sum1').innerHTML = 
`You have ${upc} Upcoming To-Do-List and you've done ${strike}`;

document.getElementById('sum2').innerHTML =
`You have ${today} Today's List  and you've completed ${tsk}`;

document.getElementById('sum3').innerHTML =
`You have ${debit} debt to pay and you've paid ${deb}`;

document.getElementById('sum4').innerHTML = 
`You have ${fid} friends to remind thier task and you've done ${feb}`;

document.getElementById('sum5').innerHTML =
`You have ${pid} personal task to achieve and you've done ${peb}`;

document.getElementById('sum6').innerHTML =
`You have ${wid} work task to complete and you've completed ${web}`;

document.getElementById('sum7').innerHTML =
`You have ${fidd} notes`;

document.getElementById('hold').style.display = 'none';
document.getElementById('upcomingList').style.display = 'none';
document.getElementById('todayList').style.display = 'none';
document.getElementById('debitList').style.display = 'none';
document.getElementById('frndList').style.display = 'none';
document.getElementById('personalList').style.display = 'none';
document.getElementById('workList').style.display = 'none';
document.getElementById('notereview').style.display = 'none';
document.getElementById('newNote').style.display = 'none';
document.getElementById('summary').style.display = 'block';

}