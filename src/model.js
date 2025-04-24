class TripModel {
    constructor() {
        this.trips = [...mockTrips];
    }

    getTrips(filter = {}) {
        let filteredTrips = [...this.trips];

        if (filter.date) {
            filteredTrips = filteredTrips.filter(trip => trip.date === filter.date);
        }

        if (filter.completedOnly) {
            filteredTrips = filteredTrips.filter(trip => trip.status === "Completed");
        }

        return filteredTrips;
    }

    addTrip(trip) {
        const newTrip = {
            id: Date.now(),
            ...trip
        };
        this.trips.push(newTrip);
        return newTrip;
    }
}