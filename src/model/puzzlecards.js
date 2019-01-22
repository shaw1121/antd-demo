
import request from '../util/request';
import { Promise } from 'q';

const delay = (millisecond) => {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecond);
    })
}

const getRandomPuzzle = () => {
    
    return request('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke')
}

// this is a basic dva model
// export default {
//     namespace: 'puzzlecards',
//     state: {
//         data: [
//         {
//             id: 1,
//             setup: 'can you hear me?',
//             punchline: 'yes'
//         },
//         {
//             id: 2,
//             setup: 'dinner already?',
//             punchline: 'no'
//         },
//         ],
//         counter: 100,
//     },

//     effects: {

//     },

//     // 响应 action 并修改 state
//     reducers: {
//         addNewCard(state, { payload: newCard }) {
//             const nextCounter = state.counter++;
//             const newCardWithId = {...newCard, id: nextCounter};
//             const nextData = state.data.concat(newCardWithId);
//             return {
//                 data: nextData,
//                 counter: nextCounter
//             }
//         }
//     }
// }

// this is fetching data from server(with effects)
export default {
    namespace: 'puzzlecards',
    state: {
        data: [],
        counter: 0
    },
    effects: {
        *queryInitCards(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
            
            const puzzle = yield call(getRandomPuzzle); // 获取服务端数据
            yield put({type: 'addNewCard', payload: puzzle}); // 添加一个卡片数据。这个会触发 reducer的执行。于是会看到视图上添加了一个新卡片。

            yield call(delay, 3000); // 暂停3秒

            const puzzle2 = yield call(getRandomPuzzle);
            yield put({ type: 'addNewCard', payload: puzzle2});

        }
    },
    
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