import { ErrorMessage, Field, Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import OtpInput from "formik-otp-input";
import { Otptimer } from "otp-timer-ts";
import { LuFileEdit } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { MdModeEditOutline } from "react-icons/md";

function Verification() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    onSubmit: (values) => {
      navigate("/signin/info");
    },
  });
  return (
    <>
      <style>{`
		.error{
			color: #FC5007;
			font-size: 12px;
			font-weight: 500;
		}
		.iSUKeO{
			width:40px !important
		}
		.timer .button-container span{
			color: #FC5007
		}
		`}</style>
      <div className="container flex justify-center items-center h-screen pt-5 sm:pt-10 pb-10">
        <div className="flex flex-col gap-10 justify-start items-start h-full py-10 md:border md:px-10 rounded-2xl lg:max-w-[50%] md:shadow-md">
          <div className="flex flex-col gap-10">
            <h1 className="text-lg md:text-xl lg:text-xl text-Dark_Charcoal font-semibold">
              OTP Verification{" "}
            </h1>
            <p className="text-squant md:text-lg font-normal">
              Please enter the 6 digit verification code sent to you. This helps
              us keep your account safe.{" "}
            </p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="h-full flex flex-col justify-between w-full"
          >
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center gap-3">
                <p className="text-Dark_Charcoal text-lg font-medium">
                  +965 5501 2345
                </p>
                <Link
                  to={"/signin"}
                  className="flex items-center gap-1 text-main_color"
                >
                  <MdModeEditOutline size={20} /> Edit
                </Link>
              </div>
              <div className="flex flex-col items-start w-full">
                <OtpInput
                  length={6}
                  value={formik.values.otp}
                  inputType={"numeric"}
                  autoFocus={true}
                  autoSubmit={false}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  onFullFill={formik.handleSubmit}
                  setFieldError={formik.setFieldError}
                  setFieldTouched={formik.setFieldTouched}
                  highlightColor={"#FC5007"}
                />
                {formik.errors.otp && formik.touched.otp && (
                  <div
                    style={{
                      color: "#FC5007",
                      fontSize: "12px",
                      fontWeight: 500,
                    }}
                  >
                    {formik.errors.otp}
                  </div>
                )}
              </div>
              <div className="flex timer justify-start">
                <Otptimer
                  text={"Resend code in"}
                  textClass="text-squant"
                  minutes={0}
                  seconds={59}
                  onResend={() => {}}
                />
              </div>
            </div>

            <div className="flex justify-end items-center">
              <button
                className="relative w-full flex justify-center items-center gap-2 bg-[#E6E6E6] hover:bg-main_color text-[#808080] transition-all duration-300 hover:text-white md:text-lg lg:text-xl text-main-color px-6 py-4 rounded-xl "
                type="submit"
              >
                Continue{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Verification;
