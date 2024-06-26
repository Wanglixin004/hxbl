"use strict";
document.addEventListener("DOMContentLoaded", (function() {
	const t = moment().startOf("day"),
		e = t.format("YYYY-MM"),
		n = t.clone().subtract(1, "day").format("YYYY-MM-DD"),
		a = t.format("YYYY-MM-DD"),
		r = t.clone().add(1, "day").format("YYYY-MM-DD");
	let i;
	window.innerWidth > 991 ? i = {
		start: "prev,next today",
		center: "title",
		end: "dayGridMonth,dayGridWeek,dayGridDay,listWeek"
	} : window.innerWidth < 991 && (i = {
		start: "title",
		center: "",
		end: "prev,next today"
	});
	var d = document.getElementById("calendar");
	new FullCalendar.Calendar(d, {
		initialView: "dayGridMonth",
		headerToolbar: i,
		droppable: !0,
		editable: !0,
		eventLimit: !0,
		handleWindowResize: !0,
		themeSystem: "bootstrap",
		bootstrapGlyphicons: !1,
		events: [{
			title: "All Day Event",
			start: e + "-01"
		}, {
			title: "Long Event",
			start: e + "-07",
			end: e + "-10"
		}, {
			id: 999,
			title: "Repeating Event",
			start: e + "-09T16:00:00"
		}, {
			id: 999,
			title: "Repeating Event",
			start: e + "-16T16:00:00"
		}, {
			title: "Conference",
			start: n,
			end: r
		}, {
			title: "Meeting",
			start: a + "T10:30:00",
			end: a + "T12:30:00"
		}, {
			title: "Lunch",
			start: a + "T12:00:00"
		}, {
			title: "Meeting",
			start: a + "T14:30:00"
		}, {
			title: "Happy Hour",
			start: a + "T17:30:00"
		}, {
			title: "Dinner",
			start: a + "T20:00:00"
		}, {
			title: "Birthday Party",
			start: r + "T07:00:00"
		}, {
			title: "Click for Google",
			url: "http://google.com/",
			start: e + "-28"
		}]
	}).render()
}));