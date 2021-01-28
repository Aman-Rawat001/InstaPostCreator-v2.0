import React, { useState } from "react";
import RightBox from "./RightBox";

const EditDesigns = () => {
  const [details, setDetails] = useState({
    name: "",
    Ename: "",
    Etime: "",
    desc: ""
  });

  const InputEvent = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setDetails((preValue) => {
      if (name === "name") {
        return {
          name: value,
          Ename: preValue.Ename,
          Etime: preValue.Etime,
          desc: preValue.desc
        };
      } else if (name === "event_name") {
        return {
          name: preValue.name,
          Ename: value,
          Etime: preValue.Etime,
          desc: preValue.desc
        };
      } else if (name === "event_time") {
        return {
          name: preValue.name,
          Ename: preValue.Ename,
          Etime: value,
          desc: preValue.desc
        };
      } else if (name === "event_desc") {
        return {
          name: preValue.name,
          Ename: preValue.Ename,
          Etime: preValue.Etime,
          desc: value
        };
      }
    });
  };

  // onclick event
  const onsubmitForm = () => {
    document.getElementById("myInput1").value = "";
    document.getElementById("myInput2").value = "";
    document.getElementById("myInput3").value = "";
    document.getElementById("myInput4").value = "";
  };

  return (
    <>
      <div class="left">
        <div class="centered">
          <div className="dialog_box">
            <h1 id="dialog-heading">
              Host a <span class="dialog-span1">Zo World</span> Event!
            </h1>
            <p>
              So, tell <span class="dialog-span1">{details.name}</span>! What
              event would you
            </p>
            <p>
              like to host on <span id="dialog-span2">Zo World?</span>
            </p>
          </div>

          <div id="myForm" className="dialog-form" type="submit">
            <input
              id="myInput1"
              onChange={InputEvent}
              type="text"
              placeholder="Enter Your Name"
              name="name"
              value={details.name}
            />
            <input
              id="myInput2"
              onChange={InputEvent}
              type="text"
              placeholder="Name of the event"
              name="event_name"
              value={details.Ename}
            />
            <input
              id="myInput3"
              onChange={InputEvent}
              type="text"
              placeholder="Event start time"
              name="event_time"
              value={details.Etime}
            />
            <input
              id="myInput4"
              onChange={InputEvent}
              type="text"
              placeholder="Description"
              name="event_desc"
              value={details.desc}
            />
            <button onClick={onsubmitForm}>Submit</button>
          </div>
        </div>
      </div>

      {/* .........Right Box......... */}

      <div class="split right">
        <div class="centered">
          <RightBox />
        </div>
        <div className="event_details">
          <h2> {details.name} </h2>
          <p>{details.Ename} </p>
          <p> {details.Etime} </p>
          <p> {details.desc} </p>
        </div>
      </div>
    </>
  );
};

export default EditDesigns;
