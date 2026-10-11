export type Subject = 'الفيزياء' | 'الكيمياء'

export type Level = 'ابتدائي' | 'متوسط' | 'ثانوي' | 'جامعي'

export type Difficulty = 'سهل' | 'متوسط' | 'متقدم'

export type ExperimentStatus = 'مكتملة' | 'تجريبية' | 'قيد التطوير'

export interface VariableDefinition {
  key: string
  label: string
  unit: string
  min?: number
  max?: number
  step?: number
}

export interface ExperimentRecord {
  id: string
  title: string
  description: string
  subject: Subject
  levels: Level[]
  difficulty: Difficulty
  status: ExperimentStatus
  objectives: string[]
  question: string
  hypothesis: string
  variables: VariableDefinition[]
  model: {
    equations: string[]
    assumptions: string[]
    limits: string[]
  }
  misconceptions: string[]
  references: string[]
  warning?: string
}
