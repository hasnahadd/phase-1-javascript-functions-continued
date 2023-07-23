// code your solution here
function saturdayFun(activity = "roller-skate") {
    
    return `This Saturday, I want to ${activity}!`;
}



function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(test) {
    return function (worker = 'a hard worker') {
        return `You are ${test}${worker}${test}!`;
    };
}

