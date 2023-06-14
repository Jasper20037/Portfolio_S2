// Variables 

const accordion = document.getElementsByClassName('content-conatiner');


// Loop tough the whole accordion until you've had every question
for (i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function(){
        // Adding or removing a class name
        this.classList.toggle('active');
    })

};