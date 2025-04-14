const {
    Classes,
    Races,
    Spells,
    Monsters,
    Equipment,
    AbilityScores,
    Proficiencies,
    Skills,
    Features,
    Alignments,
  } = require('../../models');
  
  const classRepo = {
    getAll: () => Classes.find({}),
    getByIndex: (index) => Classes.findOne({ index }),
    create: (data) => Classes.create(data),
  };
  
  const raceRepo = {
    getAll: () => Races.find({}),
    getByIndex: (index) => Races.findOne({ index }),
    create: (index, data) => Races.findOneAndUpdate({ index }, data, { new : true})
  };
  
  const spellRepo = {
    getAll: () => Spells.find({}),
    getByIndex: (index) => Spells.findOne({ index }),
    create: (data) => Spells.create(data),
  };
  
  const monsterRepo = {
    getAll: () => Monsters.find({}),
    getByIndex: (index) => Monsters.findOne({ index }),
    create: (data) => Monsters.create(data),
  };
  
  const equipmentRepo = {
    getAll: () => Equipment.find({}),
    getByIndex: (index) => Equipment.findOne({ index }),
    create: (data) => Equipment.create(data),
  };
  
  const abilityScoresRepo = {
    getAll: () => AbilityScores.find({}),
    getByIndex: (index) => AbilityScores.findOne({ index }),
    create: (data) => Monsters.create(data)
  };
  
  const proficienciesRepo = {
    getAll: () => Proficiencies.find({}),
    getByIndex: (index) => Proficiencies.findOne({ index }),
    create: (data) => Proficiencies.create(data),
  };
  
  const skillsRepo = {
    getAll: () => Skills.find({}),
    getByIndex: (index) => Skills.findOne({ index }),
    create: (data) => Skills.create(data),
  };
  
  const featuresRepo = {
    getAll: () => Features.find({}),
    getByIndex: (index) => Features.findOne({ index }),
    create: (data) => Features.create(data),
  };
  
  const alignmentsRepo = {
    getAll: () => Alignments.find({}),
    getByIndex: (index) => Alignments.findOne({ index }),
    create: (data) => Alignments.create(data),
  };
  
  module.exports = {
    classRepo,
    raceRepo,
    spellRepo,
    monsterRepo,
    equipmentRepo,
    abilityScoresRepo,
    proficienciesRepo,
    skillsRepo,
    featuresRepo,
    alignmentsRepo,
  };
  