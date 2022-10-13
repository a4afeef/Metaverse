
console.log(describe_car('Suzuki', 'Alto', 'Hatch-back', 'white'));
console.log(describe_car('Toyota', 'Prius', 'Sedan', 'Grey', 'hybrid drive'));
console.log(describe_car());

function describe_car(manufacturer, model_name, type, color, feature = null){
    if(manufacturer == null || model_name == null){
        return null;
    }
    
    let description;
    description = model_name + ' by ' + manufacturer + '. Car type is ' + type + ' and color is ' + color + '.';

    if(feature != null){
        description = description + ' It has special feature of ' + feature + '.';
    }

    return description;

}