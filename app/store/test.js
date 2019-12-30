
const state = {
    count: 10
};

const mutations = {
    changeCount(state, count) {
        state.count = count
    },
    increment: state => state.count++,
    decrement: state => state.count--
}

const actions = {

}

const getters = {
    
}

export default {
    state,
    mutations,
    actions,
    getters
};
