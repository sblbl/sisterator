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
	$_veil = $('#back-veil')


let $_face_roundness = $('input#face-roundness'),
	$_nun_height = $('input#nun-height'),
	$_nun_width = $('input#nun-width'),
	$_pupil_proportion = $('input#pupil-proportion'),
	$_eye_width = $('input#eye-width')

let pupil_prop = .5


let nun_center_x = 1814.15;




jQuery(document).ready(function($){

	/*---------------- FACE ROUNDNESS ----------------*/

	$_face_roundness.on('mousedown', function (e) {
		$(document).on('mousemove', change_roundness)
		$(document).on('mouseup', end_change_roundness)
	})
	let change_roundness = function (e) {
		let roundness = $_face_roundness.val() * 30
		$_face.attr('rx', roundness)
		$_face.attr('rx', roundness)
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
	}
	let end_change_eye_width = function (e) {
		$(document).off('mousemove', change_roundness)
		$(document).off('mouseup', end_change_roundness)
	}

	/*---------------- PUPIL PROPORTION  ----------------*/

	$_pupil_proportion.on('mousedown', function (e) {
		$(document).on('mousemove', change_pupil_proportion)
		$(document).on('mouseup', end_change_pupil_proportion)
	})
	let change_pupil_proportion = function (e) {
		pupil_prop = $_pupil_proportion.val()/10
		let sclera_width = $_right_eye_sclera.attr('r')
		$_right_eye_pupil.attr('r', sclera_width * pupil_prop)
		$_left_eye_pupil.attr('r', sclera_width * pupil_prop)

		//let width = $_eye_width.val() * 5 + 30
	}
	let end_change_pupil_proportion = function (e) {
		$(document).off('mousemove', change_pupil_proportion)
		$(document).off('mouseup', end_change_pupil_proportion)
	}

<<<<<<< HEAD
	
=======
		/*---------------- BODY WIDTH  ----------------*/
		$_nun_width.on('mousedown', function (e) {
			$(document).on('mousemove', change_nun_width)
			$(document).on('mouseup', end_change_nun_width)
		})



		let change_nun_width = function (e) {
			let width = $_nun_width.val()*180+200
			let x = nun_center_x - (width/2)
			$_trunk.attr('width',width)
			$_shoulders.attr('r',width/2)
			$_trunk.attr('x',x)
		



			//let width = $_eye_width.val() * 5 + 30
		}
		let end_change_nun_width = function (e) {
			$(document).off('mousemove', change_nun_width)
			$(document).off('mouseup', end_change_nun_width)
		}



>>>>>>> d768630db961cac2d1cda9b3ff7f434ccd27f138
})

/*add batman mode*/

/*
$_eye_width.on('mousedown', function (e) {
	$(document).on('mousemove', change_eye_width)
	$(document).on('mouseup', end_change_eye_width)
})
let change_eye_width = function (e) {

}
let end_change_eye_width = function (e) {
	$(document).off('mousemove', )
	$(document).off('mouseup', )
}
*/
