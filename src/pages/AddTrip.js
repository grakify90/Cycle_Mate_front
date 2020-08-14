import React, { useState, useEffect } from "react";
import { addTrip } from "../store/trips/actions";
import { selectToken } from "../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function AddTrip() {
  const [trip, setTrip] = useState({
    title: "",
    locationCity: "",
    locationProvince: "",
    date: "",
    startingTime: "",
    lengthKM: "",
    numPeopleAllowed: "",
    typeBike: "",
    tempo: "",
    description: "",
  });
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const history = useHistory();

  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, [dispatch, token, history]);

  function submitForm(event) {
    event.preventDefault();
    dispatch(
      addTrip({
        title: trip.title,
        locationCity: trip.locationCity,
        locationProvince: trip.locationProvince,
        date: trip.date,
        lengthKM: trip.lengthKM,
        numPeopleAllowed: trip.numPeopleAllowed,
        typeBike: trip.typeBike,
        description: trip.description,
        tempo: trip.tempo,
        startingTime: trip.startingTime,
      })
    );

    history.push("/");
    // setTrip({
    //   title: "",
    //   locationCity: "",
    //   locationProvince: "",
    //   description: "",
    //   date: "",
    //   startingTime: "",
    //   lengthKM: 0,
    //   numPeopleAllowed: 0,
    //   typeBike: "",
    //   tempo: "",
    // });
  }

  return (
    <div>
      <form>
        <h1>Organize a trip!</h1>
        <div className="formContainer">
          <div className="formItemContainer">
            <label className="logtripBar">Title</label>
            <input
              value={trip.title}
              onChange={(event) =>
                setTrip({ ...trip, title: event.target.value })
              }
              type="text"
              placeholder="Title"
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Location city</label>
            <input
              value={trip.locationCity}
              onChange={(event) =>
                setTrip({ ...trip, locationCity: event.target.value })
              }
              type="text"
              placeholder="Enter..."
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Location province</label>
            <select
              value={trip.locationProvince}
              onChange={(event) =>
                setTrip({ ...trip, locationProvince: event.target.value })
              }
              required
            >
              <option value="Select...">Select...</option>
              <option value="Zuid-Holland">Zuid-Holland</option>
              <option value="Noord-Holland">Noord-Holland</option>
              <option value="Noord-Brabant">Noord-Brabant</option>
              <option value="Gelderland">Gelderland</option>
              <option value="Utrecht">Utrecht</option>
              <option value="Overijssel">Overijssel</option>
              <option value="Limburg">Limburg</option>
              <option value="Friesland">Friesland</option>
              <option value="Groningen">Groningen</option>
              <option value="Drenthe">Drenthe</option>
              <option value="Flevoland">Flevoland</option>
              <option value="Zeeland">Zeeland</option>
            </select>
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Date</label>
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              value={trip.date}
              onChange={(event) =>
                setTrip({ ...trip, date: event.target.value })
              }
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Starting time</label>
            <input
              value={trip.startingTime}
              onChange={(event) =>
                setTrip({ ...trip, startingTime: event.target.value })
              }
              type="time"
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Length (in KM)</label>
            <input
              value={trip.lengthKM}
              onChange={(event) =>
                setTrip({ ...trip, lengthKM: parseInt(event.target.value) })
              }
              type="number"
              placeholder="Enter..."
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Participants</label>
            <input
              value={trip.numPeopleAllowed}
              onChange={(event) =>
                setTrip({
                  ...trip,
                  numPeopleAllowed: parseInt(event.target.value),
                })
              }
              type="number"
              placeholder="Enter..."
              min="2"
              required
            />
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Type of bike</label>
            <select
              value={trip.typeBike}
              onChange={(event) =>
                setTrip({ ...trip, typeBike: event.target.value })
              }
              required
            >
              <option value="Select...">Select...</option>
              <option value="Road bike">Road bike</option>
              <option value="Mountainbike">Mountainbike</option>
              <option value="Touring">Touring</option>
            </select>
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Tempo</label>
            <select
              value={trip.tempo}
              onChange={(event) =>
                setTrip({ ...trip, tempo: event.target.value })
              }
              required
            >
              <option value="Select...">Select...</option>
              <option value="Relaxed">Relaxed</option>
              <option value="Medium">Medium</option>
              <option value="Athletic">Athletic</option>
            </select>
          </div>
          <div className="formItemContainer">
            <label className="logtripBar">Description</label>
            <textarea
              value={trip.description}
              onChange={(event) =>
                setTrip({ ...trip, description: event.target.value })
              }
              placeholder="Enter..."
              required
            />
          </div>
        </div>

        <div>
          <button onClick={submitForm}>Submit</button>
        </div>
      </form>
    </div>
  );
}
