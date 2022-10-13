var alien_colors = ['green','yellow','red'];

alien_colors.forEach(color => {
    if(color === 'green')
        console.log('Player earned 5 points.');
    else if (color === 'yellow')
        console.log('Player earned 10 points.');
    else
        console.log('Player earned 15 points.');
});
