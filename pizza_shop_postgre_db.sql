PGDMP  	    !                |         
   Pizza_Shop    16.3    16.3 	    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16398 
   Pizza_Shop    DATABASE     �   CREATE DATABASE "Pizza_Shop" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Pizza_Shop";
                postgres    false            �            1259    16405    pizzas    TABLE     D  CREATE TABLE public.pizzas (
    pizza_id integer NOT NULL,
    pizza_name character varying(100) NOT NULL,
    pizza_description character varying(250) NOT NULL,
    pizza_price integer DEFAULT 0 NOT NULL,
    pizza_status character varying(100),
    pizza_img character varying(100),
    pizza_orders integer DEFAULT 0
);
    DROP TABLE public.pizzas;
       public         heap    postgres    false            �            1259    16404    pizzas_pizza_id_seq    SEQUENCE     �   ALTER TABLE public.pizzas ALTER COLUMN pizza_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.pizzas_pizza_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �          0    16405    pizzas 
   TABLE DATA           }   COPY public.pizzas (pizza_id, pizza_name, pizza_description, pizza_price, pizza_status, pizza_img, pizza_orders) FROM stdin;
    public          postgres    false    216   �	       �           0    0    pizzas_pizza_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.pizzas_pizza_id_seq', 4, true);
          public          postgres    false    215                       2606    16410    pizzas pizzas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.pizzas
    ADD CONSTRAINT pizzas_pkey PRIMARY KEY (pizza_id);
 <   ALTER TABLE ONLY public.pizzas DROP CONSTRAINT pizzas_pkey;
       public            postgres    false    216            �   |  x��Q�N�`<}�>@ßh�xAmC"��8�@���=z��*P[^a����+BAM$1%���ݙ�
z��Vxb(����Ӓ"J� �.�,C�M�&4���[j�� ��#��b&<�n�R����:�d "9/B���JE�Y��Y���r����^ٳ�;���c��V��h�8Ա��ޔ����L� -Ǻ�$�
PA��cd�}p�[E;�z x��24�h+0�ӌ�r���J�^pr�A�5�����w�VM;����zЩ����D��}H/sy��lCf��?�1�N���i��41�k�1�0[8I�w<T�e�a���vl��X�;W���=׵����ir)�
z:��`��{��{َ�����i�'�FT     