import { getModule } from 'nuxt-property-decorator'
import Users from '~/store/users'
import General from '~/store/general'
import Counting from '~/store/counting'

// eslint-disable-next-line import/no-mutable-exports
let users = null
// eslint-disable-next-line import/no-mutable-exports
let general = null
// eslint-disable-next-line import/no-mutable-exports
let counting = null

function initialiseStores(store: any) {
    users = getModule(Users, store)
    general = getModule(General, store)
    counting = getModule(Counting, store)
}

export { initialiseStores, users, general, counting }
