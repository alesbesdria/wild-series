import categoryRepository from "./categoryRepository";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

// Declare the actions

import type { RequestHandler } from "express";

const browse: RequestHandler = async (req, res) => {
  const categoriesFromDB = await categoryRepository.readAll();
  res.json(categoriesFromDB);
};

const read: RequestHandler = (req, res) => {
  const categorieId = Number.parseInt(req.params.id);

  const categorie = categories.find((c) => c.id === categorieId);

  if (categorie != null) {
    res.json(categorie);
  } else {
    res.status(404).send("Not found");
  }
};

// Export them to import them somewhere else

export default { browse, read };
