const {
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
  } = require('./repository');
  
  const classService = {
    getAll: () => classRepo.getAll(),
    getByIndex: (index) => classRepo.getByIndex(index),
  };
  
  const raceService = {
    getAll: () => raceRepo.getAll(),
    getByIndex: (index) => raceRepo.getByIndex(index),
  };
  
  const spellService = {
    getAll: () => spellRepo.getAll(),
    getByIndex: (index) => spellRepo.getByIndex(index),
  };
  
  const monsterService = {
    getAll: () => monsterRepo.getAll(),
    getByIndex: (index) => monsterRepo.getByIndex(index),
  };
  
  const equipmentService = {
    getAll: () => equipmentRepo.getAll(),
    getByIndex: (index) => equipmentRepo.getByIndex(index),
  };
  
  const abilityScoresService = {
    getAll: () => abilityScoresRepo.getAll(),
    getByIndex: (index) => abilityScoresRepo.getByIndex(index),
  };
  
  const proficienciesService = {
    getAll: () => proficienciesRepo.getAll(),
    getByIndex: (index) => proficienciesRepo.getByIndex(index),
  };
  
  const skillsService = {
    getAll: () => skillsRepo.getAll(),
    getByIndex: (index) => skillsRepo.getByIndex(index),
  };
  
  const featuresService = {
    getAll: () => featuresRepo.getAll(),
    getByIndex: (index) => featuresRepo.getByIndex(index),
  };
  
  const alignmentsService = {
    getAll: () => alignmentsRepo.getAll(),
    getByIndex: (index) => alignmentsRepo.getByIndex(index),
  };
  
  module.exports = {
    classService,
    raceService,
    spellService,
    monsterService,
    equipmentService,
    abilityScoresService,
    proficienciesService,
    skillsService,
    featuresService,
    alignmentsService,
  };
  