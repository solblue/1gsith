 var clicks = 0;
 
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };
	
	
var income = 0;
var totalincome = 0;


function moneyClick(number){
		
    income = income + number;
	document.getElementById("income").innerHTML = income;
	

};
	
var facebooks = 0;

function buyFacebook(){
    var facebookCost = Math.floor(18 * Math.pow(1.18,facebooks));     //works out the cost of this cursor
    if(income >= facebookCost){                                   //checks that the player can afford the cursor
        facebooks = facebooks + 1;                                   //increases number of cursors
    	income = income - facebookCost;                          //removes the income spent
		totalincome =  facebooks + googles*5+ videos*40;
        document.getElementById('facebooks').innerHTML = facebooks;  //updates the number of cursors for the user
        document.getElementById('income').innerHTML = income;  //updates the number of income for the user
		document.getElementById('totalincome').innerHTML = totalincome;
		
    };
    var nextCost = Math.floor(18 * Math.pow(1.18,facebooks)* Math.pow(0.97,salary) );       //works out the cost of the next cursor
    document.getElementById('facebookCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

var googles = 0;

function buyGoogle(){
    var googleCost = Math.floor(70 * Math.pow(1.2,googles));     //works out the cost of this cursor
    if(income >= googleCost){                                   //checks that the player can afford the cursor
        googles = googles + 1;                                   //increases number of cursors
    	income = income - googleCost;                          //removes the income spent
		totalincome = facebooks + googles*5+ videos*40;
        document.getElementById('googles').innerHTML = googles;  //updates the number of cursors for the user
        document.getElementById('income').innerHTML = income;  //updates the number of income for the user
		document.getElementById('totalincome').innerHTML = totalincome;
		
    };
    var nextCost = Math.floor(70 * Math.pow(1.2,googles)* Math.pow(0.97,salary));       //works out the cost of the next cursor
    document.getElementById('googleCost').innerHTML = nextCost;  //updates the cursor cost for the user
};


var videos = 0;

function makeVideo(){
    var videoCost = Math.floor(1000 * Math.pow(1.3,videos));     //works out the cost of this cursor
    if(income >= videoCost){                                   //checks that the player can afford the cursor
        videos = videos + 1;                                   //increases number of cursors
    	income = income - videoCost;                          //removes the income spent
		totalincome =  facebooks + googles*5 + videos*40;
        document.getElementById('videos').innerHTML = videos;  //updates the number of cursors for the user
        document.getElementById('income').innerHTML = income;  //updates the number of income for the user
		document.getElementById('totalincome').innerHTML = totalincome;
		
    };
    var nextCost = Math.floor(1000 * Math.pow(1.3,videos)* Math.pow(0.97,salary) );       //works out the cost of the next cursor
    document.getElementById('videoCost').innerHTML = nextCost;  //updates the cursor cost for the user
};




var salary = 0;

function paySalary(){
    var salaryCost = Math.floor(10000 * Math.pow(1.025,salary));     //works out the cost of this cursor
    if(income >= salaryCost){                                   //checks that the player can afford the cursor
        salary = salary + 1;                                   //increases number of cursors
    	income = income - salaryCost;                          //removes the income spent
		
        document.getElementById('salary').innerHTML = salary;  //updates the number of cursors for the user
        document.getElementById('income').innerHTML = income;  //updates the number of income for the user
		
		
    };
    var nextCost = Math.floor(10000 * Math.pow(1.025,salary));       //works out the cost of the next cursor
    document.getElementById('salaryCost').innerHTML = nextCost;  //updates the cursor cost for the user
	
	
};



window.setInterval(function(){
	
	moneyClick(facebooks*1);
	moneyClick(googles*5);
	moneyClick(videos*40);
	

}, 1000);

function save(){
	
var save = {
    income: income,
    googles: googles,
	facebooks: facebooks,
	totalincome: totalincome,
    salary: salary,
	videos: videos,
}

localStorage.setItem("save",JSON.stringify(save));
}

function load(){
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.income !== "undefined") income = savegame.income;
	if (typeof savegame.googles !== "undefined") googles = savegame.googles;
	if (typeof savegame.facebooks !== "undefined") facebooks = savegame.facebooks;
	if (typeof savegame.totalincome !== "undefined") totalincome = savegame.totalincome;
	if (typeof savegame.salary !== "undefined") salary = savegame.salary;
	if (typeof savegame.videos !== "undefined") videos = savegame.videos;
}

function reset_game(){
	localStorage.removeItem("save");
	window.location.reload()
}

function save_success() {
$.notify({
	icon: 'glyphicon glyphicon-star',
	message: "已成功儲存!"},
	{type: 'success',
});
}

function load_success() {
$.notify({
	icon: 'glyphicon glyphicon-star',
	message: "已成功讀取進度!"},
	{type: 'success',
});
}
