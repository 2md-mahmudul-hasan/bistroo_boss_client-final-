import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
const Login = () => {
  const [disable, setDisable] = useState(true)
  const captchaRef = useRef()
  const handleFormSubmit = (e) => {
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
  }

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])

  const handleValidateCaptcha = (e) => {
    const captchaValue = captchaRef.current.value;
    if (validateCaptcha(captchaValue)) {
      setDisable(false)
    } else {
      setDisable(true)
    }

  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-1">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <form onSubmit={handleFormSubmit} className="card w-[50%]  shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input type="text" ref={captchaRef} name="captcha" placeholder="type captcha above" className="input input-bordered" />
                <button onClick={handleValidateCaptcha} className='btn btn-outline mt-2'>validate captcha</button>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">

                <input disabled={disable} className="btn btn-primary" type='submit' value="login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;