--  Drop table

--  DROP TABLE testServ.testTable;

CREATE TABLE testServ.testTable (
	id INT auto_increment NOT NULL,
	`text` varchar(100) NULL,
	`timeStamp` TIMESTAMP DEFAULT CURRENT_TIMESTAMP NULL,
	CONSTRAINT testTable_PK PRIMARY KEY (id)
)
ENGINE=InnoDB
DEFAULT CHARSET=utf8
COLLATE=utf8_general_ci
COMMENT='Table for first DB access test';