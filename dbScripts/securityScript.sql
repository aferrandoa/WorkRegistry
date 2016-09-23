create schema WRUSERS;

set schema WRUSERS;

create table users(
	username varchar(50) not null primary key,
	password varchar(60) not null,
	enabled boolean not null
);

create table user_roles (
  user_role_id INTEGER GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1) primary key,
  username varchar(50) NOT NULL,
  role varchar(45) NOT NULL,
  CONSTRAINT fk_username foreign key(username) REFERENCES users (username));
  
 CREATE INDEX fk_username_idx ON user_roles (username);
 create unique index uni_username_role on user_roles (role,username);

create table user_data (
	username varchar(50) not null primary key,
	cdemployee  varchar(10) not null,
	name varchar(80) not null,
	surname1 varchar(80) not null,
	surname2 varchar(80) not null,
	birthdate date not null,
	CONSTRAINT fk_user_data_username foreign key(username) REFERENCES users (username)
)

alter table user_data add constraint uni_cdemployee unique (cdemployee);
 
create table work_registers (
	work_registers_id INTEGER GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1) primary key,
	cdemployee varchar(10) not null,
	cdclient varchar(10) not null,
	cdlocation varchar(10) not null,
	workdate date not null,
	starttime timestamp not null,
	endtime timestamp,
	CONSTRAINT fk_work_registers_cdemployee foreign key(cdemployee) REFERENCES user_data (cdemployee)
)

CREATE INDEX fk_cdemployee_idx ON work_registers (cdemployee);

/*
create table authorities (
    username varchar(50) not null,
    authority varchar(50) not null,
    constraint fk_authorities_users foreign key(username) references users(username)
);

create unique index ix_auth_username on authorities (username,authority);

drop table authorities;

drop table user_roles;

drop table users;

drop table user_data;

*/ 
 
--------------
 --delete from users;
select * from WRUSERS.WORK_REGISTERS;

 
 insert into users values ('amferrando', '$2a$10$EblZqNptyYvcLm/VwDCVAuBjzZOI7khzdyGPBr08PpIi0na624b8.', true); --123456
 
 insert into user_roles(username, role) values('amferrando', 'ROLE_USER');
 insert into user_roles(username, role) values('amferrando', 'ROLE_ADMIN');
 
 insert into user_data values('amferrando', '0000000001', 'Angel', 'Ferrando', 'Abalos', DATE('09/24/1988'));