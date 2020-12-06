import React, { useState } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
import ItemDetails from "./ItemDetails";

export default function Item({
  title,
  description,
  image,
  date,
  url,
  isDetails = false,
  ...restProps
}) {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        {!isDetails ? (
          <>
            <Button variant="info" onClick={() => setShowDetails(true)}>
              Show details
            </Button>
            <ItemDetails
              show={showDetails}
              onHide={() => setShowDetails(false)}
              itemComponent={
                <Item
                  isDetails={true}
                  title={title}
                  image={image}
                  date={date}
                  url={url}
                  description={restProps.content}
                />
              }
            />
          </>
        ) : null}
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
