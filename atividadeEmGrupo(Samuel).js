class Book {
    constructor({title, genre, author, read = false , date = ''}){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.date = date;
    }

    changeStatus(){
        this.read = !this.read
        this.updateDate()
    }

    updateDate(){
        this.date = this.read ? new Date(): 'blank';
    }
}


class BookList{

    constructor(){
        this.actualBook;
        this.allBooks = [];
        this.readBooks = [];
        this.unreadBooks = [];
    }
    
    addBook(book){
        if(this.actualBook){
            this.unreadBooks = [...this.unreadBooks, book]
        }else{
            this.actualBook = book;
        }
        this.allBooks = [...this.allBooks, book]
    }

    finishBook(){
        if(this.actualBook){
        this.actualBook.changeStatus();
        this.readBooks = [...this.readBooks, this.actualBook]
        this.actualBook = this.unreadBooks.shift()
        }else{
            return 'Você não está lendo nenhum livro'
        }
    }

    getlastBook(){return this.readBooks[(this.readBooks.length -1)]}
    listAllBooks(){return this.allBooks}
    numberOfReadBooks(){return this.readBooks.length}
    numberOfUnreadBooks(){return this.unreadBooks.length}
}


const book1984 = new Book ({
    title: '1984',
    genre: 'dystopian fiction',
    author: 'George Orwell', 
})

const bookAnimalFarm = new Book ({
    title: 'Animal Farm',
    genre: 'Political satire',
    author: 'George Orwell',
})

const bookDracula = new Book ({
    title: 'Dracula',
    genre: 'Terror',
    author: 'Bram Stoker',
})

const bookTheLordOfTheRings = new Book ({
    title: 'The Lord of the Rings',
    genre: 'Fiction',
    author: 'J. R. R. Tolkien',
})

const bookGameOfThrones = new Book ({
    title: 'Game of Thrones',
    genre: 'Fiction',
    author: 'George Martin',
})

const bookList = new BookList;

bookList.addBook(book1984)
bookList.addBook(bookAnimalFarm)
bookList.addBook(bookDracula)
bookList.addBook(bookTheLordOfTheRings)
bookList.addBook(bookGameOfThrones)

bookList.finishBook()
const todos = bookList.listAllBooks()
console.log("todos")
console.log(todos)

const ultimo = bookList.getlastBook()
console.log("ultimo")
console.log(ultimo)

const nDeLidos = bookList.numberOfReadBooks()
console.log("quantidade de livros lidos")
console.log(nDeLidos)

const nDeNaoLidos = bookList.numberOfUnreadBooks()
console.log("quantidade de livros que ainda não foram lidos")
console.log(nDeNaoLidos)
