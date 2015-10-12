app.controller('QuestLibrary', function( $scope , list ) {
	/* question database and score*/
	$scope.list = list.get();
	$scope.score = 0;
	
	/* select answer */
	$scope.selected = -1;
    $scope.select = function( index ) {
		$scope.selected = index; 
    };
	
	/* generate random question */
	$scope.QuestArr = new Array();
	$scope.max = list.getMax();
	$scope.index = 0;
	
	/* select random 10 questions in the bank */
	var avail = new Array();
	var choice = new Array();
	
	for( var i = 0; i < $scope.list.length; i ++ ) {
		avail.push( true );
		choice.push( 0 );
	}
	$scope.random = function() {
		return Math.floor( Math.random() * $scope.list.length ); 
	}
	for( var i = 0; i < $scope.max; i ++ ) {
		var next = $scope.random();
		while ( !avail[next] ) next = $scope.random();
		$scope.QuestArr.push( next );
		avail[next] = false;
	}
	
	/* Test */
	$scope.currentQuestion = $scope.list[ $scope.QuestArr[0] ];
	$scope.submitQuestion = function() {
		/* increase point after a good answer */
		if ( $scope.selected == $scope.currentQuestion.right ) $scope.score += 10;
		choice[ $scope.QuestArr[$scope.index] ] = $scope.selected;
		
		/* next question */
		if ( $scope.index <= $scope.max - 1 ) $scope.index ++; 
		$scope.currentQuestion = $scope.list[ $scope.QuestArr[$scope.index] ];
		
		$scope.selected = -1; /* reset answer */
		if ( $scope.index == $scope.max ) return $scope.submitTest(); /* if user submit the last question, return all answer and score */
	}
	
	/* publish score and question */
	$scope.publish = false; /* flag for display publish page */
	$scope.submitTest = function() {
		$scope.publish = true;
	}
	$scope.getSel = function( index ) {
		return choice[index];
	}
	$scope.getRight = function( index ) {
		return $scope.list[index].right;
	}
	$scope.good = function( index ) {
		return ( $scope.getSel( index ) == index && $scope.getRight( index ) == index );
	}
});