CREATE TABLE pelicula (
  id_pelicula SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  duracion INT NOT NULL
);

-- Tabla de salas de cine
CREATE TABLE sala_cine (
  id_sala SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  estado BOOLEAN DEFAULT TRUE
);

-- Tabla de asignación de películas a salas
CREATE TABLE pelicula_sala_cine (
  id_pelicula_sala SERIAL PRIMARY KEY,
  id_pelicula INT NOT NULL REFERENCES pelicula(id_pelicula) ON DELETE CASCADE,
  id_sala_cine INT NOT NULL REFERENCES sala_cine(id_sala) ON DELETE CASCADE,
  fecha_publicacion DATE NOT NULL,
  fecha_fin DATE NOT NULL
);

ALTER TABLE pelicula ADD COLUMN eliminado BOOLEAN DEFAULT false;


INSERT INTO pelicula (nombre, duracion) VALUES
('Avengers', 120),
('Batman', 130),
('El Origen', 140);

INSERT INTO sala_cine (nombre, estado) VALUES
('Sala 1', TRUE),
('Sala 2', TRUE),
('Sala 3', FALSE);


INSERT INTO pelicula_sala_cine (id_pelicula, id_sala_cine, fecha_publicacion, fecha_fin) VALUES
(1, 1, '2024-05-01', '2024-06-01'),
(2, 1, '2024-05-02', '2024-06-05'),
(3, 1, '2024-05-03', '2024-06-10');

select * from pelicula, sala_cine, pelicula_sala_cine; 