import { initialiseStores } from '~/utils/store-accessor'
const initializer = (store: any) => initialiseStores(store)
export const plugins = [initializer]
export * from '~/utils/store-accessor'
