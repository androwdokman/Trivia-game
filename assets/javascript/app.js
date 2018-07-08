var TriviaQuestions = [{
    question: "Which bird has the fastest air speed?",
    answerholder: ["Frigate Bird","Peregrine Falcon","Golden Eagle"],
    answer: 1
},{
    question: "Which of the following type animals eat a combination of both plants and meats",
    answerholder: ["Carnivores","Omnivores","Herbivores"],
    answer: 1
},{
    question: "A mob,troop or court refers to a group of?",
    answerholder: ["Kittens","Koalas","Kangaroos"],
    answer: 2
},{
    question: "What is the deepest a dolphin can dive?",
    answerholder: ["Over 10 meters","Over 100 meters","Over 300 meters"],
    answer: 2
},{
    question: "What is the primary source of food for a Giant panda?",
    answerholder: ["Bamboo","Grass","Meat"],
    answer: 0
},{
    question: "what is the fastest land animal on earth?",
    answerholder: ["Leopard","Cheetah","Lion"],
    answer: 1
},{
    question: "What is the national animal of Ethiopia?",
    answerholder: ["Bald Eagle","Lion","Giraffe"],
    answer: 1
},{
    question: "What is the smallest [non extinct] bird species?",
    answerholder: ["Cukoos","Hummingbird","Pigeons"],
    answer: 1
},{
    question: "What is most representative of a dog's vision?",
    answerholder: ["Red-Green Color Blind","Black and White vision","Full color Vision"],
    answer: 0
},{
    question: "What type of animal is the film character Mr.Biggleworth?",
    answerholder: ["Turtle","Cat","Dog"],
    answer: 1
},{
    question: "What is the name for a group of coyotes?",
    answerholder: ["Scourge","Band","Host"],
    answer: 1
},{
    question: "Which of the following animals is Not extinct?",
    answerholder: ["Tasmanian Tiger","Tasmanian Emu","Tasmanian Devil"],
    answer: 2
},{
    question: "Roughly what perecentage of DNA do Orangutans share with humans?",
    answerholder: ["90%","97%","99%"],
    answer: 1
},{
    question: "What is the name for an female hores over four years of age?",
    answerholder: ["Yearling","Filly","Mare"],
    answer: 2
},{
    question: "A mulefoot is a breed of which animal?",
    answerholder: ["Cat","Horse","Pig"],
    answer: 2
}];

var questArray = ['question1','question2','question3','question4','question5','question6','question7','question8','question9','question10','question11','question12','question13','question14','question15'];
var questionholder; var correctholder; var incorrectholder; var unanswered; var seconds; var time; var answered; var yourselect;
var messages = {
    correctholder:"Thats Correct",
    incorrectholder:"Thats incorrect",
    endTime:"time out",
    finished:"your result",
};

$('#startbtn').on('click', function(){
    $(this).hide();
    newGame();
});

$('#startoverbtn').on('click', function(){
    $(this).hide();
    newGame();
});

function newGame(){
    $('#finalholder').empty();
    $('#correctholder').empty();
    $('#incorrectholder').empty();
    $('#unaswered').empty();
    Questionholder = 0;
    correctholder = 0;
    incorrectholder = 0;
    unanswered = 0;
    newQuestion();
}

function newQuestion(){
    $('#message').empty();
    $('#correctedholder').empty();
    $('#quest').empty();
    answered = true;
}

$('#Questionholder').html('Question #'+(Questionholder+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[questionholder].question + '</h2>');
	for(var i = 0; i < 3; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[questionholder].answerholder[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerholder').append(choices);
	}
	countdown();
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});

function countdown(){
	seconds = 15;
	$('#timeholder').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeholder').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#Questionholder').empty();
	$('.thisChoice').empty();
	$('.question').empty();

	var rightAnswerText = triviaQuestions[Questionholder].answerholder[triviaQuestions[Questionholder].answer];
	var rightAnswerIndex = triviaQuestions[Questionholder].answer;
	$('#quest').html('<img src = "assets/images/'+ questArray[Questionholder] +'.quest" width = "400px">');
	
	if((yourselect == rightAnswerIndex) && (answered == true)){
		correctholder++;
		$('#messageholder').html(messages.correct);
	} else if((yourselect != rightAnswerIndex) && (answered == true)){
		incorrectholder++;
		$('#messageholder').html(messages.incorrect);
		$('#correctedholder').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#messageholder').html(messages.endTime);
		$('#correctedholder').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentholder == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentholder++;
		setTimeout(newQuestion, 5000);
	}	
}

function scoreboard(){
	$('#timeholder').empty();
	$('#messageholder').empty();
	$('#correctedholder').empty();
	$('#quest').empty();

	$('#finalholder').html(messages.finished);
	$('#correctholder').html("Correct holder: " + correctholder);
	$('#incorrectAnswers').html("Incorrect holder: " + incorrectholder);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
    $('#startOverBtn').html('Start Over?');
}



