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

            const newDiv = document.createElement('div');
            const userTitle = document.createElement('p')
            userTitle.setAttribute('id', 'userTitle')
            const userAuthor = document.createElement('p')
            userAuthor.setAttribute('id', 'userAuthor')
            const userPages = document.createElement('p')
            userPages.setAttribute('id', 'userPages')
            const userRead = document.createElement('p')
            userRead.setAttribute('id', 'userRead')
            newDiv.appendChild(userTitle)
            newDiv.appendChild(userAuthor)
            newDiv.appendChild(userPages)
            newDiv.appendChild(userRead)
            container.appendChild(newDiv);

            library.push(`${title} by: ${author}, ${pages} pages, Read: ${hasRead}`)

            const postBook = ( () => {
                document.getElementById('userTitle').innerHTML = title
                document.getElementById('userAuthor').innerHTML = author
                document.getElementById('userPages').innerHTML = pages
                document.getElementById('userRead').innerHTML = hasRead
            })  

            postBook()

}) 

let displayBooks = ( () => {
    for (i = 0; i < library.length; i++) {
        console.log(library[i])
    }
})

displayBooks()
