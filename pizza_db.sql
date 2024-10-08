PGDMP                      |         
   Pizza_Shop    16.4    16.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16394 
   Pizza_Shop    DATABASE     �   CREATE DATABASE "Pizza_Shop" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Pizza_Shop";
                postgres    false            �            1259    16418    credit_cards    TABLE       CREATE TABLE public.credit_cards (
    card_id integer NOT NULL,
    card_number character varying NOT NULL,
    card_owner character varying NOT NULL,
    mm_yy character varying NOT NULL,
    cvv character varying NOT NULL,
    card_user integer NOT NULL
);
     DROP TABLE public.credit_cards;
       public         heap    postgres    false            �            1259    16417    credit_cards_card_id_seq    SEQUENCE     �   ALTER TABLE public.credit_cards ALTER COLUMN card_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.credit_cards_card_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    220            �            1259    16395    pizzas    TABLE     ]  CREATE TABLE public.pizzas (
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
            public          postgres    false    215            �            1259    16409    users    TABLE     $  CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_email character varying NOT NULL,
    user_nickname character varying NOT NULL,
    user_password character varying NOT NULL,
    user_birthday character varying NOT NULL,
    "user_isAdmin" boolean DEFAULT false NOT NULL
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
            public          postgres    false    218            �          0    16418    credit_cards 
   TABLE DATA           _   COPY public.credit_cards (card_id, card_number, card_owner, mm_yy, cvv, card_user) FROM stdin;
    public          postgres    false    220           �          0    16395    pizzas 
   TABLE DATA           �   COPY public.pizzas (pizza_id, pizza_name, pizza_description, pizza_price, pizza_status, pizza_img, pizza_orders, pizza_grams) FROM stdin;
    public          postgres    false    215   j       �          0    16409    users 
   TABLE DATA           q   COPY public.users (user_id, user_email, user_nickname, user_password, user_birthday, "user_isAdmin") FROM stdin;
    public          postgres    false    218   �       �           0    0    credit_cards_card_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.credit_cards_card_id_seq', 65, true);
          public          postgres    false    219            �           0    0    pizzas_pizza_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.pizzas_pizza_id_seq', 12, true);
          public          postgres    false    216            �           0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 42, true);
          public          postgres    false    217            ,           2606    16424    credit_cards credit_cards_pkey 
   CONSTRAINT     a   ALTER TABLE ONLY public.credit_cards
    ADD CONSTRAINT credit_cards_pkey PRIMARY KEY (card_id);
 H   ALTER TABLE ONLY public.credit_cards DROP CONSTRAINT credit_cards_pkey;
       public            postgres    false    220            (           2606    16404    pizzas pizzas_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.pizzas
    ADD CONSTRAINT pizzas_pkey PRIMARY KEY (pizza_id);
 <   ALTER TABLE ONLY public.pizzas DROP CONSTRAINT pizzas_pkey;
       public            postgres    false    215            *           2606    16413    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    218            �   :   x�33�4420V��02V042�P0246�v�tT�p�v��E���9M�b���� �	�      �     x��V�N�@>��½G`��w酶N�%(qӊ�h@
*��SU�C��j.!!�fߨ߬�ر]���`'���o�٭�M��ˡ�(�e����f��I#,�4�����<��B������b�}OIN尤�,Ә5�k�iB>�d?1����n�ryHJv�����Z��!��*/O`�V��S���S��T�a�ǖV^|E�G�� ��M�x���C����V�q��sp���t�ۍ����u�b[�[�f�������S]����ꓠ��Q�z �a�
)E�H=G8��1�K6=e#
�i������&�m�	^��5�Y�������GTS
��E,|�ϋȁ.?r��0+T=��b�2_�/䁭�t��E�R�(bLOy�R�X�����j�$�M�9���Lڎ�_��]��e�5��%=�Ƅ�7EO�b)f�9m�N�ô�����=�>��8�TW�t#�w"��h�m2LI`&��%�zj�O�c�I�1k�I{��ؖ�max(�jlF�Cs��������y��e=��0M��c#�i�����H�_a(����Yo�k�{	�GOR�H]��=*c��;�8~C1��YE2�(lյ���2~<�3 y��ʞEiX��S�?.q<�j[/��6�v7nrC�C3M>F���l��Եa���9�\�у� �vU+]�vǍ����^�@S�/�[]0|5ʖ��+��v�]���,��Ӡ����\y
9�9���������ѰۋX;·��,aZ�U�y�X�+��g���E@�׭f2�MC{��i�_�� *      �   ~   x��1�0@�99h�M�0!1s�؍���#�'z�0�O��F;���#<�^����tG�
�:i*�V��dQ�^�T��e�\Uy�΄U=�|�mg)$�Tc67I���{���� ��5��O'�     