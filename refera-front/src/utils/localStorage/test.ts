/**
 * @jest-environment jsdom
 */
import { getStorageItem, setStorageItem } from '.'

describe('getStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should return the item from localStorage', () => {
    window.localStorage.setItem('REFERA_TEST', JSON.stringify(['1', '2']))

    expect(getStorageItem('TEST')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItem()', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })
  it('should add the item to localStorage', () => {
    setStorageItem('TEST', ['1', '2'])

    expect(window.localStorage.getItem('REFERA_TEST')).toStrictEqual(
      JSON.stringify(['1', '2'])
    )
  })
})
