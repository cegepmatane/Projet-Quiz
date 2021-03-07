--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.5

-- Started on 2021-03-07 06:41:36 EST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2957 (class 1262 OID 16581)
-- Name: lequizdesquiz; Type: DATABASE; Schema: -; Owner: userQuiz
--

CREATE DATABASE lequizdesquiz WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'C.UTF-8' LC_CTYPE = 'C.UTF-8';


ALTER DATABASE lequizdesquiz OWNER TO "userQuiz";

\connect lequizdesquiz

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2947 (class 0 OID 16586)
-- Dependencies: 203
-- Data for Name: questionnaire_harry_potter; Type: TABLE DATA; Schema: public; Owner: userQuiz
--

INSERT INTO public.questionnaire_harry_potter VALUES ('Quel poste tient Harry Potter dans son équipe de quidditch ?', 'Batteur', 'Poursuiveur', 'Lanceur', 'Attrapeur', 1, 'Attrapeur');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quel est le prénom du meilleur ami du jeune Harry Potter ?', 'Sirius', 'Hagrid', 'Drago', 'Ron', 2, 'Ron');
INSERT INTO public.questionnaire_harry_potter VALUES ('Dans la saga « Harry Potter », un Moldu est une personne née dans une famille...', 'Sans argent', 'Sans secrets', 'Sans magie', 'Sans enfants', 3, 'Sans magie');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quel est le nom de famille de Hermione dans la saga « Harry Potter » ?', 'Greengrass', 'Grindelwald', 'Granger', 'Gaunt', 4, 'Granger');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quelle actrice incarne Hermione Granger dans la saga « Harry Potter » ?', 'Maggie Smith ', 'Emma Watson', 'Danielle Taylor ', 'Zoë Wanamaker ', 5, 'Emma Watson');
INSERT INTO public.questionnaire_harry_potter VALUES ('Dans quelle école de sorcellerie Harry Potter a-t-il suivi ses enseignements ?', 'Cambridge', 'Poudlard', 'West Point', 'Oxford', 6, 'Poudlard');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quelle forme prend l''épouvantard de Ron dans la saga « Harry Potter » ?', 'Un dragon', 'Un loup', 'Une araignée', 'Un scorpion', 7, 'Une araignée');
INSERT INTO public.questionnaire_harry_potter VALUES ('Comment se prénomment les parents du jeune Harry Potter ?', 'Hermione et Ron', 'James et Lily', 'Laurena et Victor', 'Olivia et Tom', 8, 'James et Lily');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quel acteur joue le rôle de Drago Malefoy dans « Harry Potter » ?', 'Tom Felton', 'Jeff Rawle', 'Robbie Coltrane', 'Rupert Grint', 9, 'Tom Felton');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quelle est la marque du balai de course utilisé par Harry Potter ?', 'Étoile Filante', 'Comète 260', 'Nimbus 2000', 'Brossdur 5', 10, 'Nimbus 2000');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quel est le nom du dragon appartenant à Hagrid dans la saga « Harry Potter » ?', 'Aragog', 'Crockdur', 'Norbert', 'Errol', 11, 'Norbert');
INSERT INTO public.questionnaire_harry_potter VALUES ('Qui a succédé à Armando Dippet comme directeur de Poudlard dans « Harry Potter » ?', 'Lord Voldemort', 'Severus Rogue', 'Albus Dumbledore', 'Ron Weasley', 12, 'Albus Dumbledore');
INSERT INTO public.questionnaire_harry_potter VALUES ('À quelle adresse habite la famille Dursley dans la saga « Harry Potter » ?', '4 Privet Drive', '4 Privet Road', '4 Privet Square', '4 Privet Avenue', 13, '4 Privet Drive');
INSERT INTO public.questionnaire_harry_potter VALUES ('Dans « Harry Potter », quel titre Voldemort a-t-il décidé de porter ?', 'Duc', 'Baron', 'Lord', 'Comte', 14, 'Lord');
INSERT INTO public.questionnaire_harry_potter VALUES ('Qui garde Azkaban, la prison des sorciers dans la saga « Harry Potter » ?', 'Les épouvantards', 'Les goules', 'Les détraqueurs', 'Les cerbères', 15, 'Les détraqueurs');
INSERT INTO public.questionnaire_harry_potter VALUES ('Qui est ministre de la magie dans la saga « Harry Potter » ?', 'Albus Dumbledore', 'Lucius Malefoy', 'Cornelius Fudge', 'Ludovic Verpey', 16, 'Cornelius Fudge');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quelle matière enseigne le Professeur Rogue dans la saga « Harry Potter » ?', 'Enchantement', 'Métamorphose', 'Défense', 'Potions', 17, 'Potions');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quel est le prénom de Hagrid, le demi-géant de la saga « Harry Potter » ?', 'Rubeus', 'Remus', 'Albus', 'Severus', 18, 'Rubeus');
INSERT INTO public.questionnaire_harry_potter VALUES ('Qui est professeur de soins aux créatures magiques dans la saga « Harry Potter » ?', 'Severus Rogue', 'Hagrid', 'Mme Chourave', 'Albus Dumbledore', 19, 'Hagrid');
INSERT INTO public.questionnaire_harry_potter VALUES ('Qui a offert le très performant Nimbus 2000 à Harry Potter ?', 'Severus Rogue', 'Albus Dumbledore', 'Minerva McGonagall', 'Drago Malefoy', 20, 'Minerva McGonagall');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quelle est la formule du sortilège de mort dans la saga « Harry Potter » ?', 'Mortibus Rem', 'Machina Fino', 'Avada Kedavra ', 'Post Mortem ', 21, 'Avada Kedavra ');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quels prénoms portent les jumeaux Weasley dans « Harry Potter » ?', 'Fred et George', 'Charlie et Bill', 'Lou et Cédric', 'Bill et George', 22, 'Fred et George');
INSERT INTO public.questionnaire_harry_potter VALUES ('Dans la saga « Harry Potter », qui est le prince de sang mêlé ?', 'Severus Rogue', 'Drago Malefoy', 'Voldemort', 'Dumbledore', 23, 'Severus Rogue');
INSERT INTO public.questionnaire_harry_potter VALUES ('À qui Harry Potter doit-il sa cicatrice obtenue suite à un sortilège de la Mort ?', 'Professeur Lupin', 'James Potter', 'Ron', 'Voldemort', 24, 'Voldemort');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quelle boisson sert-on principalement aux « Trois balais » dans « Harry Potter » ?', 'Le sodalamenthe', 'Le laitpinard', 'Le vinausucre', 'La bièraubeurre', 25, 'La bièraubeurre');
INSERT INTO public.questionnaire_harry_potter VALUES ('Comment se prénomme la mère de Drago Malefoy dans « Harry Potter » ?', 'Bellatrix', 'Lily', 'Narcissa', 'Dolores', 26, 'Narcissa');
INSERT INTO public.questionnaire_harry_potter VALUES ('À Poudlard, à quel étage se trouve la salle sur demande ?', 'Onzième étage', 'Deuxième étage', 'Septième étage', 'Vingtième étage', 27, 'Septième étage');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quel est le premier cadeau de Noël que Hagrid a offert à Harry Potter ?', 'Baguette', 'Clé', 'Chouette', 'Flûte', 28, 'Flûte');
INSERT INTO public.questionnaire_harry_potter VALUES ('Quel est le signe zodiacal du jeune Harry Potter, né en 1980 ?', 'Taureau', 'Vierge', 'Balance', 'Lion', 29, 'Lion');
INSERT INTO public.questionnaire_harry_potter VALUES ('En quoi se transforme Peter Pettigrow dans « Harry Potter » ?', 'En serpent', 'En poisson', 'En chat', 'En rat', 30, 'En rat');


--
-- TOC entry 2949 (class 0 OID 16597)
-- Dependencies: 205
-- Data for Name: questionnaire_star_wars; Type: TABLE DATA; Schema: public; Owner: userQuiz
--

INSERT INTO public.questionnaire_star_wars VALUES (1, 'Sur quelle planète désertique Anakin Skywalker est-il arrivé à l''âge de quatre ans ?', 'Hoth', 'Tatooine', 'Endor', 'Naboo', 'Tatooine');
INSERT INTO public.questionnaire_star_wars VALUES (2, 'Quel légendaire guerrier Wookiee est depuis longtemps le fidèle compagnon d''Han Solo ?', 'Jar Jar Binks', 'Watto', 'Palpatine', 'Chewbacca', 'Chewbacca');
INSERT INTO public.questionnaire_star_wars VALUES (3, 'Quel personnage de « Star Wars » a été conçu comme un alien ressemblant à une limace ?', 'Jabba le Hutt', 'Lando Calrissian', 'Dark Maul', 'Mace Windu', 'Jabba le Hutt');
INSERT INTO public.questionnaire_star_wars VALUES (4, 'Qui a enregistré un message dans les circuits intégrés de R2-D2 dans « Un Nouvel Espoir » ?', 'Obi-Wan', 'La Princesse Leia', 'Anakin', 'Chewbacca', 'La Princesse Leia');
INSERT INTO public.questionnaire_star_wars VALUES (5, 'Dans l''univers de « Star Wars », quelle espèce vit sur la lune forestière de la planète Endor ?', 'Wookiee', 'Sarlacc', 'Tusken', 'Ewok', 'Ewok');
INSERT INTO public.questionnaire_star_wars VALUES (6, 'Quel métier est exercé par Jango Fett, humain originaire de Concord Dawn ?', 'Chasseur de primes', 'Musicien', 'Vendeur de droïdes', 'Sénateur', 'Chasseur de primes');
INSERT INTO public.questionnaire_star_wars VALUES (7, 'Quel est le lien de parenté entre Luke Skywalker et la Princesse Leia ?', 'Cousin et cousine', 'Frère et soeur', 'Oncle et tante', 'Mari et femme', 'Frère et soeur');
INSERT INTO public.questionnaire_star_wars VALUES (8, 'Quel nom porte le robot qu''Anakin a construit à partir du corps d''un droïde de protocole ?', 'R2-D2', 'T-1000', 'Daryl', 'C-3PO', 'C-3PO');
INSERT INTO public.questionnaire_star_wars VALUES (9, 'Quel est le nom du vaisseau spatial du contrebandier Han Solo ?', 'Faucon Millenium', 'Speeder', 'Aigle Solitaire', 'B-Wing', 'Faucon Millenium');
INSERT INTO public.questionnaire_star_wars VALUES (10, 'Quelle est la couleur du sabre laser de Mace Windu, créateur de la technique du Vaapad ?', 'Bleue', 'Verte', 'Violette', 'Rouge', 'Violette');
INSERT INTO public.questionnaire_star_wars VALUES (11, 'Qui était le maître du Comte Dooku, membre des systèmes indépendants ?', 'Dark Bane', 'Dark Sidious', 'Dark Vador', 'Dark Maul', 'Dark Sidious');
INSERT INTO public.questionnaire_star_wars VALUES (12, 'Sous quel autre nom connaît-on le Chancelier Palpatine, originaire de Naboo ?', 'Dark Bane', 'Dark Sidious', 'Dark Vador', 'Dark Malak', 'Dark Sidious');
INSERT INTO public.questionnaire_star_wars VALUES (13, 'Quel seigneur Sith, très habile à manier le sabre double, a tué Qui-Gon Jinn ?', 'Kit Fisto', 'Dark Maul', 'Le Compte Dooku', 'Bail Organa', 'Dark Maul');
INSERT INTO public.questionnaire_star_wars VALUES (14, 'Sénatrice de Naboo au Sénat galactique, combien Padmé Amidala eut-elle d''enfants ?', 'Deux', 'Quatre', 'Cinq', 'Trois', 'Deux');
INSERT INTO public.questionnaire_star_wars VALUES (15, 'À qui Dark Vador a-t-il tranché la main droite dans l''épisode V de « Star Wars » ?', 'Obi-Wan', 'Han Solo', 'Luke', 'Mace Windu', 'Luke');
INSERT INTO public.questionnaire_star_wars VALUES (16, 'Quel est le prénom du fils cloné de Jango Fett, célèbre chasseur de primes ?', 'Shmi', 'Dooku', 'Owen', 'Boba', 'Boba');
INSERT INTO public.questionnaire_star_wars VALUES (17, 'Quel célèbre personnage de « Star Wars » a été élevé par son oncle et sa tante ?', 'Plo Koon', 'Han Solo', 'Chewbacca', 'Luke Skywalker', 'Luke Skywalker');
INSERT INTO public.questionnaire_star_wars VALUES (18, 'Quel acteur est célèbre pour avoir tenu le rôle de Luke Skywalker dans la saga « Star Wars » ?', 'Harrison Ford', 'Liam Neeson', 'Mark Hamill', 'Alec Guinness', 'Mark Hamill');
INSERT INTO public.questionnaire_star_wars VALUES (19, 'Quel nom Obi-Wan Kenobi a-t-il adopté pendant des années jusqu''au jour où il rencontra Luke ?', 'Tom', 'Ken', 'Ben', 'Sid', 'Ben');
INSERT INTO public.questionnaire_star_wars VALUES (20, 'Quel Gungan vivant dans la cité sous-marine d''Otoh Gunga a été exilé par Boss Nass ?', 'Lando Calrissian', 'Watto', 'Chewbacca', 'Jar Jar Binks', 'Jar Jar Binks');
INSERT INTO public.questionnaire_star_wars VALUES (21, 'Après avoir imposé le respect auprès des maîtres Jedi, à quel âge Yoda est-il mort ?', '750 ans', '900 ans', '1 200 ans', '2 200 ans', '900 ans');
INSERT INTO public.questionnaire_star_wars VALUES (22, 'Dans le premier épisode, qui est le concurrent d''Anakin lors de la course de modules ?', 'Sebulba', 'Lama Su', 'Ben Quadinaros', 'Bultar Swan', 'Sebulba');
INSERT INTO public.questionnaire_star_wars VALUES (23, 'Quel est le prénom de la mère d''Anakin Skywalker, qui deviendra Dark Vador ?', 'Padmé', 'Boba', 'Cordé', 'Shmi', 'Shmi');
INSERT INTO public.questionnaire_star_wars VALUES (24, 'Quel ordre Palpatine a-t-il donné aux généraux de l''armée de clones dans l''épisode III ?', 'Ordre 66', 'Ordre 22', 'Ordre 88', 'Ordre 44', 'Ordre 66');
INSERT INTO public.questionnaire_star_wars VALUES (25, 'Quel est l''espèce du Vice roi de la Fédération du commerce Nute Gunray ?', 'Quarren', 'Ortolan', 'Neimoidien', 'Nohgri', 'Neimoidien');
INSERT INTO public.questionnaire_star_wars VALUES (26, 'Apparu dans les épisodes II et III, comment le comte Dooku est-il également appelé ?', 'Dark Vador', 'Dark Tyranus', 'Dark Malak', 'Dark Sidious', 'Dark Tyranus');
INSERT INTO public.questionnaire_star_wars VALUES (27, 'Quel ferrailleur originaire de Toydaria fut l''ancien propriétaire d''Anakin et de sa mère ?', 'Watto', 'Boss Nass', 'Plo Koon', 'Jango', 'Watto');
INSERT INTO public.questionnaire_star_wars VALUES (28, 'Quel autre nom est utilisé pour désigner Leia Amidala Skywalker, soeur de Luke ?', 'Leia Windu', 'Leia Amidala', 'Leia Solo', 'Leia Organa', 'Leia Organa');
INSERT INTO public.questionnaire_star_wars VALUES (29, 'Quel personnage peut survivre dans le vide spatial sans appareil respiratoire ?', 'Watto', 'Plo Koon', 'Dark Bane', 'Han Solo', 'Plo Koon');
INSERT INTO public.questionnaire_star_wars VALUES (30, 'Qui est considérée comme la femme Jedi la plus puissante de sa génération ?', 'Shaak Ti', 'Plo Koon', 'Leia Organa', 'Sebulba', 'Shaak Ti');


--
-- TOC entry 2951 (class 0 OID 16608)
-- Dependencies: 207
-- Data for Name: utilisateurs; Type: TABLE DATA; Schema: public; Owner: userQuiz
--

INSERT INTO public.utilisateurs VALUES (1, 'kenny', NULL, 'azerty');
INSERT INTO public.utilisateurs VALUES (2, 'simon', NULL, 'azerty');


--
-- TOC entry 2961 (class 0 OID 0)
-- Dependencies: 202
-- Name: questionnaire_harry_potter_id_seq; Type: SEQUENCE SET; Schema: public; Owner: userQuiz
--

SELECT pg_catalog.setval('public.questionnaire_harry_potter_id_seq', 30, true);


--
-- TOC entry 2962 (class 0 OID 0)
-- Dependencies: 204
-- Name: questionnaire_start_wars_id_seq; Type: SEQUENCE SET; Schema: public; Owner: userQuiz
--

SELECT pg_catalog.setval('public.questionnaire_start_wars_id_seq', 30, true);


--
-- TOC entry 2963 (class 0 OID 0)
-- Dependencies: 206
-- Name: utilisateurs_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: userQuiz
--

SELECT pg_catalog.setval('public.utilisateurs_user_id_seq', 1, false);


-- Completed on 2021-03-07 06:41:38 EST

--
-- PostgreSQL database dump complete
--

