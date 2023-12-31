setInterval(() => {

    var d = new Date();

    const Months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const Days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THUSDAY','FRIDAY','SATURDAY'];


    document.getElementById('hr').innerHTML = d.getHours();
    document.getElementById('minute').innerHTML = d.getMinutes();
    document.getElementById('second').innerHTML = d.getSeconds();
    document.getElementById('ampm').innerHTML = 'PM'

    
    document.getElementById('day').innerHTML = Days[d.getDay()];
    document.getElementById('date').innerHTML = d.getDate();
    document.getElementById('month').innerHTML = Months[d.getMonth()];
    document.getElementById('year').innerHTML = d.getFullYear();

   var hrs = d.getHours();
//    console.log(hrs)
   
   if(hrs <= 12){
    document.getElementById('ampm').innerHTML = 'AM';
   }
   else{
    document.getElementById('ampm').innerHTML = 'PM';
   }
    
},1000 );

