const format = require('pg-format');
const genresArr = [
    { genre: 'thriller' },
    { genre: 'romance' },
    { genre: 'sci-fi' },
  ];
  
  const booksArr = [
    { title: 'bookA', book_genre: 'thriller' },
    { title: 'bookB', book_genre: 'thriller' },
    { title: 'bookC', book_genre: 'romance' },
  ];

 const booksNestedArr = booksArr.map((book)=>{
   
    return [ book.title , book.book_genre]
 });
 console.log(booksNestedArr);



  const genreInsertStr =  format (
    ` INSERT INTO genres (genre)
      VALUES %L
      RETURNING *;`,
      genresArr    
  );
  
  const genreSelect = format (
    `SELECT * FROM genres RETURNING *;`
  );

  
  
  const bookInsertStr =   format (
    `INSERT INTO books (title , book_genre_id)
     VALUES %L
     RETURNING *;`,
      booksArr
  );
  
  console.log( bookInsertStr);
  console.log( genreInsertStr);
  console.log(genreSelect);
  