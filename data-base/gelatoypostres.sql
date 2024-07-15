CREATE TABLE `categoria` (
  `ID_categoria` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_categoria` varchar(30) NOT NULL,
  PRIMARY KEY (`ID_categoria`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `cobertura` (
  `ID_cobertura` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_cobertura` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_cobertura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `estado_pago` (
  `ID_estado_pago` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_estado_pago` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_estado_pago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `glaseados` (
  `ID_glaseados` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_glaseado` varchar(40) NOT NULL,
  `precio_glaseados` int(11) NOT NULL,
  PRIMARY KEY (`ID_glaseados`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `metodo_pago` (
  `ID_metodo_pago` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_metodo_pago` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_metodo_pago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `porciones` (
  `ID_porciones` int(11) NOT NULL AUTO_INCREMENT,
  `porcion` int(11) NOT NULL,
  `precio_porciones` int(11) NOT NULL,
  PRIMARY KEY (`ID_porciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `relleno` (
  `ID_relleno` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_relleno` varchar(40) NOT NULL,
  `precio_relleno` int(11) NOT NULL,
  PRIMARY KEY (`ID_relleno`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `rol` (
  `ID_rol` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `sabor` (
  `ID_sabor` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_sabor` varchar(50) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  PRIMARY KEY (`ID_sabor`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `toppings` (
  `ID_toppings` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_toppings` varchar(50) NOT NULL,
  PRIMARY KEY (`ID_toppings`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `usuarios` (
  `ID_usuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_usuario` varchar(50) NOT NULL,
  `telefono_usuario` int(11) NOT NULL,
  `email_usuario` varchar(250) NOT NULL,
  `contrasena_usuario` varchar(50) NOT NULL,
  `genero_usuario` varchar(50) DEFAULT NULL,
  `imagen_usuario` blob DEFAULT NULL,
  `ID_rol` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_usuario`),
  KEY `fk_rol` (`ID_rol`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`ID_rol`) REFERENCES `rol` (`ID_rol`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `direcciones_entrega` (
  `ID_direcciones_entrega` int(11) NOT NULL AUTO_INCREMENT,
  `direccion` varchar(100) NOT NULL,
  `ID_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_direcciones_entrega`),
  KEY `ID_usuario` (`ID_usuario`),
  CONSTRAINT `direcciones_entrega_ibfk_1` FOREIGN KEY (`ID_usuario`) REFERENCES `usuarios` (`ID_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `pedidos` (
  `ID_pedido` int(11) NOT NULL AUTO_INCREMENT,
  `fecha_pedido` date DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_pedido`),
  KEY `id_usuario` (`id_usuario`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`ID_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `pedido_detalles` (
  `id_pedido_detalle` int(11) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) DEFAULT NULL,
  `id_pedido` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_pedido_detalle`),
  KEY `id_pedido` (`id_pedido`),
  KEY `id_producto` (`id_producto`),
  CONSTRAINT `pedido_detalles_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`ID_pedido`),
  CONSTRAINT `pedido_detalles_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`ID_producto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `productos` (
  `ID_producto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(30) NOT NULL,
  `descripcion_producto` varchar(250) NOT NULL,
  `disponibilidad` tinyint(1) NOT NULL DEFAULT 1,
  `imagen_producto` blob NOT NULL,
  `ID_categoria` int(11) DEFAULT NULL,
  `ID_relleno` int(11) DEFAULT NULL,
  `ID_porciones` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID_producto`),
  KEY `ID_categoria` (`ID_categoria`),
  KEY `ID_relleno` (`ID_relleno`),
  KEY `ID_porciones` (`ID_porciones`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`ID_categoria`) REFERENCES `categoria` (`ID_categoria`),
  CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`ID_relleno`) REFERENCES `relleno` (`ID_relleno`),
  CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`ID_porciones`) REFERENCES `porciones` (`ID_porciones`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `personalizar` (
  `ID_personalizar` int(11) NOT NULL AUTO_INCREMENT,
  `imagen_personalizar` varchar(250) NOT NULL,
  `sabor_otro` varchar(50) NOT NULL,
  `cobertura_otro` varchar(50) NOT NULL,
  `toppings_otro` varchar(50) NOT NULL,
  `adicionales` varchar(200) NOT NULL,
  `FK_id_relleno` int(11) DEFAULT NULL,
  `FK_id_porciones` int(11) DEFAULT NULL,
  `FK_id_glaseado` int(11) DEFAULT NULL,
  `FK_id_sabor` int(11) DEFAULT NULL,
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

CREATE TABLE `ventas` (
  `ID_ventas` int(11) NOT NULL AUTO_INCREMENT,
  `ID_pedido` int(11) NOT NULL,
  `ID_metodo_pago` int(11) NOT NULL,
  `ID_estado_pago` int(11) NOT NULL,
  `fecha_venta` date NOT NULL,
  `monto` decimal(10,2) NOT NULL,
  PRIMARY KEY (`ID_ventas`),
  KEY `ID_pedido` (`ID_pedido`),
  KEY `ID_metodo_pago` (`ID_metodo_pago`),
  KEY `ID_estado_pago` (`ID_estado_pago`),
  CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`ID_pedido`) REFERENCES `pedidos` (`ID_pedido`),
  CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`ID_metodo_pago`) REFERENCES `metodo_pago` (`ID_metodo_pago`),
  CONSTRAINT `ventas_ibfk_3` FOREIGN KEY (`ID_estado_pago`) REFERENCES `estado_pago` (`ID_estado_pago`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;
