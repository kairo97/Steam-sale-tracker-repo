//jQuery selectors

// Games Data API Connection
var game1 = document.querySelector('#game1')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de',
		'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
	}
};
var fetchsteam = function (data) {
fetch('https://steam-special-offers.p.rapidapi.com/games_data/?app_id=271590', options)
	.then((data) => {
		return data.json();
	}).then((completedata)=>{
        console.log(completedata)
		for (var i = 0; i < completedata.length; i ++) {
			console.log(completedata[i].children[3].title)
		}
	
            // console.log(completedata[0].title);
        
            // console.log(completedata[0].link);
        }
		,)
		// console.log(completedata[0].children[3]);
	}
		
		fetchsteam()
	

// Recent Gaming News API Connection
/*const optionZ = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de',
		'X-RapidAPI-Host': 'videogames-news2.p.rapidapi.com'
	}
};

fetch('https://videogames-news2.p.rapidapi.com/videogames_news/recent', optionZ)
	.then((data) => {
		return data.json();
	}).then((completedata)=>{
		console.log(completedata)
}) */

    






	
	// // Games List API Connection
	// const optionY = {
	// 	method: 'GET',
	// 	headers: {
	// 		'X-RapidAPI-Key': 'fc98b95498mshba10dc92df84595p1eeda7jsne575863c62de',
	// 		'X-RapidAPI-Host': 'steam-special-offers.p.rapidapi.com'
	// 	}
	// };
	
	// fetch('https://steam-special-offers.p.rapidapi.com/games_list/?start=0&count=10&region=IN', optionY)
	// 	.then(response => response.json())
	// 	.then(response => console.log(response))
	// 	.catch(err => console.error(err));