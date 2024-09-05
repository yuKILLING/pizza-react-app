PGDMP  
                    |         
   Pizza_Shop    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16394 
   Pizza_Shop    DATABASE     �   CREATE DATABASE "Pizza_Shop" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Pizza_Shop";
                postgres    false            �            1259    16395    pizzas    TABLE     ]  CREATE TABLE public.pizzas (
    pizza_id integer NOT NULL,
    pizza_name character varying(100) NOT NULL,
    pizza_description character varying(250) NOT NULL,
    pizza_price integer DEFAULT 0 NOT NULL,
    pizza_status character varying(100),
    pizza_img character varying(100),
    pizza_orders integer DEFAULT 0,
    pizza_grams integer
);
    DROP TABLE public.pizzas;
       public         heap    postgres    false            �            1259    16402    pizzas_pizza_id_seq    SEQUENCE     �   ALTER TABLE public.pizzas ALTER COLUMN pizza_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.pizzas_pizza_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            �            1259    16409    users    TABLE     �   CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_email character varying NOT NULL,
    user_nickname character varying NOT NULL,
    user_password character varying NOT NULL,
    user_birthday character varying NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16408    users_user_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    218            �          0    16395    pizzas 
   TABLE DATA           �   COPY public.pizzas (pizza_id, pizza_name, pizza_description, pizza_price, pizza_status, pizza_img, pizza_orders, pizza_grams) FROM stdin;
    public          postgres    false    215   �       �          0    16409    users 
   TABLE DATA           a   COPY public.users (user_id, user_email, user_nickname, user_password, user_birthday) FROM stdin;
    public          postgres    false    218   �       �           0    0    pizzas_pizza_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.pizzas_pizza_id_seq', 12, true);
          public          postgres    false    216            �           0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 41, true);
          public          postgres    false    217            "           2606    16404    pizzas pizzas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.pizzas
    ADD CONSTRAINT pizzas_pkey PRIMARY KEY (pizza_id);
 <   ALTER TABLE ONLY public.pizzas DROP CONSTRAINT pizzas_pkey;
       public            postgres    false    215            $           2606    16413    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    218            �     x��V�N�@=��½G`�8�酶N����� H���z���P��&����7��Y;���(N<;;;�͛�mA�)�[|B٥�f�)�	i&aʁ��Y��)�h�"y����5�]ه77����U�Sy�}�X�bE�gtm��!��z�w${�fY��	:^�����p��Y�x/w[�ֶ�����m[�#�`_��� pI����}�a̩�ish��)�`T&�b�؞<����j��)�2��W#�����6�	�q���_�<>�y[v]��;~{Θ#����E�F�W厝|�*�L�㉸ȫ��e�|���]0�	r����C�/X+�T��c�I�ت��^{��)���v����cT��J�l�����)����nn]�[�oh�ۮ�
��2���	����R�L��K��&��ᒴQ�#u���B!�>�J�'�'Tm���&�=E�5�}��hrǲ��.������(����Q"h%P�(Ӟ�)߈�c�gt��A�
y�p7*�L�s���~��0-�׎gU��Դtݼ���^s�K'�k�}�9C�>Eϔ�}f<j����L������|��������G|@rty �Esz�$�C�ۊ-��dұ��P���Zz����B[�]큱�=�q�f݌�YzgWxh͗��x^Õ�z���ꦫ��v'�[�vV��bbN��)�s���)\�5�����x W�2�V�k� a�Ɣ��OKg5}��I�ib�3nos*����9y�	��'����zGS�e<_3��= $      �   }   x��1�0@�99h�I�0!1s�؉���#קz?Cطϼ���}W;��8�r��e:87�4IS%?��]�C�5�������c:6��W�!y�T�^�1�����Pf���� ��c��D''     