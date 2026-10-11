import { describe, expect, it } from 'vitest'
import { calculateFreeFall } from './freeFall'

describe('calculateFreeFall', () => {
  it('يعطي زمنًا وسرعة نهائية موجبين', () => {
    const result = calculateFreeFall({ height: 20, gravity: 9.81 })
    expect(result.totalTime).toBeGreaterThan(0)
    expect(result.finalVelocity).toBeGreaterThan(0)
    expect(result.points).toHaveLength(7)
  })
})
