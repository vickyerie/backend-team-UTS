module.exports = (db) => {
  return {
    Classes: db.model('Classes', db.Schema({
      index: String,
      name: String,
      url: String,
      hit_die: Number,
    })),

    Races: db.model('Races', db.Schema({
      index: String,
      name: String,
      url: String,
      speed: Number,
    })),

    Spells: db.model('Spells', db.Schema({
      index: String,
      name: String,
      url: String,
      level: Number,
      school: String,
    })),

    Monsters: db.model('Monsters', db.Schema({
      index: String,
      name: String,
      url: String,
      range: String,
    })),

    Equipment: db.model('Equipment', db.Schema({
      index: String,
      name: String,
      url: String,
      weight: Number,
    })),

    AbilityScores: db.model('AbilityScores', db.Schema({
      index: String,
      name: String,
      url: String,
      full_name: String,
    })),

    Proficiencies: db.model('Proficiencies', db.Schema({
      index: String,
      name: String,
      url: String,
      type: String,
    })),

    Skills: db.model('Skills', db.Schema({
      index: String,
      name: String,
      url: String,
      ability_score: String,
    })),

    Features: db.model('Features', db.Schema({
      index: String,
      name: String,
      url: String,
      class: String,
      level: Number,
    })),

    Alignments: db.model('Alignments', db.Schema({
      index: String,
      name: String,
      url: String,
      abbreviation: String,
    })),
  };
};
