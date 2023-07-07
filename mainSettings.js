function settings() {
    document.getElementById('light').style.display = 'inLine';
    document.getElementById('dark').style.display = 'inLine';
    document.getElementById('done').style.display = 'inLine';
    document.getElementById('settings').style.display = 'none';
  }
  function off() {
    document.getElementById('all').style.transition = '3s';
    document.getElementById('aside').style.transition ='3s';
    document.getElementById('oni').style.transition ='3s';
    document.getElementById('content').style.transition ='3s';
    document.getElementById('content').style.background = '#15202b';
    document.getElementById('all').style.color = 'white';
    document.getElementById('all').style.backgroundColor = '#15202b';    
    document.getElementById('aside').style.background = '#15202b';
    document.getElementById('oni').style.color = 'white'; 

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
  
  function on() {
    document.getElementById('all').style.transition ='3s';
    document.getElementById('aside').style.transition ='3s';
    document.getElementById('oni').style.transition ='3s';  
    document.getElementById('content').style.transition ='3s';
    document.getElementById('content').style.background = '#f7f9f9';
    document.getElementById('all').style.color = 'black';
    document.getElementById('all').style.backgroundColor = 'white';
    document.getElementById('aside').style.background = '#f7f9f9';
    document.getElementById('oni').style.color = 'black'; 


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
  
  function done() {
    document.getElementById('light').style.display = 'none';
    document.getElementById('dark').style.display = 'none';
    document.getElementById('done').style.display = 'none';
    document.getElementById('settings').style.display = 'inLine';
  }
  
  
  