"use strict";console.log(">> Ready :)");let form=document.querySelector("form");const resetFormBtn=document.querySelector(".preview__reset");function resetForm(){form.reset()}resetFormBtn.addEventListener("click",resetForm);let listenerFill=document.querySelector(".fill"),changeTitle=document.querySelector(".preview__display--title"),changeSubtitle=document.querySelector(".preview__display--subtitle"),selectElement=function(){let e=document.getElementById("name"),t=document.getElementById("surnames");e.addEventListener("input",writeTitle),t.addEventListener("input",writeSubtitle)};function writeTitle(e){let t=e.currentTarget.value;changeTitle.innerHTML=t}function writeSubtitle(e){let t=e.currentTarget.value;changeSubtitle.innerHTML=t}listenerFill.addEventListener("input",selectElement);