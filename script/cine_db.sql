CREATE TABLE pelicula (
  id_pelicula SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  duracion INT NOT NULL,
  estado BOOLEAN DEFAULT TRUE
);

CREATE TABLE sala_cine (
  id_sala SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  estado BOOLEAN DEFAULT TRUE
);

CREATE TABLE pelicula_sala_cine (
  id_pelicula_sala SERIAL PRIMARY KEY,
  id_pelicula INT REFERENCES pelicula(id_pelicula),
  id_sala_cine INT REFERENCES sala_cine(id_sala),
  fecha_publicacion DATE,
  fecha_fin DATE
);