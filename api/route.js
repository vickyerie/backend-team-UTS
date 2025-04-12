const express = require('express');
const controller = require('./controller');

module.exports = (app) => {
  const routes = express.Router();
  app.use(routes);

  // Classes
  routes.get('/classes', controller.getAllClasses);
  routes.get('/classes/:index', controller.getClassByIndex);

  // Races
  routes.get('/races', controller.getAllRaces);
  routes.get('/races/:index', controller.getRaceByIndex);

  // Spells
  routes.get('/spells', controller.getAllSpells);
  routes.get('/spells/:index', controller.getSpellByIndex);

  // Monsters
  routes.get('/monsters', controller.getAllMonsters);
  routes.get('/monsters/:index', controller.getMonsterByIndex);

  // Equipment
  routes.get('/equipment', controller.getAllEquipment);
  routes.get('/equipment/:index', controller.getEquipmentByIndex);

  // Ability Scores
  routes.get('/ability-scores', controller.getAllAbilityScores);
  routes.get('/ability-scores/:index', controller.getAbilityScoreByIndex);

  // Proficiencies
  routes.get('/proficiencies', controller.getAllProficiencies);
  routes.get('/proficiencies/:index', controller.getProficiencyByIndex);

  // Skills
  routes.get('/skills', controller.getAllSkills);
  routes.get('/skills/:index', controller.getSkillByIndex);

  // Features
  routes.get('/features', controller.getAllFeatures);
  routes.get('/features/:index', controller.getFeatureByIndex);

  // Alignments
  routes.get('/alignments', controller.getAllAlignments);
  routes.get('/alignments/:index', controller.getAlignmentByIndex);
};
