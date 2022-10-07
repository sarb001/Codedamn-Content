const btn = document.getElementById('btn');
const div = document.getElementById('main-div');


        // btn.addEventListener('click',() =>  { alert('Clicking on btn') })

        // div.addEventListener('click',() =>  { alert(' Inside  Div ')  })


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


    // First parent then child triggered 





// Let's get Deeper with Example of this 

//   we can add more Fucntionality by Bringing  body and html  tag here 


// *******
// One more Example  => 

// In  this by Default  false is written here  for Event bubbling 
    //  ==> Event Bubbling => represents false 

    //  ==> Event Capturing => represents true


  btn.addEventListener('click',hideme,true);
  div.addEventListener('click',showme,true);

  function hideme()
  {
     btn.style.display = 'none'
  }

  function showme()
  {
     btn.style.display = 'block'
  }

//   So here in this Example we are able to write true bcz it  helps us to implement Bubble capturing 

//  ==> if false is written or byDefault first button triggered then div so nothing shows on  screen seems  like nothing happens 
// in case of Bubbling 

// So Better to use Capturing 