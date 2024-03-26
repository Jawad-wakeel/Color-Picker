let optionOnembl = document.querySelector(".s1-mbl");
let optionTwombl = document.querySelector(".s2-mbl");
let optionThreembl = document.querySelector(".s3-mbl");

optionOnembl.onclick = function() {
	optionOnembl.classList.add('select-plan');
	optionTwombl.classList.remove('select-plan');
	optionThreembl.classList.remove('select-plan');
	document.getElementById('my-arrierplan-mbl').style.display = 'block';
	document.getElementById('mylogo-plan-mbl').style.display = 'none';
	document.getElementById('mylitre-plan-mbl').style.display = 'none';


}
optionTwombl.onclick = function() {
	optionOnembl.classList.remove('select-plan');
	optionTwombl.classList.add('select-plan');
	optionThreembl.classList.remove('select-plan');
	document.getElementById('my-arrierplan-mbl').style.display = 'none';
	document.getElementById('mylogo-plan-mbl').style.display = 'block';
	document.getElementById('mylitre-plan-mbl').style.display = 'none';

}
optionThreembl.onclick = function() {
	optionOnembl.classList.remove('select-plan');
	optionTwombl.classList.remove('select-plan');
	optionThreembl.classList.add('select-plan');
	document.getElementById('my-arrierplan-mbl').style.display = 'none';
	document.getElementById('mylogo-plan-mbl').style.display = 'none';
	document.getElementById('mylitre-plan-mbl').style.display = 'block';
}


// Litre section

// Left side

let mblstars = document.querySelectorAll('.mbl-star-box i');
let litremblleft = document.querySelectorAll("#mylitre-plan-mbl .moblLeft");
let litreboxleft = document.querySelector("#litreboxleft");

for (let i = 0; i < litremblleft.length; i++) {
	litremblleft[i].addEventListener("click", function() {
		borderColor_mbl = litremblleft[i]
		checker = litremblleft[i]
		litremblleft[i].style.border = "1px solid white";
		litremblleft[i].style.outline = "2px solid #FFC500";
		// get_color_name = colorName[i].getAttribute("color-name");

		//selected-color
		litreboxleft.style.backgroundColor = litremblleft[i].style.backgroundColor;
		clickedColor = litremblleft[i].style.backgroundColor;
		let storeColor = litremblleft[i].style.backgroundColor;
		for (var x = 0; x < mblstars.length; x++) {
			mblstars[x].style.color = storeColor;
		}

		//name of color
		// nameOfColor.innerText = get_color_name;
		clickedColorName = get_color_name;


	});
}
//for hover
for (let i = 0; i < litremblleft.length; i++) {
	litremblleft[i].addEventListener("mouseenter", function() {
		litremblleft[i].style.border = "1px solid white";
		litremblleft[i].style.outline = "2px solid #FFC500";
		get_color_name = colorName[i].getAttribute("color-name");
		//selected-color
		selectedColor.style.backgroundColor = litremblleft[i].style.backgroundColor;
		//name of color
		nameOfColor.innerText = get_color_name = litremblleft[i].getAttribute("color-name");;
		//color hover on off
		borderColor_mbl.style.border = "none";
		borderColor_mbl.style.outline = "none";

	});
}
//for mouse out
for (let i = 0; i < litremblleft.length; i++) {
	litremblleft[i].addEventListener("mouseout", function() {
		litremblleft[i].style.border = "none";
		litremblleft[i].style.outline = "none";
		get_color_name = litremblleft[i].getAttribute("color-name");
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
			borderColor_mbl.style.border = "1px solid white";
			borderColor_mbl.style.outline = "2px solid #FFC500";
		}
	});
}

// Right side litre

// logo Right 

let star_stroke = document.querySelectorAll('.mbl-star-box i');
let litremblright = document.querySelectorAll("#mylitre-plan-mbl .moblRight");
let litreboxright = document.querySelector("#litreboxright");


for (let i = 0; i < litremblright.length; i++) {
	litremblright[i].addEventListener("click", function() {
		borderColor_mbl = litremblright[i]
		checker = litremblright[i]
		litremblright[i].style.border = "1px solid white";
		litremblright[i].style.outline = "2px solid #FFC500";
		// get_color_name = colorName[i].getAttribute("color-name");
		//selected-color
		arialboxright.style.backgroundColor = litremblright[i].style.backgroundColor;
		clickedColor = litremblright[i].style.backgroundColor;
		let storeColor = litremblright[i].style.backgroundColor;
		for (var x = 0; x < star_stroke.length; x++) {
			star_stroke[x].style['-webkit-text-stroke'] = '0.4px ' + storeColor;
		}

		clickedColorName = get_color_name;


	});
}
//for hover
for (let i = 0; i < litremblright.length; i++) {
	litremblright[i].addEventListener("mouseenter", function() {
		litremblright[i].style.border = "1px solid white";
		litremblright[i].style.outline = "2px solid #FFC500";
		get_color_name = colorName[i].getAttribute("color-name");
		//selected-color
		selectedColor.style.backgroundColor = litremblright[i].style.backgroundColor;
		//name of color
		nameOfColor.innerText = get_color_name = litremblright[i].getAttribute("color-name");;
		//color hover on off
		borderColor_mbl.style.border = "none";
		borderColor_mbl.style.outline = "none";

	});
}
//for mouse out
for (let i = 0; i < litremblright.length; i++) {
	litremblright[i].addEventListener("mouseout", function() {
		litremblright[i].style.border = "none";
		litremblright[i].style.outline = "none";
		get_color_name = litremblright[i].getAttribute("color-name");
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
			borderColor_mbl.style.border = "1px solid white";
			borderColor_mbl.style.outline = "2px solid #FFC500";
		}
	});
}


// //



// Arial Left 

let borderColor_mbl;
let change_bg = document.querySelector('.mbl-left-area-textbox');
let arrierplanmblleft = document.querySelectorAll("#my-arrierplan-mbl .moblLeft");
let arialboxleft = document.querySelector("#arialboxleft");

for (let i = 0; i < arrierplanmblleft.length; i++) {
	arrierplanmblleft[i].addEventListener("click", function() {
		borderColor_mbl = arrierplanmblleft[i]
		checker = arrierplanmblleft[i]
		arrierplanmblleft[i].style.border = "1px solid white";
		arrierplanmblleft[i].style.outline = "2px solid #FFC500";
		// get_color_name = colorName[i].getAttribute("color-name");

		//selected-color
		arialboxleft.style.backgroundColor = arrierplanmblleft[i].style.backgroundColor;
		clickedColor = arrierplanmblleft[i].style.backgroundColor;
		let storeColor = arrierplanmblleft[i].style.backgroundColor;
		change_bg.style.backgroundColor = storeColor;

		//name of color
		// nameOfColor.innerText = get_color_name;
		clickedColorName = get_color_name;


	});
}
//for hover
for (let i = 0; i < arrierplanmblleft.length; i++) {
	arrierplanmblleft[i].addEventListener("mouseenter", function() {
		arrierplanmblleft[i].style.border = "1px solid white";
		arrierplanmblleft[i].style.outline = "2px solid #FFC500";
		get_color_name = colorName[i].getAttribute("color-name");
		//selected-color
		selectedColor.style.backgroundColor = arrierplanmblleft[i].style.backgroundColor;
		//name of color
		nameOfColor.innerText = get_color_name = arrierplanmblleft[i].getAttribute("color-name");;
		//color hover on off
		borderColor_mbl.style.border = "none";
		borderColor_mbl.style.outline = "none";

	});
}
//for mouse out
for (let i = 0; i < arrierplanmblleft.length; i++) {
	arrierplanmblleft[i].addEventListener("mouseout", function() {
		arrierplanmblleft[i].style.border = "none";
		arrierplanmblleft[i].style.outline = "none";
		get_color_name = arrierplanmblleft[i].getAttribute("color-name");
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
			borderColor_mbl.style.border = "1px solid white";
			borderColor_mbl.style.outline = "2px solid #FFC500";
		}
	});
}

//  Arial Right 


let change_bg_border = document.querySelector('.mbl-left-area-textbox');
let arrierplanmblright = document.querySelectorAll("#my-arrierplan-mbl .moblRight");
let arialboxright = document.querySelector("#arialboxright");


for (let i = 0; i < arrierplanmblright.length; i++) {
	arrierplanmblright[i].addEventListener("click", function() {
		borderColor_mbl = arrierplanmblright[i]
		checker = arrierplanmblright[i]
		arrierplanmblright[i].style.border = "1px solid white";
		arrierplanmblright[i].style.outline = "2px solid #FFC500";
		// get_color_name = colorName[i].getAttribute("color-name");

		//selected-color
		arialboxright.style.backgroundColor = arrierplanmblright[i].style.backgroundColor;
		clickedColor = arrierplanmblright[i].style.backgroundColor;
		let storeColor = arrierplanmblright[i].style.backgroundColor;
		change_bg_border.style.border = "1px solid " + storeColor;

		//name of color
		// nameOfColor.innerText = get_color_name;
		clickedColorName = get_color_name;


	});
}
//for hover
for (let i = 0; i < arrierplanmblright.length; i++) {
	arrierplanmblright[i].addEventListener("mouseenter", function() {
		arrierplanmblright[i].style.border = "1px solid white";
		arrierplanmblright[i].style.outline = "2px solid #FFC500";
		get_color_name = colorName[i].getAttribute("color-name");
		//selected-color
		selectedColor.style.backgroundColor = arrierplanmblright[i].style.backgroundColor;
		//name of color
		nameOfColor.innerText = get_color_name = arrierplanmblright[i].getAttribute("color-name");;
		//color hover on off
		borderColor_mbl.style.border = "none";
		borderColor_mbl.style.outline = "none";

	});
}
//for mouse out
for (let i = 0; i < arrierplanmblright.length; i++) {
	arrierplanmblright[i].addEventListener("mouseout", function() {
		arrierplanmblright[i].style.border = "none";
		arrierplanmblright[i].style.outline = "none";
		get_color_name = arrierplanmblright[i].getAttribute("color-name");
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
			borderColor_mbl.style.border = "1px solid white";
			borderColor_mbl.style.outline = "2px solid #FFC500";
		}
	});
}


// Logo section start

let mbl_logo_F = document.querySelector('.mbl-logo-F');
let logomblleft = document.querySelectorAll("#mylogo-plan-mbl .moblLeft");
let logoboxleft = document.querySelector("#logoboxleft");

for (let i = 0; i < logomblleft.length; i++) {
	logomblleft[i].addEventListener("click", function() {
		borderColor_mbl = logomblleft[i]
		checker = logomblleft[i]
		logomblleft[i].style.border = "1px solid white";
		logomblleft[i].style.outline = "2px solid #FFC500";
		// get_color_name = colorName[i].getAttribute("color-name");

		//selected-color
		arialboxleft.style.backgroundColor = logomblleft[i].style.backgroundColor;
		clickedColor = logomblleft[i].style.backgroundColor;
		let storeColor = logomblleft[i].style.backgroundColor;
		mbl_logo_F.style.color = storeColor;

		//name of color
		// nameOfColor.innerText = get_color_name;
		clickedColorName = get_color_name;


	});
}
//for hover
for (let i = 0; i < logomblleft.length; i++) {
	logomblleft[i].addEventListener("mouseenter", function() {
		logomblleft[i].style.border = "1px solid white";
		logomblleft[i].style.outline = "2px solid #FFC500";
		get_color_name = colorName[i].getAttribute("color-name");
		//selected-color
		selectedColor.style.backgroundColor = logomblleft[i].style.backgroundColor;
		//name of color
		nameOfColor.innerText = get_color_name = logomblleft[i].getAttribute("color-name");;
		//color hover on off
		borderColor_mbl.style.border = "none";
		borderColor_mbl.style.outline = "none";

	});
}
//for mouse out
for (let i = 0; i < logomblleft.length; i++) {
	logomblleft[i].addEventListener("mouseout", function() {
		logomblleft[i].style.border = "none";
		logomblleft[i].style.outline = "none";
		get_color_name = logomblleft[i].getAttribute("color-name");
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
			borderColor_mbl.style.border = "1px solid white";
			borderColor_mbl.style.outline = "2px solid #FFC500";
		}
	});
}

// logo Right 

let change_stroke = document.querySelector('.mbl-logo-F');
let logomblright = document.querySelectorAll("#mylogo-plan-mbl .moblRight");
let logoboxright = document.querySelector("#logoboxright");


for (let i = 0; i < logomblright.length; i++) {
	logomblright[i].addEventListener("click", function() {
		borderColor_mbl = logomblright[i]
		checker = logomblright[i]
		logomblright[i].style.border = "1px solid white";
		logomblright[i].style.outline = "2px solid #FFC500";
		// get_color_name = colorName[i].getAttribute("color-name");
		//selected-color
		arialboxright.style.backgroundColor = logomblright[i].style.backgroundColor;
		clickedColor = logomblright[i].style.backgroundColor;
		let storeColor = logomblright[i].style.backgroundColor;
		change_stroke.style['-webkit-text-stroke'] = '1px ' + storeColor;

		clickedColorName = get_color_name;


	});
}
//for hover
for (let i = 0; i < logomblright.length; i++) {
	logomblright[i].addEventListener("mouseenter", function() {
		logomblright[i].style.border = "1px solid white";
		logomblright[i].style.outline = "2px solid #FFC500";
		get_color_name = colorName[i].getAttribute("color-name");
		//selected-color
		selectedColor.style.backgroundColor = logomblright[i].style.backgroundColor;
		//name of color
		nameOfColor.innerText = get_color_name = logomblright[i].getAttribute("color-name");;
		//color hover on off
		borderColor_mbl.style.border = "none";
		borderColor_mbl.style.outline = "none";

	});
}
//for mouse out
for (let i = 0; i < arrierplanmblrilogomblrightght.length; i++) {
	logomblright[i].addEventListener("mouseout", function() {
		logomblright[i].style.border = "none";
		logomblright[i].style.outline = "none";
		get_color_name = logomblright[i].getAttribute("color-name");
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
			borderColor_mbl.style.border = "1px solid white";
			borderColor_mbl.style.outline = "2px solid #FFC500";
		}
	});
}