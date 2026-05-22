function stp()
{
 var store = document.getElementById("one").value;
 var result = document.getElementById("five");

 result.innerHTML = store;
 result.style.display = "block";

 result.classList.remove("animate__animated", "animate__slideInRight");
 void result.offsetWidth;
 result.classList.add("animate__animated", "animate__slideInRight");

 document.getElementById("for").style.display = "block";
 document.getElementById("two").style.display = "none";
 document.getElementById("one").style.display = "none";

 document.getElementById("three").style.display = "none";
 document.getElementById("re").style.display = "block";
}

function back()
{
 document.getElementById("one").style.display = "block";
 document.getElementById("two").style.display = "block";

 document.getElementById("for").style.display = "none";

 document.getElementById("three").style.display = "block";
 document.getElementById("re").style.display = "none";
}