import { useMemo, useState } from 'react'
import { calculateSeriesParallel, type CircuitMode } from '../../models/seriesParallel'
import { formatNumber } from '../../utils/format'
import { QuizBox } from '../QuizBox'

export function SeriesParallelSimulation() {
  const [mode, setMode] = useState<CircuitMode>('series')
  const [voltage, setVoltage] = useState(12)
  const [r1, setR1] = useState(10)
  const [r2, setR2] = useState(20)
  const [showExplanation, setShowExplanation] = useState(true)

  const simulation = useMemo(() => {
    try {
      return { data: calculateSeriesParallel({ mode, voltage, r1, r2 }), error: '' }
    } catch (error) {
      return { data: null, error: (error as Error).message }
    }
  }, [mode, voltage, r1, r2])

  return (
    <section className="simulation-box">
      <h2>المحاكاة ولوحة المتغيرات</h2>
      <div className="controls-grid">
        <label>
          نوع التوصيل
          <select value={mode} onChange={(event) => setMode(event.target.value as CircuitMode)}>
            <option value="series">توالي</option>
            <option value="parallel">توازي</option>
          </select>
        </label>
        <label>
          الجهد (V)
          <input type="number" value={voltage} min={0} step={0.1} onChange={(event) => setVoltage(Number(event.target.value))} />
        </label>
        <label>
          R1 (Ω)
          <input type="number" value={r1} min={0} step={0.1} onChange={(event) => setR1(Number(event.target.value))} />
        </label>
        <label>
          R2 (Ω)
          <input type="number" value={r2} min={0} step={0.1} onChange={(event) => setR2(Number(event.target.value))} />
        </label>
        <button
          type="button"
          className="button-link button-reset"
          onClick={() => {
            setMode('series')
            setVoltage(12)
            setR1(10)
            setR2(20)
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
                المقاومة المكافئة: <span className="ltr-inline">{formatNumber(simulation.data.equivalentResistance, 3)} Ω</span>
              </p>
              <p>
                التيار الكلي: <span className="ltr-inline">{formatNumber(simulation.data.totalCurrent, 3)} A</span>
              </p>
              <p>
                تيار الفرع الأول: <span className="ltr-inline">{formatNumber(simulation.data.branchCurrent1, 3)} A</span>
              </p>
              <p>
                تيار الفرع الثاني: <span className="ltr-inline">{formatNumber(simulation.data.branchCurrent2, 3)} A</span>
              </p>
            </section>
            <table className="data-table">
              <caption>مقارنة النتائج</caption>
              <thead>
                <tr>
                  <th>الوضع</th>
                  <th>R_eq (Ω)</th>
                  <th>I_total (A)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{mode === 'series' ? 'توالي' : 'توازي'}</td>
                  <td className="ltr-inline">{formatNumber(simulation.data.equivalentResistance, 3)}</td>
                  <td className="ltr-inline">{formatNumber(simulation.data.totalCurrent, 3)}</td>
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
          في التوصيل على التوازي تنخفض المقاومة المكافئة غالبًا عن أصغر مقاومة، لذلك يرتفع التيار الكلي مقارنة بالتوالي.
        </p>
      )}
      <QuizBox
        question="عند استخدام مقاومتين متماثلتين، أي توصيل يعطي مقاومة مكافئة أصغر؟"
        choices={[
          { label: 'التوازي', isCorrect: true },
          { label: 'التوالي', isCorrect: false },
          { label: 'لا فرق', isCorrect: false },
        ]}
      />
    </section>
  )
}
