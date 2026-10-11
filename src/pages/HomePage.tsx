import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ExperimentCard } from '../components/ExperimentCard'
import { experiments } from '../data/experiments'

export function HomePage() {
  const [query, setQuery] = useState('')

  const featured = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('ar')

    return experiments
      .filter((experiment) =>
        !normalizedQuery
          ? true
          : `${experiment.title} ${experiment.description}`.toLocaleLowerCase('ar').includes(normalizedQuery),
      )
      .slice(0, 3)
  }, [query])

  return (
    <>
      <section className="hero card">
        <h2>منصة عربية تفاعلية للتجارب العلمية</h2>
        <p>
          مختبر يقدم تجارب محاكاة محسوبة من نماذج علمية واضحة لتعلم الفيزياء والكيمياء من المدرسة حتى الجامعة.
        </p>
        <label>
          ابحث عن تجربة
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="مثل: قانون أوم" />
        </label>
        <div className="tag-row" aria-label="المواد والمستويات">
          <span className="tag">المواد: الفيزياء، الكيمياء</span>
          <span className="tag">المستويات: ابتدائي، متوسط، ثانوي، جامعي</span>
        </div>
        <Link to="/experiments" className="button-link">
          اذهب إلى استكشاف التجارب
        </Link>
      </section>

      <section>
        <h2>تجارب مميزة</h2>
        {featured.length === 0 ? (
          <p>لا توجد نتائج مطابقة في الصفحة الرئيسية.</p>
        ) : (
          <div className="cards-grid">
            {featured.map((experiment) => (
              <ExperimentCard key={experiment.id} experiment={experiment} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
