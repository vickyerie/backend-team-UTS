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
  };
  
  const raceRepo = {
    getAll: () => Races.find({}),
    getByIndex: (index) => Races.findOne({ index }),
  };
  
  const spellRepo = {
    getAll: () => Spells.find({}),
    getByIndex: (index) => Spells.findOne({ index }),
  };
  
  const monsterRepo = {
    getAll: () => Monsters.find({}),
    getByIndex: (index) => Monsters.findOne({ index }),
  };
  
  const equipmentRepo = {
    getAll: () => Equipment.find({}),
    getByIndex: (index) => Equipment.findOne({ index }),
  };
  
  const abilityScoresRepo = {
    getAll: () => AbilityScores.find({}),
    getByIndex: (index) => AbilityScores.findOne({ index }),
  };
  
  const proficienciesRepo = {
    getAll: () => Proficiencies.find({}),
    getByIndex: (index) => Proficiencies.findOne({ index }),
  };
  
  const skillsRepo = {
    getAll: () => Skills.find({}),
    getByIndex: (index) => Skills.findOne({ index }),
  };
  
  const featuresRepo = {
    getAll: () => Features.find({}),
    getByIndex: (index) => Features.findOne({ index }),
  };
  
  const alignmentsRepo = {
    getAll: () => Alignments.find({}),
    getByIndex: (index) => Alignments.findOne({ index }),
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
  