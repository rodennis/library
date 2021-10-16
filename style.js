const container = document.getElementById('container');
const add = document.getElementById('add');
const addBook = document.getElementById('addBook')
const library = [];

function book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
    this.info = function() {
        console.log(`the ${title} by ${author}, ${pages}, ${hasRead}`)
    }
}

addBook.addEventListener('click', () => {
    document.getElementById('book-submission').className="show"
})


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

            document.querySelectorAll("#mainDiv").forEach(e => e.remove());

            for (i = 0; i < library.length; i++)  {
              
            newDiv = document.createElement('div');
            newDiv.setAttribute('id', 'mainDiv');
            const mainDiv = document.getElementById('#mainDiv');
            const newP = document.createElement('p');
            newP.setAttribute('id', 'mainPara');
            const mainPara = document.getElementById('mainPara');
                container.appendChild(newDiv);
                newDiv.appendChild(newP);
                newP.textContent = library[i];    
    }
    document.getElementById('book-submission').className="hide";
    })
}

addBookToLibrary()