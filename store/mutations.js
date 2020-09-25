export default {
    openModal(state, activeContent) {
        state.currentActiveContent = activeContent;
        state.isModalActive = true;
    },
    closeModal(state) {
        state.isModalActive = false;
    }
}