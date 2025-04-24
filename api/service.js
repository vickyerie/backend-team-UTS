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
    deleteByIndex: (index) => classRepo.delete(index),
  };
  
  const raceService = {
    getAll: () => raceRepo.getAll(),
    getByIndex: (index) => raceRepo.getByIndex(index),
    create: (data) => raceRepo.create(data),
    update: (index, data) => raceRepo.update(index, data),
    deleteByIndex: (index) => raceRepo.delete(index),
  };
  
  const spellService = {
    getAll: () => spellRepo.getAll(),
    getByIndex: (index) => spellRepo.getByIndex(index),
    getByLevel: (level) => spellRepo.getByLevel(level),
    getBySchool: (school) => spellRepo.getBySchool(school),
    create: (data) => spellRepo.create(data),
    update: (index, data) => spellRepo.update(index, data),
    deleteByIndex: (index) => spellRepo.delete(index),
  };
  
  const monsterService = {
    getAll: () => monsterRepo.getAll(),
    getByIndex: (index) => monsterRepo.getByIndex(index),
    create: (data) => monsterRepo.create(data),
    update: (index, data) => monsterRepo.update(index, data),
    deleteByIndex: (index) => monsterRepo.delete(index),
  };
  
  const equipmentService = {
    getAll: () => equipmentRepo.getAll(),
    getByIndex: (index) => equipmentRepo.getByIndex(index),
    create: (data) => equipmentRepo.create(data),
    update: (index, data) => equipmentRepo.update(index, data),
    deleteByIndex: (index) => equipmentRepo.delete(index),
  };
  
  const abilityScoresService = {
    getAll: () => abilityScoresRepo.getAll(),
    getByIndex: (index) => abilityScoresRepo.getByIndex(index),
    create: (data) => abilityScoresRepo.create(data),
    update: (index, data) => abilityScoresRepo.update(index, data),
    deleteByIndex: (index) => abilityScoresRepo.delete(index),
  };
  
  const proficienciesService = {
    getAll: () => proficienciesRepo.getAll(),
    getByIndex: (index) => proficienciesRepo.getByIndex(index),
    create: (data) => proficienciesRepo.create(data),
    update: (index, data) => proficienciesRepo.update(index, data),
    deleteByIndex: (index) => proficienciesRepo.delete(index),
  };
  
  const skillsService = {
    getAll: () => skillsRepo.getAll(),
    getByIndex: (index) => skillsRepo.getByIndex(index),
    getByAbilityScore: (ability_score) => skillsRepo.getByAbilityScore(ability_score),
    create: (data) => skillsRepo.create(data),
    update: (index, data) => skillsRepo.update(index, data),
    deleteByIndex: (index) => skillsRepo.delete(index),
  };
  
  const featuresService = {
    getAll: () => featuresRepo.getAll(),
    getByIndex: (index) => featuresRepo.getByIndex(index),
    getByLevel: (level) => featuresRepo.getByLevel(level),
    getByClass: (classs) => featuresRepo.getByClass(classs),
    create: (data) => featuresRepo.create(data),
    update: (index, data) => featuresRepo.update(index, data),
    deleteByIndex: (index) => featuresRepo.delete(index),
  };
  
  const alignmentsService = {
    getAll: () => alignmentsRepo.getAll(),
    getByIndex: (index) => alignmentsRepo.getByIndex(index),
    create: (data) => alignmentsRepo.create(data),
    update: (index, data) => alignmentsRepo.update(index, data),
    deleteByIndex: (index) => alignmentsRepo.delete(index),
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
  