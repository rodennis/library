const container = document.getElementById('container');
const add = document.getElementById('add');
const library = ['Moby Dick', 'Peter Pan', 'Harry Potter', 'The Hobbit'];

add.addEventListener('click', () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const hasRead = document.getElementById('hasRead').value
    if (title === '' || author  === '' || pages === '' || hasRead === '') {
        alert("Please fill out the entire form!")
        return console.error("error");
    }

    else {  
        console.log("First name:" + " " + hasRead + "\n" + "Last name:" + " " + author + "\n" + 
        "Email:" + " " + pages + "\n" + "Password:")
    }
})

/*let displayBooks = ( () => {
    for (i = 0; i < library.length; i++) {
        //container.appendChild(library[i])
        console.log(library[i])
    }
})

displayBooks()*/

