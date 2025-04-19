const mongoose = require('mongoose');
const getModels = require('../models/schema');

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
  } = getModels(mongoose);
  
  const classRepo = {
    getAll: () => Classes.find({}),
    getByIndex: (index) => Classes.findOne({ index }),
    create: (data) => Classes.create(data),
    update: (index, data) => Classes.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Classes.findOneAndDelete({ index }),
  };
  
  const raceRepo = {
    getAll: () => Races.find({}),
    getByIndex: (index) => Races.findOne({ index }),
    create: (data) => Races.create(data),
    update: (index, data) => Races.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Races.findOneAndDelete({ index }),
  };
  
  const spellRepo = {
    getAll: () => Spells.find({}),
    getByIndex: (index) => Spells.findOne({ index }),
    create: (data) => Spells.create(data),
    update: (index, data) => Spells.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Spells.findOneAndDelete({ index }),
  };
  
  const monsterRepo = {
    getAll: () => Monsters.find({}),
    getByIndex: (index) => Monsters.findOne({ index }),
    create: (data) => Monsters.create(data),
    update: (index, data) => Monsters.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Monsters.findOneAndDelete({ index }),
  };
  
  const equipmentRepo = {
    getAll: () => Equipment.find({}),
    getByIndex: (index) => Equipment.findOne({ index }),
    create: (data) => Equipment.create(data),
    update: (index, data) => Equipment.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Equipment.findOneAndDelete({ index }),
  };
  
  const abilityScoresRepo = {
    getAll: () => AbilityScores.find({}),
    getByIndex: (index) => AbilityScores.findOne({ index }),
    create: (data) => Monsters.create(data),
    update: (index, data) => AbilityScores.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => AbilityScores.findOneAndDelete({ index }),
  };
  
  const proficienciesRepo = {
    getAll: () => Proficiencies.find({}),
    getByIndex: (index) => Proficiencies.findOne({ index }),
    create: (data) => Proficiencies.create(data),
    update: (index, data) => Proficiencies.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Proficiencies.findOneAndDelete({ index }),
  };
  
  const skillsRepo = {
    getAll: () => Skills.find({}),
    getByIndex: (index) => Skills.findOne({ index }),
    create: (data) => Skills.create(data),
    update: (index, data) => Skills.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Skills.findOneAndDelete({ index }),
  };
  
  const featuresRepo = {
    getAll: () => Features.find({}),
    getByIndex: (index) => Features.findOne({ index }),
    create: (data) => Features.create(data),
    update: (index, data) => Features.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Features.findOneAndDelete({ index }),
  };
  
  const alignmentsRepo = {
    getAll: () => Alignments.find({}),
    getByIndex: (index) => Alignments.findOne({ index }),
    create: (data) => Alignments.create(data),
    update: (index, data) => Alignments.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Alignments.findOneAndDelete({ index }),
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
  