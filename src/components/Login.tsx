import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/userActions";
import { FormData, RootState } from "../types/userInterface";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const formValidation = Yup.object().shape({
  username: Yup.string().required("username required"),
  password: Yup.string().required("password required"),
});


function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const authStatus = useSelector((state: RootState) => state?.user.authStatus)
console.log(authStatus)
 
  useEffect(() => {
    if (authStatus) {
      navigate("/product");
    }
  }, [authStatus, navigate]);

  const handleSubmit = (data: FormData) => {
    dispatch(userLogin(data));
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-md-6 mt-5">
          <div className="card ">
            <div className="card-body">
              <h5 className="card-title text-center">User Login</h5>

              <div className="form">
                <Formik
                  initialValues={{ username: "", password: "" }}
                  validationSchema={formValidation}
                  onSubmit={(data: FormData) => {
                    handleSubmit(data);
                  }}
                  enableReinitialize={true}
                >
                  {() => (
                    <Form>
                      <div className="form-div mb-3">
                        <Field
                          name="username"
                          className="form-control border-none"
                          placeholder="User Name"
                        />
                        <ErrorMessage name={"username"}>
                          {(msg: string) => (
                            <div style={{ color: "red", textAlign: "left" }}>
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-div mb-3">
                        <Field
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                        />

                        <ErrorMessage name={"password"}>
                          {(msg: string) => (
                            <div style={{ color: "red", textAlign: "left" }}>
                              {msg}
                            </div>
                          )}
                        </ErrorMessage>
                      </div>
                      <div className="form-div">
                        <button type="submit" className="btn btn-primary w-100">
                          Submit
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
