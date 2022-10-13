var current_users = ['Sam', 'Wilson', 'Admin', 'Fin', 'Mike', 'Kim'];
var new_users = ['Daniel', 'SAM', 'mike', 'Eric', 'Rachel'];

new_users.forEach(new_user => {
    if(current_users.toLocaleString().toLocaleLowerCase().split(',').includes(new_user.toLowerCase())){
        console.log(new_user + ' should not be accepted.');
    }
    else{
        console.log(new_user + ' is available.');
    } 
});