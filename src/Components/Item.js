import React from "react";
import moment from "moment";
import PropTypes from "prop-types";

export default function Item({ title, text, image, date, url }) {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{moment(date).format("LLLL")}</small>
        <a target="_blank" href={url}>
          Open original news
        </a>
      </Card.Footer>
    </Card>
  );
}

Item.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string.isRequired]),
  text: PropTypes.oneOfType([PropTypes.string.isRequired]),
  image: PropTypes.oneOfType([PropTypes.string.isRequired]),
  date: PropTypes.oneOfType([PropTypes.string.isRequired]),
  url: PropTypes.oneOfType([PropTypes.string.isRequired]),
};
