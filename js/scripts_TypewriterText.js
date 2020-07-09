// Credit for TypeWriterText function goes to: Vladimir
// Profile: https://codepen.io/VladimirVaize

// Easily add any word or word phrase to display in the following array:
var words = [
    "TENT POLES",
    "HARNESS",
    "SUNSCREEN",
    "ICE AXE",
    "SWIM SUIT",
    "SKI BOOTS",
    "FIRST AID KIT",
    "PASSPORT",
    "BUG SPRAY",
    "GLOVES",
    "HELMET",
    "BATTERIES",
  ], part, i = 0, offset = 0, len = words.length,
  forwards = true,
  skip_count = 0,
  skip_delay = 125,
  speed = 70;

var TypeWriterText = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }
    $(".TypewriterText").text(part);
  }, speed);
};

$(document).ready(function () {
  TypeWriterText();
});
