

const book1 = {
    title: 'iliade',
    authors: 'omero',
    dop: '27/12/2009',
    publisher: 'einaudi',
}

const book2 = new Book('odissea', 'omero', '27/12/2010', 'einaudi');
const book3 = new Book ('la divina commedia', 'dante', '27/12/1998', 'feltrinelli')

// console.log(book1);
// console.log(book2.title);

// console.log(book1['author']);
// console.log(book2['author']);

function getBookCard(book){
 const card = 'Titolo:' + book.title + '\n' + 
             'Autore: ' + book.author + '\n' +
            'Data di pubblicazione: ' + book.dop + '\n' +
              'Casa editrice: ' + book.publisher + '\n';
              return card;
}

// console.log(getBookCard(book1));

// console.log(book2.toString());
// console.log(book3.toString());

// console.log(book2 + '');
// console.log(book3 + '');




// const pippo = [2, 3, 4, 5, 6];

// console.log(pippo.reduce((acc,curr) => acc + curr, 0));

// console.log(book3.getUpperTitle());

// const magazine1 = new Magazine('opera oggi', '12/6/2023', 'fabbri', 23);

// console.log(magazine1.toString());

// console.log(magazine1.getUpperTitle());

const pub1 = new Publication('pubblicazioni', '12/6/2023', 'fabbri');

// console.log(pub1.toString());
// console.log(pub1.getUpeprTitle());


const schoolb1 = new Schoolbook('matematicando', 'daniele', '23/03/1998', 'la scuola', 'matematica', 'terza media');

// console.log(schoolbook.toString());
// console.log(schoolbook.getUpeprTitle());


const libraryCollection = [book2, book3, schoolb1];

for (const pub of libraryCollection) {
    console.log(pub.toString());
}

