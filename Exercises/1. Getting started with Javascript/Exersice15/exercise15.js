 var persons = ['Madiha','Rozina','Saba'];

 persons.forEach(person => {
    document.write('I would like to invite ' + person + ' to dinner.<br>');
 });

 document.write('<br>' + persons[2] + ' can not arrive.<br><br>');

 persons[2] = 'Rehana';

 persons.forEach(person => {
    document.write('I would like to invite ' + person + ' to dinner.<br>');
 });