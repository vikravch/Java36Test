const elementArr = [
    document.getElementById('mainUl'),
    document.getElementById('firstLi'),
    document.getElementById('spanFirstLi'),
    document.getElementById('btnFirstLi')
]

elementArr.forEach(
    (element)=>{
        element.addEventListener('click',
            (event) => {
               console.log(event.target);
            }
        )
    }
)

/*function funErr(){
    const a = 12;
    a = 24;
}*/
// error 
const funErr = index =>{
    const a = 12;
    //a = 24;
    if (index >= elementArr.length){
        //throw new Error('OurIndexError');
        throw {value:index, why:'because bigger'};
    }
    if (index<0){
        throw {value:index, why:'because minus'};
    }

    let b = elementArr[index].click();
    console.log(b);
};

const funSecond = index =>{
    funErr(index);
}
try{
    funSecond(-8);
} catch(error){
    console.log('error when call '+error.value+' error why? '+error.why);
}

document.getElementById('mainUl')
    .addEventListener('click',
    (event) => {
        console.log('click from ul');
    });
document.getElementById('firstLi')
    .addEventListener('click',
        (event) => {
            event.stopPropagation();
            console.log('click from li');
    });
document.getElementById('spanFirstLi')
    .addEventListener('click',
    (event) => {
        console.log('click from span');
    });

document.getElementById('btnFirstLi')
    .addEventListener('click',
    (event) => {
        console.log('click from btn');
    });


