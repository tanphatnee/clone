// body

// Header
const header = document.querySelector('.header');
let rect_header = header.getBoundingClientRect();

// header.addEventListener("mousemove" , function(event) {
//     header.style.backgroundColor = '#fff';
// })

// header.addEventListener("mouseleave" , function(event) {
//     header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
// })

// List-product
const product = document.querySelector('.list__item2');
const listProduct = document.querySelector('.list__product');
const closeListProduct = document.querySelector('.product__footer i');
let rect_Product = product.getBoundingClientRect();
let rect_listProduct = listProduct.getBoundingClientRect();

product.addEventListener("mousemove", function(event) {
    listProduct.style.transform = 'translateY(0%)';
    header.style.backgroundColor = '#fff';
})

closeListProduct.onclick = function() {
    listProduct.style.transform = 'translateY(-100%)';
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

// cart
const cartClick = document.querySelector('.fa-shopping-bag');
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


// choose color

// const areaChooseColor = document.querySelectorAll('.card__item');
// const yourChoose = document.querySelectorAll('.your__choose');

// for(let i=0 ; i<areaChooseColor.length ; i++) {
//     areaChooseColor[i].addEventListener('mouseout', (event) => {
//         for(let j=0 ; j<yourChoose.length ; j++) {
//             yourChoose[j].style.display = 'none';
//         }
//     })
// }

const chooseColor1 = document.querySelectorAll('.color__item1');
const chooseColor2 = document.querySelectorAll('.color__item2');
const chooseColor3 = document.querySelectorAll('.color__item3');

const tShirtColor1 = document.querySelectorAll('.your__choose.choose__color1');
const tShirtColor2 = document.querySelectorAll('.your__choose.choose__color2');
const tShirtColor3 = document.querySelectorAll('.your__choose.choose__color3');

for(let i=0 ; i<chooseColor1.length ; i++) {
    chooseColor1[i].onclick = () => {
        tShirtColor1[i].style.display = 'block';
        tShirtColor2[i].style.display = 'none';
        tShirtColor3[i].style.display = 'none';
    }

    chooseColor1[i].addEventListener('mousemove', () => {
        tShirtColor1[i].style.display = 'block';
        tShirtColor2[i].style.display = 'none';
        tShirtColor3[i].style.display = 'none';
    })
}

for(let i=0 ; i<chooseColor2.length ; i++) {
    chooseColor2[i].onclick = () => {
        tShirtColor2[i].style.display = 'block';
        tShirtColor1[i].style.display = 'none';
        tShirtColor3[i].style.display = 'none';
    }

    chooseColor2[i].addEventListener('mousemove', () => {
        tShirtColor2[i].style.display = 'block';
        tShirtColor1[i].style.display = 'none';
        tShirtColor3[i].style.display = 'none';
    })
}

for(let i=0 ; i<chooseColor3.length ; i++) {
    chooseColor3[i].onclick = () => {
        tShirtColor3[i].style.display = 'block';
        tShirtColor2[i].style.display = 'none';
        tShirtColor1[i].style.display = 'none';
    }

    chooseColor3[i].addEventListener('mousemove', () => {
        tShirtColor3[i].style.display = 'block';
        tShirtColor2[i].style.display = 'none';
        tShirtColor1[i].style.display = 'none';
    })
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


const toggleMenu = document.querySelector('.menu');

menubar.onclick = () =>  {
    toggleMenu.classList.toggle('active')
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








