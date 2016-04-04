window.onload = function() {
  var titles = $(".title").toArray();
  var boxes = $(".box").toArray();
  var length = 127;
  for (i = 0; i < length; i++) {
      var str = titles[i].innerHTML.toLowerCase();
      var keyword = str.indexOf("women's");
      if (keyword > 0) {
          $(boxes[i]).remove();
      }
  }
};

