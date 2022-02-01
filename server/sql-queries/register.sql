INSERT INTO users (username, password) 
VALUES ('${username}', '${hash}') 
returning username;