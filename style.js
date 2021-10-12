const container = document.getElementById('container');
const add = document.getElementById('add');
const library = ['Moby Dick', 'Peter Pan', 'Harry Potter', 'The Hobbit'];
const array = document.getElementsByName('library[]');

let book = ( (title, author, pages, hasRead) => {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
    this.info = function() {
        console.log(`the ${title} by ${author}, ${pages}, ${hasRead}`)
    }
})

const addBookToLibrary = ( () => {
    
})

add.addEventListener('click', () => {
    
})

let displayBooks = ( () => {
    for (i = 0; i < library.length; i++) {
        container.appendChild(library[i])
        //console.log(library[i])
    }
})

displayBooks()

