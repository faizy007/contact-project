import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { addContact, updateContact } from "../../redux/contactSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const ContactDialog = ({ open, handleClose, selectedItem }) => {
  const contactData = useSelector((state) => state.contact.contact);
  console.log("contactData", contactData);
  console.log("selectedItem", selectedItem);
  const dispatch = useDispatch();

  const handleUpdate = (val) => {
    dispatch(updateContact(val));
  };

  const handleCreate = (val) => {
    const temp={
      ...val,
      id:contactData?.length + 1, 
    }
    dispatch(addContact(temp));
    console.log("in Create");
  };
  return (
    <>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50"></div>
          <div className="bg-white p-8 w-full md:max-w-md mx-4 relative">
            <h2 className="text-lg font-bold mb-4">Dialog Title</h2>
            <Formik
              initialValues={{
                id: selectedItem?.[0]?.id || selectedItem.length + 1,
                name: selectedItem?.[0]?.name || "",
                age: selectedItem?.[0]?.age || "",
              }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Name is required";
                }
                if (!values.age) {
                  errors.age = "Age is required";
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log("selectedItem.length", selectedItem.length);
                selectedItem.length > 0
                  ? handleUpdate(values)
                  : handleCreate(values);
                setTimeout(() => {
                  console.log(values);
                  setSubmitting(false);
                }, 400);
                handleClose();
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="mb-4">
                    <label htmlFor="name" className="block font-bold mb-2">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="border border-gray-400 rounded w-full py-2 px-3"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 mt-1"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="age" className="block font-bold mb-2">
                      Age
                    </label>
                    <Field
                      type="number"
                      name="age"
                      id="age"
                      className="border border-gray-400 rounded w-full py-2 px-3"
                    />
                    <ErrorMessage
                      name="age"
                      component="div"
                      className="text-red-500 mt-1"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2"
                      onClick={handleClose}
                    >
                      Close
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
                      disabled={isSubmitting}
                    >
                      Save
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactDialog;
