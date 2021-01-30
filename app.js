const card      = document.querySelector('.card');
const container = document.querySelector('.container');

//animated items
const pokemon     = document.querySelector('.pokemon img');
const title       = document.querySelector('.title');
const description = document.querySelector('.info h3');
const sizes       = document.querySelector('.stats');
const purchase    = document.querySelector('.purchase button');




//moving animation event
card.addEventListener('mousemove', (e)=>{
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

// Animated in
card.addEventListener('mouseenter', ()=>{
    card.style.transition = 'none';

    //Popout
    pokemon.style.transform     = `translateZ(200px) rotateZ(-45deg)`
    title.style.transform       = `translateZ(150px)`
    description.style.transform = `translateZ(125px)`
    sizes.style.transform       = `translateZ(100px)`
    purchase.style.transform    = `translateZ(75px)`
    

});

// Animated out
card.addEventListener('mouseleave', (e)=>{
    
    card.style.transition = 'all .6s ease';
    card.style.transform = 'rotateY(0) rotateX(0)';

    //Popback
    pokemon.style.transform     = `translateZ(0) rotateZ(0)`
    title.style.transform       = `translateZ(0)`
    description.style.transform = `translateZ(0)`
    sizes.style.transform       = `translateZ(0)`
    description.style.transform = `translateZ(0)`


});