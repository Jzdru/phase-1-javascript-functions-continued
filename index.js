function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(name){
    return function(param = "special", parameter = "*", parameter2 = "You are") {
        console.log(`${parameter2} ${parameter}${param}!`)
    }
}
