
// We called a method on document. document is a globally available variable in the browser that you use to interact with the HTML and CSS. It a lot of methods that you can use. In this case, we're using the querySelector in which you pass in a CSS selector and it returns to you the first one of that matches 
//selector that it finds (if you have many of them on the page, you get just the first one.)
const boxClass = document.querySelector(".box");
boxClass.style.backgroundColor = "yellow";

// We can also modify more than one content by javaScript
const modify = document.querySelectorAll(".js-tut");
for (let i = 0; i < modify.length; i++) {
    const temp = modify[i];
    temp.innerHTML = "Modified by JavaSript";
}

// event listeners and different types of events like click, change, keyup and many more
const button = document.querySelector(".btn");
button.addEventListener("click", function () {
    alert("Are you sure?");
})

const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy-to");

input.addEventListener("keyup", function () {
    paragraph.innerHTML = input.value;
})

const input2 = document.querySelector(".color-input");
const paragraph2 = document.querySelector(".color-box");

input2.addEventListener("change", function () {
    paragraph2.style.backgroundColor = input2.value;
});
