CREATE TABLE IF NOT EXISTS categories (
	cat_id INT NOT NULL AUTO_INCREMENT,
    cat_title VARCHAR(100) NOT NULL, 
    cat_description VARCHAR(500),
    cat_url_img VARCHAR(500) NOT NULL,
    PRIMARY KEY(cat_id)
);

CREATE TABLE IF NOT EXISTS cities (
	city_id INT NOT NULL AUTO_INCREMENT,
    city_name VARCHAR(100) NOT NULL,
    city_country VARCHAR(100) NOT NULL,
    PRIMARY KEY(city_id)
);

CREATE TABLE IF NOT EXISTS products (
	prod_id INT NOT NULL AUTO_INCREMENT,
    cat_id INT NOT NULL,
    city_id INT NOT NULL,
    prod_name VARCHAR(100) NOT NULL,
    prod_punctuation SMALLINT,
    prod_stars SMALLINT,
    prod_desc_title VARCHAR(100),
    prod_desc VARCHAR(500),
    prod_coordinates VARCHAR(500) NOT NULL,
    PRIMARY KEY(prod_id),
    FOREIGN KEY(cat_id) REFERENCES categories(cat_id),
    FOREIGN KEY(city_id) REFERENCES cities(city_id)
);

CREATE TABLE IF NOT EXISTS images (
	img_id INT NOT NULL AUTO_INCREMENT,
    prod_id INT NOT NULL,
    img_url VARCHAR(500) NOT NULL,
    PRIMARY KEY(img_id),
    FOREIGN KEY(prod_id) REFERENCES products(prod_id)
);

CREATE TABLE IF NOT EXISTS characteristics (
	charact_id INT NOT NULL AUTO_INCREMENT,
    charact_title VARCHAR(100) NOT NULL,
    PRIMARY KEY(charact_id)
);

CREATE TABLE IF NOT EXISTS products_characteristics (
	prod_charact_id INT NOT NULL AUTO_INCREMENT,
    prod_id INT NOT NULL,
    charact_id INT NOT NULL,
    PRIMARY KEY(prod_charact_id),
    FOREIGN KEY(prod_id) REFERENCES products(prod_id),
    FOREIGN KEY(charact_id) REFERENCES characteristics(charact_id)
);

CREATE TABLE IF NOT EXISTS policies (
	policies_id INT NOT NULL AUTO_INCREMENT,
    policies_title VARCHAR(100) NOT NULL,
    policies_desc VARCHAR(500) NOT NULL,
    PRIMARY KEY(policies_id)
);

CREATE TABLE IF NOT EXISTS products_policies (
	prod_policies_id INT NOT NULL AUTO_INCREMENT,
    prod_id INT NOT NULL,
    policies_id INT NOT NULL,
    PRIMARY KEY(prod_policies_id),
    FOREIGN KEY(prod_id) REFERENCES products(prod_id),
    FOREIGN KEY(policies_id) REFERENCES policies(policies_id)
);

CREATE TABLE IF NOT EXISTS customers (
  cus_id INT NOT NULL AUTO_INCREMENT,
  cus_name VARCHAR(100) NOT NULL,
  cus_lastname VARCHAR(50) NOT NULL,
  cus_password VARCHAR(30) NOT NULL,
  cus_address VARCHAR(100) NOT NULL,
  cus_email VARCHAR(200) NOT NULL,
  PRIMARY KEY (cus_id)
);

CREATE TABLE IF NOT EXISTS bookings (
	book_id INT NOT NULL AUTO_INCREMENT,
    hab_id INT NOT NULL,
    cus_id INT NOT NULL,
    book_start_date DATE NOT NULL,
    book_end_date DATE NOT NULL,
    PRIMARY KEY (book_id),
    FOREIGN KEY(hab_id) REFERENCES habitaciones(hab_id),
    FOREIGN KEY(cus_id) REFERENCES customers(cus_id)
);

insert into cities(city_name,city_country)
VALUES
("Buenos Aires","Argentina"),
("Rosario","Argentina"),
("Entre Rios","Argentina"),
("Cordoba","Argentina"),
("Mar del Plata","Argentina"),
("Salta","Argentina"),
("Santa Fe","Argentina"),
("San Salvador de Jujuy","Argentina"),
("San Luis","Argentina"),
("San Carlos de Bariloche","Argentina"),
("Comodoro Rivadavia","Argentina"),
("Mendoza","Argentina");


