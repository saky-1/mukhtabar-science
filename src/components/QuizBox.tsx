import { useState } from 'react'

interface Choice {
  label: string
  isCorrect: boolean
}

interface QuizBoxProps {
  question: string
  choices: Choice[]
}

export function QuizBox({ question, choices }: QuizBoxProps) {
  const [result, setResult] = useState<string>('')

  return (
    <section className="card">
      <h2>سؤال فهم سريع</h2>
      <p>{question}</p>
      <div className="quiz-options">
        {choices.map((choice) => (
          <button
            key={choice.label}
            type="button"
            className="button-link"
            onClick={() => setResult(choice.isCorrect ? 'إجابة صحيحة ✅' : 'إجابة غير صحيحة، حاول مرة أخرى.')}
          >
            {choice.label}
          </button>
        ))}
      </div>
      <p aria-live="polite">{result}</p>
    </section>
  )
}
