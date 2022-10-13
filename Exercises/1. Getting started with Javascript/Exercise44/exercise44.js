let items = ['salad','beef patty', 'mayonnaise'];
make_sandwich(items);

items = ['chilli sauce', 'mushrooms'];
make_sandwich(items);

items = ['jalapeno', 'cheese', 'chicken patty', 'mushrooms'];
make_sandwich(items);

function make_sandwich(items){
    console.log('Following items are included in sandwich:');
    items.forEach(item => {
        console.log(item);
    });
}