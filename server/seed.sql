CREATE TABLE Items (
    id INTEGER PRIMARY KEY,
    name varchar(255),
    price decimal,
    description varchar(455)
);

CREATE TABLE Users (
    id INTEGER PRIMARY KEY,
    username varchar(255),
    password varchar(455)
);

CREATE TABLE Cart (
    id INTEGER PRIMARY KEY,
    user_id INT REFERENCES users(id),
    item_id INT REFERENCES items(id),
    

);



INSERT INTO users (username, password)
VALUES ('asdf','pass');


INSERT INTO items (name, price,description)
VALUES ('Apple',.40,'red fruit'),
('Banana',.30,'yellow'),
('Mango',1,'yellow fruit');
