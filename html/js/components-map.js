"use strict";

function createBasicMap(e, t, a, o) {
	var i = [t, a];
	if (document.getElementById(e)) {
		var r = L.icon({
				iconUrl: o,
				iconSize: [50, 50],
				popupAnchor: [0, -18],
				tooltipAnchor: [0, 19]
			}),
			s = !1,
			n = !1;
		window.innerWidth > 700 && (s = !0, n = !0);
		var p = L.map(e, {
			center: i,
			zoom: 13,
			dragging: s,
			tap: n,
			scrollWheelZoom: !1
		});
		L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
			subdomains: "abcd",
			minZoom: 0,
			maxZoom: 20,
			ext: "png"
		}).addTo(p), p.once("focus", (function() {
			p.scrollWheelZoom.enable()
		})), L.marker(i, {
			icon: r
		}).addTo(p).bindPopup(
			"<div class='p-4'><h5>Info Window Content</h5><p class='mb-0'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p></div>", {
				minwidth: 200,
				maxWidth: 400,
				className: "map-custom-popup"
			})
	}
}

function createSimpleMap(e, t, a, o) {
	var i = [t, a];
	if (document.getElementById(e)) {
		var r = L.icon({
				iconUrl: o,
				iconSize: [50, 50],
				popupAnchor: [0, -18],
				tooltipAnchor: [0, 19]
			}),
			s = !1,
			n = !1;
		window.innerWidth > 700 && (s = !0, n = !0);
		var p = L.map(e, {
			center: i,
			zoom: 13,
			dragging: s,
			tap: n,
			scrollWheelZoom: !1
		});
		L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
			subdomains: "abcd",
			minZoom: 0,
			maxZoom: 20,
			ext: "png"
		}).addTo(p), p.once("focus", (function() {
			p.scrollWheelZoom.enable()
		})), L.marker(i, {
			icon: r
		}).addTo(p).bindPopup(
			"<div class='p-4'><h5>Info Window Content</h5><p class='mb-0'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p></div>", {
				minwidth: 200,
				maxWidth: 400,
				className: "map-custom-popup"
			})
	}
}

function createAdvancedMap(e) {
	var t = function(e, t) {
			for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);
			return e
		}({
			markerPath: "img/map-marker-default.svg",
			markerPathHighlight: "img/map-marker-default.svg",
			imgBasePath: "img/photos/",
			mapPopupType: "venue",
			useTextIcon: !1,
			tileLayer: {
				tiles: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
				attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
				subdomains: "abcd"
			}
		}, e),
		a = !1,
		o = !1;
	window.innerWidth > 700 && (a = !0, o = !0);
	var i = L.map(t.mapId, {
		zoom: 14,
		scrollWheelZoom: !1,
		dragging: a,
		tap: o,
		scrollWheelZoom: !1
	});
	i.once("focus", (function() {
		i.scrollWheelZoom.enable()
	})), L.tileLayer(t.tileLayer.tiles, {
		attribution: t.tileLayer.attribution,
		minZoom: 1,
		maxZoom: 19
	}).addTo(i);
	var r = new XMLHttpRequest;
	r.open("GET", t.jsonFile, !0), r.onload = function() {
		if (r.status >= 200 && r.status < 400) {
			var e = JSON.parse(r.responseText);
			if (L.geoJSON(e, {
					pointToLayer: m,
					onEachFeature: c
				}).addTo(i), s) {
				var t = new L.featureGroup(s);
				i.fitBounds(t.getBounds())
			}
		}
	}, r.onerror = function() {
		console.log(error)
	}, r.send();
	var s = [],
		n = L.icon({
			iconUrl: t.markerPath,
			iconSize: [50, 50],
			popupAnchor: [0, -18],
			tooltipAnchor: [0, 19]
		}),
		p = L.icon({
			iconUrl: t.markerPathHighlight,
			iconSize: [50, 50],
			popupAnchor: [0, -18],
			tooltipAnchor: [0, 19]
		});

	function c(e, a) {
		a.on({
			mouseover: l,
			mouseout: u
		}), e.properties && e.properties.about && (a.bindPopup(function(e) {
			if (e.name) var a = '<h6><a href="' + e.link + '">' + e.name + "</a></h6>";
			else a = "";
			if (e.about) var o = '<p class="">' + e.about + "</p>";
			else o = "";
			if (e.image) {
				var i = "image";
				"venue" == t.mapPopupType && (i += " d-none d-md-block");
				var r = '<div class="' + i + '" style="background-image: url(\'' + t.imgBasePath + e.image +
					"')\"></div>"
			} else r = '<div class="image"></div>';
			if (e.address) var s =
				'<p class="text-muted mb-1"><i class="fa fa-map-marker fa-fw text-dark mr-2"></i>' + e
				.address + "</p>";
			else s = "";
			if (e.email) var n =
				'<p class="text-muted mb-1"><i class="fa fa-envelope-open fa-fw text-dark mr-2"></i><a href="mailto:' +
				e.email + '" class="text-muted">' + e.email + "</a></p>";
			else n = "";
			if (e.phone) var p =
				'<p class="text-muted mb-1"><i class="fa fa-phone fa-fw text-dark mr-2"></i>' + e
				.phone + "</p>";
			else p = "";
			if (e.stars) {
				for (var c = '<div class="text-xs">', m = 1; m <= 5; m++) m <= e.stars ? c +=
					"<i class='fa fa-star text-warning'></i>" : c +=
					"<i class='fa fa-star text-gray-300'></i>";
				c += "</div>"
			} else c = "";
			if (e.url) e.url, e.url;
			else "";
			var l = "";
			"venue" == t.mapPopupType ? l = '<div class="popup-venue">' + r + '<div class="text">' + a + o +
				s + n + p + "</div></div>" : "rental" == t.mapPopupType && (l =
					'<div class="popup-rental">' + r + '<div class="text">' + a + c + "</div></div>");
			return l
		}(e.properties), {
			minwidth: 200,
			maxWidth: 600,
			className: "map-custom-popup"
		}), t.useTextIcon && a.bindTooltip('<div id="customTooltip-' + e.properties.id + '">$' + e.properties
			.price + "</div>", {
				direction: "top",
				permanent: !0,
				opacity: 1,
				interactive: !0,
				className: "map-custom-tooltip"
			})), s.push(a)
	}

	function m(e, a) {
		if (t.useTextIcon) var o = 0;
		else o = 1;
		return L.marker(a, {
			icon: n,
			id: e.properties.id,
			opacity: o
		})
	}

	function l(e) {
		var a;
		(a = e.target).setIcon(p), t.useTextIcon && d(a).addClass("active")
	}

	function u(e) {
		var a;
		(a = e.target).setIcon(n), t.useTextIcon && d(a).removeClass("active")
	}

	function d(e) {
		e.getTooltip()
	}
	L.Map.include({
		getMarkerById: function(e) {
			var t = null;
			return this.eachLayer((function(a) {
				a instanceof L.Marker && a.options.id === e && (t = a)
			})), t
		}
	})
}