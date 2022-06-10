function findMatching(driver, name){
    let newArray = [];
    for(let i = 0; i < driver.length; i++){
        if(driver[i].toLowerCase() === name.toLowerCase()){
            newArray.push(driver[i]);
        }
    }
    return newArray;
}

function fuzzyMatch(drivers, name){
    return drivers.filter(function(letters){
        if(letters.toLowerCase().indexOf(name.toLowerCase()) !== -1){
            for(let i = 0; i < letters.length; i++){
                if(letters.toLowerCase().indexOf(name.toLowerCase()) >= i){
                    return letters.toLowerCase().indexOf(name.toLowerCase()) === i;
                }

            }
        }
    })
}

function matchName(driver, name){
    let newArray = [];
    for(let i = 0; i < driver.length; i++){
        if(driver[i].name === name){
            newArray.push(driver[i]);
        }
    }
    return newArray;
}

