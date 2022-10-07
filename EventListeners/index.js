const btn = document.getElementById('btn');
const div = document.getElementById('main-div');


btn.addEventListener('click',() =>  { alert('Clicking on btn') })

div.addEventListener('click',() =>  { alert(' Inside  Div ')  })


    //  btn is present inside main-div 

    // So  What is Event Bubbling ==> 

    // In Modern Browsers when we have EventListeners by Default we have Listners in Bubbling Mode
    // Bubbling Mode means going from Bottom to Top 

    // In same way Events Propagate from bottom to top  so First 

    // Let's suppose  first click  on btn then in Event Bubbling First btn gets triggered then it looks for outside
    // Event Linked with it or Parent Element 

    // So From Bottom to Top from Inside to Output it always looks for Parent until body 
    // So In above case 

    // btn --> div 


    // So now in case of Capturing  it is in Opposite 
    // Here top to bottom approach is taken 

    // First outside element is triggered theit goes deep down inside and inside 