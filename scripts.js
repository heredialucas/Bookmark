//FEATURES
const select1 = document.querySelector(".select1");
const select2 = document.querySelector(".select2");
const select3 = document.querySelector(".select3");

const tab1 = document.querySelector(".tab1");
const tab2 = document.querySelector(".tab2");
const tab3 = document.querySelector(".tab3");

select1.addEventListener("click", () => {
  tab1.setAttribute("style", "display:flex");
  tab2.setAttribute("style", "display:none");
  tab3.setAttribute("style", "display:none");
});
select2.addEventListener("click", () => {
  tab1.setAttribute("style", "display:none");
  tab2.setAttribute("style", "display:flex");
  tab3.setAttribute("style", "display:none");
});
select3.addEventListener("click", () => {
  tab1.setAttribute("style", "display:none");
  tab2.setAttribute("style", "display:none");
  tab3.setAttribute("style", "display:flex");
});

//ACORDEON

const q1 = document.querySelector(".q1");
const q2 = document.querySelector(".q2");
const q3 = document.querySelector(".q3");
const q4 = document.querySelector(".q4");

const a1 = document.querySelector(".a1");
const a2 = document.querySelector(".a2");
const a3 = document.querySelector(".a3");
const a4 = document.querySelector(".a4");

q1.addEventListener('click',()=>{
    a1.setAttribute('style','display:block')
    a2.setAttribute('style','display:none')
    a3.setAttribute('style','display:none')
    a4.setAttribute('style','display:none')
})
q2.addEventListener('click',()=>{
    a1.setAttribute('style','display:none')
    a2.setAttribute('style','display:block')
    a3.setAttribute('style','display:none')
    a4.setAttribute('style','display:none')
})
q3.addEventListener('click',()=>{
    a1.setAttribute('style','display:none')
    a2.setAttribute('style','display:none')
    a3.setAttribute('style','display:block')
    a4.setAttribute('style','display:none')
})
q4.addEventListener('click',()=>{
    a1.setAttribute('style','display:none')
    a2.setAttribute('style','display:none')
    a3.setAttribute('style','display:none')
    a4.setAttribute('style','display:block')
})