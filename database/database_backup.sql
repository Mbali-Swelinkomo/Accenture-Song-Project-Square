PGDMP     0                     }            brandsdb #   15.5 (Ubuntu 15.5-0ubuntu0.23.04.1) #   15.5 (Ubuntu 15.5-0ubuntu0.23.04.1)     7           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            8           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            9           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            :           1262    32872    brandsdb    DATABASE     t   CREATE DATABASE brandsdb WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.UTF-8';
    DROP DATABASE brandsdb;
                postgres    false            �            1259    32878    brands    TABLE     �   CREATE TABLE public.brands (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    image_url character varying(255) NOT NULL,
    published boolean DEFAULT true
);
    DROP TABLE public.brands;
       public         heap    postgres    false            �            1259    32877    brands_id_seq    SEQUENCE     �   CREATE SEQUENCE public.brands_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.brands_id_seq;
       public          postgres    false    215            ;           0    0    brands_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.brands_id_seq OWNED BY public.brands.id;
          public          postgres    false    214            �           2604    32881 	   brands id    DEFAULT     f   ALTER TABLE ONLY public.brands ALTER COLUMN id SET DEFAULT nextval('public.brands_id_seq'::regclass);
 8   ALTER TABLE public.brands ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            4          0    32878    brands 
   TABLE DATA           @   COPY public.brands (id, name, image_url, published) FROM stdin;
    public          postgres    false    215   �
       <           0    0    brands_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.brands_id_seq', 15, true);
          public          postgres    false    214            �           2606    32884    brands brands_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.brands
    ADD CONSTRAINT brands_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.brands DROP CONSTRAINT brands_pkey;
       public            postgres    false    215            4   -  x�e��n�0����S�L=�òtR���@e�&	!�p�o�TU���|��K`n�5{�[�H$J�Dr�K䆄J[T��?52
������D�ʲ��V��~�n��9�(�C�����SB咣��E��a�w��.	�D0���FF��p�hS��_�k���MÚk2
{',�dN��Ի>�j�m0�wg���2�8j��%Vo�	bX)�®��^]S��K ��0T�5&f�:t�ۅ�wD�_�!�O�s4�;%�Xpd�1&ֵo�91�`A��Vc�Ë�6ER�����$˲_�&�     