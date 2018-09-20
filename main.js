var income = 0;

function moneyClick(number){
    income = income + number;
	document.getElementById("income").innerHTML = income;
};

var googles = 0;

var totalincome = 0;


function buyGoogle(){
    var googleCost = Math.floor(60 * Math.pow(1.12,googles));     //works out the cost of this cursor
    if(income >= googleCost){                                   //checks that the player can afford the cursor
        googles = googles + 1;                                   //increases number of cursors
    	income = income - googleCost;                          //removes the income spent
		totalincome = facebooks + googles*5;
        document.getElementById('googles').innerHTML = googles;  //updates the number of cursors for the user
        document.getElementById('income').innerHTML = income;  //updates the number of income for the user
		document.getElementById('totalincome').innerHTML = totalincome;
		
    };
    var nextCost = Math.floor(60 * Math.pow(1.12,googles)* Math.pow(0.97,salary));       //works out the cost of the next cursor
    document.getElementById('googleCost').innerHTML = nextCost;  //updates the cursor cost for the user
};


var facebooks = 0;

function buyFacebook(){
    var facebookCost = Math.floor(15 * Math.pow(1.1,facebooks));     //works out the cost of this cursor
    if(income >= facebookCost){                                   //checks that the player can afford the cursor
        facebooks = facebooks + 1;                                   //increases number of cursors
    	income = income - facebookCost;                          //removes the income spent
		totalincome =  facebooks + googles*5;
        document.getElementById('facebooks').innerHTML = facebooks;  //updates the number of cursors for the user
        document.getElementById('income').innerHTML = income;  //updates the number of income for the user
		document.getElementById('totalincome').innerHTML = totalincome;
		
    };
    var nextCost = Math.floor(15 * Math.pow(1.1,facebooks));       //works out the cost of the next cursor
    document.getElementById('facebookCost').innerHTML = nextCost;  //updates the cursor cost for the user
};


var salary = 0;

function paySalary(){
    var salaryCost = Math.floor(9800 * Math.pow(1.025,salary));     //works out the cost of this cursor
    if(income >= salaryCost){                                   //checks that the player can afford the cursor
        salary = salary + 1;                                   //increases number of cursors
    	income = income - salaryCost;                          //removes the income spent
		
        document.getElementById('salary').innerHTML = salary;  //updates the number of cursors for the user
        document.getElementById('income').innerHTML = income;  //updates the number of income for the user
		document.getElementById('googleCost').innerHTML = googleCost;
		
    };
    var nextCost = Math.floor(9800 * Math.pow(1.025,salary));       //works out the cost of the next cursor
    document.getElementById('salaryCost').innerHTML = nextCost;  //updates the cursor cost for the user
	
	
};



window.setInterval(function(){
	
	moneyClick(googles*5);
	moneyClick(facebooks*1);

}, 1000);

function save(){
	
var save = {
    income: income,
    googles: googles,
	facebooks: facebooks,
	totalincome: totalincome,
    salary: salary
}

localStorage.setItem("save",JSON.stringify(save));
}

