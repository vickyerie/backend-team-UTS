const {
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
  } = require('./service');
  
  async function handleGetAll(service, res, next) {
    try {
      const data = await service.getAll();
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  
  async function handleGetByIndex(service, index, res, next) {
    try {
      const data = await service.getByIndex(index);
      if (!data) return res.status(404).json({ message: 'Not found' });
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
  }
  
  // Controllers
  module.exports = {
    // Classes
    getAllClasses: (req, res, next) => handleGetAll(classService, res, next),
    getClassByIndex: (req, res, next) =>
      handleGetByIndex(classService, req.params.index, res, next),
  
    // Races
    getAllRaces: (req, res, next) => handleGetAll(raceService, res, next),
    getRaceByIndex: (req, res, next) =>
      handleGetByIndex(raceService, req.params.index, res, next),
  
    // Spells
    getAllSpells: (req, res, next) => handleGetAll(spellService, res, next),
    getSpellByIndex: (req, res, next) =>
      handleGetByIndex(spellService, req.params.index, res, next),
  
    // Monsters
    getAllMonsters: (req, res, next) => handleGetAll(monsterService, res, next),
    getMonsterByIndex: (req, res, next) =>
      handleGetByIndex(monsterService, req.params.index, res, next),
  
    // Equipment
    getAllEquipment: (req, res, next) => handleGetAll(equipmentService, res, next),
    getEquipmentByIndex: (req, res, next) =>
      handleGetByIndex(equipmentService, req.params.index, res, next),
  
    // Ability Scores
    getAllAbilityScores: (req, res, next) => handleGetAll(abilityScoresService, res, next),
    getAbilityScoreByIndex: (req, res, next) =>
      handleGetByIndex(abilityScoresService, req.params.index, res, next),
  
    // Proficiencies
    getAllProficiencies: (req, res, next) => handleGetAll(proficienciesService, res, next),
    getProficiencyByIndex: (req, res, next) =>
      handleGetByIndex(proficienciesService, req.params.index, res, next),
  
    // Skills
    getAllSkills: (req, res, next) => handleGetAll(skillsService, res, next),
    getSkillByIndex: (req, res, next) =>
      handleGetByIndex(skillsService, req.params.index, res, next),
  
    // Features
    getAllFeatures: (req, res, next) => handleGetAll(featuresService, res, next),
    getFeatureByIndex: (req, res, next) =>
      handleGetByIndex(featuresService, req.params.index, res, next),
  
    // Alignments
    getAllAlignments: (req, res, next) => handleGetAll(alignmentsService, res, next),
    getAlignmentByIndex: (req, res, next) =>
      handleGetByIndex(alignmentsService, req.params.index, res, next),
  };
  