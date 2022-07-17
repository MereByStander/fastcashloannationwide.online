const container = document.querySelectorAll('.div_container1')
const fas_lift = document.querySelector('.fa-angle-left1')
const fas_rigth = document.querySelector('.fa-angle-right1')
const num = document.querySelector('.num1')
var x = 1
function show(){
    for(var i = 0; i < container.length; i++){
        container[i].style.display = "none" 
    }
    if(x > container.length){
        x = 1
    }
    if(x < 1){
        x = container.length
    }
    container[x - 1].style.display = "block"
    container[x - 1].classList.add('animate')
    num.innerHTML = `${x} / ${container.length}`
}
fas_rigth.addEventListener('click', ()=>{
    x += 1
    show()
})
fas_lift.addEventListener('click', ()=>{
    x -= 1
    show() 
})

show()