class Schoolbook extends Book{
    constructor(title, authors, dop, publisher, subjects, grade){
        super(title, dop, authors, publisher);
        this.subjects = subjects;
        this.grade = grade;
    }
    

    toString(){
        const card = super.toString()+
                    'materia: ' + this.subjects + '\n' +
                    'Classe:' + this.grade + '\n';
                     return card;
    }
       


}