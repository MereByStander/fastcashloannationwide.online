


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');


window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
