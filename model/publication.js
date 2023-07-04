class Publication{
    constructor(title, dop, publisher){
        this.title = title;

        const dopArray = dop.split('/');
        const year = parseInt(dopArrat[2])
        const month = parseInt(dopArray[1]) -1;
        const day = parseInt(dopArray[0])



        this.dop = new Date(year, month, day);
        this.publisher = publisher;
    }

    toString(){
        const card = 'Titolo:' + this.title + '\n' + 
                   'Data di pubblicazione: ' + this.dop + '\n' +
                     'Casa editrice: ' + this.publisher + '\n';
                     return card;
    }

    getUpperTitle(){
        const upperTitle = this.title.toUpperCase();
        return upperTitle;
    }
}
