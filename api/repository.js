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
    update: (index, data) => Classes.findOneAndUpdate({ index }, data, { new: true }),
  };
  
  const raceRepo = {
    getAll: () => Races.find({}),
    getByIndex: (index) => Races.findOne({ index }),
    create: (index, data) => Races.findOneAndUpdate({ index }, data, { new : true}),
    update: (index, data) => Races.findOneAndUpdate({ index }, data, { new: true }),
  };
  
  const spellRepo = {
    getAll: () => Spells.find({}),
    getByIndex: (index) => Spells.findOne({ index }),
    create: (data) => Spells.create(data),
    update: (index, data) => Spells.findOneAndUpdate({ index }, data, { new: true }),
  };
  
  const monsterRepo = {
    getAll: () => Monsters.find({}),
    getByIndex: (index) => Monsters.findOne({ index }),
    create: (data) => Monsters.create(data),
    update: (index, data) => Monsters.findOneAndUpdate({ index }, data, { new: true }),
  };
  
  const equipmentRepo = {
    getAll: () => Equipment.find({}),
    getByIndex: (index) => Equipment.findOne({ index }),
    create: (data) => Equipment.create(data),
    update: (index, data) => Equipment.findOneAndUpdate({ index }, data, { new: true }),
  };
  
  const abilityScoresRepo = {
    getAll: () => AbilityScores.find({}),
    getByIndex: (index) => AbilityScores.findOne({ index }),
    create: (data) => Monsters.create(data),
    update: (index, data) => AbilityScores.findOneAndUpdate({ index }, data, { new: true }),
  };
  
  const proficienciesRepo = {
    getAll: () => Proficiencies.find({}),
    getByIndex: (index) => Proficiencies.findOne({ index }),
    create: (data) => Proficiencies.create(data),
    update: (index, data) => Proficiencies.findOneAndUpdate({ index }, data, { new: true }),
  };
  
  const skillsRepo = {
    getAll: () => Skills.find({}),
    getByIndex: (index) => Skills.findOne({ index }),
    create: (data) => Skills.create(data),
    update: (index, data) => Skills.findOneAndUpdate({ index }, data, { new: true }),
  };
  
  const featuresRepo = {
    getAll: () => Features.find({}),
    getByIndex: (index) => Features.findOne({ index }),
    create: (data) => Features.create(data),
    update: (index, data) => Features.findOneAndUpdate({ index }, data, { new: true }),
  };
  
  const alignmentsRepo = {
    getAll: () => Alignments.find({}),
    getByIndex: (index) => Alignments.findOne({ index }),
    create: (data) => Alignments.create(data),
    update: (index, data) => Alignments.findOneAndUpdate({ index }, data, { new: true }),
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
  