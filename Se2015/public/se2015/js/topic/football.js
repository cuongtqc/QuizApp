app.factory( 'list', function () {
	var data = [ 
		{ 
			data: "Who is the most recent recipient of the Ballon d'or?", 
			answer: ["Lionel Messi", "Cristiano Ronaldo", "Andrés Iniesta", "Manuel Neuer"],
			right: 1, 
		}, 
		{ 
			data: "Who is the LORD of football world?", 
			answer: ["Ronaldo de Lima","Cristiano Ronaldo","Pele","Bendtner"],
			right: 3, 
		}
	];
	var max = 2;
    return {
        get: function() {                
			return data;
        },
		getMax: function() {
			return max;
		}
    }
});