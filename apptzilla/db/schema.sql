	CREATE TABLE apartments
(
	id int NOT NULL AUTO_INCREMENT,
	address varchar(128) NOT NULL,
    price INTEGER, 
    bedroom INTEGER,
    city varchar(200),
    state varchar(10),
    zip INTEGER,
    lat INTEGER,
    long INTEGER,
    image_url TEXT, 
	PRIMARY KEY (id)
);