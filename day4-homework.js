// 1. Write a loop that outputs
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// BLAST OFF!

// THEN if you're done. Create a function where I can tell it any number I want to start with (instead of 10)


function numBlast(number) {


    for (let i = number; i >= 0; i--) {
        if (i > 1) {
            console.log("blast off!")
        }
    }
}
numBlast(10)