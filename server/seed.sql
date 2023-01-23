CREATE TABLE Items (
    id SERIAL PRIMARY KEY,
    name varchar(255),
    price decimal,
    pic_url varchar(400),
    description varchar(455)
);

CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    username varchar(255),
    password varchar(455)
);

CREATE TABLE Cart (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    item_id INT REFERENCES items(id),
    quanity INTEGER
);



INSERT INTO users (username, password)
VALUES ('asdf','pass');


INSERT INTO items (name, price,description,pic_url)
VALUES ('Apple',.40,'red fruit','https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Fruit-PNG/Apple_PNG_Clip_Art_PNG_Image.png?m=1507172114'),
('Banana',.30,'yellow fruit', 'https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Fruit-PNG/Banana_Transparent_Clip_Art_Image.png?m=1521695752'),
('Mango',1.50,'yellow fruit','https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Fruit-PNG/Mango_Fruit_PNG_Clip_Art_Image-1896746346.png?m=1536274937'),
('Peach',1,'yellow fruit','https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Fruit-PNG/Peach_Transparent_PNG_Image.png?m=1547777807')
