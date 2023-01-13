const firstMsg = ["Hey Buddy!" , "Hey there friend... ", "Alright mate?! ", "Top of the mornin' to ya. "];
const secondMsg = ["How are you doing today? ", "What's crackin?? ", "What's loosey goosey? ", "U good? "];
const thirdMsg = ["I'm Chris, nice to meet you", "I'm Dave, king of the hill!", "I'm Mike, the KING", "I'm Rich... shut up"];

const randMsg = arr => { 
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
};

const displayMessage = (`Your randomly generated message: 
                        ${randMsg(firstMsg)} ${randMsg(secondMsg)} ${randMsg(thirdMsg)}`);

console.log(displayMessage);