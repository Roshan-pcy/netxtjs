import { NextRequest, NextResponse } from "next/server";
import translate from "translate";
import { franc } from "franc";

// free google translate
translate.engine = "google";
// remove translate.key = null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let { word } = body;

    if (!word) {
      return NextResponse.json({ error: "word is required" }, { status: 400 });
    }

    // detect language
    const detected = franc(word);
    const isEnglish = detected === "eng";

    let englishWord = word;

    // if Kannada => translate to English first
    if (!isEnglish) {
      englishWord = await translate(word, { to: "en" });
    }

    // fetch dictionary
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${englishWord}`
    );
    const data = await response.json();

    if (!data[0]) {
      return NextResponse.json({ error: "Word not found" }, { status: 400 });
    }

    const englishMeaning = data[0].meanings[0].definitions[0].definition;

    const englishExample =
      data[0].meanings[0].definitions[0].example ||
      `This is a ${englishWord} situation.`;

    // translate meaning & example to Kannada
    const kannadaMeaning = await translate(englishMeaning, { to: "kn" });
    const kannadaExample = await translate(englishExample, { to: "kn" });

    return NextResponse.json(
      {
        detectedLanguage: isEnglish ? "english" : "kannada",
        inputWord: word,
        englishWord,
        meaning: {
          english: englishMeaning,
          kannada: kannadaMeaning,
        },
        examples: {
          english: englishExample,
          kannada: kannadaExample,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Meaning API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
