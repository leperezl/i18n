import React, { useState } from "react";
import Job from "./job";
import {FormattedMessage} from 'react-intl';
import "./styles.css";

const JobsList = (props) => {
  const [offers] = useState([
    {
      id: "0001",
      name: "Manager",
      company: "Schneider Electric",
      salary: 4.5,
      city: "Bogotá, Colombia",
      date: "2019-03-26",
      view:300,
    },
    {
      id: "0002",
      name: "Software Engineer",
      company: "Google Inc.",
      salary: 2000,
      city: "Palo Alto, CA, USA",
      date: "2019-03-27",
      view:4300,
    },
    {
      id: "0003",
      name: "Nurse",
      company: "Clínica La Aurora",
      salary: 1,
      city: "Cali, Colombia",
      date: "2019-03-28",
      view:1250,
    },
  ]);
//{props.lang=="es" ? "Dark":""}
  return (
    <div>
      <table className="table">
        <thead className={props.lang==="es" ? "thead-dark":""}>
          <tr>
            <th scope="col">#</th>
            <th scope="col"><FormattedMessage id="Position"/></th>
            <th scope="col"><FormattedMessage id="Company"/></th>
            <th scope="col"><FormattedMessage id="Salary"/></th>
            <th scope="col"><FormattedMessage id="City"/></th>
            <th scope="col"><FormattedMessage id="PublicationDate"/></th>
            <th scope="col"><FormattedMessage id="Views"/></th>
          </tr>
        </thead>
        <tbody>
          {console.log("Offers", offers)}
          {offers.map((e, i) => (
            <Job key={i} offer={e} lang={props.lang} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
