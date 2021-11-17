// import { mutations, actions } from '../store/users'
import { createStore } from '~/.nuxt/store'
import { initialiseStores, counting } from '~/utils/store-accessor'

// Nuxt, class based components, decorators, and jest testing vuex with store-accessor
// Helpful to see how to use the initialiseStores and test mutations and actions
// https://qiita.com/azukiazusa/items/8a158913c870bc0c8ba9

describe('mutations', () => {
    beforeEach(() => {
        initialiseStores(createStore())
    })

    it('SETINCREMENT', () => {
        counting.setIncrement(counting.state)
        // assert result
        expect(counting.count).toBe(1)
    })

    it('SETINCREMENTWITHVALUE', () => {
        counting.setIncrementWithValue(10)
        // assert result
        expect(counting.count).toBe(10)
    })

    it('SETDECREMENT', () => {
        counting.setDecrement(counting.state)
        // assert result
        expect(counting.count).toBe(0)
    })

    it('SETDECREMENTWITHVALUE', () => {
        counting.setDecrementWithValue(10)
        // assert result
        expect(counting.count).toBe(0)
    })
})

describe('actions', () => {
    beforeEach(() => {
        initialiseStores(createStore())
    })

    it('INCREMENT', async () => {
        await counting.increment()
        // assert result
        expect(counting.count).toBe(1)
    })

    it('INCREMENTWITHVALUE', async () => {
        await counting.incrementWithValue(10)
        // assert result
        expect(counting.count).toBe(10)
    })

    it('DECREMENT', async () => {
        await counting.decrement()
        // assert result
        expect(counting.count).toBe(0)
    })

    it('DECREMENTWITHVALUE', async () => {
        await counting.decrementWithValue(10)
        // assert result
        expect(counting.count).toBe(0)
    })
})
