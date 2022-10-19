import { useEffect, useState } from "react";
import axios from "axios";
// import Link from "next/link";
import Cookies from "js-cookie";
import ModalEditBooking from "./UpdateModalBooking";
import Swal from "sweetalert2";

export default function TableBooking() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const token = Cookies.get("token");
  console.log(token);

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

  const deleteProduct = async (id) => {
    const ID = users[id].id;

    Swal.fire({
      title: "Sure to Delete This Product?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`https://uticket-v2-be.vercel.app/api/v1/booking/${ID}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            fetch();
            Swal.fire("Deleted!", "Product Delete Success!", "success");
            console.log(res);
          })
          .catch((err) => {
            Swal.fire("Failed!", "Product Delete Failed!", "error");
            console.log(err);
          });
      }
    });
  };
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Airline List</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">DataTables</li>
              </ol>
            </div>
          </div>
        </div>
        {/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header d-flex justify-content-end">
                  <button className="btn btn-success ">Create</button>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>Airline Name</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={user.id}>
                          <td>{user.airlines_name}</td>
                          <td>{user.booking_fullname}</td>
                          <td>{user.booking_email}</td>
                          <td>{user.booking_phone}</td>
                          <td>{user.users_country}</td>
                          <td>
                            <ModalEditBooking />
                            <button
                              className="btn btn-danger"
                              onClick={() => deleteProduct(index)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
