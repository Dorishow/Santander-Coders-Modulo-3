class Book {
    constructor({title, genre, author, read = false , date = ''}){
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.date = date;
    }

    markAsFinished(){ 
        // Marca que o livro foi lido e adiciona a data da conclusão da leitura
        this.read = !this.read
        this.updateDate()
    }

    updateDate(){ 
        //Altera a data da conclusão da leitura caso o livro seja finalizado
        this.date = this.read ? new Date(): 'blank';//Caso eu queira desmarcar que o livro foi lido ele volta a ter a data como 'blank'
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
        this.allBooks = [...this.allBooks, book] //Adiciona o livro na lista geral com todos os livros
    }

    finishBook(){
        if(this.actualBook){
        this.actualBook.markAsFinished(); //Marca que o livro já foi lido e adiciona a data de conclusão
        this.readBooks = [...this.readBooks, this.actualBook] //Adiciona na estante de livros lidos
        this.actualBook = this.unreadBooks.shift()
        }else{
            return 'Você não está lendo nenhum livro'
        }
    }

    getlastReadBook(){
        const lastPosition = this.readBooks.length - 1 // Pega a última posição do array de livros lidos
        return this.readBooks[lastPosition] // Retorna o último livro adicionado à estante de livros lidos
    }
    
    listAllBooks(){
        return this.allBooks
    }

    numberOfReadBooks(){
        return this.readBooks.length
    }

    numberOfUnreadBooks(){
        return this.unreadBooks.length
    }

    getCurrentBook(){
        return this.actualBook
    }
    
    nextBookToRead(){
        const [nextBook] = this.unreadBooks
        return nextBook
    }
}


const book1984 = new Book ({
    title: '1984',
    genre: 'dystopian fiction',
    author: 'George Orwell', 
})

const macunaima = new Book ({
    title: 'Macunaíma',
    genre: 'comedy',
    author: 'Mario de Andrade', 
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
bookList.addBook(macunaima)
bookList.addBook(bookAnimalFarm)
bookList.addBook(bookDracula)
bookList.addBook(bookTheLordOfTheRings)
bookList.addBook(bookGameOfThrones)

bookList.finishBook()

const todosOsLivros = bookList.listAllBooks()
console.log("Todos os livros na estante")
console.log(todosOsLivros)

const ultimoLivroLido = bookList.getlastReadBook()
console.log("Ultimo livro lido até então:")
console.log(ultimoLivroLido)

const nLivrosLidos = bookList.numberOfReadBooks()
console.log("quantidade de livros lidos")
console.log(nLivrosLidos)

const nLivrosNaoLidos = bookList.numberOfUnreadBooks()
console.log("quantidade de livros que ainda não foram lidos")
console.log(nLivrosNaoLidos)

const currentBook = bookList.getCurrentBook()
console.log("Livro que está sendo lido atualmente")
console.log(currentBook)

const nextBook = bookList.nextBookToRead()
console.log("Próximo livro a ser lido")
console.log(nextBook)
