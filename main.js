const date = document.querySelectorAll('#datez');
const today = new Date();


date.forEach(function(date){
   date.value = today;
})




console.log(today);