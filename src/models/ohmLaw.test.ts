import { describe, expect, it } from 'vitest'
import { calculateOhmLaw } from './ohmLaw'

describe('calculateOhmLaw', () => {
  it('يعطي القيم الصحيحة للحالة الأولى', () => {
    const result = calculateOhmLaw({ voltage: 6, resistance: 10 })
    expect(result.current).toBeCloseTo(0.6)
    expect(result.power).toBeCloseTo(3.6)
  })

  it('يعطي القيم الصحيحة للحالة الثانية', () => {
    const result = calculateOhmLaw({ voltage: 12, resistance: 10 })
    expect(result.current).toBeCloseTo(1.2)
    expect(result.power).toBeCloseTo(14.4)
  })

  it('يعطي القيم الصحيحة للحالة الثالثة', () => {
    const result = calculateOhmLaw({ voltage: 6, resistance: 20 })
    expect(result.current).toBeCloseTo(0.3)
    expect(result.power).toBeCloseTo(1.8)
  })

  it('يرفض المقاومة الصفرية', () => {
    expect(() => calculateOhmLaw({ voltage: 5, resistance: 0 })).toThrow()
  })
})
