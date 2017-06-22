DROP TABLE IF EXISTS public."user" CASCADE;
DROP SEQUENCE IF EXISTS user_id_seq;

-- Sequences

CREATE SEQUENCE user_id_seq START WITH 1000;

-- Table: public."user"

CREATE TABLE public."user" (
  id integer NOT NULL DEFAULT nextval('user_id_seq'::regclass),
  username varchar(20),
  password varchar(90),
  salt varchar(90),
  role name,
  nickname varchar(20),
  email text,
  avatar text COLLATE pg_catalog."default",
  bio text COLLATE pg_catalog."default",
  created timestamp with time zone NOT NULL DEFAULT now(),
  modified timestamp with time zone NOT NULL DEFAULT now(),
  banned boolean NOT NULL DEFAULT false
);

-- Trigger: user_update_modified_trigger

CREATE TRIGGER user_update_modified_trigger
  BEFORE UPDATE
  ON public."user"
  FOR EACH ROW
  EXECUTE PROCEDURE update_modified();
