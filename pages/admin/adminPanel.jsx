import React, { useEffect, useState } from "react";
import axios from "axios";
// import Link from "next/link";
import ModalCreate from "../../components/modules/admin/CreateModal";
import ModalEdit from "../../components/modules/admin/UpdateModal";
import Swal from "sweetalert2";

export default function adminPanel() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(
      "https://uticket-be.vercel.app/api/v1/airlines"
    );
    setUser(response.data.data);
  };
  const deleteProduct = async () => {
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
          .delete(`https://uticket-v2-be.vercel.app/api/v1/airlines`)
          .then(() => {
            fetch();
            // dispatch(deleteProduct(res));
            // navigate('/product')
            Swal.fire("Deleted!", "Product Delete Success!", "success");
            // console.log(res);
            // setShow(false);
          })
          .catch(() => {
            Swal.fire("Failed!", "Product Delete Failed!", "error");
            // setShow(false);
          });
      }
    });
  };
  console.log(users);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    <span
                      data-feather="home"
                      className="align-text-bottom"
                    ></span>
                    Airlines
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <span
                      data-feather="file"
                      className="align-text-bottom"
                    ></span>
                    Tickets
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0">
                <div className="btn-group me-2">
                  <ModalCreate />
                </div>
              </div>
            </div>

            <h2>Airline List</h2>

            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Website</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.description}</td>
                      <td>{user.support}</td>
                      <td>
                        <ModalEdit />
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
          </main>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
