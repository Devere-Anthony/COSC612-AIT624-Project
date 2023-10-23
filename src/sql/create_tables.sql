CREATE TABLE farm (
	supplier_id bigint GENERATED ALWAYS AS IDENTITY, 
	supplier_name varchar (50), 
	product_name varchar(50),
	email varchar(50),
	phone varchar(10), 
	CONSTRAINT farm_key PRIMARY KEY (supplier_id)
);


CREATE TABLE product (
	product_id bigint GENERATED ALWAYS AS IDENTITY, 
	barcode integer, 
	category varchar(50),
	supplier_id integer REFERENCES farm (supplier_id),
	retail numeric,
	wholesale numeric,
	quantity integer,
	max_thresh integer, 
	min_thresh integer,
	CONSTRAINT product_key PRIMARY KEY (product_id)
);


CREATE TABLE employee (
	employee_id bigint GENERATED ALWAYS AS IDENTITY, 
	first_name varchar(50), 
	last_name varchar(50),
	CONSTRAINT employee_key PRIMARY KEY (employee_id)
);


CREATE TABLE clientorder (
	order_id bigint GENERATED ALWAYS AS IDENTITY, 
	product_id integer REFERENCES product (product_id),
	quantity integer, 
	order_date timestamptz, 
	CONSTRAINT order_key PRIMARY KEY (order_id)
);