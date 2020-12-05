import React from "react";
import { CardDeck, Card, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { chunkArrayInGroups } from "../Helpers/Functions";
import Loader from "./Loader";

export default function List({ itemComponent, data = false }) {
  if (data === false) return <Loader />;
  return (
    <>
      <CardDeck>
        {data.length === 0
          ? "No news available now :("
          : chunkArrayInGroups(data, 3).map((line, indexLine) => (
              <Row key={indexLine}>
                {line.map((news, indexNews) => (
                  <itemComponent key={indexNews} {...news} />
                ))}
              </Row>
            ))}
      </CardDeck>
    </>
  );
}

List.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.array.isRequired,
    PropTypes.bool.isRequired,
  ]),
  itemComponent: PropTypes.oneOfType([PropTypes.any.isRequired]),
};
