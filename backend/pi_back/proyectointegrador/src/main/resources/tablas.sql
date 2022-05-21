CREATE TABLE IF NOT EXISTS categorias (
	cat_id INT NOT NULL AUTO_INCREMENT,
    cat_titulo VARCHAR(100) NOT NULL, 
    cat_descripcion VARCHAR(500),
    cat_url_imagen VARCHAR(500) NOT NULL,
    PRIMARY KEY(cat_id)
);

CREATE TABLE IF NOT EXISTS clientes (
  cli_id INT NOT NULL AUTO_INCREMENT,
  cli_nombre VARCHAR(100) NOT NULL,
  cli_apellido VARCHAR(50) NOT NULL,
  cli_password VARCHAR(30) NOT NULL,
  cli_direccion VARCHAR(100) NOT NULL,
  cli_email VARCHAR(200) NOT NULL,
  PRIMARY KEY (cli_id)
);

CREATE TABLE IF NOT EXISTS alojamientos (
	alo_id INT NOT NULL AUTO_INCREMENT,
    cat_id INT NOT NULL,
    alo_nombre VARCHAR(100) NOT NULL,
    alo_direccion VARCHAR(100) NOT NULL,
    alo_cant_hab_totales SMALLINT,
    alo_cant_hab_libres SMALLINT,
    alo_ciudad VARCHAR(100) NOT NULL,
    alo_puntuacion SMALLINT,
    alo_cant_estrellas SMALLINT,
    PRIMARY KEY(alo_id),
    FOREIGN KEY (cat_id) REFERENCES categorias(cat_id)
);

CREATE TABLE IF NOT EXISTS habitaciones (
	hab_id INT NOT NULL AUTO_INCREMENT,
    alo_id INT NOT NULL,
    hab_nro INT NOT NULL,
    hab_cant_personas SMALLINT NOT NULL,
    hab_ocupada TINYINT NOT NULL,
    PRIMARY KEY(hab_id),
    FOREIGN KEY(alo_id) REFERENCES alojamientos(alo_id)
);

CREATE TABLE IF NOT EXISTS reservas (
	res_id INT NOT NULL AUTO_INCREMENT,
    hab_id INT NOT NULL,
    cli_id INT NOT NULL,
    res_fecha_inicio DATE NOT NULL,
    res_fecha_fin DATE NOT NULL,
    PRIMARY KEY (res_id),
    FOREIGN KEY(hab_id) REFERENCES habitaciones(hab_id),
    FOREIGN KEY(cli_id) REFERENCES clientes(cli_id)
);
