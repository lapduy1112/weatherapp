var search=document.querySelector('.search');
var city=document.querySelector('.city');
var country=document.querySelector('.country');
var temparature=document.querySelector('.temparature');
var value=document.querySelector('.value');
var shortDes=document.querySelector('.short-des');
var visibility=document.querySelector('.visibility span');
var wind=document.querySelector('.wind span');
var sun=document.querySelector('.sun span');
var time=document.querySelector('.time');
var content=document.querySelector('.content');
var body=document.querySelector('body')

async function changeWeatherUI(capitalSearch){
	let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=480dc43f617aa6d3fed340ef9b2f7459 `
	
    let data=await fetch(apiURL).then(res => res.json())
	
    if(data.cod==200){
		content.classList.remove('hide')
        city.innerText=data.name;
        country.innerText=data.sys.country;
        shortDes.innerText=data.weather[0]?data.weather[0].main:'';
        let temp=Math.round((data.main.temp-273.15));
        value.innerHTML=temp+ ` <sup>o</sup>C`;
		visibility.innerText=data.visibility + 'm';
        wind.innerText=data.wind.speed+'m/s';
        sun.innerText=data.clouds.all +'%';
        time.innerText=new Date().toLocaleString('vi')

		if(temp >= 18){
			document.body.className = 'hot'
		}else{
		 document.body.className = 'cold'}
		
    }else{
		content.classList.add('hide')
    }
}

search.addEventListener('keypress', function(e){
	if(e.code === 'Enter'){
		let capitalSearch=(search.value).trim()
		changeWeatherUI(capitalSearch)
    }

})
changeWeatherUI('hue')
