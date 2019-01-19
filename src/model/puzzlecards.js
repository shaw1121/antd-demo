
// this is a basic dva model
export default {
    namespace: 'puzzlecards',
    state: {
        data: [
        {
            id: 1,
            setup: 'can you hear me?',
            punchline: 'yes'
        },
        {
            id: 2,
            setup: 'dinner already?',
            punchline: 'no'
        },
        ],
        counter: 100,
    },

    // 响应 action 并修改 state
    reducers: {
        addNewCard(state, { payload: newCard }) {
            const nextCounter = state.counter++;
            const newCardWithId = {...newCard, id: nextCounter};
            const nextData = state.data.concat(newCardWithId);
            return {
                data: nextData,
                counter: nextCounter
            }
        }
    }
}