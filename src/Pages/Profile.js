import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { saveUser } from "../Store/Actions/userActions";
import { NotificationManager } from "react-notifications";

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [form, setForm] = useState({
    username: {
      value: user ? user.username : "",
      touched: false,
      error: user ? false : true,
    },
    customNewsKeyword: {
      value: user ? user.customNewsKeyword : "",
      touched: false,
      error: user ? false : true,
      values: ["bitcoin", "Apple", "earthquake", "animal"],
    },
  });

  const handleChange = (field, value) => {
    const newForm = { ...form };
    newForm[field].value = value;
    newForm[field].error = false;
    newForm[field].touched = true;
    if (value === "") newForm[field].error = true;
    setForm(newForm);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      form.username.error === false &&
      form.customNewsKeyword.error === false
    ) {
      dispatch(
        saveUser({
          username: form.username.value,
          customNewsKeyword: form.customNewsKeyword.value,
        })
      );
      NotificationManager.success(
        "User saved",
        "Your data is saved with success."
      );
    } else {
      NotificationManager.error("Error form", "You should fill all fields.");
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          value={form.username.value}
          placeholder="Enter username"
          onChange={(e) => {
            handleChange("username", e.target.value);
          }}
        />
        {form.username.error && form.username.touched ? (
          <Form.Text className="text-danger">This field is required</Form.Text>
        ) : null}
      </Form.Group>
      <Form.Group controlId="formKeyword">
        <Form.Label>Custom news keyword</Form.Label>
        <Form.Control
          as="select"
          value={form.customNewsKeyword.value}
          onChange={(e) => {
            handleChange("customNewsKeyword", e.target.value);
          }}
        >
          <option></option>
          {form.customNewsKeyword.values.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Form.Control>
        {form.customNewsKeyword.error && form.customNewsKeyword.touched ? (
          <Form.Text className="text-danger">This field is required</Form.Text>
        ) : null}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
