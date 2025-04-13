module.exports = (db) => {
  return {
    Classes: db.model('Classes', db.Schema({
      index: String,
      name: String,
      url: String,
    })),

    Races: db.model('Races', db.Schema({
      index: String,
      name: String,
      url: String,
    })),

    Spells: db.model('Spells', db.Schema({
      index: String,
      name: String,
      url: String,
    })),

    Monsters: db.model('Monsters', db.Schema({
      index: String,
      name: String,
      url: String,
    })),

    Equipment: db.model('Equipment', db.Schema({
      index: String,
      name: String,
      url: String,
    })),

    AbilityScores: db.model('AbilityScores', db.Schema({
      index: String,
      name: String,
      url: String,
    })),

    Proficiencies: db.model('Proficiencies', db.Schema({
      index: String,
      name: String,
      url: String,
    })),

    Skills: db.model('Skills', db.Schema({
      index: String,
      name: String,
      url: String,
    })),

    Features: db.model('Features', db.Schema({
      index: String,
      name: String,
      url: String,
    })),

    Alignments: db.model('Alignments', db.Schema({
      index: String,
      name: String,
      url: String,
    })),
  };
};
