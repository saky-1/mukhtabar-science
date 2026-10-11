import { useMemo, useState } from 'react'
import { calculateDilution } from '../../models/dilution'
import { formatNumber } from '../../utils/format'
import { QuizBox } from '../QuizBox'

export function DilutionSimulation() {
  const [stockConcentration, setStockConcentration] = useState(1)
  const [targetConcentration, setTargetConcentration] = useState(0.2)
  const [targetVolume, setTargetVolume] = useState(250)
  const [showExplanation, setShowExplanation] = useState(true)

  const simulation = useMemo(() => {
    try {
      return { data: calculateDilution({ stockConcentration, targetConcentration, targetVolume }), error: '' }
    } catch (error) {
      return { data: null, error: (error as Error).message }
    }
  }, [stockConcentration, targetConcentration, targetVolume])

  return (
    <section className="simulation-box">
      <h2>المحاكاة ولوحة المتغيرات</h2>
      <p className="warning-box" role="note">
        هذه المحاكاة تعليمية فقط ولا تُعد دليل أمان للتطبيق الواقعي.
      </p>
      <div className="controls-grid">
        <label>
          تركيز المخزون (mol/L)
          <input
            type="number"
            min={0}
            step={0.01}
            value={stockConcentration}
            onChange={(event) => setStockConcentration(Number(event.target.value))}
          />
        </label>
        <label>
          التركيز النهائي (mol/L)
          <input
            type="number"
            min={0}
            step={0.01}
            value={targetConcentration}
            onChange={(event) => setTargetConcentration(Number(event.target.value))}
          />
        </label>
        <label>
          الحجم النهائي (mL)
          <input
            type="number"
            min={1}
            step={1}
            value={targetVolume}
            onChange={(event) => setTargetVolume(Number(event.target.value))}
          />
        </label>
        <button
          type="button"
          className="button-link button-reset"
          onClick={() => {
            setStockConcentration(1)
            setTargetConcentration(0.2)
            setTargetVolume(250)
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
            <section className="result-grid" aria-live="polite">
              <p>
                حجم المخزون المطلوب: <span className="ltr-inline">{formatNumber(simulation.data.stockVolume, 3)} mL</span>
              </p>
              <p>
                حجم المذيب المطلوب: <span className="ltr-inline">{formatNumber(simulation.data.solventVolume, 3)} mL</span>
              </p>
            </section>
            <svg viewBox="0 0 320 120" role="img" aria-label="تمثيل نسب التخفيف" className="circuit-svg">
              <rect x="30" y="30" width="100" height="60" fill="#18B6A4" opacity="0.7" />
              <rect x="190" y="30" width="100" height="60" fill="#10243A" opacity="0.25" />
              <text x="80" y="65" textAnchor="middle" className="svg-text">
                مخزون
              </text>
              <text x="240" y="65" textAnchor="middle" className="svg-text">
                مذيب
              </text>
            </svg>
            <table className="data-table">
              <caption>قيم الحساب</caption>
              <thead>
                <tr>
                  <th>C1 (mol/L)</th>
                  <th>C2 (mol/L)</th>
                  <th>V2 (mL)</th>
                  <th>V1 (mL)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="ltr-inline">{formatNumber(stockConcentration, 3)}</td>
                  <td className="ltr-inline">{formatNumber(targetConcentration, 3)}</td>
                  <td className="ltr-inline">{formatNumber(targetVolume, 3)}</td>
                  <td className="ltr-inline">{formatNumber(simulation.data.stockVolume, 3)}</td>
                </tr>
              </tbody>
            </table>
          </>
        )
      )}
      <button type="button" className="button-link" onClick={() => setShowExplanation((value) => !value)}>
        {showExplanation ? 'إخفاء الشرح' : 'إظهار الشرح'}
      </button>
      {showExplanation && <p>نستخدم علاقة التخفيف مع ثبات وحدة التركيز وثبات الحجم النهائي المطلوب.</p>}
      <QuizBox
        question="هل يمكن أن يكون التركيز النهائي أكبر من تركيز المخزون في عملية تخفيف؟"
        choices={[
          { label: 'لا، غير ممكن في التخفيف', isCorrect: true },
          { label: 'نعم دائمًا', isCorrect: false },
          { label: 'فقط دون تغيير الحجم', isCorrect: false },
        ]}
      />
    </section>
  )
}
