// // from lecture 3
// var titles = document.getElementsByClassName('title');

// console.log(titles);

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(item){
//     console.log(item);
// })

// // // from lecture 4
// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

// var books = document.querySelector('#book-list li .name');
// console.log(books);

// books = document.querySelectorAll('#book-list li .name');
// console.log(books);

// Array.from(books).forEach(function(book){
//     console.log(book);
// })

// // from lecture 5
// var books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//     book.textContent += '(book title)';
// })

// const bookLsit = document.querySelector('#book-list');
// bookLsit.innerHTML = '<h2>Hello good people</h2>';
// bookLsit.innerHTML += '<p>Hello good people</p>';

// from lecture 6
const banner = document.querySelector('#page-banner')

console.log('#page-banner node type is: ', banner.nodeType)
console.log('#page-banner node name is: ', banner.nodeName)
console.log('#page-banner has child nodes: ', banner.hasChildNodes())

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);

// from lecture 7
const bookList = document.querySelector('#book-list');

console.log('The parent node is: ', bookList.parentNode);
console.log('The parent element is: ', bookList.parentElement.parentElement);

console.log(bookList.childNodes)
console.log(bookList.children)

// from lecture 8
// const bookList = document.querySelector('#book-list');

console.log('book-list next sibling is: ', bookList.nextSibling)
console.log('book-list next element sibling is: ', bookList.nextElementSibling)

console.log('book-list previous sibling is: ', bookList.previousSibling)
console.log('book-list previous element sibling is: ', bookList.previousElementSibling)

bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> Too cool for everyone else!'

// from lecture 9

var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    })
})

// from lecture 10

// Better approach 
var list = document.querySelector('#book-list ul');

list.addEventListener('click', function(e){
    if (e.target.className = 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})