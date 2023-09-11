use("bank");

/*
 * J’en ai marre des clients trop riches qui ont plus de 100.000€
 * et qui ne sont pas des entreprises (independent_pro ou business) !
 * Faites moi une liste de leur nom, prénom et adresse email uniquement,
 * je veux les dénoncer au fisc, c’est surement des escrocs.”
 */

db.customers.find(
  {
    balance: { $gt: 100000 },
    categories: { $nin: ["business", "independant_pro"] },
  },
  {
    firstname: 1,
    lastname: 1,
    email: 1,
    _id: 0,
  }
);

/* Je veux téléphoner à :
 * - mes clients particuliers et associations dont le solde est compris entre 1.000 et 5.000€
 * OU
 * - mes clients investisseurs dont le solde est compris ente 150.000€ et 800.000€.
 * Donnez-moi une liste de leurs nom, prénom et numéro de téléphone.
 */

db.customers.find(
  {
    $or: [
      {
        categories: { $in: ["individual", "association"] },
        balance: { $gte: 1000, $lte: 5000 },
      },
      {
        categories: { $elemMatch: { $eq: "investor" } },
        balance: { $gte: 150000, $lte: 800000 },
      },
    ],
  },
  {
    lastname: 1,
    firstname: 1,
    phone: 1,
    _id: 0,
  }
);

/* Vous ne trouvez pas que les gros virements sortants c’est louche ?
 * Listez tous les clients qui ont dans leur historique un virement sortant
 * de plus 20.000€ !
 */

db.customers.find({
  "operations.amount": { $gte: 200 },
  "operations.type": "OUT",
});

/* Donnez-moi le solde et l’identifiant des clients qui ont une seule opération
 * dans leur historique..”
 */

db.customers.find(
  {
    operations: { $size: 1 },
  },
  {
    balance: 1,
  }
);
