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
    }

}

const livro = new Book ({
    title: 'asd',
    genre: 'horror',
    author: 'fulano',
})
