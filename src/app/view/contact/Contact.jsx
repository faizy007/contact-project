import React, { useState, useEffect } from "react";
import ContactDialog from "./ContactDialog";
import { useSelector } from "react-redux";
import { removeContact } from "../../redux/contactSlice";
import { useDispatch } from "react-redux";

const Contact = () => {
  const contactData = useSelector((state) => state.contact.contact);
  const [data, setData] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);
  const dispatch = useDispatch();
  console.log("contactData", contactData);

  useEffect(() => {
    setData(contactData);
    console.log("data2", data);
  }, [contactData, data]);
  console.log("data", data);

  const handleDelete = (id) => {
    dispatch(removeContact(id));
    // setData(updatedData);
  };
  const handleClose = () => {
    setShowDialog(false);
    // setData(contactData)
    setSelectedItem([]);
  };
  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex justify-between mb-4">
          <h2 className="lg:text-3xl">Contact Details</h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py:2  px-2 font-bold lg:py-2 lg:px-4 rounded"
            onClick={() => setShowDialog(true)}
          >
            Add Contact
          </button>
        </div>
        {console.log("dadada", data.length)}
        {data.length > 0 ? (
          <div className="overflow-x-auto min-w-[600px]">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">ID</th>
                  <th className="py-2 px-4 border-b">Name</th>
                  <th className="py-2 px-4 border-b">Age</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id}>
                    <td className="py-2 px-4 border-b text-center">{row.id}</td>
                    <td className="py-2 px-4 border-b text-center">
                      {row.name}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      {row.age}
                    </td>
                    <td className="py-2 px-4 border-b text-center">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  mr-6 rounded"
                        onClick={() => {
                          let temp = data.find((item) => item.id === row.id);
                          setSelectedItem([{ ...temp }]);
                          setShowDialog(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded"
                        onClick={() => handleDelete(row.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex items-center justify-center h-screen/2 bg-grey">
            <h2 className="text-gray-500 mt-6">
              No data found <br /> Add Contact
            </h2>
          </div>
        )}
      </div>
      {showDialog && (
        <ContactDialog
          open={showDialog}
          handleClose={handleClose}
          selectedItem={selectedItem}
        />
      )}
    </>
  );
};

export default Contact;
