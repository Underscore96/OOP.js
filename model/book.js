class Book extends Publication{ //nome delle classi sempre con la lettera maiuscola.


    // constructor(title, authors, dop, publisher){
    //     this.title = title;
    //     this.authors = authors;
    //     this.dop = dop;
    //     this.publisher = publisher;
    // }
    constructor(title, authors, dop, publisher){
        super(title,dop, publisher);
        this.authors = authors;
    }
    

    toString(){
        const card = super.toString()+
                    'Autore: ' + this.authors + '\n'
                     return card;
    }
       


}
