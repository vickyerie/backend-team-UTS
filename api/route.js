const express = require('express');
const controller = require('./controller');

module.exports = (app) => {
  const routes = express.Router();
  app.use(routes);

  // Classes
  routes.get('/classes', controller.getAllClasses);
  routes.get('/classes/:index', controller.getClassByIndex);
  routes.post('/classes', controller.createClass);
  routes.put('/classes/:index', controller.updateClass);
  
  // Races
  routes.get('/races', controller.getAllRaces);
  routes.get('/races/:index', controller.getRaceByIndex);
  routes.post('/races', controller.createRace);
  routes.put('/races/:index', controller.updateRace);

  // Spells
  routes.get('/spells', controller.getAllSpells);
  routes.get('/spells/:index', controller.getSpellByIndex);
  routes.post('/spells', controller.createSpell);
  routes.put('/spells/:index', controller.updateSpell);

  // Monsters
  routes.get('/monsters', controller.getAllMonsters);
  routes.get('/monsters/:index', controller.getMonsterByIndex);
  routes.post('/monsters', controller.createMonster);
  routes.put('/monsters/:index', controller.updateMonster);

  // Equipment
  routes.get('/equipment', controller.getAllEquipment);
  routes.get('/equipment/:index', controller.getEquipmentByIndex);
  routes.post('/equipment', controller.createEquipment);
  routes.put('/equipment/:index', controller.updateEquipment);

  // Ability Scores
  routes.get('/ability-scores', controller.getAllAbilityScores);
  routes.get('/ability-scores/:index', controller.getAbilityScoreByIndex);
  routes.post('/ability-scores', controller.createAbilityScore);
  routes.put('/ability-scores/:index', controller.updateAbilityScore);

  // Proficiencies
  routes.get('/proficiencies', controller.getAllProficiencies);
  routes.get('/proficiencies/:index', controller.getProficiencyByIndex);
  routes.post('/proficiencies', controller.createProficiency);
  routes.put('/proficiencies/:index', controller.updateProficiency);

  // Skills
  routes.get('/skills', controller.getAllSkills);
  routes.get('/skills/:index', controller.getSkillByIndex);
  routes.post('/skills', controller.createSkill);
  routes.put('/skills/:index', controller.updateSkill);

  // Features
  routes.get('/features', controller.getAllFeatures);
  routes.get('/features/:index', controller.getFeatureByIndex);
  routes.post('/features', controller.createFeature);
  routes.put('/features/:index', controller.updateFeature);

  // Alignments
  routes.get('/alignments', controller.getAllAlignments);
  routes.get('/alignments/:index', controller.getAlignmentByIndex);
  routes.post('/alignments', controller.createAlignment);
  routes.put('/alignments/:index', controller.updateAlignment);

};
