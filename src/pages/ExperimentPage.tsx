import { Link, useParams } from 'react-router-dom'
import { ExperimentDetails } from '../components/ExperimentDetails'
import { DilutionSimulation } from '../components/experiments/DilutionSimulation'
import { FreeFallSimulation } from '../components/experiments/FreeFallSimulation'
import { OhmLawSimulation } from '../components/experiments/OhmLawSimulation'
import { SeriesParallelSimulation } from '../components/experiments/SeriesParallelSimulation'
import { experimentMap } from '../data/experiments'

function SimulationById({ id }: { id: string }) {
  switch (id) {
    case 'ohm-law':
      return <OhmLawSimulation />
    case 'series-parallel':
      return <SeriesParallelSimulation />
    case 'free-fall':
      return <FreeFallSimulation />
    case 'dilution':
      return <DilutionSimulation />
    default:
      return null
  }
}

export function ExperimentPage() {
  const { experimentId } = useParams<{ experimentId: string }>()

  if (!experimentId || !experimentMap.has(experimentId)) {
    return (
      <section className="card">
        <h2>التجربة غير موجودة</h2>
        <Link to="/experiments" className="button-link">
          العودة إلى الاستكشاف
        </Link>
      </section>
    )
  }

  const experiment = experimentMap.get(experimentId)!

  return (
    <>
      <section className="card">
        <h2>{experiment.title}</h2>
        <p>{experiment.description}</p>
        <p className="card-meta">
          المادة: {experiment.subject} | الصعوبة: {experiment.difficulty} | الحالة: {experiment.status}
        </p>
        {experiment.warning ? <p className="warning-box">{experiment.warning}</p> : null}
      </section>
      <SimulationById id={experiment.id} />
      <ExperimentDetails experiment={experiment} />
    </>
  )
}
