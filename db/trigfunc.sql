-- DROP FUNCTION public.update_modified() CASCADE;

-- FUNCTION: public.update_modified()

CREATE OR REPLACE FUNCTION public.update_modified()
  RETURNS trigger
  LANGUAGE 'plpgsql'
AS $$
BEGIN
  NEW.modified = now();
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.encrypt_password(
  password text,
  salt text
) RETURNS text
  LANGUAGE 'plpgsql'
AS $$
BEGIN
  RETURN encode(hmac(password, salt, 'sha512'), 'base64');
END;
$$;