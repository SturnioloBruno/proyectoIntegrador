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
    prod_address VARCHAR(300) NOT NULL,
    prod_name VARCHAR(100) NOT NULL,
    prod_punctuation SMALLINT,
    prod_stars TINYINT(1),
    prod_desc_title VARCHAR(100),
    prod_desc VARCHAR(500),
    prod_x NUMERIC (18,10),
	prod_y NUMERIC (18,10),
    prod_score VARCHAR(50),
    PRIMARY KEY(prod_id),
    FOREIGN KEY(cat_id) REFERENCES categories(cat_id),
    FOREIGN KEY(city_id) REFERENCES cities(city_id)
);

CREATE TABLE IF NOT EXISTS images (
	img_id INT NOT NULL AUTO_INCREMENT,
    prod_id INT NOT NULL,
    img_url VARCHAR(8000) NOT NULL,
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

CREATE TABLE IF NOT EXISTS punctuations (
	punct_id INT NOT NULL AUTO_INCREMENT,
    prod_id INT NOT NULL,
    cus_id INT NOT NULL,
    punctuation SMALLINT NOT NULL,
    PRIMARY KEY(punct_id),
    FOREIGN KEY(prod_id) REFERENCES products(prod_id),
    FOREIGN KEY(cus_id) REFERENCES customers(cus_id)
);

--CREATE TABLE IF NOT EXISTS bookings (
--	book_id INT NOT NULL AUTO_INCREMENT,
--    hab_id INT NOT NULL,
--   cus_id INT NOT NULL,
--    book_start_date DATE NOT NULL,
--    book_end_date DATE NOT NULL,
--    PRIMARY KEY (book_id),
--    FOREIGN KEY(hab_id) REFERENCES habitaciones(hab_id),
--    FOREIGN KEY(cus_id) REFERENCES customers(cus_id)
--);

INSERT INTO categories (cat_title,cat_description,cat_url_img)
VALUES ("Hotel","821.458 hoteles","https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1527&q=80"),
("Hostels","821.458 Hostels","https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"),
("Departamentos","821.458 Departamentos","https://images.unsplash.com/photo-1581404569456-a2e7007c3979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"),
("Bed and Breakfast","821.458 Bed and Breakfast","https://images.unsplash.com/photo-1584602755303-759bf3645954?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80");

INSERT INTO cities(city_name,city_country)
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

INSERT INTO products (cat_id,city_id,prod_address,prod_name,prod_stars,prod_desc_title,prod_desc,prod_x,prod_y,prod_score)
VALUES
(1, 1, "San Martin 231", "Hotel el Pacífico", 5,"Hotel el Pacífico", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "MUY BUENO"),
(2, 2, "Lavalle 345", "Hostel Argentina", 3, "Hostel Argentina", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "BUENO"),
(3, 3, "Cordoba 999", "Dpto La Ventana", 4, "Depto La Ventana", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "MUY BUENO"),
(4, 4, "Mendoza 1020", "Bed and Breakfast Paraíso", 2, "Bed and Breakfast Paraíso", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "MALO"),
(1, 5, "Alsina 45", "Hotel El Mar", 3, "Hotel El Mar", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "BUENO"),
(2, 6, "San Martin 5300", "Hostel Los Árboles", 4,"Hostel Los Árboles", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "MUY BUENO"),
(3, 7, "9 de Julio 33", "Dpto Santa Fe", 3, "Dpto Santa Fe", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "BUENO"),
(4, 8, "Francia 102", "Bed and Breakfast Oasis", 5, "Bed and Breakfast Oasis", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "MUY BUENO"),
(1, 9, "Mitre 78", "Hotel Los Sueños", 4, "Hotel Los Sueños", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "MUY BUENO"),
(2, 10, "Corrientes 582", "Hostel Cristal", 1, "Hotel Cristal", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "MALO"),
(3, 11, "La Paz 10","Dpto Las Estrellas", 3, "Dpto Las Estrellas", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "BUENO"),
(4, 12, "Pasco 2404", "Bed and Breakfast Palace", 3, "Bed and Breakfast Palace", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius sed nibh sit amet dignissim. Morbi commodo turpis nulla.", "-123321", "-456789", "PALACE");

INSERT INTO images (prod_id, img_url)
VALUES
(1, "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"),
(1, "https://images.unsplash.com/photo-1523699289804-55347c09047d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(1, "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"),
(1, "https://images.unsplash.com/flagged/photo-1556438758-1d61c8c65409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"),
(1, "https://images.unsplash.com/photo-1577784424946-e12c7b211249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"),
(2, "https://images.unsplash.com/photo-1551133988-dfabc2928c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(2, "https://images.unsplash.com/photo-1549416878-30862a3e49e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(2, "https://images.unsplash.com/photo-1551133988-1ca0f12a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(2, "https://images.unsplash.com/photo-1551133989-6a6512ad3915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80"),
(2, "https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"),
(3, "https://images.unsplash.com/photo-1631049035634-c04c637651b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(3, "https://images.unsplash.com/photo-1530334607928-b6c79a013fa4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869"),
(3, "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"),
(3, "https://images.unsplash.com/photo-1524292691042-82ed9c62673b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(3, "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(4, "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(4, "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(4, "https://images.unsplash.com/photo-1605651531144-51381895e23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(4, "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(4, "https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"),
(5, "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(5, "https://images.unsplash.com/photo-1603428760740-c0089e3760f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(5, "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80"),
(5, "https://images.unsplash.com/photo-1484101403633-562f891dc89a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"),
(5, "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"),
(6, "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"),
(6, "https://images.unsplash.com/photo-1566978068475-22a47268a416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"),
(6, "https://images.unsplash.com/photo-1599615381612-7bcc78cfd851?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"),
(6, "https://images.unsplash.com/photo-1574294606536-39c40360078a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"),
(6, "https://images.unsplash.com/photo-1626265774643-f1943311a86b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(7, "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"),
(7, "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(7, "https://images.unsplash.com/photo-1610527003928-47afd5f470c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"),
(7, "https://images.unsplash.com/photo-1565031491910-e57fac031c41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"),
(7, "https://images.unsplash.com/photo-1529316738131-4d0e0761a38e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(8, "https://images.unsplash.com/photo-1618111415065-c20b4e1afd41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(8, "https://images.unsplash.com/photo-1616627686733-122fec9d87b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(8, "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"),
(8, "https://images.unsplash.com/photo-1606246481699-f16245882373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=466&q=80"),
(8, "https://images.unsplash.com/photo-1572786258684-9b3d5671e7d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(9, "https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"),
(9, "https://images.unsplash.com/photo-1523699289804-55347c09047d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(9, "https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"),
(9, "https://images.unsplash.com/flagged/photo-1556438758-1d61c8c65409?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"),
(9, "https://images.unsplash.com/photo-1577784424946-e12c7b211249?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"),
(10, "https://images.unsplash.com/photo-1551133988-dfabc2928c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(10, "https://images.unsplash.com/photo-1549416878-30862a3e49e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(10, "https://images.unsplash.com/photo-1551133988-1ca0f12a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(10, "https://images.unsplash.com/photo-1551133989-6a6512ad3915?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=381&q=80"),
(10, "https://images.unsplash.com/photo-1507038772120-7fff76f79d79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"),
(11, "https://images.unsplash.com/photo-1631049035634-c04c637651b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(11, "https://images.unsplash.com/photo-1530334607928-b6c79a013fa4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869"),
(11, "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"),
(11, "https://images.unsplash.com/photo-1524292691042-82ed9c62673b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(11, "https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(12, "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(12, "https://images.unsplash.com/photo-1596701062351-8c2c14d1fdd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(12, "https://images.unsplash.com/photo-1605651531144-51381895e23d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"),
(12, "https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"),
(12, "https://images.unsplash.com/photo-1470290378698-263fa7ca60ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80");

INSERT INTO characteristics (charact_title)
VALUES
("Cocina"),
("Estacionamiento Gratuito"),
("Televisor"),
("Pileta"),
("Aire Acondicionado"),
("Wifi"),
("Apto Mascotas");

INSERT INTO policies (policies_title, policies_desc)
VALUES
("Normas de la casa", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus elit eu nulla commodo blandit."),
("Salud y seguridad", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus elit eu nulla commodo blandit."),
("Politica de Cancelación", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla finibus elit eu nulla commodo blandit.");

INSERT INTO products_characteristics (prod_id, charact_id)
VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7),
(2, 1), (2, 3), (2, 6),
(3, 1), (3, 2), (3, 3), (3, 5), (3, 6),
(4, 2), (4, 3), (4, 5), (4, 6),
(5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6), (5, 7),
(6, 1), (6, 3), (6, 6),
(7, 1), (7, 2), (7, 3), (7, 5), (7, 6),
(8, 2), (8, 3), (8, 5), (8, 6),
(9, 1), (9, 2), (9, 3), (9, 4), (9, 5), (9, 6), (9, 7),
(10, 1), (10, 3), (10, 6),
(11, 1), (11, 2), (11, 3), (11, 5), (11, 6),
(12, 2), (12, 3), (12, 5), (12, 6);

INSERT INTO products_policies (prod_id, policies_id)
VALUES
(1, 1), (1, 2), (1, 3),
(2, 1), (2, 2), (2, 3),
(3, 1), (3, 2), (3, 3),
(4, 1), (4, 2), (4, 3),
(5, 1), (5, 2), (5, 3),
(6, 1), (6, 2), (6, 3),
(7, 1), (7, 2), (7, 3),
(8, 1), (8, 2), (8, 3),
(9, 1), (9, 2), (9, 3),
(10, 1), (10, 2), (10, 3),
(11, 1), (11, 2), (11, 3),
(12, 1), (12, 2), (12, 3);


