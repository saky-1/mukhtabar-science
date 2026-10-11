import { describe, expect, it } from 'vitest'
import { calculateSeriesParallel } from './seriesParallel'

describe('calculateSeriesParallel', () => {
  it('يحسب التوالي بشكل صحيح', () => {
    const result = calculateSeriesParallel({ voltage: 12, r1: 10, r2: 20, mode: 'series' })
    expect(result.equivalentResistance).toBeCloseTo(30)
    expect(result.totalCurrent).toBeCloseTo(0.4)
  })

  it('يحسب التوازي بشكل صحيح', () => {
    const result = calculateSeriesParallel({ voltage: 12, r1: 10, r2: 20, mode: 'parallel' })
    expect(result.equivalentResistance).toBeCloseTo(6.6667, 3)
    expect(result.totalCurrent).toBeCloseTo(1.8)
  })
})
