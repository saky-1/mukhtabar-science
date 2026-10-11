import { useMemo, useState } from 'react'
import { calculateFreeFall } from '../../models/freeFall'
import { formatNumber } from '../../utils/format'
import { QuizBox } from '../QuizBox'

export function FreeFallSimulation() {
  const [height, setHeight] = useState(20)
  const [gravity, setGravity] = useState(9.81)
  const [showExplanation, setShowExplanation] = useState(true)

  const simulation = useMemo(() => {
    try {
      return { data: calculateFreeFall({ height, gravity }), error: '' }
    } catch (error) {
      return { data: null, error: (error as Error).message }
    }
  }, [height, gravity])

  return (
    <section className="simulation-box">
      <h2>المحاكاة ولوحة المتغيرات</h2>
      <div className="controls-grid">
        <label>
          الارتفاع (m)
          <input type="number" value={height} min={1} step={1} onChange={(event) => setHeight(Number(event.target.value))} />
        </label>
        <label>
          الجاذبية (m/s²)
          <input
            type="number"
            value={gravity}
            min={1}
            step={0.01}
            onChange={(event) => setGravity(Number(event.target.value))}
          />
        </label>
        <button
          type="button"
          className="button-link button-reset"
          onClick={() => {
            setHeight(20)
            setGravity(9.81)
          }}
        >
          إعادة ضبط
        </button>
      </div>
      {simulation.error ? (
        <p className="error-box" aria-live="polite">
          {simulation.error}
        </p>
      ) : (
        simulation.data && (
          <>
            <section aria-live="polite" className="result-grid">
              <p>
                زمن السقوط: <span className="ltr-inline">{formatNumber(simulation.data.totalTime, 3)} s</span>
              </p>
              <p>
                السرعة النهائية: <span className="ltr-inline">{formatNumber(simulation.data.finalVelocity, 3)} m/s</span>
              </p>
            </section>
            <svg viewBox="0 0 200 260" role="img" aria-label="تمثيل حركة السقوط الحر" className="fall-svg">
              <line x1="100" y1="20" x2="100" y2="240" stroke="#65758A" strokeDasharray="5 5" />
              <circle cx="100" cy="230" r="12" fill="#18B6A4" />
              <line x1="20" y1="240" x2="180" y2="240" stroke="#10243A" strokeWidth="4" />
            </svg>
            <table className="data-table">
              <caption>جدول القيم خلال الزمن</caption>
              <thead>
                <tr>
                  <th>الزمن (s)</th>
                  <th>الارتفاع (m)</th>
                  <th>السرعة (m/s)</th>
                </tr>
              </thead>
              <tbody>
                {simulation.data.points.map((point) => (
                  <tr key={point.time}>
                    <td className="ltr-inline">{formatNumber(point.time, 3)}</td>
                    <td className="ltr-inline">{formatNumber(point.height, 3)}</td>
                    <td className="ltr-inline">{formatNumber(point.velocity, 3)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )
      )}
      <button type="button" className="button-link" onClick={() => setShowExplanation((value) => !value)}>
        {showExplanation ? 'إخفاء الشرح' : 'إظهار الشرح'}
      </button>
      {showExplanation && <p>هذه المحاكاة تفترض غياب مقاومة الهواء وأن الجسم يبدأ من السكون.</p>}
      <QuizBox
        question="ضمن نفس الجاذبية، ماذا يحدث لزمن السقوط عند زيادة الارتفاع؟"
        choices={[
          { label: 'يزداد', isCorrect: true },
          { label: 'ينقص', isCorrect: false },
          { label: 'يبقى ثابتًا', isCorrect: false },
        ]}
      />
    </section>
  )
}
