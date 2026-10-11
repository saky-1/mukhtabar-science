import { useMemo, useState } from 'react'
import { calculateOhmLaw } from '../../models/ohmLaw'
import { formatNumber } from '../../utils/format'
import { QuizBox } from '../QuizBox'

export function OhmLawSimulation() {
  const [voltage, setVoltage] = useState(6)
  const [resistance, setResistance] = useState(10)
  const [showExplanation, setShowExplanation] = useState(true)

  const simulation = useMemo(() => {
    try {
      return { data: calculateOhmLaw({ voltage, resistance }), error: '' }
    } catch (error) {
      return { data: null, error: (error as Error).message }
    }
  }, [voltage, resistance])

  return (
    <section className="simulation-box">
      <h2>المحاكاة ولوحة المتغيرات</h2>
      <div className="controls-grid">
        <label>
          الجهد (V)
          <input type="number" min={0} step={0.1} value={voltage} onChange={(event) => setVoltage(Number(event.target.value))} />
        </label>
        <label>
          المقاومة (Ω)
          <input
            type="number"
            min={0}
            step={0.1}
            value={resistance}
            onChange={(event) => setResistance(Number(event.target.value))}
          />
        </label>
        <button
          type="button"
          className="button-link button-reset"
          onClick={() => {
            setVoltage(6)
            setResistance(10)
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
                شدة التيار: <span className="ltr-inline">{formatNumber(simulation.data.current, 3)} A</span>
              </p>
              <p>
                القدرة: <span className="ltr-inline">{formatNumber(simulation.data.power, 3)} W</span>
              </p>
            </section>
            <svg viewBox="0 0 320 120" role="img" aria-label="تمثيل الدارة وسطوع المصباح" className="circuit-svg">
              <line x1="20" y1="60" x2="120" y2="60" stroke="#10243A" strokeWidth="4" />
              <line x1="200" y1="60" x2="300" y2="60" stroke="#10243A" strokeWidth="4" />
              <rect x="120" y="45" width="80" height="30" fill="#F4F7FB" stroke="#10243A" strokeWidth="3" />
              <text x="160" y="64" textAnchor="middle" className="svg-text">
                مقاومة
              </text>
              <circle cx="60" cy="60" r="18" fill={`rgba(255, 200, 87, ${simulation.data.brightness})`} stroke="#10243A" strokeWidth="3" />
              <text x="60" y="64" textAnchor="middle" className="svg-text">
                مصباح
              </text>
            </svg>
            <table className="data-table">
              <caption>قيم مدخلة ومحسوبة</caption>
              <thead>
                <tr>
                  <th>الجهد (V)</th>
                  <th>المقاومة (Ω)</th>
                  <th>التيار (A)</th>
                  <th>القدرة (W)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ltr-inline">{formatNumber(voltage, 2)}</td>
                  <td className="ltr-inline">{formatNumber(resistance, 2)}</td>
                  <td className="ltr-inline">{formatNumber(simulation.data.current, 3)}</td>
                  <td className="ltr-inline">{formatNumber(simulation.data.power, 3)}</td>
                </tr>
              </tbody>
            </table>
          </>
        )
      )}
      <button type="button" className="button-link" onClick={() => setShowExplanation((value) => !value)}>
        {showExplanation ? 'إخفاء الشرح' : 'إظهار الشرح'}
      </button>
      {showExplanation && (
        <p>
          عند ثبات الجهد، زيادة المقاومة تقلل التيار مباشرة حسب العلاقة <span className="ltr-inline">I = V / R</span>.
          السطوع هنا تمثيل بصري للقدرة وليس قياسًا ضوئيًا حقيقيًا.
        </p>
      )}
      <QuizBox
        question="إذا تضاعف الجهد وثبتت المقاومة، ماذا يحدث للتيار؟"
        choices={[
          { label: 'يتضاعف التيار', isCorrect: true },
          { label: 'ينخفض للنصف', isCorrect: false },
          { label: 'لا يتغير', isCorrect: false },
        ]}
      />
    </section>
  )
}
