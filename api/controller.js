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

  async function handleGetByLevel(service, level, res, next){
    try{
      const data = await service.getByLevel(level);
      if(!data) return res.status(404).json({ message: 'Not found' });
      res.status(200).json(data);
    } catch (err){
      next(err);
    }
  }

  async function handleGetBySchool(service, school, res, next){
    try{
      const data = await service.getBySchool(school);
      if(!data) return res.status(404).json({ message: 'Not Found'});
      res.status(200).json(data);
    } catch (err){
      next(err);
    }
  }

  async function handleGetByClass(service, classs, res, next){
    try{
      const data = await service.getByClass(classs);
      if(!data) return res.status(404).json({ message: 'Not Found'});
      res.status(200).json(data);
    } catch (err){
      next(err);
    }
  }

  async function handleGetByAbilityScore(service, ability_score, res, next){
    try{
      const data = await service.getByAbilityScore(ability_score);
      if(!data) return res.status(404).json({ message: 'Not Found'});
      res.status(200).json(data);
    } catch (err){
      next(err);
    }
  }

  async function handleCreate(service, data, res, next) {
    try {
      const createdData = await service.create(data);
      res.status(201).json(createdData);
    } catch (err) {
      next(err);
    }
  }

  async function handleUpdate(service, index, data, res, next) {
    try {
      const updatedData = await service.update(index, data);
      if (!updatedData) return res.status(404).json({ message: 'Not found to update' });
      res.status(200).json(updatedData);
    } catch (err) {
      next(err);
    }
  }
 
  async function handleDelete(service, index, res, next) {
    try {
      const deletedData = await service.deleteByIndex(index);
      if (!deletedData) return res.status(404).json({ message: 'Not found to delete' });
      res.status(200).json({ message: 'Deleted successfully' });
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
    createClass: (req, res, next) => handleCreate(classService, req.body, res, next),
    updateClass: (req, res, next) => handleUpdate(classService, req.params.index, req.body, res, next),
    deleteClass: (req, res, next) => handleDelete(classService, req.params.index, res, next),
  
    // Races
    getAllRaces: (req, res, next) => handleGetAll(raceService, res, next),
    getRaceByIndex: (req, res, next) =>
      handleGetByIndex(raceService, req.params.index, res, next),
    createRace: (req, res, next) => handleCreate(raceService, req.body, res, next),
    updateRace: (req, res, next) => handleUpdate(raceService, req.params.index, req.body, res, next),
    deleteRace: (req, res, next) => handleDelete(raceService, req.params.index, res, next),
  
    // Spells
    getAllSpells: (req, res, next) => handleGetAll(spellService, res, next),
    getSpellByIndex: (req, res, next) =>
      handleGetByIndex(spellService, req.params.index, res, next),
    getSpellByLevel: (req, res, next) => handleGetByLevel(spellService, req.params.level, res, next),
    getSpellBySchool: (req, res, next) => handleGetBySchool(spellService, req.params.school, res, next),
    createSpell: (req, res, next) => handleCreate(spellService, req.body, res, next),
    updateSpell: (req, res, next) => handleUpdate(spellService, req.params.index, req.body, res, next),
    deleteSpell: (req, res, next) => handleDelete(spellService, req.params.index, res, next),
  
    // Monsters
    getAllMonsters: (req, res, next) => handleGetAll(monsterService, res, next),
    getMonsterByIndex: (req, res, next) =>
      handleGetByIndex(monsterService, req.params.index, res, next),
    createMonster: (req, res, next) => handleCreate(monsterService, req.body, res, next),
    updateMonster: (req, res, next) => handleUpdate(monsterService, req.params.index, req.body, res, next),
    deleteMonster: (req, res, next) => handleDelete(monsterService, req.params.index, res, next),
  
    // Equipment
    getAllEquipment: (req, res, next) => handleGetAll(equipmentService, res, next),
    getEquipmentByIndex: (req, res, next) =>
      handleGetByIndex(equipmentService, req.params.index, res, next),
    createEquipment: (req, res, next) => handleCreate(equipmentService, req.body, res, next),
    updateEquipment: (req, res, next) => handleUpdate(equipmentService, req.params.index, req.body, res, next),
    deleteEquipment: (req, res, next) => handleDelete(equipmentService, req.params.index, res, next), 

    // Ability Scores
    getAllAbilityScores: (req, res, next) => handleGetAll(abilityScoresService, res, next),
    getAbilityScoreByIndex: (req, res, next) =>
      handleGetByIndex(abilityScoresService, req.params.index, res, next),
    createAbilityScore: (req, res, next) =>
      handleCreate(abilityScoresService, req.body, res, next),
    updateAbilityScore: (req, res, next) => handleUpdate(abilityScoresService, req.params.index, req.body, res, next),
    deleteAbilityScore: (req, res, next) => handleDelete(abilityScoresService, req.params.index, res, next),  
  
    // Proficiencies
    getAllProficiencies: (req, res, next) => handleGetAll(proficienciesService, res, next),
    getProficiencyByIndex: (req, res, next) =>
      handleGetByIndex(proficienciesService, req.params.index, res, next),
    createProficiency: (req, res, next) =>
      handleCreate(proficienciesService, req.body, res, next),
    updateProficiency: (req, res, next) => handleUpdate(proficienciesService, req.params.index, req.body, res, next),
    deleteProficiency: (req, res, next) => handleDelete(proficienciesService, req.params.index, res, next),
    
    // Skills
    getAllSkills: (req, res, next) => handleGetAll(skillsService, res, next),
    getSkillByIndex: (req, res, next) =>
      handleGetByIndex(skillsService, req.params.index, res, next),
    createSkill: (req, res, next) => handleCreate(skillsService, req.body, res, next),
    getSkillByAbilityScore: (req, res, next) => handleGetByAbilityScore(skillsService, req.params.ability_score, res, next),
    updateSkill: (req, res, next) => handleUpdate(skillsService, req.params.index, req.body, res, next),
    deleteSkill: (req, res, next) => handleDelete(skillsService, req.params.index, res, next),

    // Features
    getAllFeatures: (req, res, next) => handleGetAll(featuresService, res, next),
    getFeatureByIndex: (req, res, next) =>
      handleGetByIndex(featuresService, req.params.index, res, next),
    getFeatureByLevel: (req, res, next) => handleGetByLevel(featuresService, req.params.level, res, next),
    getFeatureByClass: (req, res, next) => handleGetByClass(featuresService, req.params.classs, res, next),
    createFeature: (req, res, next) => handleCreate(featuresService, req.body, res, next),
    updateFeature: (req, res, next) => handleUpdate(featuresService, req.params.index, req.body, res, next),
    deleteFeature: (req, res, next) => handleDelete(featuresService, req.params.index, res, next),

    // Alignments
    getAllAlignments: (req, res, next) => handleGetAll(alignmentsService, res, next),
    getAlignmentByIndex: (req, res, next) =>
      handleGetByIndex(alignmentsService, req.params.index, res, next),
    createAlignment: (req, res, next) =>
      handleCreate(alignmentsService, req.body, res, next),
    updateAlignment: (req, res, next) => handleUpdate(alignmentsService, req.params.index, req.body, res, next),
    deleteAlignment: (req, res, next) => handleDelete(alignmentsService, req.params.index, res, next),
  };
  