import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CheckBoxButtonComponent from "../CheckBoxButtonComponent";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date_of_birth: Yup.string().required("Date of birth is required"),
  checked: Yup.bool()
    .required("Check to continue")
    .test("is-true", "Must be checked to continue", (value) => value === true),
});

function Info({
  setIsLoggedIn,
}: {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  const handleSubmit = (values: any, { resetForm }: any) => {
    setIsLoggedIn(true);
    navigate("/");
  };
  const initialValues = {
    name: "",
    email: "",
    date_of_birth: "",
    checked: true,
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
          <div className="flex flex-col gap-5">
            <h1 className="text-lg md:text-xl lg:text-xl text-Dark_Charcoal font-semibold">
              Almost there!{" "}
            </h1>
            <p className="text-squant md:text-lg font-normal">
              We just need a few details from you to set up your account.{" "}
            </p>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            className="w-full"
          >
            {({ isSubmitting, values }) => (
              <Form className="w-full flex flex-col justify-between h-full">
                <div className="flex flex-col gap-0 w-full">
                  <div className="flex flex-col w-full">
                    <label
                      className="text-Dark_Charcoal font-medium md:text-lg mb-1"
                      htmlFor="name"
                    >
                      name{" "}
                    </label>
                    <Field
                      className="rounded-lg border h-12 w-full border-[#CCCCCC] outline-none p-2 text-main-color"
                      type="text"
                      name="name"
                      placeholder="ex: Ahmed Essam"
                    />
                    <div className="h-5">
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      className="text-Dark_Charcoal font-medium md:text-lg mb-1"
                      htmlFor="email"
                    >
                      Email{" "}
                    </label>
                    <Field
                      className="rounded-lg border h-12 w-full border-[#CCCCCC] outline-none p-2 text-main-color"
                      type="email"
                      name="email"
                      placeholder="ex: abc@gmaol.com"
                    />
                    <div className="h-5">
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      className="text-Dark_Charcoal font-medium md:text-lg mb-1"
                      htmlFor="date_of_birth"
                    >
                      Date of birth
                    </label>
                    <Field
                      className="rounded-lg border h-12 w-full border-[#CCCCCC] outline-none p-2 text-main-color"
                      type="string"
                      name="date_of_birth"
                      placeholder="ex: 2/2/1999"
                    />
                    <div className="h-5">
                      <ErrorMessage
                        name="date_of_birth"
                        component="div"
                        className="error"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="flex gap-2 items-start">
                      <Field
                        type="checkbox"
                        name="checked"
                        value={values.checked}
                        render={({ field }: any) => {
                          return <CheckBoxButtonComponent field={field} />;
                        }}
                      />
                      <p className="text-sm text-Dark_Charcoal">
                        I have read and agree to the Overjar app{" "}
                        <Link className="text-main_color underline" to="/terms">
                          Terms
                        </Link>{" "}
                        and{" "}
                        <Link
                          className="text-main_color underline"
                          to="/Conditions"
                        >
                          Conditions
                        </Link>{" "}
                        &{" "}
                        <Link
                          className="text-main_color underline"
                          to={"/Privacy"}
                        >
                          Privacy Policy
                        </Link>
                      </p>
                    </label>{" "}
                    <div className="h-5">
                      <ErrorMessage
                        name="checked"
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

export default Info;
