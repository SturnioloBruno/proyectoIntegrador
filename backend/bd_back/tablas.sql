CREATE TABLE IF NOT EXISTS categorias (
	cat_id INT AUTO_INCREMENT PRIMARY KEY,
    cat_titulo VARCHAR(100) NOT NULL, 
    cat_descripcion VARCHAR(500),
    cat_url_imagen VARCHAR(500) NOT NULL
);


