// Loops are handy, if you want to run the same code over and over again, each time with a different value.

// for loop
x = [1,2,3,4,5,6,7,8,9,10];

for(i =0; i<x.length; i++){
    console.log(x[i])
}

// while loop
i = 0;
while(i < x.length){
    console.log(x[i]);
    i++;
}

// break statement
i = 0;
while(i < x.length){
    if(x[i] == 5){
        break;
    }
    console.log(x[i]);
    i++;
}


// start writing your code here
