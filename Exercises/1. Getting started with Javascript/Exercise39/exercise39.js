
console.log(city_country('Lahore','Pakistan'));
console.log(city_country('Delhi','India'));
console.log(city_country('Madrid','Spain'));

function city_country(city, country){
    return '"' + city + ', ' + country + '"';
}