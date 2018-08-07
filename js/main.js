const items = [4,8,5,9];
const mult = items.reduce((acc,val) => acc * val,1);
console.log(mult);

$('#click').on('click',function(){
    console.log('Ive been clicked');
})


$('#click').off('click');