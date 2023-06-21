const React = require('react');
const { useEffect, useState } = require('react');
const API_BASE_URL = 'http://localhost:3000';

function App() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    // Fetch train data from backend server
    axios.get(`${API_BASE_URL}/trains`)
      .then(response => {
        setTrains(response.data);
      })
      .catch(error => {
        console.error('Error fetching train data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Train Schedules</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure Time</th>
            <th>Delay (minutes)</th>
            <th>Seat Availability</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {trains.map(train => (
            <tr key={train.trainNumber}>
              <td>{train.trainNumber}</td>
              <td>{train.departureTime}</td>
              <td>{train.delay}</td>
              <td>{train.seatAvailability}</td>
              <td>{train.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
