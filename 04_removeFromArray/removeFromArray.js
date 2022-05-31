const removeFromArray = function(userList, userParam) {
    
    for (let j = 1; j < arguments.length; j++){
        for(let i = 0; i < userList.length; i++){
            if(userList[i] === arguments[j]){
                userList.splice(i, 1);
            }
        }
    }

    return userList;
};

// Do not edit below this line
module.exports = removeFromArray;
