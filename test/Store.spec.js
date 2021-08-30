// import { mutations, actions } from '../store/users'
import { createStore } from '~/.nuxt/store'
import { initialiseStores, users } from '~/utils/store-accessor'

// Nuxt, class based components, decorators, and jest testing vuex with store-accessor
// Helpful to see how to use the initialiseStores and test mutations and actions
// https://qiita.com/azukiazusa/items/8a158913c870bc0c8ba9

describe('mutations', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })

  it('SETINCREMENT', () => {
    users.setIncrement(users.state)
    // assert result
    expect(users.count).toBe(1)
  })
})

describe('actions', () => {
  beforeEach(() => {
    initialiseStores(createStore())
  })

  it('INCREMENT', async () => {
    await users.increment()
    // assert result
    expect(users.count).toBe(1)
  })
})
