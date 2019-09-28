
# create schema in database voyccom_thai as owner voyccom_jhagstrand

create schema thai;

create table thai.dictionary (
	id serial primary key,
	source integer,
	level integer,
	defnum integer,
	pos char(1),
	thai varchar(50),
	english varchar(50),
	detail varchar(255)
);
create index thai_dict_thai on thai.dictionary(thai);
create index thai_dict_english on thai.dictionary(english);

create table thai.vocab (
	id serial primary key,
	thai varchar(50),
	defnum integer,
	state char(1)
);
create index on thai.vocab(thai,defnum);

grant all on schema thai to voyccom_webuser64;
grant all on table thai.dictionary to voyccom_webuser64;
grant all on index thai_dict_thai to voyccom_webuser64;
grant all on index thai_dict_english to voyccom_webuser64;
grant all on table thai.vocab to voyccom_webuser64;
grant all on index thai_vocab to voyccom_webuser64;

