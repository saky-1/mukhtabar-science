import { useMemo, useState } from 'react'
import { ExperimentCard } from '../components/ExperimentCard'
import { FilterPanel } from '../components/FilterPanel'
import { experiments } from '../data/experiments'
import type { Difficulty, Level, Subject } from '../types'

interface FilterState {
  query: string
  subject: Subject | 'الكل'
  level: Level | 'الكل'
  difficulty: Difficulty | 'الكل'
  sortBy: 'العنوان' | 'الصعوبة' | 'المادة'
}

const difficultyOrder: Record<Difficulty, number> = {
  سهل: 1,
  متوسط: 2,
  متقدم: 3,
}

export function ExplorePage() {
  const [filters, setFilters] = useState<FilterState>({
    query: '',
    subject: 'الكل',
    level: 'الكل',
    difficulty: 'الكل',
    sortBy: 'العنوان',
  })

  const filtered = useMemo(() => {
    const normalizedQuery = filters.query.trim().toLocaleLowerCase('ar')

    return [...experiments]
      .filter((experiment) =>
        normalizedQuery
          ? `${experiment.title} ${experiment.description}`.toLocaleLowerCase('ar').includes(normalizedQuery)
          : true,
      )
      .filter((experiment) => (filters.subject === 'الكل' ? true : experiment.subject === filters.subject))
      .filter((experiment) => (filters.level === 'الكل' ? true : experiment.levels.includes(filters.level)))
      .filter((experiment) => (filters.difficulty === 'الكل' ? true : experiment.difficulty === filters.difficulty))
      .sort((first, second) => {
        if (filters.sortBy === 'المادة') {
          return first.subject.localeCompare(second.subject, 'ar')
        }

        if (filters.sortBy === 'الصعوبة') {
          return difficultyOrder[first.difficulty] - difficultyOrder[second.difficulty]
        }

        return first.title.localeCompare(second.title, 'ar')
      })
  }, [filters])

  return (
    <>
      <h2>استكشاف التجارب</h2>
      <FilterPanel filters={filters} onChange={setFilters} />
      {filtered.length === 0 ? (
        <p className="card">لا توجد نتائج مطابقة. جرّب تغيير التصفية أو إزالة جميع المرشحات.</p>
      ) : (
        <div className="cards-grid">
          {filtered.map((experiment) => (
            <ExperimentCard key={experiment.id} experiment={experiment} />
          ))}
        </div>
      )}
    </>
  )
}
