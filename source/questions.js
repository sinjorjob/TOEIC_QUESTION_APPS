const categories = [
    { id: 1, name: "品詞問題（名詞、動詞、形容詞、副詞）", icon: "fa-book" },
];

const questions = [
    {
        id: 1,
        category: "品詞問題（名詞、動詞、形容詞、副詞）",
        question_text: "The astronaut ___ the breathtaking view of Earth from the International Space Station.",
        choices: { A: "admired", B: "admiration", C: "admiringly", D: "admirable" },
        correct_answer: "A",
        explanation: "## 日本語訳\n宇宙飛行士は国際宇宙ステーションから地球の息をのむような眺めを賞賛した。\n\n## 各選択肢の意味\nA) admired: 賞賛した（動詞）\nB) admiration: 賞賛（名詞）\nC) admiringly: 賞賛して（副詞）\nD) admirable: 賞賛すべき（形容詞）\n\n## 単語の意味\nastronaut: 宇宙飛行士\nbreathtaking: 息をのむような、すばらしい\nInternational Space Station: 国際宇宙ステーション\n\n## 解説\nこの文では、主語「The astronaut」（宇宙飛行士）が行動を表す動詞が必要です。「賞賛する」という意味の動詞「admired」が最も適切です。名詞、副詞、形容詞は文法的に正しくありません。\n\n## 解法のポイント\n文中の空欄の前後の語句に注目しましょう。主語の後ろには通常、動詞が来ます。また、目的語（この場合は「view」）の前には動詞が適切です。これらのヒントから、動詞形を選ぶことができます。",
        situation: "宇宙の話題",
        target_level: "700"
    },
    {
        id: 2,
        category: "品詞問題（名詞、動詞、形容詞、副詞）",
        question_text: "Scientists are ___ studying the data collected from the recent Mars rover mission.",
        choices: { A: "enthusiasm", B: "enthusiastic", C: "enthusiastically", D: "enthuse" },
        correct_answer: "C",
        explanation: "## 日本語訳\n科学者たちは最近の火星探査機ミッションから収集されたデータを熱心に研究している。\n\n## 各選択肢の意味\nA) enthusiasm: 熱意（名詞）\nB) enthusiastic: 熱心な（形容詞）\nC) enthusiastically: 熱心に（副詞）\nD) enthuse: 熱狂させる（動詞）\n\n## 単語の意味\nMars rover: 火星探査機\nmission: ミッション、任務\n\n## 解説\nこの文では、動詞「studying」を修飾する語が必要です。動詞を修飾するのは副詞の役割なので、「熱心に」という意味の副詞「enthusiastically」が最も適切です。\n\n## 解法のポイント\n動詞（この場合は「studying」）の前に来る修飾語を探す時は、副詞を選ぶのが基本です。「be動詞 + ~ing」の形の前に来る修飾語も同様に副詞を選びましょう。この知識を覚えておくと、似たような問題に出会った時にすぐに判断できます。",
        situation: "宇宙の話題",
        target_level: "700"
    },
    {
        id: 3,
        category: "品詞問題（名詞、動詞、形容詞、副詞）",
        question_text: "The ___ of exoplanets has revolutionized our understanding of the universe.",
        choices: { A: "discover", B: "discoverer", C: "discoverable", D: "discovery" },
        correct_answer: "D",
        explanation: "## 日本語訳\n系外惑星の発見は、宇宙に対する我々の理解を革命的に変えた。\n\n## 各選択肢の意味\nA) discover: 発見する（動詞）\nB) discoverer: 発見者（名詞）\nC) discoverable: 発見可能な（形容詞）\nD) discovery: 発見（名詞）\n\n## 単語の意味\nexoplanet: 系外惑星（太陽系外の惑星）\nrevolutionize: 革命を起こす、大きく変える\n\n## 解説\nこの文では、冠詞「The」の後に来る名詞が必要です。「発見」という意味の名詞「discovery」が最も適切です。動詞や形容詞は文法的に正しくありません。\n\n## 解法のポイント\n冠詞（a, an, the）の後には必ず名詞が来ます。また、文の主語になる語を探す時は、名詞または名詞句を選ぶ必要があります。この2つのルールを覚えておくと、似たような問題を素早く解けるようになります。",
        situation: "宇宙の話題",
        target_level: "700"
    }
];