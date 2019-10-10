$(document).ready(function() { 
	var totalAnswered = 0;
	var count = new Array();
	var radioName = '';
	$("input[name *= 'ques']").click(function() { 
		var radioName = $(this).attr('name');
		var found = jQuery.inArray(radioName,count);
		if(found >=0){ 
			// console.log('value exist');
			// console.log(radioName);
			// console.log(count);
		}
			else {	
				count.push(radioName); 
				// console.log('pushed in array');
				// console.log(count);
				totalAnswered++;
				// console.log(totalAnswered);
				progress(totalAnswered);
			} }); });

function resultcheck() { 
	var ques1 = document.quiz.ques1.value; 
	var ques2 = document.quiz.ques2.value; 
	var ques3 = document.quiz.ques3.value; 
	var ques4 = document.quiz.ques4.value; 
	var correct = 0; 
	if (ques1 == "Agra") { correct++; } 
	if (ques2 == "4") { correct++; } 
	if (ques3 == "Saturday") { correct++; } 
	if (ques4 == "26") { correct++; } 
	var pictures = ["img/poor.png", "img/good.png","img/excellent.png"];
	var messages = ["Poor, You really need to do better","Good, Thats Okay","Excellent ,Great Job" ]; 
	var score; 
	if (correct == 0 || correct == 1) { score = 0; } 
	if (correct > 1 && correct < 4) { score = 1; } 
	if (correct == 4) { score = 2; }	
	document.getElementById("after_submit").style.visibility = "visible"; 
	document.getElementById("message").innerHTML = messages[score]; 
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct."; 
	document.getElementById("picture").src = pictures[score];	
	if (ques1 != "Agra") { 
		document.getElementById("" + ques1).style.backgroundColor = "red"; 
		document.getElementById("a1").style.backgroundColor = "Yellow"; } 
		else document.getElementById("a1").style.backgroundColor = "Yellow"; 
	if (ques2 != "4") { 
		document.getElementById("" + ques2).style.backgroundColor = "red"; 
		document.getElementById("a2").style.backgroundColor = "Yellow"; } 
		else document.getElementById("a2").style.backgroundColor = "Yellow"; 
	if (ques3 != "Saturday") { 
		document.getElementById("" + ques3).style.backgroundColor = "red"; 
		document.getElementById("a3").style.backgroundColor = "Yellow"; } 
		else document.getElementById("a3").style.backgroundColor = "Yellow"; 
	if (ques4 != "26") { 
		document.getElementById("" + ques4).style.backgroundColor = "red"; 
		document.getElementById("a4").style.backgroundColor = "Yellow"; } 
		else document.getElementById("a4").style.backgroundColor = "Yellow"; 	
}

function progress (score)
{
	var newwidth = (100/4)*score;
	$('#percentage').css({'width':newwidth,'background':'green'});
	
}