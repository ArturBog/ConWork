class TripView {
    constructor() {
        this.tripForm = document.getElementById('trip-form');
        this.tripList = document.getElementById('trip-list');
        this.dateFilter = document.getElementById('date-filter');
        this.completedFilter = document.getElementById('completed-filter');
    }

    bindAddTrip(handler) {
        this.tripForm.addEventListener('submit', event => {
            event.preventDefault();
            
            const destination = document.getElementById('trip-destination').value;
            const date = document.getElementById('trip-date').value;
            const notes = document.getElementById('trip-notes').value;
            const status = document.querySelector('input[name="trip-status"]:checked').value;
            
            handler({ destination, date, notes, status });
            
            this.tripForm.reset();
        });
    }

    bindFilterTrips(handler) {
        this.dateFilter.addEventListener('change', () => {
            const date = this.dateFilter.value;
            const completedOnly = this.completedFilter.checked;
            handler({ date, completedOnly });
        });
        
        this.completedFilter.addEventListener('change', () => {
            const date = this.dateFilter.value;
            const completedOnly = this.completedFilter.checked;
            handler({ date, completedOnly });
        });
    }

    displayTrips(trips) {
        this.tripList.innerHTML = '';
        
        if (trips.length === 0) {
            this.tripList.innerHTML = '<li class="no-trips">Нет запланированных поездок</li>';
            return;
        }
        
        trips.forEach(trip => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="trip-card">
                    <h3>${trip.destination}</h3>
                    <p class="trip-date">📅 ${new Date(trip.date).toLocaleDateString('ru-RU')}</p>
                    ${trip.notes ? `<p class="trip-notes">📝 ${trip.notes}</p>` : ''}
                    <span class="trip-status ${trip.status.toLowerCase()}">
                        ${trip.status === 'Completed' ? '✅ Завершено' : '🟢 Запланировано'}
                    </span>
                </div>
            `;
            this.tripList.appendChild(li);
        });
    }
}