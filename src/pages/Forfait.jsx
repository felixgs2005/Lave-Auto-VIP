import React, { useState } from "react";
import "../Styles/forfait.css";

const forfaitsData = [
  {
    id: 1,
    category: "auto",
    title: "CIRE PERFECTION WAX 324 AUTO",
    description:
      "Application à la main de la cire, offre une protection d'une durée de 9 à 13 mois selon usage du véhicule.",
    duration: "1 h 30 min",
    price: "79,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/KD7C3GJLRCUNH3IBR2L467KS",
  },
  {
    id: 2,
    category: "camion",
    title: "REMISE À NEUF CAMION",
    description:
      "- Lavage int/ext\n- Tornardo trappe à air\n- Balayeuse\n- Protecteur de vinyle\n- Vitre int.\n- Shampoing tapis/tissu (au besoin)\n- Shampoing moteur\n- Cire 324\n- Lustre à pneu\n- Vitre ext.",
    duration: "6 h",
    price: "299,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/ZBE52IX25K3ETXJEJEZBSUIU",
  },
  {
    id: 3,
    category: "auto",
    title: "REMISE À NEUF AUTO",
    description:
      "- Lavage int/ext\n- Tornardo trappe à air\n- Balayeuse\n- Protecteur de vinyle\n- Vitre int.\n- Shampoing tapis/tissu (au besoin)\n- Shampoing moteur\n- Cire 324\n- Décontamination peinture\n- Lustre à pneu\n- Vitre ext.",
    duration: "4 h",
    price: "229,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/6YMGDQRM77S2XJFQQCS5WMB3",
  },
  {
    id: 4,
    category: "auto",
    title: "POSE DE PNEU AUTO (DÉJÀ MONTÉ)",
    description:
      "- Installer 4 pneus déjà montés sur les roues\n- Effectuer la rotation",
    duration: "45 min",
    price: "49,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/5HM6MUHFRIUFMSDQ3EJTAHX6",
  },
  {
    id: 5,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ACIER 13 À 15 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "59,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/YSRAMCPTLGPNI6OZROWK3QZR",
  },
  {
    id: 6,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ACIER 16 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "64,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/S2I4LGLFRWKZR6MG347WSPZ3",
  },
  {
    id: 7,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ACIER 17 À 18 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "69,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/2PXBRYZ7G7QARNVZ64F2KK74",
  },
  {
    id: 8,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ACIER 19 À 21 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "79,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/QZMQJIWK7DH2OCKB4V2DUQAA",
  },
  {
    id: 9,
    category: "auto",
    title: "SHAMPOING TAPIS/TISSU (AVANT) AUTO",
    description: "Shampoing tapis/tissu sur la partie avant du véhicule",
    duration: "1 h",
    price: "24,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/KOI4NJN7AH4SSP7EHBHIDJXH",
  },
  {
    id: 10,
    category: "camion",
    title: "SHAMPOING TAPIS/TISSU (AVANT) CAMION",
    description:
      "Shampoing tapis/tissu sur la partie avant seulement du véhicule",
    duration: "1 h 30 min",
    price: "39,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/UHERPLS7JFHDFEXBUG3YMYWV",
  },
  {
    id: 11,
    category: "all",
    title: "VÉHICULE DE COURTOISIE",
    description: "Véhicule de courtoisie pour déplacement rapide",
    duration: "5 min",
    price: "14,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/4ONJZKNR7SEOG5MGZRAETXX4",
  },
  {
    id: 12,
    category: "vus",
    title: "SHAMPOING TAPIS/TISSU (AVANT) VUS",
    description:
      "Shampoing tapis/tissu sur la partie avant seulement du véhicule",
    duration: "1 h 15 min",
    price: "29,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/3TC4GINAO5GBVCMMS4ZPZ2IA",
  },
  {
    id: 13,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ALLIAGES 13 À 15 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "69,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/5NJO6JXVQW3HZ7MCWNOL4XNR",
  },
  {
    id: 14,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ALLIAGES 16 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "74,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/WZXXAYDHZOP35P5AQLX4K2FG",
  },
  {
    id: 15,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ALLIAGES 17 À 18 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "79,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/3T5O3P4SGATJOPORRBKOR5NA",
  },
  {
    id: 16,
    category: "auto",
    title: "PNEU POSÉ + BALANCÉ (ALLIAGES 19 À 21 POUCES)",
    description: "- Montage\n- Démontage\n- Balancement",
    duration: "1 h",
    price: "89,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/WGNVPTAD43TY6ET44CAQV3TN",
  },
  {
    id: 17,
    category: "all",
    title: "LAVAGE SPÉCIALE ENTREPRISE GÉNIO",
    description: "Lavage int./ext. de base\nOptions en sus",
    duration: "2 h 30 min",
    price: "69,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/Q2QOA4M7ZQSVK2EOM6GZACLK",
  },
  {
    id: 18,
    category: "all",
    title: "POLISSAGE DES PHARES",
    description: "Polissage des phares en 4 étapes et +",
    duration: "2 h",
    price: "45,00 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/M5I5VWPIIETEIQCJMP7NBW5W",
  },
  {
    id: 19,
    category: "all",
    title: "POLISSAGE 3 ÉTAPE",
    description: "Polissage de base 3 étapes",
    duration: "3 h",
    price: "Prix variable",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/6JXPXW3UFJGO2R7YCHNX75WR",
  },
  {
    id: 20,
    category: "all",
    title: "RÉPARATION DE PNEU",
    description: "Réparation du pneu défectueux",
    duration: "30 min",
    price: "Prix variable",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/LRU4YY2PHIJZWC4BCNU6QMP2",
  },
  {
    id: 21,
    category: "all",
    title: "SHAMPOING TAPIS/TISSU (CONDUCTEUR)",
    description: "Machine à tapis sur le tapis affecté",
    duration: "45 min",
    price: "19,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/POF2GNYHHT3XB6SEU6DTVNHC",
  },
  {
    id: 22,
    category: "vus",
    title: "LAVAGE INTÉRIEUR VUS",
    description: "- Dépoussiérage\n- Balayeuse\n- Vitres\n- Tornador trappe",
    duration: "1 h 30 min",
    price: "39,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/2JLXTFNAOX4DOJU6AKQOXMOR",
  },
  {
    id: 23,
    category: "camion",
    title: "SHAMPOING TAPIS/TISSU CAMION",
    description: "Machine à tapis sur sièges et tapis",
    duration: "3 h",
    price: "79,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/3DX3LJJF6XBRBOMG3RYG44MQ",
  },
  {
    id: 24,
    category: "vus",
    title: "SHAMPOING TAPIS/TISSU VUS",
    description: "Machine à tapis sur sièges et tapis",
    duration: "2 h 30 min",
    price: "59,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/3NHVBIZ4YI2QB6YCSWNEUAZR",
  },
  {
    id: 25,
    category: "auto",
    title: "SHAMPOING MOTEUR AUTO",
    description: "Dégraissage du compartiment moteur",
    duration: "45 min",
    price: "24,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/4EKHYXGJOCOFLKSJJIEKWGDP",
  },
  {
    id: 26,
    category: "auto",
    title: "LAVAGE INTÉRIEUR AUTO",
    description: "- Dépoussiérage\n- Balayeuse\n- Vitres\n- Tornador trappe",
    duration: "1 h 15 min",
    price: "34,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/57CBIW5U7BW7ALRBC4R7M32R",
  },
  {
    id: 27,
    category: "auto",
    title: "DÉCONTAMINATION PEINTURE AUTO",
    description: "Décontamination faite à la main",
    duration: "1 h",
    price: "39,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/5CFSX6RLIVDL4U5H6XFY5YXY",
  },
  {
    id: 28,
    category: "vus",
    title: "LAVAGE EXTÉRIEUR VUS",
    description: "- Jantes\n- Carrosserie\n- Vitres ext.",
    duration: "1 h",
    price: "29,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/5KO5VDHY4WZKTPZELIQYR5S5",
  },
  {
    id: 29,
    category: "auto",
    title: "LAVAGE INT./EXT. AUTO",
    description:
      "- Dépoussiérage\n- Balayeuse\n- Vitres int/ext\n- Jantes\n- Carrosserie",
    duration: "1 h",
    price: "59,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/6RGSQQ4WDA3KUQSOQOYLWJ42",
  },
  {
    id: 30,
    category: "camion",
    title: "PROTECTEUR DE VINYLE CAMION",
    description: "Application sur plastiques habitacle",
    duration: "45 min",
    price: "34,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/7GQN7CSO75Y6GBFYXHVR3SKD",
  },
  {
    id: 31,
    category: "camion",
    title: "SHAMPOING MOTEUR CAMION",
    description: "Dégraissage du compartiment moteur",
    duration: "45 min",
    price: "34,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/7IM2ZOOXLK5SI7SB6AWIEELW",
  },
  {
    id: 32,
    category: "auto",
    title: "LAVAGE EXTÉRIEUR AUTO",
    description: "- Jantes\n- Carrosserie\n- Vitres ext.",
    duration: "45 min",
    price: "24,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/A3K3W4V2IO6J5N5P7SRRCTGL",
  },
  {
    id: 33,
    category: "vus",
    title: "LUSTRE À PNEU VUS",
    description: "Application sur les 4 pneus",
    duration: "10 min",
    price: "14,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/ASZSYWOXM265VJRZM5SD4FF4",
  },
  {
    id: 34,
    category: "camion",
    title: "LUSTRE À PNEU CAMION",
    description: "Application sur les 4 pneus",
    duration: "10 min",
    price: "14,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/B6CCS6EFNU2D5USGHMXSM7SE",
  },
  {
    id: 35,
    category: "camion",
    title: "LAVAGE EXTÉRIEUR CAMION",
    description: "- Jantes\n- Carrosserie\n- Vitres ext.",
    duration: "1 h 30 min",
    price: "34,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/CU5AJXKMGZMIJNXIQR54VV5Q",
  },
  {
    id: 36,
    category: "vus",
    title: "REMISE À NEUF VUS",
    description:
      "- Lavage int/ext\n- Tornador\n- Balayeuse\n- Protecteur\n- Vitres\n- Shampoing\n- Cire\n- Décontamination\n- Lustre",
    duration: "4 h",
    price: "249,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/EV7HBWDENRJWKOEV3D5HQX5T",
  },
  {
    id: 37,
    category: "camion",
    title: "LAVAGE INTÉRIEUR CAMION",
    description: "- Dépoussiérage\n- Balayeuse\n- Vitres\n- Tornador",
    duration: "2 h",
    price: "44,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/FBCNZ5M6B27XIDUEO5DZLWIS",
  },
  {
    id: 38,
    category: "camion",
    title: "DÉCONTAMINATION PEINTURE CAMION",
    description: "Décontamination à la main",
    duration: "2 h",
    price: "49,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/H2TXGO3CR7ROURGMDFOX2ISX",
  },
  {
    id: 39,
    category: "camion",
    title: "LAVAGE INT./EXT. CAMION",
    description:
      "- Dépoussiérage\n- Balayeuse\n- Vitres\n- Jantes\n- Carrosserie",
    duration: "2 h 15 min",
    price: "79,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/HHYZZDK6TWHAKEXWIKM3MKSM",
  },
  {
    id: 40,
    category: "auto",
    title: "CIRE LIQUIDE AUTO",
    description: "Application de cire liquide",
    duration: "15 min",
    price: "24,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/I5KMWDKSERR2GS4PL5EWY6VG",
  },
  {
    id: 41,
    category: "vus",
    title: "CIRE LIQUIDE VUS",
    description: "Application de cire liquide",
    duration: "20 min",
    price: "29,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/M524WSJXPEEGLESC65TX23FX",
  },
  {
    id: 42,
    category: "auto",
    title: "LUSTRE À PNEU AUTO",
    description: "Application sur les 4 pneus",
    duration: "10 min",
    price: "14,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/OJEDSIUVNX5XYAZPARIYR7TR",
  },
  {
    id: 43,
    category: "vus",
    title: "PROTECTEUR DE VINYLE VUS",
    description: "Application sur plastiques habitacle",
    duration: "45 min",
    price: "29,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/PP3JUE2WDRKP7QPSXSBVNG3D",
  },
  {
    id: 44,
    category: "vus",
    title: "SHAMPOING MOTEUR VUS",
    description: "Dégraissage moteur",
    duration: "45 min",
    price: "29,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/PU254UX7BWSZ7ZSHX6HUBQHP",
  },
  {
    id: 45,
    category: "vus",
    title: "DÉCONTAMINATION PEINTURE VUS",
    description: "Décontamination à la main",
    duration: "1 h 30 min",
    price: "44,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/RJFNDWAOYOXYBDF5RBO2TGVJ",
  },
  {
    id: 46,
    category: "vus",
    title: "LAVAGE INT./EXT. VUS",
    description:
      "- Dépoussiérage\n- Balayeuse\n- Vitres\n- Jantes\n- Carrosserie",
    duration: "1 h 30 min",
    price: "69,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/SE36KF6TMZUPOPZYUHNQGE6P",
  },
  {
    id: 47,
    category: "vus",
    title: "CIRE PERFECTION WAX 324 VUS",
    description: "Application cire à la main (9-13 mois)",
    duration: "2 h",
    price: "99,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/SZEXWNUPLZPTNTGE66O3D4OR",
  },
  {
    id: 48,
    category: "camion",
    title: "CIRE LIQUIDE CAMION",
    description: "Application cire liquide",
    duration: "30 min",
    price: "34,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/TAEMGP2ZOKPD7EDNKWM45SLT",
  },
  {
    id: 49,
    category: "auto",
    title: "SHAMPOING TAPIS/TISSU AUTO",
    description: "Machine à tapis sièges + tapis",
    duration: "2 h",
    price: "49,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/XIDZJN5CZNPOHH773RVTG3FE",
  },
  {
    id: 50,
    category: "camion",
    title: "CIRE PERFECTION WAX 324 CAMION",
    description: "Application cire à la main (9-13 mois)",
    duration: "2 h 30 min",
    price: "119,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/XOWENHEHLCY6GM7FVUUF25GH",
  },
  {
    id: 51,
    category: "auto",
    title: "PROTECTEUR DE VINYLE AUTO",
    description: "Application sur plastiques habitacle",
    duration: "45 min",
    price: "24,99 $CA",
    reservationLink:
      "https://book.squareup.com/appointments/8d8v23ixtg4bmv/location/LQBSAE7EPSK14/services/ZZIHV74UBRB75YLG4ICYEASQ",
  },
];
const categories = ["auto", "vus", "camion"];

const getPriceNumber = (price) => {
  if (price.includes("variable")) return 1;
  return parseFloat(price.replace(",", "."));
};

const Forfait = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredForfaits = (
    selectedCategory
      ? forfaitsData.filter(
          (f) => f.category === selectedCategory || f.category === "all",
        )
      : forfaitsData
  ).sort((a, b) => getPriceNumber(a.price) - getPriceNumber(b.price));

  const displayForfaits = showAll
    ? filteredForfaits
    : filteredForfaits.slice(0, 12);

  return (
    <div className="forfait-page">
      <div className="forfait-overlay" />

      <div className="forfait-container">
        <h1 className="title">
          Nos Forfaits{" "}
          {selectedCategory === ""
            ? ""
            : selectedCategory.charAt(0).toUpperCase() +
              selectedCategory.slice(1)}
        </h1>

        {/* FILTER */}
        <div className="filters">
          <button
            onClick={() => {
              setSelectedCategory("");
              setShowAll(false);
            }}
          >
            TOUS
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setShowAll(false);
              }}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="cards">
          {displayForfaits.map((f) => (
            <div className="card" key={f.id}>
              <h3>{f.title}</h3>

              <div className="desc">
                {(() => {
                  const lines = f.description.replace(/^- /gm, "").split("\n");
                  const displayed = lines.slice(0, 4);
                  const hasMore = lines.length > 4;

                  return (
                    <>
                      {displayed.map((line, i) => (
                        <span key={i}>✔ {line}</span>
                      ))}
                      {hasMore && <span className="more">Encore plus...</span>}
                    </>
                  );
                })()}
              </div>

              <div className="bottom">
                <div className="infos">
                  <span>{f.duration}</span>
                  <span className="price">{f.price}</span>
                </div>

                <a
                  href={f.reservationLink}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Réserver
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* BOUTON VOIR PLUS */}
        {!showAll && filteredForfaits.length > 12 && (
          <div className="voir-plus-container">
            <button className="voir-plus-btn" onClick={() => setShowAll(true)}>
              Voir plus de forfaits
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Forfait;
