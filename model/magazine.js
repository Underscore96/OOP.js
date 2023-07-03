class Magazine extends Publication{

    // constructor(title, dop, publisher, issue){
    
    //     this.title = title;
    
    //     this.dop = dop;
    
    //     this.publisher = publisher;
    
    //     this.issue = issue;

    constructor(title, dop, publisher){
        super(title, dop, publisher);
        this.issue = issue;
    }




    
    
    toString(){
        const card = super.toString() + 'Numero uscita: ' + this.issue + '\n';
                     return card;
    }
}