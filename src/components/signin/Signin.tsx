import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  phone_number: Yup.string()
    .required("Phone number is required")
    .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Phone number is not valid"),
});

function Signin() {
  const navigate = useNavigate();
  const handleSubmit = (values: any, { resetForm }: any) => {
    navigate("/signin/verify");
  };
  const initialValues = {
    phone_number: "",
    last_name: "",
    email: "",
    message: "",
  };
  return (
    <>
      <style>{`
		.error{
			color: #FC5007;
			font-size: 12px;
			font-weight: 500;
		}
		`}</style>
      <div className="container flex justify-center items-center h-screen pt-5 py-10">
        <div className="flex flex-col gap-10 justify-start items-start h-full py-10 md:border md:px-10 rounded-2xl">
          <div className="flex flex-col gap-10">
            <h1 className="text-lg md:text-xl lg:text-xl text-Dark_Charcoal font-semibold">
              What is your phone number?
            </h1>
            <p className="text-squant md:text-lg font-normal">
              Enter your phone number and we will send you an OTP via SMS.
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            className="w-full"
          >
            {({ isSubmitting }) => (
              <Form className="w-full flex flex-col justify-between h-full">
                <div className="flex flex-col gap-0 xl:flex-row xl:justify-between xl:items-center xl:gap-5 w-full">
                  <div className="flex flex-col w-full">
                    <Field
                      className="rounded-lg border h-12 w-full border-[#CCCCCC] outline-none p-2 text-main-color"
                      type="text"
                      name="phone_number"
                      placeholder="Enter your phone number"
                    />
                    <div className="h-5">
                      <ErrorMessage
                        name="phone_number"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end items-center">
                  <button
                    className="relative w-full flex justify-center items-center gap-2 bg-[#E6E6E6] hover:bg-main_color text-[#808080] transition-all duration-300 hover:text-white md:text-lg lg:text-xl text-main-color px-6 py-4 rounded-xl "
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Continue{" "}
                    <div
                      className={`${
                        isSubmitting
                          ? "opacity-100 static"
                          : "absolute  opacity-0"
                      }  transition-opacity w-6 h-6`}
                    ></div>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Signin;
