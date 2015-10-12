app.factory( 'list', function () {
	var data = [ 
		{ 
			data: "If 6.74 * 10n = 6,740,000, what is the value of n?", 
			answer: ["100000", "60000", "50000", "40000"],
			right: 0, 
		}, 
		{ 
			data: "The perimeter of an triangle is 30 cm. Which of the following can't be the length of the base?", 
			answer: ["1 cm","5 cm","10 cm","15 cm"],
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