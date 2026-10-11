import type { ExperimentRecord } from '../types'

interface ExperimentDetailsProps {
  experiment: ExperimentRecord
}

export function ExperimentDetails({ experiment }: ExperimentDetailsProps) {
  return (
    <section className="details-grid">
      <article className="card">
        <h2>الأهداف التعليمية</h2>
        <ul>
          {experiment.objectives.map((objective) => (
            <li key={objective}>{objective}</li>
          ))}
        </ul>
      </article>
      <article className="card">
        <h2>السؤال والفرضية</h2>
        <p>
          <strong>السؤال:</strong> {experiment.question}
        </p>
        <p>
          <strong>الفرضية:</strong> {experiment.hypothesis}
        </p>
      </article>
      <article className="card">
        <h2>المعادلات والافتراضات والحدود</h2>
        <h3>المعادلات</h3>
        <ul className="ltr-block">
          {experiment.model.equations.map((equation) => (
            <li key={equation}>{equation}</li>
          ))}
        </ul>
        <h3>الافتراضات</h3>
        <ul>
          {experiment.model.assumptions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h3>الحدود</h3>
        <ul>
          {experiment.model.limits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article className="card">
        <h2>أخطاء شائعة</h2>
        <ul>
          {experiment.misconceptions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>
      <article className="card">
        <h2>مراجع</h2>
        <ul>
          {experiment.references.map((reference) => (
            <li key={reference}>{reference}</li>
          ))}
        </ul>
      </article>
    </section>
  )
}
