-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 03, 2024 at 04:47 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `gelatoypostres`
--

-- --------------------------------------------------------

--
-- Table structure for table `categoria`
--

CREATE TABLE `categoria` (
  `ID_categoria` int(11) NOT NULL,
  `nombre_categoria` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `categoria`
--

INSERT INTO `categoria` (`ID_categoria`, `nombre_categoria`) VALUES
(1, 'Tortas tradicionales'),
(2, 'Tortas frías'),
(3, 'Postres'),
(4, 'Desayunos'),
(5, 'Infantiles');

-- --------------------------------------------------------

--
-- Table structure for table `cobertura`
--

CREATE TABLE `cobertura` (
  `ID_cobertura` int(11) NOT NULL,
  `nombre_cobertura` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `cobertura`
--

INSERT INTO `cobertura` (`ID_cobertura`, `nombre_cobertura`) VALUES
(1, 'Buttercream'),
(2, 'Fondant'),
(3, 'Ganache'),
(4, 'Glaseado Real'),
(5, 'Chantilly');

-- --------------------------------------------------------

--
-- Table structure for table `direcciones_entrega`
--

CREATE TABLE `direcciones_entrega` (
  `ID_direcciones_entrega` int(11) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `ID_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `direcciones_entrega`
--

INSERT INTO `direcciones_entrega` (`ID_direcciones_entrega`, `direccion`, `ID_usuario`) VALUES
(1, 'Carrera 45 # 08 - 42', NULL),
(2, 'Calle 110 # 60 - 44', NULL),
(3, 'Diagional 56 # 47 -30', NULL),
(4, 'Carrera 60 # 37 - 20', NULL),
(5, 'Avenida 80 # 60 - 40', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `estado_pago`
--

CREATE TABLE `estado_pago` (
  `ID_estado_pago` int(11) NOT NULL,
  `nombre_estado_pago` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `estado_pago`
--

INSERT INTO `estado_pago` (`ID_estado_pago`, `nombre_estado_pago`) VALUES
(1, 'Entregado'),
(2, 'Pendiente'),
(3, 'Cancelado'),
(4, 'En Proceso');

-- --------------------------------------------------------

--
-- Table structure for table `glaseados`
--

CREATE TABLE `glaseados` (
  `ID_glaseados` int(11) NOT NULL,
  `nombre_glaseado` varchar(40) NOT NULL,
  `precio_glaseados` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `glaseados`
--

INSERT INTO `glaseados` (`ID_glaseados`, `nombre_glaseado`, `precio_glaseados`) VALUES
(1, 'Chocolate blanco', 300),
(2, 'Chocolate oscuro', 400),
(3, 'Dorado', 350),
(4, 'Negro', 450),
(5, 'Azul', 250);

-- --------------------------------------------------------

--
-- Table structure for table `metodo_pago`
--

CREATE TABLE `metodo_pago` (
  `ID_metodo_pago` int(11) NOT NULL,
  `nombre_metodo_pago` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `metodo_pago`
--

INSERT INTO `metodo_pago` (`ID_metodo_pago`, `nombre_metodo_pago`) VALUES
(1, 'cuenta bancaria'),
(2, 'paypal'),
(3, 'tarjeta credito'),
(4, 'mercado_pago'),
(5, 'apple pay');

-- --------------------------------------------------------

--
-- Table structure for table `pedidos`
--

CREATE TABLE `pedidos` (
  `ID_pedido` int(11) NOT NULL,
  `fecha_pedido` date DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `pedidos`
--

INSERT INTO `pedidos` (`ID_pedido`, `fecha_pedido`, `id_usuario`) VALUES
(1, '2024-07-01', 1),
(2, '2024-07-02', 2),
(3, '2024-07-03', 3),
(4, '2024-07-04', 4),
(5, '2024-07-05', 5);

-- --------------------------------------------------------

--
-- Table structure for table `pedido_detalles`
--

CREATE TABLE `pedido_detalles` (
  `id_pedido_detalle` int(11) NOT NULL,
  `cantidad` int(11) DEFAULT NULL,
  `id_pedido` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `pedido_detalles`
--

INSERT INTO `pedido_detalles` (`id_pedido_detalle`, `cantidad`, `id_pedido`, `id_producto`) VALUES
(6, 10, 1, 1),
(7, 15, 2, 2),
(8, 20, 3, 3),
(9, 25, 4, 4),
(10, 30, 5, 5);

-- --------------------------------------------------------

--
-- Table structure for table `personalizar`
--

CREATE TABLE `personalizar` (
  `ID_personalizar` int(11) NOT NULL,
  `imagen_personalizar` varchar(250) NOT NULL,
  `sabor_otro` varchar(50) NOT NULL,
  `cobertura_otro` varchar(50) NOT NULL,
  `toppings_otro` varchar(50) NOT NULL,
  `adicionales` varchar(200) NOT NULL,
  `FK_id_relleno` int(11) DEFAULT NULL,
  `FK_id_porciones` int(11) DEFAULT NULL,
  `FK_id_glaseado` int(11) DEFAULT NULL,
  `FK_id_sabor` int(11) DEFAULT NULL,
  `FK_id_cobertura` int(11) DEFAULT NULL,
  `FK_id_toppings` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `personalizar`
--

INSERT INTO `personalizar` (`ID_personalizar`, `imagen_personalizar`, `sabor_otro`, `cobertura_otro`, `toppings_otro`, `adicionales`, `FK_id_relleno`, `FK_id_porciones`, `FK_id_glaseado`, `FK_id_sabor`, `FK_id_cobertura`, `FK_id_toppings`) VALUES
(1, '', 'Redvelvet', 'Buttercream', 'Fresas', 'Topper de feliz cumpleaños rojo', 1, 2, 2, 3, 3, 3),
(2, '', 'Tres leches', 'Chantilly', 'Duraznos', 'Vela de feliz cumpleaños', 4, 4, 4, 5, 3, 5),
(3, '', 'Marmoleada', 'Crema de queso', 'Glaseado naranja', 'Topper de feliz cumpleaños naranja', 3, 2, 4, 4, 4, 5),
(4, '', 'Tres leches', 'Chantilly', 'Dorado', 'Vela cumpleaños', 5, 3, 2, 4, 1, 1),
(5, '', 'zanahoria', 'Glaseado real', 'Chocolate blanco', 'Moño rosado', 2, 1, 1, 1, 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `porciones`
--

CREATE TABLE `porciones` (
  `ID_porciones` int(11) NOT NULL,
  `porcion` int(11) NOT NULL,
  `precio_porciones` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `porciones`
--

INSERT INTO `porciones` (`ID_porciones`, `porcion`, `precio_porciones`) VALUES
(1, 6, 45000),
(2, 12, 75000),
(3, 20, 110000),
(4, 50, 185000),
(5, 30, 140000);

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `ID_producto` int(11) NOT NULL,
  `nombre_producto` varchar(30) NOT NULL,
  `descripcion_producto` varchar(250) NOT NULL,
  `disponibilidad` tinyint(1) NOT NULL DEFAULT 1,
  `imagen_producto` blob NOT NULL,
  `ID_categoria` int(11) DEFAULT NULL,
  `ID_relleno` int(11) DEFAULT NULL,
  `ID_porciones` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`ID_producto`, `nombre_producto`, `descripcion_producto`, `disponibilidad`, `imagen_producto`, `ID_categoria`, `ID_relleno`, `ID_porciones`) VALUES
(1, 'Torta de chocolate', 'Torta de chocolate, rellena con el sabor de tu preferencia y cubierta de butter cream de chocolate', 1, '', 1, 1, 1),
(2, 'Torta de vainilla', 'Torta sabor a vainilla', 1, '', 1, 2, 1),
(3, 'Torta de marmoleada', 'Torta de zanahoria con una mezcla de nueces, almendras, pasas y especias, decorada con Cheese cream', 1, '', 1, 3, 1),
(4, 'Torta de Zanahoria', 'Torta de zanahoria con nueces y glaseado de queso crema', 1, '', 1, 4, 1),
(5, 'Torta tres leches', 'Torta fria de tres leches decorada con chantilly y canela', 1, '', 2, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `relleno`
--

CREATE TABLE `relleno` (
  `ID_relleno` int(11) NOT NULL,
  `nombre_relleno` varchar(40) NOT NULL,
  `precio_relleno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `relleno`
--

INSERT INTO `relleno` (`ID_relleno`, `nombre_relleno`, `precio_relleno`) VALUES
(1, 'Chocolate', 500),
(2, 'Vainilla', 450),
(3, 'Fresas', 550),
(4, 'Crema de queso', 600),
(5, 'Dulce de leche', 500);

-- --------------------------------------------------------

--
-- Table structure for table `rol`
--

CREATE TABLE `rol` (
  `ID_rol` int(11) NOT NULL,
  `rol` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `rol`
--

INSERT INTO `rol` (`ID_rol`, `rol`) VALUES
(1, 'Administrador'),
(2, 'Cliente');

-- --------------------------------------------------------

--
-- Table structure for table `sabor`
--

CREATE TABLE `sabor` (
  `ID_sabor` int(11) NOT NULL,
  `nombre_sabor` varchar(50) NOT NULL,
  `descripcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `sabor`
--

INSERT INTO `sabor` (`ID_sabor`, `nombre_sabor`, `descripcion`) VALUES
(1, 'Chocolate', ' bizcocho de chocolate húmededecido con almibar de cacao y licor'),
(2, 'Vainilla', ' bizcocho de vainilla'),
(3, 'Zanahoria', 'bizcocho de vainilla con frutos secos, zanahoria y especias'),
(4, 'Tres leches', 'bizcocho de vainilla humedecido con mezcla de 3 leches'),
(5, 'Marmoleada', 'bizcocho de vainilla y chocolate');

-- --------------------------------------------------------

--
-- Table structure for table `toppings`
--

CREATE TABLE `toppings` (
  `ID_toppings` int(11) NOT NULL,
  `nombre_toppings` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `toppings`
--

INSERT INTO `toppings` (`ID_toppings`, `nombre_toppings`) VALUES
(1, 'durazno'),
(2, 'fresas'),
(3, 'kiwi'),
(4, 'nuez'),
(5, 'pastillaje');

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `ID_usuario` int(11) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `telefono_usuario` int(11) NOT NULL,
  `email_usuario` varchar(250) NOT NULL,
  `contrasena_usuario` varchar(50) NOT NULL,
  `genero_usuario` varchar(50) DEFAULT NULL,
  `imagen_usuario` blob DEFAULT NULL,
  `ID_rol` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`ID_usuario`, `nombre_usuario`, `telefono_usuario`, `email_usuario`, `contrasena_usuario`, `genero_usuario`, `imagen_usuario`, `ID_rol`) VALUES
(1, 'Carlos Pérez', 1234567890, 'carlos.perez@gmail.com', 'contrasena123', 'Masculino', '', NULL),
(2, 'Jacobo Martínez', 1234567891, 'jacobo.martinez@gmail.com', 'contrasena123', 'Masculino', '', NULL),
(3, 'Dina Rodríguez', 1234567892, 'dina.rodriguez@gmail.com', 'contrasena123', 'Femenino', '', NULL),
(4, 'Ana López', 1234567893, 'ana.lopez@gmail.com', 'contrasena123', 'Femenino', '', NULL),
(5, 'Juan García', 1234567894, 'juan.garcia@gmail.com', 'contrasena123', 'Masculino', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `ventas`
--

CREATE TABLE `ventas` (
  `ID_venta` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `total_venta` decimal(10,2) NOT NULL,
  `FK_metodo_pago` int(11) DEFAULT NULL,
  `FK_detalles_pedido` int(11) DEFAULT NULL,
  `FK_estado_pago` int(11) DEFAULT NULL,
  `FK_direcciones_entrega` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Dumping data for table `ventas`
--

INSERT INTO `ventas` (`ID_venta`, `fecha`, `total_venta`, `FK_metodo_pago`, `FK_detalles_pedido`, `FK_estado_pago`, `FK_direcciones_entrega`) VALUES
(16, '2024-06-01', 150.75, 1, 6, 2, 2),
(17, '2024-06-05', 250.00, 3, 7, 4, 5),
(18, '2024-06-07', 320.00, 3, 8, 2, 3),
(19, '2024-06-09', 175.20, 4, 9, 2, 3),
(20, '2024-06-10', 420.00, 4, 10, 1, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`ID_categoria`);

--
-- Indexes for table `cobertura`
--
ALTER TABLE `cobertura`
  ADD PRIMARY KEY (`ID_cobertura`);

--
-- Indexes for table `direcciones_entrega`
--
ALTER TABLE `direcciones_entrega`
  ADD PRIMARY KEY (`ID_direcciones_entrega`),
  ADD KEY `ID_usuario` (`ID_usuario`);

--
-- Indexes for table `estado_pago`
--
ALTER TABLE `estado_pago`
  ADD PRIMARY KEY (`ID_estado_pago`);

--
-- Indexes for table `glaseados`
--
ALTER TABLE `glaseados`
  ADD PRIMARY KEY (`ID_glaseados`);

--
-- Indexes for table `metodo_pago`
--
ALTER TABLE `metodo_pago`
  ADD PRIMARY KEY (`ID_metodo_pago`);

--
-- Indexes for table `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`ID_pedido`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indexes for table `pedido_detalles`
--
ALTER TABLE `pedido_detalles`
  ADD PRIMARY KEY (`id_pedido_detalle`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indexes for table `personalizar`
--
ALTER TABLE `personalizar`
  ADD PRIMARY KEY (`ID_personalizar`),
  ADD KEY `FK_id_relleno` (`FK_id_relleno`),
  ADD KEY `FK_id_porciones` (`FK_id_porciones`),
  ADD KEY `FK_id_glaseado` (`FK_id_glaseado`),
  ADD KEY `FK_id_sabor` (`FK_id_sabor`),
  ADD KEY `FK_id_cobertura` (`FK_id_cobertura`),
  ADD KEY `FK_id_toppings` (`FK_id_toppings`);

--
-- Indexes for table `porciones`
--
ALTER TABLE `porciones`
  ADD PRIMARY KEY (`ID_porciones`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`ID_producto`),
  ADD KEY `ID_categoria` (`ID_categoria`),
  ADD KEY `ID_relleno` (`ID_relleno`),
  ADD KEY `ID_porciones` (`ID_porciones`);

--
-- Indexes for table `relleno`
--
ALTER TABLE `relleno`
  ADD PRIMARY KEY (`ID_relleno`);

--
-- Indexes for table `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`ID_rol`);

--
-- Indexes for table `sabor`
--
ALTER TABLE `sabor`
  ADD PRIMARY KEY (`ID_sabor`);

--
-- Indexes for table `toppings`
--
ALTER TABLE `toppings`
  ADD PRIMARY KEY (`ID_toppings`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`ID_usuario`),
  ADD KEY `fk_rol` (`ID_rol`);

--
-- Indexes for table `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`ID_venta`),
  ADD KEY `FK_metodo_pago` (`FK_metodo_pago`),
  ADD KEY `FK_detalles_pedido` (`FK_detalles_pedido`),
  ADD KEY `FK_estado_pago` (`FK_estado_pago`),
  ADD KEY `FK_direcciones_entrega` (`FK_direcciones_entrega`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categoria`
--
ALTER TABLE `categoria`
  MODIFY `ID_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `cobertura`
--
ALTER TABLE `cobertura`
  MODIFY `ID_cobertura` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `direcciones_entrega`
--
ALTER TABLE `direcciones_entrega`
  MODIFY `ID_direcciones_entrega` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `estado_pago`
--
ALTER TABLE `estado_pago`
  MODIFY `ID_estado_pago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `glaseados`
--
ALTER TABLE `glaseados`
  MODIFY `ID_glaseados` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `metodo_pago`
--
ALTER TABLE `metodo_pago`
  MODIFY `ID_metodo_pago` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `ID_pedido` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `pedido_detalles`
--
ALTER TABLE `pedido_detalles`
  MODIFY `id_pedido_detalle` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personalizar`
--
ALTER TABLE `personalizar`
  MODIFY `ID_personalizar` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `porciones`
--
ALTER TABLE `porciones`
  MODIFY `ID_porciones` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `ID_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `relleno`
--
ALTER TABLE `relleno`
  MODIFY `ID_relleno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `rol`
--
ALTER TABLE `rol`
  MODIFY `ID_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `sabor`
--
ALTER TABLE `sabor`
  MODIFY `ID_sabor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `toppings`
--
ALTER TABLE `toppings`
  MODIFY `ID_toppings` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `ID_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `ventas`
--
ALTER TABLE `ventas`
  MODIFY `ID_venta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `direcciones_entrega`
--
ALTER TABLE `direcciones_entrega`
  ADD CONSTRAINT `direcciones_entrega_ibfk_1` FOREIGN KEY (`ID_usuario`) REFERENCES `usuarios` (`ID_usuario`);

--
-- Constraints for table `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`ID_usuario`);

--
-- Constraints for table `pedido_detalles`
--
ALTER TABLE `pedido_detalles`
  ADD CONSTRAINT `pedido_detalles_ibfk_1` FOREIGN KEY (`id_pedido`) REFERENCES `pedidos` (`ID_pedido`),
  ADD CONSTRAINT `pedido_detalles_ibfk_2` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`ID_producto`);

--
-- Constraints for table `personalizar`
--
ALTER TABLE `personalizar`
  ADD CONSTRAINT `personalizar_ibfk_1` FOREIGN KEY (`FK_id_relleno`) REFERENCES `relleno` (`ID_relleno`),
  ADD CONSTRAINT `personalizar_ibfk_2` FOREIGN KEY (`FK_id_porciones`) REFERENCES `porciones` (`ID_porciones`),
  ADD CONSTRAINT `personalizar_ibfk_3` FOREIGN KEY (`FK_id_glaseado`) REFERENCES `glaseados` (`ID_glaseados`),
  ADD CONSTRAINT `personalizar_ibfk_4` FOREIGN KEY (`FK_id_sabor`) REFERENCES `sabor` (`ID_sabor`),
  ADD CONSTRAINT `personalizar_ibfk_5` FOREIGN KEY (`FK_id_cobertura`) REFERENCES `cobertura` (`ID_cobertura`),
  ADD CONSTRAINT `personalizar_ibfk_6` FOREIGN KEY (`FK_id_toppings`) REFERENCES `toppings` (`ID_toppings`);

--
-- Constraints for table `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`ID_categoria`) REFERENCES `categoria` (`ID_categoria`),
  ADD CONSTRAINT `productos_ibfk_2` FOREIGN KEY (`ID_relleno`) REFERENCES `relleno` (`ID_relleno`),
  ADD CONSTRAINT `productos_ibfk_3` FOREIGN KEY (`ID_porciones`) REFERENCES `porciones` (`ID_porciones`);

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `fk_rol` FOREIGN KEY (`ID_rol`) REFERENCES `rol` (`ID_rol`);

--
-- Constraints for table `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`FK_metodo_pago`) REFERENCES `metodo_pago` (`ID_metodo_pago`),
  ADD CONSTRAINT `ventas_ibfk_2` FOREIGN KEY (`FK_detalles_pedido`) REFERENCES `pedido_detalles` (`id_pedido_detalle`),
  ADD CONSTRAINT `ventas_ibfk_3` FOREIGN KEY (`FK_estado_pago`) REFERENCES `estado_pago` (`ID_estado_pago`),
  ADD CONSTRAINT `ventas_ibfk_4` FOREIGN KEY (`FK_direcciones_entrega`) REFERENCES `direcciones_entrega` (`ID_direcciones_entrega`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
