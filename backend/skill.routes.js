import express from 'express';
import Skill from './skill.model.js';
const router = express.Router();

router.get('/skills', async (req, res) => {
    try {
        const skills = await Skill.find();
        res.json(skills);
    } catch (err) {
        console.error('Error fetching skills:', err);
        res.status(500).send("Error fetching skills");
    }
});

export default router;