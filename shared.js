var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal')
var modalNobutton = document.querySelector('.modal__action--negative')
var selectPlanButton = document.querySelectorAll('.plan button')
var toggleButton = document.querySelector('.toggle-button')
var mobileNav = document.querySelector('.mobile-nav')


//modal
for (var i = 0;  i < selectPlanButton.length; i++)  {
    selectPlanButton[i].addEventListener('click',function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    });
}

//closes the menu if the No button is clicked
if (modalNobutton) {
    modalNobutton.addEventListener('click', closeModal);
    
}



//hamburger menu

//opening menu after clicking the button
toggleButton.addEventListener('click', function(){
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';     
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});

//closing the menu if the backdrop or the menu icon is clicked 
backdrop.addEventListener('click', function(){
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open');
    closeModal();
});


function closeModal(){
    // backdrop.style.display = 'none';
    // modal.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
        
    }
    backdrop.classList.remove('open');
}