DROP TABLE IF EXISTS public."comment" CASCADE;
DROP SEQUENCE IF EXISTS comment_id_seq;

-- Sequences

CREATE SEQUENCE comment_id_seq;

-- Table: public."comment"

CREATE TABLE public."comment" (
  id integer NOT NULL DEFAULT nextval('post_id_seq'::regclass),
  to_post integer NOT NULL REFERENCES post(id),
  from_user_id integer,
  from_anon_name varchar(20),
  to_user_id integer NOT NULL,
  to_anon_name varchar(20),
  content text COLLATE pg_catalog."default",
  created timestamp with time zone NOT NULL DEFAULT now(),
  modified timestamp with time zone NOT NULL DEFAULT now(),
  visibility integer DEFAULT 1,
  CONSTRAINT comment_pkey PRIMARY KEY (id),
  CONSTRAINT comment_check_from CHECK (NOT (from_user_id <> 0 AND from_anon_name IS NOT NULL)),
  CONSTRAINT comment_check_to CHECK (NOT (to_user_id <> 0 AND to_anon_name IS NOT NULL))
);

-- Trigger: comment_update_modified_trigger

CREATE TRIGGER comment_update_modified_trigger
  BEFORE UPDATE
  ON public."comment"
  FOR EACH ROW
  EXECUTE PROCEDURE update_modified();

-- Test data
-- INSERT INTO public."comment" (to_post, to_user_id, to_anon_name, content) VALUES (1, 0, '__marco__', 'Hello, world.');