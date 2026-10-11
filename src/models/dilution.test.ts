import { describe, expect, it } from 'vitest'
import { calculateDilution } from './dilution'

describe('calculateDilution', () => {
  it('يحسب التخفيف بشكل صحيح', () => {
    const result = calculateDilution({ stockConcentration: 1, targetConcentration: 0.2, targetVolume: 250 })
    expect(result.stockVolume).toBeCloseTo(50)
    expect(result.solventVolume).toBeCloseTo(200)
  })

  it('يرفض تركيزًا نهائيًا أعلى من المخزون', () => {
    expect(() =>
      calculateDilution({ stockConcentration: 0.5, targetConcentration: 0.6, targetVolume: 100 }),
    ).toThrow()
  })
})
