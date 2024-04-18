"use strict";

const form = "https://forms.gle/8SjdX9MwJLrzbdfV6";

const bestill = document.getElementById(`bestill`);
console.log(bestill);

bestill.onclick = function () {
  window.open(form, "_blank");
};
