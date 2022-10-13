var usernames = ['Sam', 'Wilson', 'Admin', 'Fin', 'Mike', 'Kim'];

if(usernames.length == 0){
    console.log('We need to find some users!');
}
else{
    usernames.forEach(user => {
        if(user.toLowerCase() === 'admin'){
            console.log('Hello Admin, would you like to see a status report?');
        }
        else{
            console.log('Hello ' + user + ', thank you for logging in again.');
        }
    });
}

usernames.length = 0;  //empty the list to make sure correct message is displayed

if(usernames.length == 0){
    console.log('We need to find some users!');
}
else{
    usernames.forEach(user => {
        if(user.toLowerCase() === 'admin'){
            console.log('Hello Admin, would you like to see a status report?');
        }
        else{
            console.log('Hello ' + user + ', thank you for logging in again.');
        }
    });
}
