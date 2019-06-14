import React from "react";
// import SaveBtn from "../components/SaveBtn";
// import DeleteBtn from "../components/DeleteBtn";
// import Thumbnail from "../Thumbnail";
// import { Container, Row, Col } from "../components/Grid";
import "./style.css";

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}

// export function ListItem({
//   // thumbnail = "https://placehold.it/300x300",
//   title,
//   author,
//   synopsis,
//   href
// }) {
//   return (
//     <li className="list-group-item">
//       {/* <Container> */}
//         {/* <Row> */}
//           {/* <Col size="xs-4 sm-2"> */}
//             {/* <Thumbnail src={thumbnail} /> */}
//           {/* </Col> */}
//           {/* <Col size="xs-8 sm-9"> */}
//             <h3>{title} by {author}</h3>
//             <p>Synopsis: {synopsis}</p>
//             <a rel="noreferrer noopener" target="_blank" href={href}>
//               Go to book!
//             </a>
//           {/* </Col> */}
//         {/* </Row> */}
//       {/* </Container> */}
//     </li>
//   );
// }
