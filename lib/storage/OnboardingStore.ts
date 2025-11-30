class OnBoardingStore {
  // User answers will be stored here
  answers: string[] = [];

  // All onboarding screens/questions
  screens = [
    {
      id: 1,
      question: "What is your occupation?",
      options: [
        "Teacher",
        "Student",
        "Office Worker",
        "Self-employed",
        "Other",
      ],
    },
    {
      id: 2,
      question: "What is your native language?",
      options: ["English", "Hindi", "Kannada", "Tamil", "Spanish", "Other"],
      default: "English", // you said set English for now
    },
    {
      id: 3,
      question: "What is your English level?",
      options: [
        "I don't know English",
        "I know little English",
        "Basic level",
        "Intermediate",
        "Advanced",
        "I can create sentences but need practice",
        "I am stuck with grammar",
      ],
    },
    {
      id: 4,
      question: "Do you have anyone to practice speaking with?",
      options: ["Yes", "No"],
    },
    {
      id: 5,
      question: "Why are you learning English?",
      options: [
        "Career",
        "Business",
        "Confidence",
        "For fun",
        "For job",
        "Travel",
      ],
    },
    {
      id: 6,
      question: "How many minutes per day do you practice English?",
      options: ["10 minutes", "15 minutes", "20 minutes", "30 minutes"],
    },
    {
      id: 7,
      question: "Which time do you prefer to study English ?",
      options: ["Morning", "Evening", "Night"],
    },
  ];

  // Add answer to array
  add(value: string) {
    this.answers.push(value);
    console.log("Added:", value);
  }

  // Reset answers
  clear() {
    this.answers = [];
    console.log("Cleared");
  }

  // Save to localStorage
  saveToLocal() {
    localStorage.setItem("onboardingAnswers", JSON.stringify(this.answers));
    console.log("Saved to local");
  }

  // Load answers
  loadFromLocal() {
    const raw = localStorage.getItem("onboardingAnswers");
    if (raw) {
      this.answers = JSON.parse(raw);
      console.log("Loaded:", this.answers);
    }
  }

  // Get everything (questions + answers)
  getScreens() {
    return this.screens;
  }

  getAnswers() {
    return this.answers;
  }

  toggle(value: string) {
    if (this.answers.includes(value)) {
      this.answers = this.answers.filter((x) => x !== value);
    } else {
      this.answers.push(value);
    }
  }
}

// Export global instance
const onBoardingStore = new OnBoardingStore();
export default onBoardingStore;
