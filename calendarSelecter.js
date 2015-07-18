var max = {};
var count = {};

function setMax(programId, maxNumber) {
	max[programId] = maxNumber;
	//updateCounter(programId);
}
		
function changeColor(elementId, programId) {
	if(count[programId] == undefined) {
		count[programId] = 0;
	}
	var element = document.getElementById(elementId);
	if(!element.className.match(/(?:^|\s)available(?!\S)/) ) {
	
	}
	else if ( element.className.match(/(?:^|\s)selected(?!\S)/) ) {
		document.getElementById(elementId).className =
			document.getElementById(elementId).className.replace
				( /(?:^|\s)selected(?!\S)/g , '' );
		count[programId]--;
		//updateCounter(programId);
		getDaysSelected(programId);
	}
	
	else if(count[programId] < max[programId]) { 
		element.className += " selected";
		count[programId]++;
		//updateCounter(programId);
		getDaysSelected(programId);
		
	}
}

//function updateCounter(programId) {
//	document.getElementById("count" + programId).innerHTML = count[programId];
//	document.getElementById("max" + programId).innerHTML = max[programId];
//}

function getDaysSelected(programId) {
	
	var divs = document.getElementsByClassName("program" + programId);
	var divsString = "";
	
	var arrayLength = divs.length;
	for (var i = 0; i < arrayLength; i++) {
		var element = divs[i];
	
		if(element.className.match(/(?:^|\s)selected(?!\S)/) ) {
			divsString += element.id + ",";
		}
	}
	document.getElementById("dates-selected" + programId).value = divsString;
}