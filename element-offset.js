
// element-offset @ npm, get another element by offsetting the tail number of an element id.

module.exports = function (elOrId, offset) {
	var sid = (typeof elOrId === "string") ? elOrId : (elOrId.id || "");
	var m = sid.match(/\D(\d+)(\D*)$/);
	return m && document.getElementById(
		sid.slice(0, -m[0].length + 1) + (parseInt(m[1]) + offset) + m[2]
	);
}
