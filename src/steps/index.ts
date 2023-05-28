/*Write a function that accepts a positive Number
The function should console log the steps shape
with N levels using the # Character symbol Make sure the steps has spaces on the right hand side
steps(3)
#  ' HAS A # AND TWO SPACES
## ' HAS two # AND ONE SPACE
'###' HAS three and no  SPACE*/

export let staircase=(num:number):void =>{
    for (let row:number = 0; row < num; row++) {
        let steps = ""
        for (let column = 0; column <= num; column++) {
        if (column <= row) {
            steps += "#"
        } else {
            steps += " "
        }
        }
        console.log(steps);
    }
    }
    
staircase(7)

