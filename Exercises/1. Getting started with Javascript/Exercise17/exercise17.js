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

 document.write('<br>We can only invite 2 persons to the dinner.<br><br>');

 for(let i = persons.length; i > 2; i--){
    let person_removed = persons.pop();     //pop() function will remove last element and return the removed element
    document.write('We are sorry, we can\'t invite ' + person_removed + ' to the dinner.<br>');
 }

 persons.forEach(person => {
    document.write('<br>' + person + ' is still invited to the dinner.');
 });