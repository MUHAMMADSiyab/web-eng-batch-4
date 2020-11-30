/**
 * DOCUMENT OBJECT MODEL  => DOM
 */

 document.title = "Blah Blah"

//  console.log(document.title);
 
var heading = document.getElementById('demo');

// console.log(heading.innerHTML);

heading.innerText = "Hello World"


// console.log( document.querySelector("") ); // css selectors way

heading.style.color = "red"
heading.style.backgroundColor = "yellow"

// var anchors = document.getElementsByTagName('a');
// var anchors = document.getElementsByName('link');
// var anchors = document.getElementsByClassName('link');
var anchors = document.querySelectorAll('.link');

for (anchor of anchors) {
    anchor.style.color = 'purple'
}


// Window object

// window.print()

// window.location.href = "https://google.com"

// window.location.reload()