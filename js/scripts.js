'use strict';




const button = document.querySelector('#generateList');
const myList = document.querySelector('#myList');
const ul = document.createElement('ul');
myList.append(ul);

button.addEventListener('click', function (e) {
    const myListItems = document.querySelectorAll('.input');
    myListItems.forEach(function(item){
        const li = document.createElement('li')
        ul.append(li);
        li.innerText = item.value;
        console.log(item.value);
    })

   
});