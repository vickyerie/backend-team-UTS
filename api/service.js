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
    create: (data) => classRepo.create(data),
    update: (index, data) => classRepo.update(index, data),
  };
  
  const raceService = {
    getAll: () => raceRepo.getAll(),
    getByIndex: (index) => raceRepo.getByIndex(index),
    create: (data) => raceRepo.create(data),
    update: (index, data) => raceRepo.update(index, data),
  };
  
  const spellService = {
    getAll: () => spellRepo.getAll(),
    getByIndex: (index) => spellRepo.getByIndex(index),
    create: (data) => spellRepo.create(data),
    update: (index, data) => spellRepo.update(index, data),
  };
  
  const monsterService = {
    getAll: () => monsterRepo.getAll(),
    getByIndex: (index) => monsterRepo.getByIndex(index),
    create: (data) => monsterRepo.create(data),
    update: (index, data) => monsterRepo.update(index, data),
  };
  
  const equipmentService = {
    getAll: () => equipmentRepo.getAll(),
    getByIndex: (index) => equipmentRepo.getByIndex(index),
    create: (data) => equipmentRepo.create(data),
    update: (index, data) => equipmentRepo.update(index, data),
  };
  
  const abilityScoresService = {
    getAll: () => abilityScoresRepo.getAll(),
    getByIndex: (index) => abilityScoresRepo.getByIndex(index),
    create: (data) => abilityScoresRepo.create(data),
    update: (index, data) => abilityScoresRepo.update(index, data),
  };
  
  const proficienciesService = {
    getAll: () => proficienciesRepo.getAll(),
    getByIndex: (index) => proficienciesRepo.getByIndex(index),
    create: (data) => proficienciesRepo.create(data),
    update: (index, data) => proficienciesRepo.update(index, data),
  };
  
  const skillsService = {
    getAll: () => skillsRepo.getAll(),
    getByIndex: (index) => skillsRepo.getByIndex(index),
    create: (data) => skillsRepo.create(data),
    update: (index, data) => skillsRepo.update(index, data),
  };
  
  const featuresService = {
    getAll: () => featuresRepo.getAll(),
    getByIndex: (index) => featuresRepo.getByIndex(index),
    create: (data) => featuresRepo.create(data),
    update: (index, data) => featuresRepo.update(index, data),
  };
  
  const alignmentsService = {
    getAll: () => alignmentsRepo.getAll(),
    getByIndex: (index) => alignmentsRepo.getByIndex(index),
    create: (data) => alignmentsRepo.create(data),
    update: (index, data) => alignmentsRepo.update(index, data),
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
  