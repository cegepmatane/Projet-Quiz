-- -----------------------------------------------------------------------------
-- 
-- OpenQuizzDB
-- Fournisseur de contenu libre
--
-- Quizz : Star Wars
-- [ La légende continue ]
-- Difficulté du quizz : 2 / 5
-- Rédacteur : Geremia Fortunato
-- 
-- https://www.openquizzdb.org
--  
-- -----------------------------------------------------------------------------

-- 
-- Structure de la table openquizzdb
--

DROP TABLE IF EXISTS openquizzdb;
CREATE TABLE IF NOT EXISTS openquizzdb (
  quizz_id mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  langue varchar(2) NOT NULL default '',
  theme varchar(100) NOT NULL default '',
  question varchar(255) NOT NULL default '',
  prop1 varchar(40) NOT NULL default '',
  prop2 varchar(40) NOT NULL default '',
  prop3 varchar(40) NOT NULL default '',
  prop4 varchar(40) NOT NULL default '',
  niveau char(1) NOT NULL default '',
  anecdote varchar(255) NOT NULL default '',
  wiki varchar(255) NOT NULL default '',
  PRIMARY KEY (quizz_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 
-- Contenu de la table openquizzdb
--

INSERT INTO
  openquizzdb (langue,theme,question,prop1,prop2,prop3,prop4,niveau,anecdote,wiki)
VALUES
  ('fr', 'Star Wars', 'Qui est le padawan du chevalier et maître Jedi Obi-Wan Kenobi ?', 'Anakin Skywalker', 'Yoda', 'Mace Windu', 'Leia', '1', 'Obi-Wan Kenobi est tout d\'abord le padawan de Qui-Gon Jinn avant de devenir lui-même l\'instructeur d\'Anakin Skywalker.', 'https://fr.wikipedia.org/wiki/Obi-Wan_Kenobi'),
  ('fr', 'Star Wars', 'Quel petit bonhomme vert a enseigné à Luke comment utiliser la Force ?', 'Yoda', 'Anakin Skywalker', 'Jabba', 'Yado', '1', 'Yoda est présent dans cinq épisodes sur ceux que compte actuellement la saga (I, II, III, V, VI).', 'https://fr.wikipedia.org/wiki/Yoda'),
  ('fr', 'Star Wars', 'Dans la saga « Star Wars », quels chevaliers se battent avec des sabres lasers ?', 'Jedi', 'Zodiak', 'Table ronde', 'Samourai', '1', 'L\'Ordre Jedi est dirigé par le Conseil Jedi, qui se réunit sur la planète Coruscant.', 'https://fr.wikipedia.org/wiki/Jedi'),
  ('fr', 'Star Wars', 'De quelle station spatiale ennemie la princesse Leia apprend-elle les plans de construction ?', 'L\'Étoile Noire', 'L\'Étoile qui tue', 'La Lune obscure', 'Le côté obscur', '1', 'L\'Étoile noire et l\'Étoile de la mort sont deux stations spatiales sidérales mobiles de la taille d\'une lune.', 'https://fr.wikipedia.org/wiki/Étoile_de_la_mort'),
  ('fr', 'Star Wars', 'Personnage central de la saga « Star Wars », avec qui Anakin Skywalker se marie-t-il ?', 'Sénatrice Padme', 'Leia Organa', 'Madpe', 'Obiwana', '1', 'Padmé Amidala Skywalker est née en 46 av. BY sur Naboo et morte en 19 av. BY sur Polis Massa.', 'https://fr.wikipedia.org/wiki/Padmé_Amidala'),
  ('fr', 'Star Wars', 'Pour aider les Jedi a réparer leur vaisseau, Anakin doit gagner une course...', 'De module', 'De nodule', 'De acklay', 'De nexu', '1', 'Après une course acharnée et très disputée, Anakin parviendra finalement à remporter la victoire.', 'https://fr.wikipedia.org/wiki/Star_Wars,_épisode_I_:_La_Menace_fantôme'),
  ('fr', 'Star Wars', 'Que contrôlent les Jedi qui les rendent très différents des simples humains ?', 'La Force', 'La lumière', 'Le langage droïde', 'L\'immortalité', '1', 'Les chevaliers Jedi forment un ordre d\'individus qui sont aptes à maîtriser la Force et qui l\'utilisent uniquement pour faire le bien.', 'https://fr.wikipedia.org/wiki/Jedi'),
  ('fr', 'Star Wars', 'Quels puissants ennemis et « seigneurs » les Jedi pensent-ils avoir vaincu ?', 'Les siths', 'Les friths', 'Les Ch\'tis', 'Les Vicks', '1', 'Les siths sont les ennemis jurés des Jedi dont ils constituent une menace pour la République Galactique.', 'https://fr.wikipedia.org/wiki/Sith'),
  ('fr', 'Star Wars', 'De qui la princesse Leia tombe-t-elle amoureuse dans la saga « Star Wars » ?', 'Han Solo', 'Luke Skywalker', 'Chewbacca', 'Obi-Wan Kenobi', '1', 'Han Solo est un contrebandier, pilote et ancien élève officier impérial qui a dû déserter pour sauver Chewbacca.', 'https://fr.wikipedia.org/wiki/Han_Solo'),
  ('fr', 'Star Wars', 'Quelle armée aidera les Jedi pour ensuite se retourner contre eux et les forces du mal ?', 'L\'armée des clones', 'Les faucons', 'Les Bantha', 'Les Gungans', '1', '« L\'Attaque des clones » est l\'un des premiers films à être tourné entièrement en numérique.', 'https://fr.wikipedia.org/wiki/Star_Wars,_épisode_II_:_L\'Attaque_des_clones'),
  ('fr', 'Star Wars', 'Quel chancelier suprême est seigneur noir des Sith dans la série « Star Wars » ?', 'Palpatine', 'Padme Amidala', 'Valorum', 'Yoda', '2', 'Originaire de Naboo, Palpatine a été formé au côté obscur de la Force dès le plus jeune âge par son maître, Dark Plagueis.', 'https://fr.wikipedia.org/wiki/Palpatine'),
  ('fr', 'Star Wars', 'De qui Chewbacca, le plus célèbre des guerriers Wookie, est-il le co-pilote ?', 'Han Solo', 'Obi-Wan Kenobi', 'Luke Skywalker', 'Anakin Skywalker', '2', 'Chewbacca fait partie du noyau de rebelles qui ont restauré la liberté dans la galaxie.', 'https://fr.wikipedia.org/wiki/Chewbacca'),
  ('fr', 'Star Wars', 'Que se passe-t-il lorsqu\'Anakin Skywalker affronte le compte Dooku la première fois ?', 'Il perd une main', 'Il gagne le duel', 'Yoda tue Dooku', 'Dooku le tue', '2', 'Dooku fut l\'héritier d\'une famille d\'aristocrates et diplomates de Serenno à la fortune colossale.', 'https://fr.wikipedia.org/wiki/Comte_Dooku'),
  ('fr', 'Star Wars', 'Parmi ces personnages de « Star Wars », qui dirige le conseil des Jedi avec Yoda ?', 'Mace Windu', 'Anakin Skywalker', 'Qui Go Jin', 'Obiwan Kenobi', '2', 'En plus de sa réputation de sage, Windu est considéré comme l\'un des meilleurs combattants au sabre laser de l\'Ordre Jedi.', 'https://fr.wikipedia.org/wiki/Mace_Windu'),
  ('fr', 'Star Wars', 'Quel maître Jedi d\'Obi-Wan Kenobi sera finalement tué par Dark Maul ?', 'Qui-Gon Jinn', 'Ki-Adi-Mundi', 'Plo Koon', 'Adi Gallia', '2', 'Le personnage est interprété par Liam Neeson et doublé par Samuel Labarthe en France.', 'https://fr.wikipedia.org/wiki/Qui-Gon_Jinn'),
  ('fr', 'Star Wars', 'Quel apprenti Sith Obi-Wan va-t-il tuer en vengeant la mort de son maître ?', 'Dark Maul', 'Dark Sidious', 'Dark Pantouf', 'Dark Leouf', '2', 'Le personnage de Dark Maul fut créé par l\'illustrateur Iain Mccaig pour Industrial Light et Magic.', 'https://fr.wikipedia.org/wiki/Dark_Maul'),
  ('fr', 'Star Wars', 'Quel nom porte le vaisseau spatial du contrebandier Han Solo ?', 'Faucon Millénium', 'Anneau Solaire', 'Intergalactique', 'Enterprise', '2', 'Le Faucon Millénium fut appelé « Millenium Condor » dans la version française du premier épisode produit.', 'https://fr.wikipedia.org/wiki/Faucon_Millenium'),
  ('fr', 'Star Wars', 'Qui tue Boba Fett, chasseur de primes connu pour son adresse à traquer sa proie ?', 'Han Solo', 'Luke Skywalker', 'Obi-Wan Kenobi', 'Dark Vador', '2', 'On apprendra plus tard qu\'il échappe à la digestion du Gerand Sarlacc et qu\'il reviendra dans l\'histoire.', 'https://fr.wikipedia.org/wiki/Boba_Fett'),
  ('fr', 'Star Wars', 'Sur quelle planète vit Anakin avant de partir rejoindre les Jedi ?', 'Tatooine', 'Dagobah', 'Naboo', 'Mustafar', '2', 'Située dans la Bordure extérieure, cette planète désertique est le refuge des plus vils brigands de la galaxie.', 'https://fr.wikipedia.org/wiki/Tatooine'),
  ('fr', 'Star Wars', 'Quel célèbre chasseur de primes a été engagé par Dark Vador pour traquer Han Solo ?', 'Boba Fett', 'Jabba le Hutt', 'Han Solo', 'Zam Wesell', '2', 'L\'origine de Boba Fett est donnée dans « L\'Attaque des clones » : il est le « fils » du légendaire chasseur de primes Jango Fett.', 'https://fr.wikipedia.org/wiki/Boba_Fett'),
  ('fr', 'Star Wars', 'Une fois mesurée, quelle molécule permet de savoir si un individu peut être un Jedi ?', 'Midi-chloriens', 'Meti-chlorien', 'Chlorydrate', 'Chlori-Metica', '3', 'Dans la saga « Star Wars », Anakin Skywalker se fait remarquer par son fort taux de midi-chloriens.', 'https://fr.wikipedia.org/wiki/Force_(Star_Wars)'),
  ('fr', 'Star Wars', 'Quel taux de cette molécule Anakin possède-t-il lorsque Qui-Gon l\'analyse la première fois ?', 'Plus de 20 000', 'Plus de 10 000', 'Plus de 5 000', 'Plus de 1 000', '3', 'Ce taux de midi-­chloriens est de plus supérieur à celui de Yoda, pourtant reconnu comme Grand Maître des Jedi.', 'https://fr.wikipedia.org/wiki/Force_(Star_Wars)'),
  ('fr', 'Star Wars', 'Quel mystique de la connaissance est le maître de Dark Sidious ?', 'Dark Plagueis', 'Dark Vador', 'Dark Bane', 'Dark Tyranus', '3', 'Seigneur Noir des Sith, il possédait un pouvoir inimaginable qui lui permettait de garder les gens en vie avec la Force.', 'https://fr.wikipedia.org/wiki/Dark_Plagueis'),
  ('fr', 'Star Wars', 'Lesquels de ces épisodes de « Star Wars » n\'ont pas été réalisés par George Lucas ?', '5 et 6', '1 à 3', '3 et 4', '2 et 3', '3', 'Même s\'il ne les a pas réalisés, George Luas a donné de très nombreuses directives à Irvin Kerschner et Richard Marquand.', 'https://fr.wikipedia.org/wiki/Star_Wars'),
  ('fr', 'Star Wars', 'À partir de quelle bataille peut-on mesurer la chronologie dans « Star Wars » ?', 'Bataille de Yavin', 'Bataille de Jaku', 'Bataille de Coruscant', 'Bataille de Naboo', '3', 'La bataille de Yavin oppose l\'Empire galactique aux Rebelles autour de la planète gazeuse Yavin.', 'https://fr.wikipedia.org/wiki/Bataille_de_Yavin'),
  ('fr', 'Star Wars', 'Que signifie la dernière phrase de Dark Vador avant de mourir : « Tu l\'as déjà fait Luke » ?', 'L\'avoir sauvé', 'L\'avoir retrouvé', 'L\'avoir trahi', 'L\'avoir aimé', '3', 'Le fait que Dark Vador soit le père des jumeaux Luke Skywalker et Leia Organa constitue l\'intrigue principale de la saga.', 'https://fr.wikipedia.org/wiki/Anakin_Skywalker'),
  ('fr', 'Star Wars', 'Contre qui Han Solo remporte-t-il le Faucon Millénium lors d\'une partie de sabacc ?', 'Lando Calrissian', 'Jabba le Hutt', 'Boba Fett', 'Watto', '3', 'Lando Calrissian est devenu par la suite administrateur de la cité des Nuages, une colonie minière.', 'https://fr.wikipedia.org/wiki/Lando_Calrissian'),
  ('fr', 'Star Wars', 'Sur quelle planète Luke est-il parti pour apprendre à devenir un véritable Jedi ?', 'Dagobah', 'Naboo', 'Utapau', 'Malastare', '3', 'Dagobah, dans le secteur Sluis, est un monde de sombres marais, de bayous putrides et de forêts d\'arbres tortueux.', 'https://fr.wikipedia.org/wiki/Dagobah'),
  ('fr', 'Star Wars', 'Dans « Star Wars », de George Lucas, qui tue le chancelier Palpatine alias Dark Sidious ?', 'Dark Vador', 'Luke Skywalker', 'La princesse Leia', 'Han Solo', '3', 'Le règne de Palpatine s\'achève dans l\'épisode VI, à la fin duquel il est tué par Anakin Skywalker en l\'an 4 ap. BY.', 'https://fr.wikipedia.org/wiki/Palpatine'),
  ('fr', 'Star Wars', 'Combien d\'années séparent le premier épisode sorti en salle de l\'épisode 3 ?', '28 ans', '26 ans', '24 ans', '30 ans', '3', 'À l\'origine nommée « La Guerre des étoiles », « Star Wars » est un univers de science-fiction créé par George Lucas en 1977.', 'https://fr.wikipedia.org/wiki/Star_Wars');
