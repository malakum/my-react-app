


DROP DATABASE  IF EXISTS react_database ;

CREATE DATABASE react_database;

\c react_database

 CREATE TABLE animals (
    animal_id SERIAL PRIMARY KEY,
    animal_name VARCHAR(30) NOT NULL,
    animal_legs INT DEFAULT 2
 );

 CREATE TABLE northcoders (
  northcoder_id SERIAL PRIMARY KEY,
  northcoder VARCHAR(40) NOT NULL,
  date_of_birth DATE,
  northcoders_points INT DEFAULT 0,
  favourite_animal_id INT REFERENCES animals(animal_id)
);

INSERT INTO animals (animal_name ,animal_legs)
VALUES ('cat', 4),
       ('hen', 2),
       ('dog', 4);

INSERT INTO northcoders (northcoder , date_of_birth,favourite_animal_id)
VALUES ('Zara', '10-MAY-1985',1),
        ('Rayan','20-JUNE-1992',2),
        ('Steven', '12-OCT-1970',3),
        ('Joe','05-AUG-1990',1);

SELECT * FROM animals;        

SELECT * FROM northcoders;        

SELECT * FROM northcoders
INNER JOIN animals
ON northcoders.favourite_animal_id = animals.animal_id;

CREATE TABLE skills(
    skill_id SERIAL PRIMARY KEY ,
    skill_name  VARCHAR(30) ,
    difficulty   INT );

CREATE TABLE northcoders_skills (
    id SERIAL PRIMARY KEY,
    northcoder_id INT REFERENCES northcoders(northcoder_id),
    skill_id INT REFERENCES skills(skill_id)
) ;

INSERT INTO skills (skill_name, difficulty)
VALUES ('Chess', 7),
  ('Eating', 3),
  ('Sitting', 2),
  ('Sleeping', 1),
  ('Javascript', 6),
  ('HTML', 3),
  ('CSS', 10);

  INSERT INTO northcoders_skills(northcoder_id, skill_id)
  VALUES (1,1),
  (1,4),
   (1,6), 
   (2,5), 
   (2,2),
    (2,1),
     (3,3),
      (3,1),
       (3,4),
        (4,5),
         (4,4),
          (4,7);

  


CREATE TABLE genres (
    genre_id SERIAL PRIMARY KEY,
    genre VARCHAR(30) NOT NULL
);

CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    book_genre_id INT  REFERENCES genres(genre_id)
);

SELECT * FROM genres;

SELECT * FROM books;



          