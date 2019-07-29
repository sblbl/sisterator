/*---------------- NUN DATA ----------------*/

let $_nun = $('#nun'),
	$_body = $('#body'),
	$_shoulders = $('#shoulders'),
	$_trunk = $('#trunk'),
	$_visage = $('#visage'),
	$_face = $('#face'),
	$_right_eye = $('#right-eye'),
	$_right_eye_sclera = $('#right-eye-sclera'),
	$_right_eye_pupil = $('#right-eye-pupil'),
	$_left_eye = $('#left-eye'),
	$_left_eye_sclera = $('#left-eye-sclera'),
	$_left_eye_pupil = $('#left-eye-pupil'),
	$_veil = $('#back-veil'),
	$_variable_veil = $('#variable-front-veil'),
	$_hinge = $('#hinge'),
	$_moustache = $('#moustache'),
	$_bat_suit = $('#bat-suit'),
	$_background = $('#background')

/*---------------- INTERFACE DATA ----------------*/

let $_face_roundness = $('input#face-roundness'),
	$_nun_dress = $('input#nun-dress'),
	$_nun_width = $('input#nun-width'),
	$_pupil_proportion = $('input#pupil-proportion'),
	$_eye_width = $('input#eye-width'),
	$_moustache_lenght = $('#moustache-lenght'),
	$_color_button = $('#color-button'),
	$_nose_button = $('#nose-path')

/*---------------- USEFUL STUFF ----------------*/

let pupil_prop = .5
let nun_center_x = 1814.15;
function map(value, start1, stop1, start2, stop2) {
	return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

let verify_bat_val = function () {
	if ($_face_roundness.val()==6 && $_nun_dress.val()==6 && $_nun_width.val()==6 && $_pupil_proportion.val()==6 && $_eye_width.val()==6 && $_moustache_lenght.val()==6) {
		$_bat_suit.attr('fill-opacity', 1)
		$_background.attr('fill', '#00008B')
		$('#main').css('background-color', '#00008B')
		console.log('NANANANANANAN')
		return true
	} else {
		$_bat_suit.attr('fill-opacity', 0)
		$_background.attr('fill', '#F0F8FF')
		$('#main').css('background-color', '#F0F8FF')
		return false
	}
}

/*---------------- MAIN FUNCTION ----------------*/

jQuery(document).ready(function($) {


	/*---------------- FACE ROUNDNESS ----------------*/

	let mouseAbsPosition
	let cursorXDifference

	$_face_roundness.on('mousedown', function (e) {
		$(document).on('mousemove', change_roundness)
		$(document).on('mouseup', end_change_roundness)
	})


	$('#face-roundness-cursor').on('mousedown', (e) => {
		$(document).on('mousemove', change_roundness)
		$(document).on('mouseup', end_change_roundness)
	})

	let change_roundness = function (e) {
		let roundness = $_face_roundness.val()*30
		$_face.attr('rx', roundness)
		$_face.attr('rx', roundness)
		$_variable_veil.attr('height', $_face_roundness.val()*19)
		$('#face-roundness-val').html($_face_roundness.val())
		verify_bat_val()
	}
	let end_change_roundness = function (e) {
		$(document).off('mousemove', change_roundness)
		$(document).off('mouseup', end_change_roundness)
	}

	/*---------------- EYE WIDTH  ----------------*/
	$_eye_width.on('mousedown', function (e) {
		$(document).on('mousemove', change_eye_width)
		$(document).on('mouseup', end_change_eye_width)
	})

	let change_eye_width = function (e) {
		let width = $_eye_width.val() * 5 + 30
		$_right_eye_sclera.attr('r', width)
		$_right_eye_pupil.attr('r', width * pupil_prop)
		$_left_eye_sclera.attr('r', width)
		$_left_eye_pupil.attr('r', width * pupil_prop)
		$('#eye-width-val').html($_eye_width.val())
		verify_bat_val()
	}

	let end_change_eye_width = function (e) {
		$(document).off('mousemove', change_eye_width)
		$(document).off('mouseup', end_change_eye_width)
	}

	/*---------------- PUPIL PROPORTION  ----------------*/

	$_pupil_proportion.on('mousedown', function (e) {
		$(document).on('mousemove', change_pupil_proportion)
		$(document).on('mouseup', end_change_pupil_proportion)
	})

	let change_pupil_proportion = function (e) {
		let pupil_prop = $_pupil_proportion.val()/10
		let sclera_width = $_right_eye_sclera.attr('r')
		$_right_eye_pupil.attr('r', sclera_width * pupil_prop)
		$_left_eye_pupil.attr('r', sclera_width * pupil_prop)
		$('#pupil-proportion-val').html($_pupil_proportion.val())
		verify_bat_val()
	}

	let end_change_pupil_proportion = function (e) {
		$(document).off('mousemove', change_pupil_proportion)
		$(document).off('mouseup', end_change_pupil_proportion)
	}

	/*---------------- MOUSTACHE LENGHT  ----------------*/

	$_moustache_lenght.on('mousedown', function (e) {
		$(document).on('mousemove', change_moustache_lenght)
		$(document).on('mouseup', end_change_moustache_lenght)
	})

	let change_moustache_lenght = function (e) {
		let lenght = $_moustache_lenght.val()*3
		let y1 = 1684.1
		if (lenght == 0) {
			$_moustache.attr('stroke-opacity', 0)
		} else {
			$_moustache.attr('stroke-opacity', 1)
		}
		$('#moustache line').each(function () {
			$(this).attr('y2', y1+lenght)
		})
		$('#moustache-lenght-val').html($_moustache_lenght.val())
		verify_bat_val()
	}

	let end_change_moustache_lenght = function (e) {
		$(document).off('mousemove', change_moustache_lenght)
		$(document).off('mouseup', end_change_moustache_lenght)
	}

	/*---------------- BODY WIDTH  ----------------*/

	$_nun_width.on('mousedown', function (e) {
		$(document).on('mousemove', change_nun_width)
		$(document).on('mouseup', end_change_nun_width)
	})

	let change_nun_width = function (e) {
		let width = $_nun_width.val()*180+150
		let x = nun_center_x - (width/2)
		$_trunk.attr('width',width)
		$_shoulders.attr('r',width/2)
		$_trunk.attr('x',x)
		$_hinge.attr('y1', $_shoulders.attr('cy')-$_shoulders.attr('r'))
		let visage_x =
		$_visage.attr('transform', `translate(${0}, ${$_shoulders.attr('cy')-$_shoulders.attr('r')-($_face.attr('height')*3.6)})`)
		$_veil.attr('transform', `translate(${0}, ${$_shoulders.attr('cy')-$_shoulders.attr('r')-($_face.attr('height')*3.6)})`)
		$('#nun-width-val').html($_nun_width.val())
		verify_bat_val()

	}

	let end_change_nun_width = function (e) {
		$(document).off('mousemove', change_nun_width)
		$(document).off('mouseup', end_change_nun_width)
	}

	/*---------------- NUN DRESS  ----------------*/

	$_nun_dress.on('mousedown', function (e) {
		$(document).on('mousemove', change_nun_dress)
		$(document).on('mouseup', end_change_nun_dress)
	})

	let change_nun_dress = function (e) {
		let dress = $_nun_dress.val()
		console.log(dress)
		switch(dress) {
			case "0":
				$_veil.attr('fill', '#FFFFFF')
				$_shoulders.attr('fill', '#FFFFFF')
				$_trunk.attr('fill', '#FFFFFF')
				$_left_eye_pupil.attr('fill', '#000000')
				$_right_eye_pupil.attr('fill', '#000000')
				$_hinge.attr('stroke', '#000000')
				break;
			case "1":
				$_veil.attr('fill', '#E6E6E6')
				$_shoulders.attr('fill', '#E6E6E6')
				$_trunk.attr('fill', '#E6E6E6')
				$_left_eye_pupil.attr('fill', '#000000')
				$_right_eye_pupil.attr('fill', '#000000')
				$_hinge.attr('stroke', '#000000')
				break;
			case "2":
				$_veil.attr('fill', '#CCCCCC')
				$_shoulders.attr('fill', '#CCCCCC')
				$_trunk.attr('fill', '#CCCCCC')
				$_left_eye_pupil.attr('fill', '#000000')
				$_right_eye_pupil.attr('fill', '#000000')
				$_hinge.attr('stroke', '#000000')
				break;
			case "3":
				$_veil.attr('fill', '#B3B3B3')
				$_shoulders.attr('fill', '#B3B3B3')
				$_trunk.attr('fill', '#B3B3B3')
				$_left_eye_pupil.attr('fill', '#000000')
				$_right_eye_pupil.attr('fill', '#000000')
				$_hinge.attr('stroke', '#000000')
				break;
			case "4":
				$_veil.attr('fill', '#808080')
				$_shoulders.attr('fill', '#808080')
				$_trunk.attr('fill', '#808080')
				$_left_eye_pupil.attr('fill', '#000000')
				$_right_eye_pupil.attr('fill', '#000000')
				$_hinge.attr('stroke', '#000000')
				break;
			case "5":
				$_veil.attr('fill', '#666666')
				$_shoulders.attr('fill', '#666666')
				$_trunk.attr('fill', '#666666')
				$_left_eye_pupil.attr('fill', '#DC143C')
				$_right_eye_pupil.attr('fill', '#DC143C')
				$_hinge.attr('stroke', '#FFFFFF')
				break;
			case "6":
				$_veil.attr('fill', '#4D4D4D')
				$_shoulders.attr('fill', '#4D4D4D')
				$_trunk.attr('fill', '#4D4D4D')
				$_left_eye_pupil.attr('fill', '#000000')
				$_right_eye_pupil.attr('fill', '#000000')
				$_hinge.attr('stroke', '#FFFFFF')
				break;
			case "7":
				$_veil.attr('fill', '#333333')
				$_shoulders.attr('fill', '#333333')
				$_trunk.attr('fill', '#333333')
				$_left_eye_pupil.attr('fill', '#000000')
				$_right_eye_pupil.attr('fill', '#000000')
				$_hinge.attr('stroke', '#FFFFFF')
				break;
			case "8":
				$_veil.attr('fill', '#1A1A1A')
				$_shoulders.attr('fill', '#1A1A1A')
				$_trunk.attr('fill', '#1A1A1A')
				$_left_eye_pupil.attr('fill', '#000000')
				$_right_eye_pupil.attr('fill', '#000000')
				$_hinge.attr('stroke', '#FFFFFF')
				break;
			default:
				$_veil.attr('fill', '#000000')
				$_shoulders.attr('fill', '#000000')
				$_trunk.attr('fill', '#000000')
				$_left_eye_pupil.attr('fill', '#000000')
				$_right_eye_pupil.attr('fill', '#000000')
				$_hinge.attr('stroke', '#FFFFFF')
				break;
		}
		$('#nun-dress-val').html($_nun_dress.val())
		verify_bat_val()
	}

	let end_change_nun_dress = function (e) {
		$(document).off('mousemove', change_nun_dress)
		$(document).off('mouseup', end_change_nun_dress)
	}

	$_color_button.on('click', function () {
		let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
						  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
						  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
						  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
						  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
						  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
						  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
						  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
						  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
						  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#FEDA32'];
		$_face.attr('fill', colorArray[Math.floor(Math.random()*colorArray.length)])
	})

	$_nose_button.on('click', function() {
		let val = $_nose_button.attr('value')

		if (val >= 3) {
			val = 1
		} else {
			val++
		}
		$_nose_button.attr('value', val)
		console.log(val)
		$('#nose-path-val').html(val)
		switch (val) {
			case 1:
				$('.nose').attr('fill-opacity', 0)
				$('#nose-1').attr('fill-opacity', 1)
				break;
			case 2:
				$('.nose').attr('fill-opacity', 0)
				$('#nose-2').attr('fill-opacity', 1)
				break;
			default:
				$('.nose').attr('fill-opacity', 0)
				$('#nose-3').attr('fill-opacity', 1)
				break;
		}
	})


// function svgConvert(){
// 	canvg(document.getElementById("canvasID"),document.getElementById("svg-wrapper").html);
// }
// 	// function makeScreenshot()
// 	//  {
// 	// 		 html2canvas(document.getElementById("screenshot"), {scale: 2}).then(canvas =>
// 	// 		 {
// 	// 				 canvas.id = "canvasID";
// 	// 				 var main = document.getElementById("main");
// 	// 				 while (main.firstChild) { main.removeChild(main.firstChild); }
// 	// 				 main.appendChild(canvas);
// 	// 		 });
// 	//  }
//
// 	 document.getElementById("a-make").addEventListener('click', function()
// 	 {
// 			 document.getElementById("a-make").style.display = "none";
// 			 svgConvert();
// 			 // makeScreenshot();
// 			 document.getElementById("a-download").style.display = "inline";
// 	 }, false);
//
// 	 document.getElementById("a-download").addEventListener('click', function()
// 	 {
// 			 this.href = document.getElementById("canvasID").toDataURL();
// 			 this.download = "canvas-image.png";
// 	 }, false);

})
