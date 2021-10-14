const container = document.getElementById('container');
const add = document.getElementById('add');
const library = ['noby dick', 'sean connery', 'your mom'];

function book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
    this.info = function() {
        console.log(`the ${title} by ${author}, ${pages}, ${hasRead}`)
    }
}


function addBookToLibrary() {
    add.addEventListener('click', () => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const pages = document.getElementById('pages').value;
        const hasRead = document.getElementById('hasRead').value;
        
        userBook = new book(title, author, pages, hasRead)
            if (title === '' || author === '' || pages === '' || hasRead === '')
                return alert('Please fill out the entire form!');
            
            else {
                library.push(`Title: ${userBook.title}, Author: ${userBook.author}, Pages: ${userBook.pages}, Read: ${userBook.hasRead}`);
        
                const title = document.getElementById('title').value = '';
                const author = document.getElementById('author').value = '';
                const pages = document.getElementById('pages').value = '';
                const hasRead = document.getElementById('hasRead').value = '';
            }
})
}

addBookToLibrary()

let displayBooks = ( () => {
    for (i = 0; i < library.length; i++) {
        const newDiv = document.createElement('div');
        container.appendChild(newDiv);
        const PostBook = document.createElement('p')
        newDiv.appendChild(PostBook);
        console.log(library[i])
    }
})

displayBooks()