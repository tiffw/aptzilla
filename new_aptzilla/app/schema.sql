
CREATE DATABASE apartments_db;
USE apartments_db;


CREATE TABLE apartments  (
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


INSERT INTO `Apartments` (`id`, `address`, `price`, `bedroom`, `city`, `state`, `zip`, `lat`, `long`, `image_url`, `created_at`, `updated_at`) 
VALUES
    (1, '1725 Kearny St', '11500', '3', 'San Francisco', 'CA', '94133', '37.804007', '-122.406859', 'https://images.craigslist.org/00P0P_560otPgjwRN_600x450.jpg'),
    (2, '88 Howard St', '3830', '1', 'San Francisco', 'CA', '94105', '37.773972', '-122.431297', 'https://images.craigslist.org/00V0V_hUK2Hx0IyOo_600x450.jpg'),
    (3, '333 Bush St', '6200', '1', 'San Francisco', 'CA', '94105', '37.7906', '122.4031', 'https://images.craigslist.org/00k0k_cNP0Qpd1GRQ_600x450.jpg'),
    (4, '737 Pine St', '3395', '1', 'San Francisco', 'CA', '94105', '37.773972', '-122.431297', 'https://images.craigslist.org/00G0G_fbHuOLamE3W_600x450.jpg'),
    (5, '123 Mason St', '2600', '0', 'San Francisco', 'CA', '94133', '37.804007', '-122.431297', 'https://images.craigslist.org/00H0H_2TUYDsXXtPs_600x450.jpg');