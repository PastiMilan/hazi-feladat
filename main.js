let header = document.querySelector('.header');
let hammenu = document.querySelector('.ham-menu');

hammenu.addEventListener('click', function(){
    header.classList.toogle('menu-open');
})
let szobaar=72000;


function frissitdsASzemelyeket(){
    let szemelyek =documents.getElementById("ar");
    let szemelyek_szama=document.getElementById("szam").value;
    
    szemelyekf.innerHTML = szobaar + szemelyek_szama +" Ft";
}