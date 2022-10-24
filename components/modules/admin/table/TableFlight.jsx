import { useEffect, useState } from "react";
import axios from "axios";
import ModalCreateFlight from "../modal/CreateModalFlight";
import ModalEditFlight from "../modal/ModalEditFlight";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

export default function TableBooking() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);
  const token = Cookies.get("token");
  console.log(token);
  const getUsers = async () => {
    const response = await axios.get(
      "https://uticket-v2-be.vercel.app/api/v1/flight"
    );
    setUser(response.data.data);
  };

  const deleteProduct = async (id) => {
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
          .delete(`https://uticket-v2-be.vercel.app/api/v1/flight/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            getUsers();
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
  console.log(users);
  return (
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Flight List</h1>
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
                  <ModalCreateFlight getUsers={getUsers} />
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <table
                    id="example2"
                    className="table table-bordered table-hover"
                  >
                    <thead>
                      <tr>
                        <th>No</th>
                        <th>Airline Name</th>
                        <th>Depature City</th>
                        <th>Depature Country</th>
                        <th>Arrive City</th>
                        <th>Arive Country</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => (
                        <tr key={user.id}>
                          <td>{index + 1}</td>
                          <td>{user.airlines_name}</td>
                          <td>{user.airport_depature_city}</td>
                          <td>{user.airport_depature_country}</td>
                          <td>{user.airport_arrive_city}</td>
                          <td>{user.airport_arrive_country}</td>
                          <td>
                            <ModalEditFlight
                              getUsers={getUsers}
                              flightID={user.id}
                            />
                            <button
                              className="btn btn-danger ms-2"
                              onClick={() => deleteProduct(user.id)}
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
