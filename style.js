const container = document.getElementById('container');
const add = document.getElementById('add');
const library = ['noby dick', 'sean connery', 'your mom'];

let book = ( (title, author, pages, hasRead) => {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
    this.info = function() {
        console.log(`the ${title} by ${author}, ${pages}, ${hasRead}`)
    }
})

add.addEventListener('click', () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const hasRead = document.getElementById('hasRead').value
        library.push(`${title} by: ${author}, ${pages} pages, Read: ${hasRead}`)
})

let displayBooks = ( () => {
    for (i = 0; i < library.length; i++) {
        const newDiv = document.createElement('div');
        container.prepend(newDiv);
        
        //console.log(library[i])
    }
})

displayBooks()
