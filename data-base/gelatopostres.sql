CREATE TABLE `categorias` (
  `ID_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(30) NOT NULL,
  PRIMARY KEY (`ID_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `pedido_estados` (
  `ID_pedido_estado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_pedido_estado` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_pedido_estado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `metodo_pagos` (
  `ID_metodo_pago` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_metodo_pago` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_metodo_pago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `porciones` (
  `ID_porcion` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_porcion` int(11) NOT NULL,
  `precio_porcion` int(11) NOT NULL,
  PRIMARY KEY (`ID_porcion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `rellenos` (
  `ID_relleno` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_relleno` varchar(40) NOT NULL,
  `precio_relleno` int(11) NOT NULL,
  PRIMARY KEY (`ID_relleno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `glaseados` (
  `ID_glaseado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_glaseado` varchar(40) NOT NULL,
  `precio_glaseado` int(11) NOT NULL,
  PRIMARY KEY (`ID_glaseado`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `sabores` (
  `ID_sabor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_sabor` varchar(50) NOT NULL,
  `precio_sabor` int(11) NOT NULL,
  PRIMARY KEY (`ID_sabor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `toppings` (
  `ID_topping` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_topping` varchar(50) NOT NULL,
  `precio_topping` int(11) NOT NULL,
  PRIMARY KEY (`ID_toppings`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `usuarios` (
  `ID_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(50) NOT NULL,
  `telefono_usuario` int(11) NOT NULL,
  `email_usuario` varchar(250) NOT NULL,
  `direccion_usuario` varchar(100) NOT NULL,
  `contrasena_usuario` varchar(50) NOT NULL,
  `rol_usuario` varchar(50) NOT NULL,
  `genero_usuario` varchar(50) DEFAULT NULL,
  `imagen_usuario` blob DEFAULT NULL,
  PRIMARY KEY (`ID_usuario`),
  KEY `fk_rol` (`ID_rol`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`ID_rol`) REFERENCES `rol` (`ID_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;















CREATE TABLE `productos` (
  `ID_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(30) NOT NULL,
  `descripcion_producto` varchar(250) NOT NULL,
  `estado_producto` tinyint(1) NOT NULL DEFAULT 1,
  `precio_producto` int(11) NOT NULL,
  `imagen_producto` blob NOT NULL,
  `ID_categoria` int(11) DEFAULT NULL,
  `ID_porcion` int(11) DEFAULT NULL,
  `ID_relleno` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_producto`),
  KEY `ID_categoria` (`ID_categoria`),
  KEY `ID_porciones` (`ID_porciones`),
  KEY `ID_relleno` (`ID_relleno`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`ID_categoria`) REFERENCES `categoria` (`ID_categoria`),
  CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`ID_porciones`) REFERENCES `porciones` (`ID_porciones`)
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`ID_relleno`) REFERENCES `relleno` (`ID_relleno`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `personalizar` (
  `ID_personalizar` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion_personalizar` varchar(200) NOT NULL,
  `imagen_personalizar` varchar(250) NOT NULL,
  `precio_personalizar` int(11) NOT NULL,
  `FK_id_cobertura` int(11) DEFAULT NULL,
  `FK_id_glaseado` int(11) DEFAULT NULL,
  `FK_id_porcion` int(11) DEFAULT NULL,
  `FK_id_relleno` int(11) DEFAULT NULL,
  `FK_id_sabor` int(11) DEFAULT NULL,
  `FK_id_topping` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_personalizar`),
  KEY `FK_id_relleno` (`FK_id_relleno`),
  KEY `FK_id_porciones` (`FK_id_porciones`),
  KEY `FK_id_glaseado` (`FK_id_glaseado`),
  KEY `FK_id_sabor` (`FK_id_sabor`),
  CONSTRAINT `personalizar_ibfk_1` FOREIGN KEY (`FK_id_relleno`) REFERENCES `relleno` (`ID_relleno`),
  CONSTRAINT `personalizar_ibfk_2` FOREIGN KEY (`FK_id_porciones`) REFERENCES `porciones` (`ID_porciones`),
  CONSTRAINT `personalizar_ibfk_3` FOREIGN KEY (`FK_id_glaseado`) REFERENCES `glaseados` (`ID_glaseados`),
  CONSTRAINT `personalizar_ibfk_4` FOREIGN KEY (`FK_id_sabor`) REFERENCES `sabor` (`ID_sabor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `reseñas` (
  `ID_reseña` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_reseña` varchar(50) NOT NULL,
  `descripcion_reseña` varchar(300) NOT NULL,
  `calificacion_reseña` varchar(300) NOT NULL,
  PRIMARY KEY (`ID_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `pedidos` (
  `ID_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_pedido` date DEFAULT NULL,
  `fecha_entrega` date DEFAULT NULL,
  `total_pedido` int(11) NOT NULL,
  `ID_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_pedido`),
  KEY `ID_usuario` (`ID_usuario`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`ID_usuario`) REFERENCES `usuarios` (`ID_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `pedido_detalles` (
  `ID_pedido_detalle` int(11) NOT NULL AUTO_INCREMENT,
  `cantidad_producto` int(11) DEFAULT NULL,
  `precio_producto` int(11) DEFAULT NULL,
  `ID_pedido` int(11) DEFAULT NULL,
  `ID_producto` int(11) DEFAULT NULL,
  `ID_metodo_pago` int(11) NOT NULL,
  `ID_pedido_estado` int(11) NOT NULL,
  PRIMARY KEY (`ID_pedido_detalle`),
  KEY `ID_pedido` (`ID_pedido`),
  KEY `ID_producto` (`ID_producto`),
  CONSTRAINT `pedido_detalles_ibfk_1` FOREIGN KEY (`ID_pedido`) REFERENCES `pedidos` (`ID_pedido`),
  CONSTRAINT `pedido_detalles_ibfk_2` FOREIGN KEY (`ID_producto`) REFERENCES `productos` (`ID_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;