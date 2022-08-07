//chained if/elsevif statements.
function chanined(num){
    if (num < 5) {
        return "Tiny";
    } else if (num <10) {
        return "Small";
    } else if (num < 15){
        return "medium";
    } else if (num < 20) {
        return "large";
    } else {
        return "huge";
    }
    
}
console.log(chanined(50));



//switch statements
function caseInSwitch(val){
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "Beta";
            break;
        case 3:
            answer = "Gamma" ;
            break;
        case 4:
            answer = "Delta";
            break;
        default:
            answer = "stuff"
            break;
    }

    return answer;
}

console.log(caseInSwitch(2));

//Black jack

var count =0;

function cc(card) {
    switch(card){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "K":
        case "Q":
        case "A":
            count --;
            break;
    }

    var holdbet = "Hold";

    if (count > 0) {
        holdbet = "Bet"
    }

    return count + " " + holdbet;

}
cc(2); cc(10); cc(7)
console.log(cc(4))


//objects like a dictionary.
 var ourDog = {
    "name": "gas",
    "legs": 4,
    "tail": 1
 };

 //update
 ourDog.name = "kadx"

 //adding a new property to new values
 ourDog.play= "jump";

 //delete a property
delete ourDog.play;


 //accessing values use ourDog.name = "lalala"
 var nameValue= ourDog["name"];
 console.log(nameValue);
