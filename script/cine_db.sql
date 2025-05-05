CREATE TABLE pelicula (
  id_pelicula SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  duracion INT,
  fecha_publicacion DATE
);

CREATE TABLE sala_cine (
  id_sala SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  estado BOOLEAN DEFAULT TRUE
);

CREATE TABLE pelicula_sala_cine (
  id_pelicula_sala SERIAL PRIMARY KEY,
  id_pelicula INT REFERENCES pelicula(id_pelicula) ON DELETE CASCADE,
  id_sala_cine INT REFERENCES sala_cine(id_sala) ON DELETE CASCADE,
  fecha_publicacion DATE,
  fecha_fin DATE
);
