let $_nun = $('#nun'),
	$_body = $('#body'),
	$_shoulders = $('#shoulders'),
	$_trunk = $('#trunk'),
	$_visage = $('#visage'),
	$_face = $('#face'),
	$_right_eye = $('#right-eye'),
	$_left_eye = $('#left-eye'),
	$_veil = $('#back-veil')

let $_face_roundness = $('input#face-roundness'),
	$_nun_height = $('input#nun-height'),
	$_nun_width = $('input#nun-width'),
	$_eye_height = $('input#eye-height'),
	$_eye_width = $('input#eye-width')


jQuery(document).ready(function($){
	$_face_roundness.on('mousedown', function (e) {
		$(document).on('mousemove', change_roundness)
		$(document).on('mouseup', end_change_roundness)
	})
	let change_roundness = function (e) {
		let roundness = $_face_roundness.val() * 50
		$_face.attr('rx', roundness)
		$_face.attr('rx', roundness)
	}
	let end_change_roundness = function (e) {
		$(document).off('mousemove', change_roundness)
		$(document).off('mouseup', end_change_roundness)
	}
})