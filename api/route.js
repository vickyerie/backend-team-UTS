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
  routes.delete('/classes/:index', controller.deleteClass);
  
  // Races
  routes.get('/races', controller.getAllRaces);
  routes.get('/races/:index', controller.getRaceByIndex);
  routes.post('/races', controller.createRace);
  routes.put('/races/:index', controller.updateRace);
  routes.delete('/races/:index', controller.deleteRace);

  // Spells
  routes.get('/spells', controller.getAllSpells);
  routes.get('/spells/:index', controller.getSpellByIndex);
  routes.get('/spells/level/:level', controller.getSpellByLevel);
  routes.get('/spells/school/:school', controller.getSpellBySchool);
  routes.post('/spells', controller.createSpell);
  routes.put('/spells/:index', controller.updateSpell);
  routes.delete('/spells/:index', controller.deleteSpell);

  // Monsters
  routes.get('/monsters', controller.getAllMonsters);
  routes.get('/monsters/:index', controller.getMonsterByIndex);
  routes.post('/monsters', controller.createMonster);
  routes.put('/monsters/:index', controller.updateMonster);
  routes.delete('/monsters/:index', controller.deleteMonster);

  // Equipment
  routes.get('/equipment', controller.getAllEquipment);
  routes.get('/equipment/:index', controller.getEquipmentByIndex);
  routes.post('/equipment', controller.createEquipment);
  routes.put('/equipment/:index', controller.updateEquipment);
  routes.delete('/equipment/:index', controller.deleteEquipment);

  // Ability Scores
  routes.get('/ability-scores', controller.getAllAbilityScores);
  routes.get('/ability-scores/:index', controller.getAbilityScoreByIndex);
  routes.post('/ability-scores', controller.createAbilityScore);
  routes.put('/ability-scores/:index', controller.updateAbilityScore);
  routes.delete('/ability-scores/:index', controller.deleteAbilityScore);

  // Proficiencies
  routes.get('/proficiencies', controller.getAllProficiencies);
  routes.get('/proficiencies/:index', controller.getProficiencyByIndex);
  routes.post('/proficiencies', controller.createProficiency);
  routes.put('/proficiencies/:index', controller.updateProficiency);
  routes.delete('/proficiencies/:index', controller.deleteProficiency);

  // Skills
  routes.get('/skills', controller.getAllSkills);
  routes.get('/skills/:index', controller.getSkillByIndex);
  routes.get('/skills/ability-score/:ability_score', controller.getSkillByAbilityScore);
  routes.post('/skills', controller.createSkill);
  routes.put('/skills/:index', controller.updateSkill);
  routes.delete('/skills/:index', controller.deleteSkill);

  // Features
  routes.get('/features', controller.getAllFeatures);
  routes.get('/features/:index', controller.getFeatureByIndex);
  routes.get('/features/level/:level', controller.getFeatureByLevel);
  routes.get('/features/class/:class', controller.getFeatureByClass);
  routes.post('/features', controller.createFeature);
  routes.put('/features/:index', controller.updateFeature);
  routes.delete('/features/:index', controller.deleteFeature);

  // Alignments
  routes.get('/alignments', controller.getAllAlignments);
  routes.get('/alignments/:index', controller.getAlignmentByIndex);
  routes.post('/alignments', controller.createAlignment);
  routes.put('/alignments/:index', controller.updateAlignment);
  routes.delete('/alignments/:index', controller.deleteAlignment);

};
