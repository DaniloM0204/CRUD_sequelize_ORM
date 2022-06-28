-- Active: 1656334562351@@127.0.0.1@3306
GRANT ALL PRIVILEGES ON * . * TO 'root'@'localhost';

USE alura
SHOW TABLES
DESCRIBE pessoas;

INSERT INTO pessoas (nome, ativo, email, role, createdAt, updatedAt) VALUES ("Carla Gomes", 1, "carla@carla.com", "estudante", NOW(), NOW());
SELECT * FROM pessoas;
