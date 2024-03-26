//for options
let optionOne = document.querySelector(".ss1");
let optionTwo = document.querySelector(".ss2");
let optionThree = document.querySelector(".ss3");
let rightSideColors = document.querySelector(".right-side");
let rightColors = document.querySelector(" .rightMultiColor");
let litremultipleright = document.querySelector('#mylitre-plan .rightMultiColor')




optionOne.onclick = function() {
	optionOne.style.borderBottom = "2px solid #FFC500";
	optionTwo.style.borderBottom = "none";
	optionThree.style.borderBottom = "none";
	document.getElementById('my-arrierplan').style.display = 'block';
	document.getElementById('mylogo-plan').style.display = 'none';
	document.getElementById('mylitre-plan').style.display = 'none';


}
optionTwo.onclick = function() {
	optionOne.style.borderBottom = "none";
	optionTwo.style.borderBottom = "2px solid #FFC500";
	optionThree.style.borderBottom = "none";
	rightColors.style.opacity = "0.3";
	rightColors.style.pointerEvent = "none";
	document.getElementById('my-arrierplan').style.display = 'none';
	document.getElementById('mylogo-plan').style.display = 'block';
	document.getElementById('mylitre-plan').style.display = 'none';

}
optionThree.onclick = function() {

	optionOne.style.borderBottom = "none";
	optionTwo.style.borderBottom = "none";
	optionThree.style.borderBottom = "2px solid #FFC500";
	litremultipleright.style.opacity = "0.3";
	litremultipleright.style.pointerEvent = "none";
	document.getElementById('my-arrierplan').style.display = 'none';
	document.getElementById('mylogo-plan').style.display = 'none';
	document.getElementById('mylitre-plan').style.display = 'block';
}





//for colors
let colorName = document.querySelectorAll("#my-arrierplan .colorNames");
let logoColorName = document.querySelectorAll("#mylogo-plan .colorNames");
let litreColorName = document.querySelectorAll("#mylitre-plan .colorNames");
let selectedColor = document.querySelector("#my-arrierplan .selected-color");
let selectedLogoColor = document.querySelector("#mylogo-plan  .selected-color");
let selectedLetterColor = document.querySelector("#mylitre-plan  .selected-color");
let nameOfColor = document.querySelector("#my-arrierplan #nameOfColor");
let nameOfLogoColor = document.querySelector("#mylogo-plan #nameOfColor");
let nameOfLetterColor = document.querySelector("#mylitre-plan #nameOfColor");
let changebg = document.querySelector('.left-area-textbox');
let logoclr = document.querySelector('.logo-F');
logoclr.style['-webkit-text-stroke'] = 'none';
let stars = document.querySelectorAll('.star-box i');
let clickedColor;
let clickedColorName;
let borderColor;
let checker;
let get_color_name;
//repeater
let repeator;
var k = 0;


//For airer plan
for (let i = 0; i < colorName.length; i++) {
	colorName[i].addEventListener("click", function() {
		borderColor = colorName[i]
		checker = colorName[i]
		colorName[i].style.border = "1px solid white";
		colorName[i].style.outline = "2px solid #FFC500";
		get_color_name = colorName[i].getAttribute("color-name");

		//selected-color
		selectedColor.style.backgroundColor = colorName[i].style.backgroundColor;
		clickedColor = colorName[i].style.backgroundColor;
		let storeColor = colorName[i].style.backgroundColor;
		changebg.style.backgroundColor = storeColor;

		//name of color
		nameOfColor.innerText = get_color_name;
		clickedColorName = get_color_name;


	});
}

//for hover
for (let i = 0; i < colorName.length; i++) {
	colorName[i].addEventListener("mouseenter", function() {
		colorName[i].style.border = "1px solid white";
		colorName[i].style.outline = "2px solid #FFC500";
		get_color_name = colorName[i].getAttribute("color-name");
		//selected-color
		selectedColor.style.backgroundColor = colorName[i].style.backgroundColor;
		//name of color
		nameOfColor.innerText = get_color_name = colorName[i].getAttribute("color-name");;
		//color hover on off
		borderColor.style.border = "none";
		borderColor.style.outline = "none";

	});
}
//for mouse out
for (let i = 0; i < colorName.length; i++) {
	colorName[i].addEventListener("mouseout", function() {
		colorName[i].style.border = "none";
		colorName[i].style.outline = "none";
		get_color_name = colorName[i].getAttribute("color-name");
		//when color is not select and do hover on it and show color Blue
		if (clickedColor === undefined) {
			selectedColor.style.backgroundColor = "#00509d";
			nameOfColor.innerText = " Blue";
		} else {
			//selected-color
			selectedColor.style.backgroundColor = clickedColor;
			//name of color
			nameOfColor.innerText = get_color_name;
			//border color
			borderColor.style.border = "1px solid white";
			borderColor.style.outline = "2px solid #FFC500";
		}
	});
}








let rightlogoColorName = document.querySelectorAll("#mylogo-plan .rightColors");
let selectbox2 = document.querySelector(".selectlogoboxxx2");
let rightTextlogo = document.querySelector('.nametextrightloogo');

//for logos

for (let i = 0; i < rightlogoColorName.length; i++) {
	rightlogoColorName[i].addEventListener("click", function() {
		var get_logo_color_name = rightlogoColorName[i].getAttribute("color-name");
		rightColors.classList.add('forOpacity');
		forlogo_checked.classList.add('square-checked');
		borderColor = rightlogoColorName[i];
		checker = rightlogoColorName[i];
		rightlogoColorName[i].style.border = "1px solid white";
		rightlogoColorName[i].style.outline = "2px solid #FFC500";
		//selected-color
		// rightTextlogo.style.backgroundColor = rightlogoColorName[i].style.backgroundColor;
		clickedColor = rightlogoColorName[i].style.backgroundColor;
		let storeColor = rightlogoColorName[i].style.backgroundColor;

		logoclr.style['-webkit-text-stroke'] = '1px ' + storeColor;


		//name of color
		rightTextlogo.innerText = get_logo_color_name;
		clickedColorName = get_logo_color_name;


	});
}
//for hover
// let nameOflogo= document.querySelector(".selected-color");
// let textOflogo  = document.querySelector("#nameOfColor");
for (let i = 0; i < rightlogoColorName.length; i++) {
	rightlogoColorName[i].addEventListener("mouseenter", function() {
		rightlogoColorName[i].style.border = "1px solid white";
		rightlogoColorName[i].style.outline = "2px solid #FFC500";
		var get_logo_color_name = rightlogoColorName[i].getAttribute("color-name");
		//selected-color
		selectbox2.style.backgroundColor = rightlogoColorName[i].style.backgroundColor;
		//name of color
		rightTextlogo.innerText = get_logo_color_name;
		//color hover on off
		borderColor.style.border = "none";
		borderColor.style.outline = "none";

	});
}
//for mouse out
for (let i = 0; i < rightlogoColorName.length; i++) {
	rightlogoColorName[i].addEventListener("mouseout", function() {
		rightlogoColorName[i].style.border = "none";
		rightlogoColorName[i].style.outline = "none";
		//when color is not select and do hover on it and show color Blue
		var get_logo_color_name = rightlogoColorName[i].getAttribute("color-name");
		if (clickedColor === undefined) {
			selectbox2.style.backgroundColor = "#00509d";
			rightTextlogo.innerText = " Blue";
		} else {
			//selected-color
			selectbox2.style.backgroundColor = clickedColor;
			//name of color
			rightTextlogo.innerText = get_logo_color_name;
			//border color
			borderColor.style.border = "1px solid white";
			borderColor.style.outline = "2px solid #FFC500";
		}
	});
}










// Left logo 

for (let i = 0; i < logoColorName.length; i++) {
	logoColorName[i].addEventListener("click", function() {

		var get_logo_leftcolor_name = logoColorName[i].getAttribute("color-name");

		borderColor = logoColorName[i]
		checker = logoColorName[i]
		logoColorName[i].style.border = "1px solid white";
		logoColorName[i].style.outline = "2px solid #FFC500";
		//selected-color
		selectedLogoColor.style.backgroundColor = logoColorName[i].style.backgroundColor;
		clickedColor = logoColorName[i].style.backgroundColor;
		let storeColor = logoColorName[i].style.backgroundColor;

		logoclr.style.color = storeColor;



		//name of color
		nameOfLogoColor.innerText = get_logo_leftcolor_name;
		clickedColorName = get_logo_leftcolor_name;


	});
}
//for hover

for (let i = 0; i < logoColorName.length; i++) {
	logoColorName[i].addEventListener("mouseenter", function() {
		logoColorName[i].style.border = "1px solid white";
		logoColorName[i].style.outline = "2px solid #FFC500";
		var get_logo_leftcolor_name = logoColorName[i].getAttribute("color-name");
		//selected-color
		selectedLogoColor.style.backgroundColor = logoColorName[i].style.backgroundColor;
		//name of color
		nameOfLogoColor.innerText = get_logo_leftcolor_name;
		//color hover on off
		borderColor.style.border = "none";
		borderColor.style.outline = "none";

	});
}
//for mouse out
for (let i = 0; i < logoColorName.length; i++) {
	logoColorName[i].addEventListener("mouseout", function() {
		logoColorName[i].style.border = "none";
		logoColorName[i].style.outline = "none";
		//when color is not select and do hover on it and show color Blue
		var get_logo_leftcolor_name = logoColorName[i].getAttribute("color-name");
		if (clickedColor === undefined) {
			selectedLogoColor.style.backgroundColor = "#00509d";
			nameOfLogoColor.innerText = " Blue";
		} else {
			//selected-color
			selectedLogoColor.style.backgroundColor = clickedColor;
			//name of color
			nameOfLogoColor.innerText = get_logo_leftcolor_name;
			//border color
			borderColor.style.border = "1px solid white";
			borderColor.style.outline = "2px solid #FFC500";
		}
	});
}










//for litre
let selectbox3 = document.querySelector(".selectedbox3");
let nameOfColorlitre = document.querySelector(".nameOfColorlitre");

for (let i = 0; i < litreColorName.length; i++) {
	litreColorName[i].addEventListener("click", function() {
		var get_litre_leftcolor_name = litreColorName[i].getAttribute("color-name");
		borderColor = litreColorName[i]
		checker = litreColorName[i]
		litreColorName[i].style.border = "1px solid white";
		litreColorName[i].style.outline = "2px solid #FFC500";
		//selected-color
		selectbox3.style.backgroundColor = colorName[i].style.backgroundColor;
		clickedColor = litreColorName[i].style.backgroundColor;
		let storeColor = litreColorName[i].style.backgroundColor;

		for (var x = 0; x < stars.length; x++) {
			stars[x].style.color = storeColor;
		}

		//name of color
		nameOfColor.innerText = get_litre_leftcolor_name;
		clickedColorName = get_litre_leftcolor_name;


	});
}

//for hover
for (let i = 0; i < litreColorName.length; i++) {
	litreColorName[i].addEventListener("mouseenter", function() {
		litreColorName[i].style.border = "1px solid white";
		litreColorName[i].style.outline = "2px solid #FFC500";
		var get_litre_leftcolor_name = litreColorName[i].getAttribute("color-name");
		//selected-color
		selectbox3.style.backgroundColor = litreColorName[i].style.backgroundColor;
		//name of color
		nameOfColorlitre.innerText = get_litre_leftcolor_name;
		//color hover on off
		borderColor.style.border = "none";
		borderColor.style.outline = "none";

	});
}
//for mouse out
for (let i = 0; i < litreColorName.length; i++) {
	litreColorName[i].addEventListener("mouseout", function() {
		litreColorName[i].style.border = "none";
		litreColorName[i].style.outline = "none";
		//when color is not select and do hover on it and show color Blue
		if (clickedColor === undefined) {
			selectbox3.style.backgroundColor = "#00509d";
			nameOfColorlitre.innerText = " Blue";
		} else {
			//selected-color
			selectbox3.style.backgroundColor = clickedColor;
			//name of color
			nameOfColorlitre.innerText = clickedColorName;
			//border color
			borderColor.style.border = "1px solid white";
			borderColor.style.outline = "2px solid #FFC500";
		}
	});
}


//Right side litre
let rightTextlitre = document.querySelector('.rightTextlitre');
let litreselectboxright = document.querySelector(".litreselectboxright");
let LitreightColors = document.querySelectorAll("#mylitre-plan .rightColors");

for (let i = 0; i < LitreightColors.length; i++) {
	LitreightColors[i].addEventListener("click", function() {
		var get_litre_rightcolor_name = LitreightColors[i].getAttribute("color-name");


		borderColor = LitreightColors[i]
		checker = LitreightColors[i]
		LitreightColors[i].style.border = "1px solid white";
		LitreightColors[i].style.outline = "2px solid #FFC500";
		//selected-color
		clickedColor = LitreightColors[i].style.backgroundColor;
		let storeColor = LitreightColors[i].style.backgroundColor;

		for (var x = 0; x < stars.length; x++) {
			stars[x].style['-webkit-text-stroke'] = '0.4px ' + storeColor;
		}



		//name of color
		rightTextlitre.innerText = get_litre_rightcolor_name;
		clickedColorName = get_litre_rightcolor_name;


	});
}
//for hover

for (let i = 0; i < LitreightColors.length; i++) {
	LitreightColors[i].addEventListener("mouseenter", function() {
		LitreightColors[i].style.border = "1px solid white";
		LitreightColors[i].style.outline = "2px solid #FFC500";
		var get_litre_rightcolor_name = LitreightColors[i].getAttribute("color-name");
		//selected-color
		litreselectboxright.style.backgroundColor = LitreightColors[i].style.backgroundColor;
		//name of color
		rightTextlitre.innerText = get_litre_rightcolor_name;
		//color hover on off
		borderColor.style.border = "none";
		borderColor.style.outline = "none";

	});
}
//for mouse out
for (let i = 0; i < LitreightColors.length; i++) {
	LitreightColors[i].addEventListener("mouseout", function() {
		LitreightColors[i].style.border = "none";
		LitreightColors[i].style.outline = "none";
		var get_litre_rightcolor_name = LitreightColors[i].getAttribute("color-name");
		//when color is not select and do hover on it and show color Blue
		if (clickedColor === undefined) {
			litreselectboxright.style.backgroundColor = "#00509d";
			rightTextlitre.innerText = " Blue";
		} else {
			//selected-color
			litreselectboxright.style.backgroundColor = clickedColor;
			//name of color
			rightTextlitre.innerText = get_litre_rightcolor_name;
			//border color
			borderColor.style.border = "1px solid white";
			borderColor.style.outline = "2px solid #FFC500";
		}
	});
}



//right color menu check box right logo
let blankboxlitre = document.querySelector('.blankboxlitre');
let forlitre_checked = document.querySelector('#forlitre-checked');


blankboxlitre.onclick = function() {
	litremultipleright.classList.toggle('forOpacity');
	forlitre_checked.classList.toggle('square-checked');
}
let forlogo_checked = document.querySelector('#forlogo-checked');
let logorightmultiColors = document.querySelector("#mylogo-plan .rightMultiColor");
let blankBox = document.querySelector('.blankBox');
blankBox.onclick = function() {
	logorightmultiColors.classList.toggle('forOpacity');
	forlogo_checked.classList.toggle('square-checked');

}