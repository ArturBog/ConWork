document.addEventListener('DOMContentLoaded', () => {
    const model = new TripModel();
    const view = new TripView();
    new TripPresenter(model, view);
});