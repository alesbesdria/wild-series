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

const browse: RequestHandler = (req, res) => {
  if (req.query.q != null) {
    const categorieFilter = categories.filter((categorie) =>
      categorie.name.includes(req.query.q as string),
    );
    res.json(categorieFilter);
  } else {
    res.json(categories);
  }
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
