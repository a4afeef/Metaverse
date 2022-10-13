var persons = ['Madiha','Rozina','Saba'];

persons.forEach(person => {
   document.write('I would like to invite ' + person + ' to dinner.<br>');
});

document.write('<br>' + persons[2] + ' can not arrive.<br><br>');

persons[2] = 'Rehana';

persons.forEach(person => {
   document.write('I would like to invite ' + person + ' to dinner.<br>');
});

document.write('<br>We have got a larger dinner table to invite more people to dinner.<br><br>');

persons.unshift('Sumaira');   //add element at start of list
persons.splice(2,0,'Sobia');  //add element at middle (index = 2) of list
persons.push('Lubna');        //add element at end of list

persons.forEach(person => {
    document.write('I would like to invite ' + person + ' to dinner.<br>');
 });