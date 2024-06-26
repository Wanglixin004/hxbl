"use strict";
document.addEventListener("DOMContentLoaded", (function() {
	[].slice.call(document.querySelectorAll(".toast")).map((function(t) {
		return new bootstrap.Toast(t)
	}));
	[].slice.call(document.querySelectorAll(".toast-btn")).map((function(t) {
		t.addEventListener("click", (function() {
			var e = document.getElementById(t.dataset.target);
			e && bootstrap.Toast.getInstance(e).show()
		}))
	}))
}));