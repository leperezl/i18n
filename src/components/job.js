import React from "react";
import {FormattedDate} from 'react-intl';
import {FormattedNumber} from 'react-intl';

const Job = (props) => {
  // {props.lang==="es" ? props.offer.salary===1 ? " Millón":" Millones":" Million"}
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td><FormattedNumber value={props.offer.salary} />  
      {props.lang==="es" ? 
            props.offer.salary===1 ? " Millón":" Millones"
          :" Million"}</td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td><FormattedNumber value={props.offer.view} /> </td>
    </tr>
  );
};

export default Job;
