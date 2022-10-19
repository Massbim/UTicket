import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

function ModalEditBooking({
  airlines_name,
  booking_fullname,
  booking_email,
  booking_phone,
  users_country,
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [users, setUser] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(
      "https://uticket-v2-be.vercel.app/api/v1/booking",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setUser(response.data.data);
  };
  console.log(users);

  const getID = (id) => {
    const ID = users[id].id;
    console.log(ID);
  };

  const [data, setData] = useState({
    airlines_name,
    booking_fullname,
    booking_email,
    booking_phone,
    users_country,
  });

  console.log(data);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  const token = Cookies.get("token");

  const handleCreate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("airlines_name", data.airlines_name);
    formData.append("booking_fullname", data.booking_fullname);
    formData.append("booking_email", data.booking_email);
    formData.append("booking_phone", data.booking_phone);
    formData.append("users_country", data.users_country);
    const token = Cookies.get("token");
    axios
      .put(
        `https://uticket-v2-be.vercel.app/api/v1/booking/da81f3e1-7fda-4906-bc3d-bd6b7c739382`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        Swal.fire("Updated!", "Product Update Succes!", "success");
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire("Failed!", "Product Update Failed!", "error");
        setShow(false);
      });
  };

  return (
    <>
      <button
        className="btn btn-warning"
        style={{ marginRight: "10px" }}
        onClick={handleShow}
      >
        Edit
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Airline</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleCreate}>
          <Modal.Body>
            <input
              className="form-control mt-3"
              type="text"
              placeholder="airline name"
              name="airlines_name"
              value={data.airlines_name}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="username"
              name="booking_fullname"
              value={data.booking_fullname}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="email"
              name="booking_email"
              value={data.booking_email}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="phone"
              name="booking_phone"
              value={data.booking_phone}
              onChange={handleChange}
            />
            <input
              className="form-control mt-3"
              type="text"
              placeholder="country"
              name="users_country"
              value={data.users_country}
              onChange={handleChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button type="submit" className="btn btn-primary">
              Edit
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default ModalEditBooking;
