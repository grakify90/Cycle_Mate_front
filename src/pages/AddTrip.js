import React, { useState, useEffect } from "react";
import { TitleBlock } from "../styles/TitleBlock";
import { Button } from "../styles/Button";
import { FormContainer } from "../styles/FormContainer";
import { InnerFormContainer } from "../styles/InnerFormContainer";
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
        <FormContainer>
          <InnerFormContainer>
            <TitleBlock>Title</TitleBlock>
            <input
              value={trip.title}
              onChange={(event) =>
                setTrip({ ...trip, title: event.target.value })
              }
              type="text"
              placeholder="Title"
              required
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Location city</TitleBlock>
            <input
              value={trip.locationCity}
              onChange={(event) =>
                setTrip({ ...trip, locationCity: event.target.value })
              }
              type="text"
              placeholder="Enter..."
              required
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Location province</TitleBlock>
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
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Date</TitleBlock>
            <input
              type="date"
              placeholder="dd-mm-yyyy"
              value={trip.date}
              onChange={(event) =>
                setTrip({ ...trip, date: event.target.value })
              }
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Starting time</TitleBlock>
            <input
              value={trip.startingTime}
              onChange={(event) =>
                setTrip({ ...trip, startingTime: event.target.value })
              }
              type="time"
              required
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Length (in KM)</TitleBlock>
            <input
              value={trip.lengthKM}
              onChange={(event) =>
                setTrip({ ...trip, lengthKM: parseInt(event.target.value) })
              }
              type="number"
              placeholder="Enter..."
              required
            />
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Participants</TitleBlock>
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
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Type of bike</TitleBlock>
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
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Tempo</TitleBlock>
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
          </InnerFormContainer>
          <InnerFormContainer>
            <TitleBlock>Description</TitleBlock>
            <textarea
              value={trip.description}
              onChange={(event) =>
                setTrip({ ...trip, description: event.target.value })
              }
              placeholder="Enter..."
              required
            />
          </InnerFormContainer>
        </FormContainer>

        <div>
          <Button onClick={submitForm}>Submit</Button>
        </div>
      </form>
    </div>
  );
}
