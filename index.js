//creating portfolio tabbed component
//===================================

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_ele = document.querySelectorAll(".img-overlay");
p_btns.addEventListener('click', (e) => {
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);


    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");

    //to find the number in data
    const btn_num = p_btn_clicked.dataset.btnNum;
    console.log(btn_num);   

    //click the btn and get tthe btn number
    const img_active =document.querySelectorAll(`.p-btn--${btn_num}`);

    //hidden all imaages
    p_img_ele.forEach((curElem) => curElem.classList.add("p-image-not-active"));

    img_active.forEach((curElem)=> curElem.classList.remove("p-image-not-active"));
});

//swiper code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,

    
    autoplay:{
      delay:2500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });