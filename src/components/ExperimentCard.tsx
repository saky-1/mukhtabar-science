import { Link } from 'react-router-dom'
import type { ExperimentRecord } from '../types'

interface ExperimentCardProps {
  experiment: ExperimentRecord
}

export function ExperimentCard({ experiment }: ExperimentCardProps) {
  return (
    <article className="card">
      <p className="card-meta">{experiment.subject}</p>
      <h3>{experiment.title}</h3>
      <p>{experiment.description}</p>
      <p className="card-meta">المستوى: {experiment.levels.join('، ')} | الصعوبة: {experiment.difficulty}</p>
      <p className="card-meta">الحالة: {experiment.status}</p>
      <Link to={`/experiments/${experiment.id}`} className="button-link">
        فتح التجربة
      </Link>
    </article>
  )
}
