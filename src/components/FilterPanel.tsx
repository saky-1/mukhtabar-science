import type { Difficulty, Level, Subject } from '../types'

interface FilterState {
  query: string
  subject: Subject | 'الكل'
  level: Level | 'الكل'
  difficulty: Difficulty | 'الكل'
  sortBy: 'العنوان' | 'الصعوبة' | 'المادة'
}

interface FilterPanelProps {
  filters: FilterState
  onChange: (next: FilterState) => void
}

export function FilterPanel({ filters, onChange }: FilterPanelProps) {
  return (
    <section className="filter-panel" aria-label="خيارات التصفية">
      <label>
        البحث
        <input
          value={filters.query}
          onChange={(event) => onChange({ ...filters, query: event.target.value })}
          placeholder="ابحث باسم التجربة أو وصفها"
        />
      </label>
      <label>
        المادة
        <select
          value={filters.subject}
          onChange={(event) => onChange({ ...filters, subject: event.target.value as FilterState['subject'] })}
        >
          <option value="الكل">الكل</option>
          <option value="الفيزياء">الفيزياء</option>
          <option value="الكيمياء">الكيمياء</option>
        </select>
      </label>
      <label>
        المستوى
        <select
          value={filters.level}
          onChange={(event) => onChange({ ...filters, level: event.target.value as FilterState['level'] })}
        >
          <option value="الكل">الكل</option>
          <option value="ابتدائي">ابتدائي</option>
          <option value="متوسط">متوسط</option>
          <option value="ثانوي">ثانوي</option>
          <option value="جامعي">جامعي</option>
        </select>
      </label>
      <label>
        الصعوبة
        <select
          value={filters.difficulty}
          onChange={(event) => onChange({ ...filters, difficulty: event.target.value as FilterState['difficulty'] })}
        >
          <option value="الكل">الكل</option>
          <option value="سهل">سهل</option>
          <option value="متوسط">متوسط</option>
          <option value="متقدم">متقدم</option>
        </select>
      </label>
      <label>
        الترتيب
        <select
          value={filters.sortBy}
          onChange={(event) => onChange({ ...filters, sortBy: event.target.value as FilterState['sortBy'] })}
        >
          <option value="العنوان">العنوان</option>
          <option value="الصعوبة">الصعوبة</option>
          <option value="المادة">المادة</option>
        </select>
      </label>
      <button
        type="button"
        className="button-link button-reset"
        onClick={() =>
          onChange({
            query: '',
            subject: 'الكل',
            level: 'الكل',
            difficulty: 'الكل',
            sortBy: 'العنوان',
          })
        }
      >
        إزالة التصفية
      </button>
    </section>
  )
}
