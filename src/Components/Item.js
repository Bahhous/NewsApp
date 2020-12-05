import React from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

export default function Item({ title, description, image, date, url }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{moment(date).format("LLLL")}</small>
        <div>
          <a target="_blank" href={url}>
            Open original news
          </a>
        </div>
      </Card.Footer>
    </Card>
  );
}

Item.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string.isRequired]),
  description: PropTypes.oneOfType([PropTypes.string.isRequired]),
  image: PropTypes.oneOfType([PropTypes.string.isRequired]),
  date: PropTypes.oneOfType([PropTypes.string.isRequired]),
  url: PropTypes.oneOfType([PropTypes.string.isRequired]),
};
