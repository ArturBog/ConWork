class TripPresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.view.bindAddTrip(this.handleAddTrip.bind(this));
        this.view.bindFilterTrips(this.handleFilterTrips.bind(this));
        
        this.displayTrips();
    }
    
    displayTrips(filter = {}) {
        const trips = this.model.getTrips(filter);
        this.view.displayTrips(trips);
    }
    
    handleAddTrip(trip) {
        this.model.addTrip(trip);
        this.displayTrips();
    }
    
    handleFilterTrips(filter) {
        this.displayTrips(filter);
    }
}