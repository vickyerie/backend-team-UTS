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
    getByName: (name) => Classes.findOne({ name }),
    getByIndex: (index) => Classes.findOne({ index }),
    create: (data) => Classes.create(data),
    update: (index, data) => Classes.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Classes.findOneAndDelete({ index }),
  };
  
  const raceRepo = {
    getAll: () => Races.find({}),
    getByName: (name) => Races.findOne({ name }),
    getByIndex: (index) => Races.findOne({ index }),
    create: (data) => Races.create(data),
    update: (index, data) => Races.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Races.findOneAndDelete({ index }),
  };
  
  const spellRepo = {
    getAll: () => Spells.find({}),
    getByName: (name) => Spells.findOne({ name }),
    getByIndex: (index) => Spells.findOne({ index }),
    getByLevel: (level) => Spells.findOne({ level }),
    getBySchool: (school) => Spells.findOne({ school }),
    create: (data) => Spells.create(data),
    update: (index, data) => Spells.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Spells.findOneAndDelete({ index }),
  };
  
  const monsterRepo = {
    getAll: () => Monsters.find({}),
    getByName: (name) => Monsters.findOne({ name }),
    getByIndex: (index) => Monsters.findOne({ index }),
    create: (data) => Monsters.create(data),
    update: (index, data) => Monsters.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Monsters.findOneAndDelete({ index }),
  };
  
  const equipmentRepo = {
    getAll: () => Equipment.find({}),
    getByName: (name) => Equipment.findOne({ name }),
    getByIndex: (index) => Equipment.findOne({ index }),
    create: (data) => Equipment.create(data),
    update: (index, data) => Equipment.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Equipment.findOneAndDelete({ index }),
  };
  
  const abilityScoresRepo = {
    getAll: () => AbilityScores.find({}),
    getByName: (name) => AbilityScores.findOne({ name }),
    getByIndex: (index) => AbilityScores.findOne({ index }),
    create: (data) => AbilityScores.create(data),
    update: (index, data) => AbilityScores.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => AbilityScores.findOneAndDelete({ index }),
  };
  
  const proficienciesRepo = {
    getAll: () => Proficiencies.find({}),
    getByName: (name) => Proficiencies.findOne({ name }),
    getByIndex: (index) => Proficiencies.findOne({ index }),
    create: (data) => Proficiencies.create(data),
    update: (index, data) => Proficiencies.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Proficiencies.findOneAndDelete({ index }),
  };
  
  const skillsRepo = {
    getAll: () => Skills.find({}),
    getByName: (name) => Skills.findOne({ name }),
    getByIndex: (index) => Skills.findOne({ index }),
    getByAbilityScore: (ability_score) => Skills.findOne({ ability_score }),
    create: (data) => Skills.create(data),
    update: (index, data) => Skills.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Skills.findOneAndDelete({ index }),
  };
  
  const featuresRepo = {
    getAll: () => Features.find({}),
    getByName: (name) => Features.findOne({ name }),
    getByIndex: (index) => Features.findOne({ index }),
    getByLevel: (level) => Features.findOne({ level }),
    getByClass: (classs) => Features.findOne({ classs }),
    create: (data) => Features.create(data),
    update: (index, data) => Features.findOneAndUpdate({ index }, data, { new: true }),
    delete: (index) => Features.findOneAndDelete({ index }),
  };
  
  const alignmentsRepo = {
    getAll: () => Alignments.find({}),
    getByName: (name) => Alignments.findOne({ name }),
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
  