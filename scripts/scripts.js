/*Show More / Show less Buttons*/

	function show_more() {
	  var a = document.getElementById("toggle_1");
	  a.style.display = "none";
	  var b = document.getElementById("toggle_2");
	  b.style.display = "grid";
	  var c = document.getElementById("less_btn");
	  c.style.display = "block";
	  var c = document.getElementById("more_btn");
	  c.style.display = "none";
	}
	function show_less() {
	 var a = document.getElementById("toggle_1");
	  a.style.display = "grid";
	  var b = document.getElementById("toggle_2");
	  b.style.display = "none";
	  var c = document.getElementById("more_btn");
	  c.style.display = "block";
	  var c = document.getElementById("less_btn");
	  c.style.display = "none";
	}

/*--------------------END---------------------*/

/*Images Filtering*/

	filterSelection("all")
	function filterSelection(c) {
	  var x, i;
	  x = document.getElementsByClassName("column");
	  if (c == "all") c = "";
	  for (i = 0; i < x.length; i++) {
	    w3RemoveClass(x[i], "show");
	    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	  }
	}

	function w3AddClass(element, name) {
	  var i, arr1, arr2;
	  arr1 = element.className.split(" ");
	  arr2 = name.split(" ");
	  for (i = 0; i < arr2.length; i++) {
	    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	  }
	}

	function w3RemoveClass(element, name) {
	  var i, arr1, arr2;
	  arr1 = element.className.split(" ");
	  arr2 = name.split(" ");
	  for (i = 0; i < arr2.length; i++) {
	    while (arr1.indexOf(arr2[i]) > -1) {
	      arr1.splice(arr1.indexOf(arr2[i]), 1);     
	    }
	  }
	  element.className = arr1.join(" ");
	}

	var btnContainer = document.getElementById("myBtnContainer");
	var btns = btnContainer.getElementsByClassName("btn");
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function(){
	    var current = document.getElementsByClassName("active");
	    current[0].className = current[0].className.replace(" active", "");
	    this.className += " active";
	  });
	}

	var modal = document.getElementById('id01');

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
	  }
	}
	function onClick(element) {
		document.getElementById("img01").src = element.src;
		document.getElementById("modal01").style.display = "block";
	}
	function w3_open() {
		document.getElementById("mySidebar").style.display = "block";
		document.getElementById("myOverlay").style.display = "block";
	}
	  
	function w3_close() {
		document.getElementById("mySidebar").style.display = "none";
		document.getElementById("myOverlay").style.display = "none";
	}
	function myAccFunc() {
		var x = document.getElementById("demoAcc");
		if (x.className.indexOf("w3-show") == -1) {
		  x.className += " w3-show";
		  x.previousElementSibling.className += " w3-green";
		} else { 
		  x.className = x.className.replace(" w3-show", "");
		  x.previousElementSibling.className = 
		  x.previousElementSibling.className.replace(" w3-green", "");
		}
	}