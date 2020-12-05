import React from "react";
import { CardDeck, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { chunkArrayInGroups } from "../Helpers/Functions";
import Loader from "./Loader";

export default function List({ ItemComponent, data = false }) {
  if (data === false) return <Loader />;
  return (
    <>
      <CardDeck>
        {data.length === 0
          ? "No data available now :("
          : chunkArrayInGroups(data, 3).map((line, indexLine) => (
              <Row key={indexLine} className="mt-4">
                {line.map((item, indexItem) => (
                  <ItemComponent key={indexItem} {...item} />
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
  ItemComponent: PropTypes.oneOfType([PropTypes.any.isRequired]),
};
