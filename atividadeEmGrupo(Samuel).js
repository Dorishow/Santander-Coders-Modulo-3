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


class BookList extends Book{

    constructor(){
        super(Book)
        this.actualBook;
        this.readBooks = [];
        this.nextBooks = [];
    }
    addBook(book){
        if(this.actualBook){
            this.nextBooks = [...this.nextBooks, book]
        }else{
            this.actualBook = book;
        }
    }

    finishBook(){
        if(this.actualBook){
        this.actualBook.changeStatus();
        this.readBooks = [...this.readBooks, this.actualBook]
        this.actualBook = this.nextBooks.shift()
        }else{
            return 'Você não está lendo nenhum livro'
        }
    }

    get lastBook(){
        return this.readBooks[(this.readBooks.length -1)]
    }
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


