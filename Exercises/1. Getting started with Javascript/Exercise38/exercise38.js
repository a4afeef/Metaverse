
describe_city('London','England');
describe_city('Karachi');
describe_city(null, 'India');

function describe_city(city, country = 'Pakistan'){
    if(city != null){
        console.log(city + ' is in ' + country);
    }
    else{
        console.log('no city provided.')
    }
}