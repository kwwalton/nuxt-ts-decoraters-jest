import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators'

@Module({
    name: 'counting',
    stateFactory: true,
    namespaced: true
})
export default class Counting extends VuexModule {
    public count = 0

    @Mutation
    setIncrement() {
        this.count++
    }

    @Mutation
    setIncrementWithValue(value: number) {
        this.count += value
    }

    @Mutation
    setDecrement() {
        if (this.count >= 1) this.count--
    }

    @Mutation
    setDecrementWithValue(value: number) {
        if (this.count > value) this.count -= value
        else this.count = 0
    }

    @Action
    increment() {
        this.context.commit('setIncrement')
    }

    @Action
    incrementWithValue(value: number) {
        this.context.commit('setIncrementWithValue', value)
    }

    @Action({ commit: 'setDecrement' })
    async decrement() {
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve(null)
            }, 1000)
        })
    }

    @Action
    decrementWithValue(value: number) {
        this.context.commit('setDecrementWithValue', value)
    }
}
