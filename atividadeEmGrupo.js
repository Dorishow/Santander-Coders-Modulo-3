class Book {

    constructor({title, genre, author, read = false , date = 'blank'}){
        
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.read = read;
        this.date = date;
    
    }

    markAsFinished(){ // Atualiza livro foi lido e adiciona a data da conclusão da leitura
        this.read = !this.read
        this.updateDate()
    }

    updateDate(){ // Atualiza a data da conclusão da leitura
        this.date = this.read ? new Date() : 'blank'; // Verifica a situação da leitura e atualiza a data
    }
}

class BookList {

    constructor(){
        this.actualBook;
        this.allBooks = [];
        this.readBooks = [];
        this.unreadBooks = [];
    }
    
    addBook(book){ 
        if(!this.actualBook && !book.read) {
            
            this.actualBook = book;
            
        } else {
            
            this.validateBook(book)
        
        }
        
        this.allBooks = [...this.allBooks, book] //Adiciona o livro na lista geral com todos os livros
    }

    finishBook(){
        if(this.actualBook) {

            this.actualBook.markAsFinished(); //Marca que o livro já foi lido e adiciona a data de conclusão
            this.readBooks = [...this.readBooks, this.actualBook] //Adiciona na estante de livros lidos
            this.actualBook = this.unreadBooks.shift()
        
        } else {
            console.log('Você não está lendo nenhum livro atualmente')
        }
    }
    
    validateBook(book){ // verificando qual livro está lido ou náo e coloca na categoria correta, Lidos ou Não lidos...
        book.read ? this.readBooks = [...this.readBooks, book] : this.unreadBooks = [...this.unreadBooks, book] 
    }

    get lastReadBook(){ // Retorna o último livro adicionado à estante de livros lidos
        return this.readBooks[this.readBooks.length - 1] || 'Você não leu nenhum livro ainda'
    }
    
    get nextBookToRead(){ // Retorna próximo livro a ser lido
        return this.unreadBooks[0] || 'Não há proximo livro para ler na sua lista'
    }

    get allBooksList(){ return this.allBooks.length ? this.allBooks : 'Você não adicionou nenhum livro na sua lista'} // Acessor que retorna a lista de  todos os livros

    get numberOfReadBooks(){ return this.readBooks.length } // Acessor que retorna o Numero de Livros Lidos

    get numberOfUnreadBooks(){ return this.unreadBooks.length }// Acessor que retorna o mumero de Livros Lidos

    get currentBook(){ return this.actualBook || 'Você não está lendo nenhum livro atualmente'}
}

const livros = [{title: '1984',genre: 'dystopian fiction',author: 'George Orwell', read: true, date: new Date()},{title: 'Macunaíma',genre: 'comedy',author: 'Mario de Andrade', },{title: 'Animal Farm',genre: 'Political satire',author: 'George Orwell',},{title: 'Dracula',genre: 'Terror',author: 'Bram Stoker',read: true,date: new Date()},{title: 'Game of Thrones',genre: 'Fiction',author: 'George Martin',},{title: 'Do mil ao milhão',genre: 'finances',author: 'Thiago Nigro',read: true,date: new Date()},{title: 'O poder do hábito',genre: 'self-knowledge',author: 'Charles Dumingg'},{title: 'Terapia de Guerrilha',genre: 'self-knowledge',author: 'Dr. Italo Marsili'},{title: 'Harry potter e a pedra filosofal',genre: 'Fiction',author: 'J. K. Rowling'},{title: 'Seja foda',genre: 'self-knowledge',author: 'J. K. Rowling',read: true,date: new Date()},{title: 'The lord of the rings',genre: 'Fiction',author: 'J. R. R. Tolkien',}]
// Os livros (em objetos)

const bookList = new BookList // Instanciando uma nova BookList

livros // Criando uma intancia Book de cada livro, e adicionando na Book list
.map(livro => new Book(livro)) // Instanciando uma nova classe de livros para cada objeto de livro
.forEach(book => bookList.addBook(book)) // Adicionando as instanciações de livros na BookList

// Baseado no teste já criado, pode ignorar

console.log("Todos os livros na lista")
console.log(bookList.allBooksList)

console.log("Ultimo livro lido até então:")
console.log(bookList.lastReadBook)

console.log("quantidade de livros lidos")
console.log(bookList.numberOfReadBooks)

console.log("quantidade de livros que ainda não foram lidos")
console.log(bookList.numberOfUnreadBooks)

console.log("Livro que está sendo lido atualmente")
console.log(bookList.currentBook)

console.log("Próximo livro a ser lido")
console.log(bookList.nextBookToRead)

bookList.finishBook()

console.log("Todos os livros na estante")
console.log(bookList.allBooksList)

console.log("Ultimo livro lido até então:")
console.log(bookList.lastReadBook)

console.log("quantidade de livros lidos")
console.log(bookList.numberOfReadBooks)

console.log("quantidade de livros que ainda não foram lidos")
console.log(bookList.numberOfUnreadBooks)

console.log("Livro que está sendo lido atualmente")
console.log(bookList.currentBook)

console.log("Próximo livro a ser lido")
console.log(bookList.nextBookToRead)

bookList.finishBook()

console.log("Todos os livros na estante")
console.log(bookList.allBooksList)

console.log("Ultimo livro lido até então:")
console.log(bookList.lastReadBook)

console.log("quantidade de livros lidos")
console.log(bookList.numberOfReadBooks)

console.log("quantidade de livros que ainda não foram lidos")
console.log(bookList.numberOfUnreadBooks)

console.log("Livro que está sendo lido atualmente")
console.log(bookList.currentBook)

console.log("Próximo livro a ser lido")
console.log(bookList.nextBookToRead)

bookList.finishBook()
