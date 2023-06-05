const express = require('express');
const router = express.Router();

const getRandomWord = require('../queries/getRandomWord');
const getWord = require('../queries/getWord');
const runCompletion = require('../client/openAI');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/words/random', async (req, res, next) => {
  try {
    const language = req.query.language;
    const category = req.query.category;
    const word = await getRandomWord(language, category);

    res.json({
      language,
      word
    });
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
});

router.post('/words/verify', async (req, res, next) => {
  try {
    const language = req.get('language');
    const original = req.get('original');
    const translation = req.get('translation');
  
    const word = await getWord(language, original);

    let isValid = language === 'english'
      ? word.spanish === translation
      : word.english === translation

    let aiComment;

    if (!isValid) {
      aiComment = await runCompletion(`
        Is the following a correct translation?
        ${language === 'english' ? 'English' : 'Spanish'}: ${original}
        ${language === 'english' ? 'Spanish' : 'English'}: ${translation}
      `);
      if (aiComment.includes('Yes')) {
        isValid = true;
      }
    }

    res.json({
      language,
      original,
      translation,
      isValid,
      ...(aiComment && { aiComment }),
    });
  } catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
});

module.exports = router;
