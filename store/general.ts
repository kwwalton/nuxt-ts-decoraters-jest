import { Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({
    name: 'general',
    stateFactory: true,
    namespaced: true
})
export default class General extends VuexModule {
    public windowWidth = 0

    get isDesktop(): boolean {
        return this.windowWidth > 600
    }

    @Mutation
    setWidth(payload: number) {
        this.windowWidth = payload
    }
}
