// var a=37;
// var b = "хуй"
// var db = " вам в рот!"
// // var c = true;
// // var c = false;
// var d =5;
// // alert( b+db );

// a = prompt ('write here something');

// if ( a==37 ) {
// 	alert('ok!' );
// } else{
// 	alert ('not ok');
// }

// for (var i = 0;i <5;i++){
// 	alert(i);
// }

function doMagic (a,dvd) {
	alert (a+ dvd);
}
// doMagic(10,56);

var btn = document.getElementById('btn');
btn.onclick = function () {
	  var text = document.querySelector('.huy');
	  text.classList.add( 'red' );
	  var text = document.querySelector('.pidr');
	  text.classList.add(  'opasy' );
     var text = document.querySelector('.pashka');
	  text.classList.add('bounceInDown','opasy');
 
	        var text = document.querySelector('h2.did2');
	  text.classList.add(  'opasy' );
	  	        var text = document.querySelector('.btn');
	  text.classList.add(  'red' );
}
