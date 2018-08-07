const items = [4,8,5,9];
const mult = reduce(items,(acc,val) => acc * val,1);
console.log(mult);

$('#click').on('click',function(){
    console.log('Ive been clicked');
})


$('#click').off('click');

function reduce(array,callback,initial){
    return array.reduce(callback,initial);
}