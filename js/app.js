//-----------------detail product------------------------//

//------su kien click vao thay doi anh----------------//

const bigImg = document.querySelector(".product-content-left-big-img img");
const smallImg = document.querySelectorAll(".product-content-left-small-img img ")

smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})

const colourButton1 = document.querySelector(".colour1")
const colourButton2 = document.querySelector(".colour2")
const colourButton3 = document.querySelector(".colour3")
if(colourButton1){
    colourButton1.addEventListener("click",function(){
        document.querySelector(".product-content-left-img2").style.display = "none" 
        document.querySelector(".product-content-left-img3").style.display = "none" 
        document.querySelector(".product-content-left-img1").style.display = "flex"
        document.querySelector(".colour1").style.border = "1px solid #000";
        document.querySelector(".colour2").style.border = "none";
        document.querySelector(".colour3").style.border = "none";
        document.querySelector(".colour1").style.borderRadius = "50%";

    })
}
if(colourButton2){
    colourButton2.addEventListener("click",function(){
        document.querySelector(".product-content-left-img2").style.display = "flex" 
        document.querySelector(".product-content-left-img3").style.display = "none" 
        document.querySelector(".product-content-left-img1").style.display = "none"
        document.querySelector(".colour2").style.border = "1px solid #000";
        document.querySelector(".colour3").style.border = "none";
        document.querySelector(".colour1").style.border = "none";
        document.querySelector(".colour2").style.borderRadius = "50%";


    })
}
if(colourButton3){
    colourButton3.addEventListener("click",function(){
        document.querySelector(".product-content-left-img2").style.display = "none" 
        document.querySelector(".product-content-left-img3").style.display = "flex" 
        document.querySelector(".product-content-left-img1").style.display = "none"
        document.querySelector(".colour3").style.border = "1px solid #000";
        document.querySelector(".colour1").style.border = "none";
        document.querySelector(".colour2").style.border = "none";
        document.querySelector(".colour3").style.borderRadius = "50%";


    })
}

//----------su kien click vao thay doi noi dung---------------//
const mota = document.querySelector(".product-content-right-detail-bottom-title-item-mota");
const chitiet = document.querySelector(".product-content-right-detail-bottom-title-item-chitiet");
if(mota){
    mota.addEventListener("click",function(){
        document.querySelector(".product-content-right-detail-bottom-title-item-mota").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-right-detail-bottom-content-chitiet").style.display = "none" 
        document.querySelector(".product-content-right-detail-bottom-content-mota").style.display = "block"
        document.querySelector(".product-content-right-detail-bottom-title-item-chitiet").style.borderBottom = "1px solid #000";
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-detail-bottom-content-chitiet").style.display = "block" 
        document.querySelector(".product-content-right-detail-bottom-content-mota").style.display = "none"
        document.querySelector(".product-content-right-detail-bottom-title-item-chitiet").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-right-detail-bottom-title-item-mota").style.borderBottom = "1px solid #000";
    })
}

//su kien click vao thay doi noi dung//
const huongdan = document.querySelector(".product-content-policy-title-huongdan")
const chinhsach = document.querySelector(".product-content-policy-title-chinhsach")
if(huongdan){
    huongdan.addEventListener("click",function(){
        document.querySelector(".product-content-policy-content-chinhsach").style.display = "none" 
        document.querySelector(".product-content-policy-content-huongdan").style.display = "block"
        document.querySelector(".product-content-policy-title-huongdan").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-policy-title-chinhsach").style.borderBottom = "1px solid #000";
    })
}
if(chinhsach){
    chinhsach.addEventListener("click",function(){
        document.querySelector(".product-content-policy-content-chinhsach").style.display = "block" 
        document.querySelector(".product-content-policy-content-huongdan").style.display = "none"
        document.querySelector(".product-content-policy-title-chinhsach").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-policy-title-huongdan").style.borderBottom = "1px solid #000";
    })
}

//-su kien click thu gon noi dung----//
const buttonDetail = document.querySelector(".product-content-right-detail-top");
if(buttonDetail){
    buttonDetail.addEventListener("click",function(){
        document.querySelector(".product-content-right-detail-bottom").classList.toggle("acticeB")
    })
}

// const searchS = document.querySelector("")
const btnsize1 = document.querySelector(".size1")
const btnsize2 = document.querySelector(".size2")
const btnsize3 = document.querySelector(".size3")
const btnsize4 = document.querySelector(".size4")
if(btnsize1){
    btnsize1.addEventListener("click",function(){

        document.querySelector(".size1").style.border = "1px solid #000";
        document.querySelector(".size2").style.border = "none";
        document.querySelector(".size3").style.border = "none";
        document.querySelector(".size4").style.border = "none";
      
   
    })
}
if(btnsize2){
    btnsize2.addEventListener("click",function(){

        document.querySelector(".size2").style.border = "1px solid #000";
        document.querySelector(".size1").style.border = "none";
        document.querySelector(".size3").style.border = "none";
        document.querySelector(".size4").style.border = "none";
      
   
    })
}
if(btnsize3){
    btnsize3.addEventListener("click",function(){

        document.querySelector(".size3").style.border = "1px solid #000";
        document.querySelector(".size2").style.border = "none";
        document.querySelector(".size1").style.border = "none";
        document.querySelector(".size4").style.border = "none";
      
   
    })
}
if(btnsize4){
    btnsize1.addEventListener("click",function(){

        document.querySelector(".size4").style.border = "1px solid #000";
        document.querySelector(".size2").style.border = "none";
        document.querySelector(".size3").style.border = "none";
        document.querySelector(".size1").style.border = "none";
      
   
    })
}

// open list product
const openListProduct = document.querySelector('.nav__list .list__item2');
const listProduct = document.querySelector('.list__product');
const closeListProduct = document.querySelector('.product__footer .fa-sort-up');
openListProduct.addEventListener('mousemove', (event) => {
    listProduct.style.transform = 'translateY(0%)';
})

closeListProduct.onclick = () => {
    listProduct.style.transform = 'translateY(-120%)';
}


// Sự kiện mua ngay
const cartClick = document.querySelector('.btn1');
const cartOverlay = document.querySelector('.cart__overlay');
const closecartOvelay = document.querySelector('.cart__overlay .fa-times');
cartClick.onclick = () => {
    cartOverlay.style.transform = 'translateX(0%)';
    overlay.style.display = 'block';
}

closecartOvelay.onclick = () => {
    cartOverlay.style.transform = 'translateX(100%)';
    overlay.style.display = 'none';
}

// cart 
const openCart = document.querySelector('.cart .fa-shopping-bag');
openCart.onclick = () => {
    cartOverlay.style.transform = 'translateX(0%)';
    overlay.style.display = 'block';
}



// footer
const hotlineExtend = document.querySelector('.hotline__extend');
const hotlineClick = document.querySelector('.hotline__extend__click');
const hotlineOverlay = document.querySelector('.hotline__overlay');
const closeHotlineOverlay = document.querySelector('.hotline__overlay .fa-sort-up');
hotlineClick.onclick = () => {
    hotlineOverlay.style.display = 'block';
    hotlineExtend.style.display = 'none';
}

closeHotlineOverlay.onclick = () => {
    hotlineOverlay.style.display = 'none';
    hotlineExtend.style.display = 'block';
}

// Navbar
const bar = document.querySelector('.bar__icon');
const navOverlay = document.querySelector('.nav__overlay'); 
const overlay = document.querySelector('.overlay');

bar.onclick = function() {
    navOverlay.style.transform = 'translateX(0%)';
    bar.style.display = 'none';
    overlay.style.display = 'block';
}

// Menu
const closeMenu = document.querySelector('.nav__overlay__menu .fa-chevron-left');
closeMenu.onclick = function() {
    navOverlay.style.transform = 'translateX(-100%)';
    bar.style.display = 'block';
    overlay.style.display = 'none';
    productOverlay.style.transform = 'translateX(-100%)';
}

// Overlay
overlay.onclick = function() {
    navOverlay.style.transform = 'translateX(-100%)';
    bar.style.display = 'block';
    overlay.style.display = 'none';
    inputOverlay.style.transform = 'translateX(100%)';
    cartOverlay.style.transform = 'translateX(100%)';
    productOverlay.style.transform = 'translateX(-100%)';
    loginOverlay.style.display = 'none';
}

// Input search overlay
const inputSearch = document.querySelector('.input__search');
const inputOverlay = document.querySelector('.input__overlay');
const closeInputOverlay = document.querySelector('.input__overlay .fa-times');
inputSearch.onclick = function() {
    inputOverlay.style.transform = 'translateX(0%)';
    overlay.style.display = 'block';
}

closeInputOverlay.onclick = function() {
    inputOverlay.style.transform = 'translateX(100%)';
    overlay.style.display = 'none';
}

// list product overlay
const openProductOverlay = document.querySelector('.nav__item.item2 .fa-chevron-right');
const productOverlay = document.querySelector('.product__overlay');
const titleProductOverlay = document.querySelector('.product__overlay__menu .fa-chevron-left');
openProductOverlay.onclick = function() {
    productOverlay.style.transform = 'translateX(0%)';
    overlay.style.display = 'block';
}

titleProductOverlay.onclick = function() {
    productOverlay.style.transform = 'translateX(-100%)';
}


// User mobile
const loginMobile = document.querySelector('.nav__overlay__footer .top__left');
loginMobile.onclick = () => {
    loginOverlay.style.display = 'block';
    navOverlay.style.transform = 'translateX(-100%)';
}


// User
const openLogin = document.querySelector('.cart .fa-user-alt');
const loginOverlay = document.querySelector('.login__overlay');
const createAccount = document.querySelector('.sign__in .create__account');
const signUp = document.querySelector('.login__overlay .sign__up');
const signIn = document.querySelector('.login__overlay .sign__in');
const btnSignUp = document.querySelector('.sign__up .sign__up__btn');
const inputSignUp = document.querySelectorAll('.sign__up .sign__up__container input');
const backSignIn = document.querySelector('.sign__up__title .back');
const btnSignIn = document.querySelector('.sign__in .sign__in__btn');
const inputSignIn = document.querySelectorAll('.sign__in .sign__in__container input');
const forgotPassword = document.querySelector('.forgot__pass .forgot__password');
const resetPassword = document.querySelector('.sign__up .reset__password');
const register = document.querySelector('.sign__up .register');

let arrAccount = [];

openLogin.onclick = () => {
    loginOverlay.style.display = 'block';
    overlay.style.display = 'block';
}

createAccount.onclick = () => {
    signIn.style.transform = 'translateX(-100%)';
    signUp.style.transform = 'translateX(0%)';
    resetPassword.style.display = 'none';
    register.style.display = 'block';
}

forgotPassword.onclick = () => {
    signIn.style.transform = 'translateX(-100%)';
    signUp.style.transform = 'translateX(0%)';
    resetPassword.style.display = 'block';
    register.style.display = 'none';
}

btnSignUp.onclick = () => {
    let check = 1;
    for(let i=0 ; i<inputSignUp.length ; i++) {
        if(inputSignUp[i].value === '') {
            check = 0;
            break;
        }
    }
    if( inputSignUp[1].value != inputSignUp[2].value ) {
        check = 0;
    }
    if( check == 0 ) alert('Không thành công, mời nhập lại!');
    else {
        let accCurrent = {userName: inputSignUp[0].value, password: inputSignUp[1].value};
        arrAccount.push(accCurrent);
        signIn.style.transform = 'translateX(0%)';
        signUp.style.transform = 'translateX(100%)';
        alert('Tạo tài khoản thành công!');
    }
}

backSignIn.onclick = () => {
    signIn.style.transform = 'translateX(0%)';
    signUp.style.transform = 'translateX(100%)';
}

btnSignIn.onclick = () => {
    console.log(arrAccount);
    let check = 1;
    for(let i=0 ; i<inputSignIn.length ; i++) {
        if(inputSignIn[i].value === '') {
            check = 0;
            break;
        }
    }
    if(check == 0) alert('Nhập không hợp lệ!');
    else {
        let ok = 0;
        for(let i=0 ; i<arrAccount.length ; i++) {
            if( inputSignIn[0].value === arrAccount[i].userName && inputSignIn[1].value === arrAccount[i].password) {
                ok = 1;
                break;
            }
        }
        if( ok == 1 ) {
            alert('Welcome ' + inputSignIn[0].value + '!');
            overlay.style.display = 'none';
            loginOverlay.style.display = 'none';
        }
        else alert('Tài khoản hoặc mật khẩu không đúng!');
    }
}
