DROP TABLE IF EXISTS public.post CASCADE;
DROP SEQUENCE IF EXISTS post_id_seq CASCADE;

-- Sequences

CREATE SEQUENCE post_id_seq;

-- Table: public.post

-- Meaning of values for field visibility
-- -1: deleted
--  0: hidden
--  1: visible, default value

CREATE TABLE public.post (
  id integer NOT NULL DEFAULT nextval('post_id_seq'::regclass),
  title text COLLATE pg_catalog."default",
  content text COLLATE pg_catalog."default",
  created timestamp with time zone NOT NULL DEFAULT now(),
  modified timestamp with time zone NOT NULL DEFAULT now(),
  visibility integer DEFAULT 1,
  CONSTRAINT post_pkey PRIMARY KEY (id)
);

-- Trigger: post_update_modified_trigger

CREATE TRIGGER post_update_modified_trigger
  BEFORE UPDATE 
  ON public.post
  FOR EACH ROW
  EXECUTE PROCEDURE update_modified();

-- Test data:
-- INSERT INTO public.post (title, content) VALUES ('test', '# a test data\ntest');