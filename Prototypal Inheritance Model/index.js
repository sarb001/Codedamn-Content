

// obj is an object whose prototype is to be returned 
// If no inherited properties are there thn, this method will return null

const a = {
   prop1 : 1
}

const b = {
    prop2: 10
}

const c = {

    prop3 : 1000
}

const d = {
    prop4 : 10000
}


// It is kind of chaining which is used to  link Objects 


d.__proto__ = c 
c.__proto__ = b
b.__proto__ = a 
