import { getModule } from 'nuxt-property-decorator'
import Users from '~/store/users'

// eslint-disable-next-line import/no-mutable-exports
let users = null

function initialiseStores(store: any) {
  users = getModule(Users, store)
}

export { initialiseStores, users }
