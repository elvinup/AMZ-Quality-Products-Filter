//content.js

//alert("Hello from your chrome extension!");

//function removeJunk() {
	var parent = document.getElementbyId("box-container-inner");
	var title = document.getElementbyId("box");
	parent.removeChild(title);
//}

//function removeJunk() {
   // var list = document.getElementById('box-container');
   // var node = list.item(0);
  // list.remove();
   
  
  //$('#box-container-inner .title').remove();
 /*   return false;
}
function pageInit() {
    // Hook up the "remove dummy" button
    var btn = document.getElementById('btnRemoveJunk');
    if (btn.addEventListener) {
        // DOM2 standard
        btn.addEventListener('click', removeJunk, false);
    }
    else if (btn.attachEvent) {
        // IE (IE9 finally supports the above, though)
        btn.attachEvent('onclick', removeJunk);
    }
    else {
        // Really old or non-standard browser, try DOM0
        btn.onclick = removeJunk;
    }
}
*/
