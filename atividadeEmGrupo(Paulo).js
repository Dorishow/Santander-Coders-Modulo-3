class Book {

    constructor({title, genre, author, read = false , date = undefined}){
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
        this.date = this.read ? new Date() : undefined
    }

}

class BookList{
    constructor(bookList){
        this.booksRead= bookList.reduce((total, current)=>(current.read ? total+1 : total), 0);
        this.booksNotRead= bookList.length - this.booksRead;
        this.lastBookRead= undefined
        this.currentBook= undefined
        this.nextBook= undefined;
        this.allBooks= bookList;
    }
    countBooksNotRead(){
        let booksNotRead = 0;
        for (let book of this.allBooks){
            if (!book.read){
                booksNotRead += 1;
            }
        }
        return booksNotRead;
    }
    addBook(book){
        return this.allBooks = [...this.allBooks, book];
    }
    nextUnreadBook(){
        for (let book of this.allBooks){
            if (!book.read){
                return book;
            }
        }
    }
    finishCurrentBook(){
        this.lastBookRead = this.currentBook;
        this.currentBook = this.nextBook;
        this.nextBook = nextUnreadBook();
    }
}

const animalFarm = new Book ({
    title: 'Animal Farm',
    genre: 'Political satire',
    author: 'George Orwell',
});

const dracula = new Book ({
    title: 'Dracula',
    genre: 'Horror',
    author: 'Bram Stoker',
});

const hobbit = new Book ({
    title: 'The Hobbit',
    genre: 'Fantastic Fiction',
    author: 'J.R.R. Tolkien',
});

const favoriteBooksList = new BookList([animalFarm, dracula]);
