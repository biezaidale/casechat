DROP TABLE IF EXISTS `c_user`;

CREATE TABLE `c_user` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `username` varchar(32) NOT NULL,
    `password` varchar(32) DEFAULT NULL,
    `email` varchar(32) DEFAULT NULL,
    `phone` varchar(16) DEFAULT NULL,
    `status` int(1) DEFAULT NULL,
    `avatar` varchar(1000) DEFAULT NULL,
    `del_flag` int(1) DEFAULT 0,
    PRIMARY KEY (`id`)
)ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;