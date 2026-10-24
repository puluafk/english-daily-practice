const EXERCISES = {
  beginner: {
    vocabulary: [
      {
        type: "mc",
        question: "What is the opposite of 'hot'?",
        options: ["Cold", "Warm", "Cool", "Boiling"],
        answer: 0,
        explanation: "'Cold' is the direct opposite of 'hot'."
      },
      {
        type: "mc",
        question: "Which word means a place where you buy food?",
        options: ["School", "Hospital", "Supermarket", "Library"],
        answer: 2,
        explanation: "A supermarket is a large store that sells food and other goods."
      },
      {
        type: "fill",
        question: "Complete the sentence: I _____ to school every day.",
        answer: "go",
        accepted: ["go", "walk", "travel"],
        explanation: "The most common verb is 'go'."
      },
      {
        type: "mc",
        question: "What do you say when you meet someone for the first time?",
        options: ["Goodbye", "Nice to meet you", "See you later", "How old are you?"],
        answer: 1,
        explanation: "'Nice to meet you' is a polite greeting when meeting someone new."
      },
      {
        type: "mc",
        question: "Which is a color?",
        options: ["Table", "Blue", "Happy", "Run"],
        answer: 1,
        explanation: "Blue is a color."
      },
      {
        type: "fill",
        question: "She has two _____. (cat / cats)",
        answer: "cats",
        accepted: ["cats"],
        explanation: "We use the plural form after numbers greater than one."
      },
      {
        type: "mc",
        question: "What time of day is 'morning'?",
        options: ["Night", "Afternoon", "Early part of the day", "Evening"],
        answer: 2,
        explanation: "Morning is the early part of the day, from sunrise until noon."
      },
      {
        type: "mc",
        question: "Choose the correct sentence:",
        options: ["I am student.", "I is a student.", "I am a student.", "I are student."],
        answer: 2,
        explanation: "We need the article 'a' and the correct form of 'to be' (am)."
      }
    ],
    grammar: [
      {
        type: "mc",
        question: "Choose the correct form: She _____ English very well.",
        options: ["speak", "speaks", "speaking", "spoke"],
        answer: 1,
        explanation: "Third person singular (she/he/it) takes -s in the present simple."
      },
      {
        type: "mc",
        question: "Which sentence is correct?",
        options: ["He don't like coffee.", "He doesn't likes coffee.", "He doesn't like coffee.", "He not like coffee."],
        answer: 2,
        explanation: "Negative form of present simple for he/she/it is 'doesn't + base verb'."
      },
      {
        type: "fill",
        question: "There _____ a book on the table. (is / are)",
        answer: "is",
        accepted: ["is"],
        explanation: "'A book' is singular, so we use 'is'."
      },
      {
        type: "mc",
        question: "I _____ my homework yesterday.",
        options: ["do", "does", "did", "doing"],
        answer: 2,
        explanation: "'Yesterday' indicates past simple → 'did'."
      },
      {
        type: "mc",
        question: "Choose the correct article: _____ apple a day keeps the doctor away.",
        options: ["A", "An", "The", "—"],
        answer: 1,
        explanation: "We use 'an' before vowel sounds (apple starts with /æ/)."
      },
      {
        type: "fill",
        question: "They _____ (be) my best friends.",
        answer: "are",
        accepted: ["are"],
        explanation: "Plural subject 'they' takes 'are'."
      },
      {
        type: "mc",
        question: "Where _____ you live?",
        options: ["do", "does", "is", "are"],
        answer: 0,
        explanation: "Questions with 'you' use 'do' in the present simple."
      },
      {
        type: "mc",
        question: "I have _____ brothers.",
        options: ["two", "too", "to", "tow"],
        answer: 0,
        explanation: "'Two' is the number 2."
      }
    ],
    reading: [
      {
        type: "reading",
        passage: "My name is Anna. I am 12 years old. I live in a small town with my parents and my little brother. Every morning I go to school by bus. I like English and art. After school I play with my friends in the park.",
        question: "How old is Anna?",
        options: ["10", "12", "14", "16"],
        answer: 1,
        explanation: "The text says 'I am 12 years old'."
      },
      {
        type: "reading",
        passage: "My name is Anna. I am 12 years old. I live in a small town with my parents and my little brother. Every morning I go to school by bus. I like English and art. After school I play with my friends in the park.",
        question: "How does Anna go to school?",
        options: ["By car", "By bike", "By bus", "On foot"],
        answer: 2,
        explanation: "She goes to school by bus."
      },
      {
        type: "reading",
        passage: "Tom has a dog. The dog's name is Max. Max is brown and very friendly. Tom takes Max for a walk every evening. They both love running in the park.",
        question: "What is the dog's name?",
        options: ["Tom", "Max", "Brown", "Park"],
        answer: 1,
        explanation: "The dog's name is Max."
      },
      {
        type: "reading",
        passage: "Tom has a dog. The dog's name is Max. Max is brown and very friendly. Tom takes Max for a walk every evening. They both love running in the park.",
        question: "When does Tom walk Max?",
        options: ["Every morning", "Every evening", "At night", "At weekends only"],
        answer: 1,
        explanation: "Tom takes Max for a walk every evening."
      },
      {
        type: "reading",
        passage: "Sara works in a hospital. She is a nurse. She starts work at 7 a.m. and finishes at 3 p.m. She likes helping people. On her free days she reads books and watches movies.",
        question: "What is Sara's job?",
        options: ["Doctor", "Teacher", "Nurse", "Chef"],
        answer: 2,
        explanation: "Sara is a nurse."
      },
      {
        type: "reading",
        passage: "Sara works in a hospital. She is a nurse. She starts work at 7 a.m. and finishes at 3 p.m. She likes helping people. On her free days she reads books and watches movies.",
        question: "What time does Sara finish work?",
        options: ["7 a.m.", "3 p.m.", "5 p.m.", "12 p.m."],
        answer: 1,
        explanation: "She finishes at 3 p.m."
      }
    ],
    quiz: null
  },

  intermediate: {
    vocabulary: [
      {
        type: "mc",
        question: "What does 'exhausted' mean?",
        options: ["Very happy", "Extremely tired", "Slightly hungry", "Quite angry"],
        answer: 1,
        explanation: "'Exhausted' means extremely tired."
      },
      {
        type: "mc",
        question: "Choose the best synonym for 'purchase':",
        options: ["Sell", "Buy", "Borrow", "Return"],
        answer: 1,
        explanation: "'Purchase' means to buy something."
      },
      {
        type: "fill",
        question: "The meeting was _____ until next week. (postpone / cancel)",
        answer: "postponed",
        accepted: ["postponed", "delayed"],
        explanation: "'Postponed' means moved to a later time."
      },
      {
        type: "mc",
        question: "If something is 'reliable', it is:",
        options: ["Expensive", "Can be trusted", "Very old", "Difficult to use"],
        answer: 1,
        explanation: "Reliable means you can trust it or depend on it."
      },
      {
        type: "mc",
        question: "What is the meaning of 'breakthrough'?",
        options: ["A small problem", "An important discovery or success", "A type of door", "A failed attempt"],
        answer: 1,
        explanation: "A breakthrough is a sudden important development or success."
      },
      {
        type: "fill",
        question: "She has a _____ of collecting vintage stamps. (hobby / habit)",
        answer: "hobby",
        accepted: ["hobby"],
        explanation: "A hobby is an activity done for pleasure in free time."
      },
      {
        type: "mc",
        question: "'Approximately' means:",
        options: ["Exactly", "Roughly / about", "Never", "Immediately"],
        answer: 1,
        explanation: "Approximately means roughly or about."
      },
      {
        type: "mc",
        question: "Choose the correct word: The company decided to _____ the new product next month.",
        options: ["launch", "lunch", "latch", "lunge"],
        answer: 0,
        explanation: "'Launch' means to introduce or start something new."
      }
    ],
    grammar: [
      {
        type: "mc",
        question: "If it rains tomorrow, we _____ the picnic.",
        options: ["cancel", "will cancel", "would cancel", "cancelled"],
        answer: 1,
        explanation: "First conditional: If + present, will + base verb."
      },
      {
        type: "mc",
        question: "I have lived here _____ 2019.",
        options: ["for", "since", "during", "from"],
        answer: 1,
        explanation: "'Since' is used with a specific starting point in time."
      },
      {
        type: "fill",
        question: "She asked me where I _____ (live).",
        answer: "lived",
        accepted: ["lived"],
        explanation: "In reported speech, present becomes past."
      },
      {
        type: "mc",
        question: "The book _____ by a famous author.",
        options: ["wrote", "was written", "written", "is writing"],
        answer: 1,
        explanation: "Passive voice: was/were + past participle."
      },
      {
        type: "mc",
        question: "I wish I _____ more time.",
        options: ["have", "had", "will have", "having"],
        answer: 1,
        explanation: "Wish + past simple expresses a present desire that is not true."
      },
      {
        type: "fill",
        question: "By this time next year, I _____ (finish) my degree.",
        answer: "will have finished",
        accepted: ["will have finished", "I'll have finished"],
        explanation: "Future perfect: will have + past participle."
      },
      {
        type: "mc",
        question: "He suggested _____ to the cinema.",
        options: ["to go", "going", "go", "went"],
        answer: 1,
        explanation: "Suggest is followed by a gerund (verb + -ing)."
      },
      {
        type: "mc",
        question: "Despite _____ tired, she continued working.",
        options: ["be", "being", "to be", "was"],
        answer: 1,
        explanation: "Despite / in spite of + gerund or noun."
      }
    ],
    reading: [
      {
        type: "reading",
        passage: "Remote work has become increasingly popular in recent years. Many employees appreciate the flexibility of working from home, while companies often save on office costs. However, some people find it difficult to separate work life from personal life, and team communication can become more challenging without face-to-face interaction.",
        question: "What is one advantage of remote work mentioned?",
        options: ["Higher salaries", "Flexibility", "More meetings", "Better internet"],
        answer: 1,
        explanation: "Employees appreciate the flexibility of working from home."
      },
      {
        type: "reading",
        passage: "Remote work has become increasingly popular in recent years. Many employees appreciate the flexibility of working from home, while companies often save on office costs. However, some people find it difficult to separate work life from personal life, and team communication can become more challenging without face-to-face interaction.",
        question: "What challenge is mentioned about remote work?",
        options: ["Higher costs", "Difficulty separating work and personal life", "Too many holidays", "Lack of computers"],
        answer: 1,
        explanation: "Some people find it hard to separate work life from personal life."
      },
      {
        type: "reading",
        passage: "Learning a new language requires consistency more than intensity. Studying for 20 minutes every day is usually more effective than studying for three hours once a week. Regular practice helps your brain form stronger connections and improves long-term retention of vocabulary and grammar.",
        question: "According to the text, what is more important for language learning?",
        options: ["Intensity", "Consistency", "Expensive courses", "Native teachers only"],
        answer: 1,
        explanation: "The text says consistency is more important than intensity."
      },
      {
        type: "reading",
        passage: "Learning a new language requires consistency more than intensity. Studying for 20 minutes every day is usually more effective than studying for three hours once a week. Regular practice helps your brain form stronger connections and improves long-term retention of vocabulary and grammar.",
        question: "Why is daily practice recommended?",
        options: ["It is cheaper", "It helps form stronger brain connections", "It is more fun", "Teachers prefer it"],
        answer: 1,
        explanation: "Regular practice helps the brain form stronger connections."
      }
    ],
    quiz: null
  },

  advanced: {
    vocabulary: [
      {
        type: "mc",
        question: "What does 'ubiquitous' mean?",
        options: ["Rare and valuable", "Present or found everywhere", "Extremely complicated", "Outdated"],
        answer: 1,
        explanation: "Ubiquitous means existing or being everywhere at the same time."
      },
      {
        type: "mc",
        question: "A 'meticulous' person is someone who is:",
        options: ["Careless", "Extremely careful and precise", "Very talkative", "Easily distracted"],
        answer: 1,
        explanation: "Meticulous means showing great attention to detail."
      },
      {
        type: "fill",
        question: "The evidence was _____ ; no one could deny it. (conclusive / exclusive)",
        answer: "conclusive",
        accepted: ["conclusive"],
        explanation: "Conclusive means decisive and convincing."
      },
      {
        type: "mc",
        question: "'Ephemeral' most nearly means:",
        options: ["Lasting a very short time", "Extremely large", "Highly detailed", "Deeply emotional"],
        answer: 0,
        explanation: "Ephemeral means lasting for a very short time."
      },
      {
        type: "mc",
        question: "To 'mitigate' a problem means to:",
        options: ["Ignore it", "Make it less severe", "Create it", "Celebrate it"],
        answer: 1,
        explanation: "Mitigate means to make something less severe or serious."
      },
      {
        type: "fill",
        question: "Her argument was both coherent and _____. (persuasive / invasive)",
        answer: "persuasive",
        accepted: ["persuasive"],
        explanation: "Persuasive means able to convince others."
      },
      {
        type: "mc",
        question: "What is the meaning of 'paradigm shift'?",
        options: ["A small adjustment", "A fundamental change in approach or assumptions", "A type of scientific experiment", "A temporary trend"],
        answer: 1,
        explanation: "A paradigm shift is a fundamental change in the basic concepts of a field."
      },
      {
        type: "mc",
        question: "Choose the best word: The politician's speech was full of empty _____.",
        options: ["rhetoric", "logic", "evidence", "clarity"],
        answer: 0,
        explanation: "Rhetoric can refer to language that is impressive but lacking in sincerity or meaningful content."
      }
    ],
    grammar: [
      {
        type: "mc",
        question: "Had I known about the traffic, I _____ earlier.",
        options: ["left", "would leave", "would have left", "will leave"],
        answer: 2,
        explanation: "Third conditional inverted form: Had + past perfect, would have + past participle."
      },
      {
        type: "mc",
        question: "Not only _____ the exam, but she also received the highest score.",
        options: ["she passed", "did she pass", "passed she", "she did pass"],
        answer: 1,
        explanation: "After 'Not only' we invert the subject and auxiliary."
      },
      {
        type: "fill",
        question: "It is essential that he _____ (be) present at the meeting.",
        answer: "be",
        accepted: ["be"],
        explanation: "Subjunctive mood after 'essential that' uses the base form."
      },
      {
        type: "mc",
        question: "The more you practice, _____ you will become.",
        options: ["the better", "better", "the best", "more better"],
        answer: 0,
        explanation: "Comparative correlative: the more… the better…"
      },
      {
        type: "mc",
        question: "She speaks as if she _____ the place for years.",
        options: ["knows", "knew", "has known", "had known"],
        answer: 3,
        explanation: "As if + past perfect for an unreal past situation."
      },
      {
        type: "fill",
        question: "Rarely _____ such a talented musician. (we encounter / do we encounter)",
        answer: "do we encounter",
        accepted: ["do we encounter"],
        explanation: "Negative adverbials at the beginning require inversion."
      },
      {
        type: "mc",
        question: "I'd rather you _____ me the truth.",
        options: ["tell", "told", "have told", "telling"],
        answer: 1,
        explanation: "Would rather + subject + past simple for preference about someone else's action."
      },
      {
        type: "mc",
        question: "No sooner _____ the door than the phone rang.",
        options: ["I had closed", "had I closed", "I closed", "did I close"],
        answer: 1,
        explanation: "No sooner + had + subject + past participle… than…"
      }
    ],
    reading: [
      {
        type: "reading",
        passage: "The concept of deliberate practice, popularized by psychologist Anders Ericsson, suggests that expertise is not merely the product of innate talent but of sustained, focused effort aimed at improving specific aspects of performance. Unlike mindless repetition, deliberate practice involves constant feedback, goal setting, and stepping outside one’s comfort zone.",
        question: "According to the passage, what distinguishes deliberate practice from ordinary practice?",
        options: ["It requires innate talent", "It involves feedback, goals, and leaving the comfort zone", "It is always enjoyable", "It needs no structure"],
        answer: 1,
        explanation: "Deliberate practice includes feedback, goal setting, and leaving the comfort zone."
      },
      {
        type: "reading",
        passage: "The concept of deliberate practice, popularized by psychologist Anders Ericsson, suggests that expertise is not merely the product of innate talent but of sustained, focused effort aimed at improving specific aspects of performance. Unlike mindless repetition, deliberate practice involves constant feedback, goal setting, and stepping outside one’s comfort zone.",
        question: "What does the author suggest about expertise?",
        options: ["It depends only on talent", "It comes mainly from sustained focused effort", "It cannot be developed", "It is purely genetic"],
        answer: 1,
        explanation: "Expertise is the product of sustained, focused effort rather than just innate talent."
      },
      {
        type: "reading",
        passage: "Cognitive load theory posits that working memory has limited capacity. When instructional materials present too much novel information simultaneously, learners experience overload, which impairs schema formation and long-term retention. Effective design therefore sequences information carefully and reduces extraneous cognitive load.",
        question: "What is the main limitation discussed?",
        options: ["Long-term memory capacity", "Working memory capacity", "Motivation levels", "Visual processing speed"],
        answer: 1,
        explanation: "Working memory has limited capacity."
      },
      {
        type: "reading",
        passage: "Cognitive load theory posits that working memory has limited capacity. When instructional materials present too much novel information simultaneously, learners experience overload, which impairs schema formation and long-term retention. Effective design therefore sequences information carefully and reduces extraneous cognitive load.",
        question: "How can designers help learners according to the text?",
        options: ["Add more information at once", "Sequence information carefully and reduce extraneous load", "Ignore working memory limits", "Use only text"],
        answer: 1,
        explanation: "Effective design sequences information carefully and reduces extraneous cognitive load."
      }
    ],
    quiz: null
  }
};

// Generate mixed quizzes from other categories
["beginner", "intermediate", "advanced"].forEach(level => {
  const all = [
    ...EXERCISES[level].vocabulary.slice(0, 3),
    ...EXERCISES[level].grammar.slice(0, 3),
    ...EXERCISES[level].reading.slice(0, 2)
  ];
  EXERCISES[level].quiz = all;
});
