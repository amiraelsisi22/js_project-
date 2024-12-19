var city=document.getElementById('city');
var show=document.getElementById('show');
document.getElementById('ccity').innerHTML=('cairo')

var cityname;
var temp_c;
var icon1;
var newarray;
let currentDate = new Date();

let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let currentDay = daysOfWeek[currentDate.getDay()];
let nextday=daysOfWeek[currentDate.getDay()+1];
let nextnextday=daysOfWeek[currentDate.getDay()+2];



let currentDateString = currentDate.toLocaleDateString('en-US', {
    
    year: 'numeric', 
    day: 'numeric',  
    month: 'numeric'    
       
});

document.getElementById('currentday').innerHTML=(`${currentDay}`)
document.getElementById('currentdate').innerHTML=(`${currentDateString}`);
document.getElementById('nextday').innerHTML=(`${nextday}`)
document.getElementById('nextnextday').innerHTML=(`${nextnextday}`)





var x = new XMLHttpRequest();
x.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=2bdf5e87b4fa485e86972257241312&q=cairo&days=3`)
x.send();
x.addEventListener('load',function(){
    let arr = JSON.parse(x.response);
    
    console.log(arr.location.name);})

city.addEventListener('input',function(){
    x.open('GET',`https://api.weatherapi.com/v1/forecast.json?key=2bdf5e87b4fa485e86972257241312&q=${city.value}&days=3`)
    x.send();
    x.addEventListener('load',function(){
        let arr = JSON.parse(x.response);
        document.getElementById('ccity').innerHTML=(`${arr.location.name}`)
        document.getElementById('temp-c').innerHTML=(`${arr.current.temp_c}^C`)
        

        document.getElementById('icon1').setAttribute('src',`https:${arr.current.condition.icon}`)
    })
})




show.addEventListener('click',function(){
    console.log(city.value)
    x.open('GET',`https://api.weatherapi.com/v1/current.json?key=2bdf5e87b4fa485e86972257241312&q=`+city.value+`&aqi=yes`)
x.send();

x.addEventListener('load',function(){
    console.log(x.response)
})
   
})
