import express from 'express';
import nlp from 'compromise';
import Fuse from 'fuse.js';
import ProjectInfo from '../models/projectInfo.model.js';

const router = express.Router();

// -------- INTENT HANDLER ----------
function handleIntent(message, projects) {
  let doc = nlp(message);

  // Extract entities
  const numbers = doc.numbers().out('array'); // e.g., "15"
  const nouns = doc.nouns().out('array'); // keywords like "AI", "chatbot", "website"

  // Lowercase message for intent detection
  const msg = message.toLowerCase();

  // ---- FAQs ----
  if (/hi|hello|hey/.test(msg)) {
    return 'Hi there 👋 How can I help you today?';
  }

  if (/who.*build|who.*made/.test(msg)) {
    return 'I was built by our team to help students find suitable projects 😊.';
  }

  if (/tech.*stack|language|framework/.test(msg)) {
    return 'We are flexible with tech stacks 🚀. Tell me your preferred one!';
  }

  if (/days|weeks|time|deliver/.test(msg)) {
    return `Most projects can be delivered within ${
      numbers[0] || '15'
    } days 📅.`;
  }

  // ---- Project Suggestion Intent ----
  if (true) {
    if (!projects || projects.length === 0) {
      return 'Sorry, I don’t have project data right now.';
    }

    // Fuse.js setup
    const fuse = new Fuse(projects, {
      keys: ['title', 'description'],
      threshold: 0.45, // more flexible matching
    });

    function cleanText(input) {
      return input
        .toLowerCase()
        .replace(/(i want|can you|please|need|that|to|all)/g, '')
        .trim();
    }

    const query = cleanText(message); // use full cleaned message
    const results = fuse.search(query);

    if (results.length > 0) {
      const top = results
        .slice(0, 3)
        .map(
          (r) =>
            `👉 ${r.item.title} (₹${r.item.price}, Delivered in ${r.item.deliveredIn} days)`
        )
        .join('\n');
      return `Based on your idea, here are some project suggestions:\n${top}`;
    } else {
      return 'I couldn’t find a close project match 🤔. Could you describe your idea differently?';
    }
  }
}

// -------- ROUTE ----------
router.post('/', async (req, res) => {
  try {
    const { message } = req.body;

    // Get all projects from DB
    const projects = await ProjectInfo.find({});

    // Get chatbot response
    const reply = handleIntent(message, projects);

    res.json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: 'Something went wrong with the chatbot ❌' });
  }
});

export default router;
