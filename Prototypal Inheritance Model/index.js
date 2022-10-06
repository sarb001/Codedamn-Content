

// obj is an object whose prototype is to be returned 
// If no inherited properties are there thn, this method will return null

        // const a = {
        //    prop1 : 1
        // }

        // const b = {
        //     prop2: 10
        // }

        // const c = {

        //     prop3 : 1000
        // }

        // const d = {
        //     prop4 : 10000
        // }


// It is kind of chaining which is used to  link Objects 

// Now with the help of __proto__ we will able to link Objects and can get access to one another 


    // d.__proto__ = c 
    // c.__proto__ = b
    // b.__proto__ = a 



    // ******
    // Object.setPrototypeof()  ===>    This is used to  create 1 Object inside Another Object and can access it easilly 
    // We are able to set it  Now By  itself 


    // ******
    // JS Prototype chain 


    //  function car()
    //  {
    //     this.fuel = 100;
    //     this.wheels = 4
    //  }
     
    //  const obj1 =  car();

    //  This will give you undefined as output then accessing car.fuel 


    // But for accesing internal data we need to use new 

    //   function car()
    //  {
    //     this.fuel = 100;
    //     this.wheels = 4
    //  }
     
    //  const obj1 =  new car();

    //  Output can be accessed easily like obj1.fuel  = 100 and we can easily manipulate 



    // So now use of .prototypeof() 
        // When you started learning to program, you would have encountered the term object-oriented programming.

    //     The keyword that creates these objects in many programming languages is the class. You define a category with a constructor and a number of other public and personal functions. If you would like one class to inherit from another, you write simple inheritance syntax. You have created a sequence of inheritance. Until ES2015, the language didn’t implement a category. Instead, they used the prototype chain.
    // /   Prototype chains kind of  inheritance Implementation of OOPS in which class can be get fromit and can do the same
     
    
    //     function car()
    //  {
    //     this.fuel = 100;
    //     this.wheels = 4
    //  }
     
    //  car.prototype.type = 'vehicle Mustang '

    //  const obj1 =  new car();       
    //  const obj2 =  new car();


    //  Now with the help of 76 ( car )line we are able to add new value to .prototype
    //  can change it easly  .


    //  Functional Prototype Chain ispresent after that wherer type = "vehicle"  is present 

    // It is great to use that 




    // **********
    // Diff between innerTEXT vs innerHTML 

    // const button = document.getElementById('btn');

    // button.onclick = () =>
    // {
    //     button.innerText = "<b>Somethng else is cha</b> <h3> America wale bai </h3>";
    // }

    // *         With the innerText we are able to Edit the Node Content Directly in which it is Present 
    // * * =>    It doesn't Encode the tags present in that like <b></b> bold and others 



    // *****
    // innerHTML ==> 

            // const button = document.getElementById('btn');

            // button.onclick = () =>
            // {
            //     button.innerHTML = "<b>Somethng else is cha</b> <h3> America wale bai </h3>";
            // }

    //   Here the innerHTML we are able to Encode tags and all others 
    // It is kind of risky  to  use this 



