var usernames = ['Sam', 'Wilson', 'Admin', 'Fin', 'Mike', 'Kim'];

usernames.forEach(user => {
    if(user.toLowerCase() === 'admin'){
        console.log('Hello Admin, would you like to see a status report?');
    }
    else{
        console.log('Hello ' + user + ', thank you for logging in again.');
    }
});