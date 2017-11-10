//雪花效果
(function() {
	function piao(left, height, src) {
		var div = document.createElement("div");
		var img = document.createElement("img");
		div.appendChild(img);
		img.className = "roll";
		img.src = src;
		div.style.left = left + "px";
		div.style.height = height + "px";
		div.className = "div";
		document.getElementById("leaf").appendChild(div);
		setTimeout(function() {
			document.getElementById("leaf").removeChild(div);
		}, 5000);
	}
	setInterval(function() {
		var left = Math.random() * window.innerWidth;
		var height = Math.random() * window.innerHeight;
		var src = "images/huaban" + Math.floor(Math.random() * 4 + 1) + ".png";
		piao(left, height, src);
	}, 300);
})();