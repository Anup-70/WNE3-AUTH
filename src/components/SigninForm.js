import { doSocialLogin } from "../app/actions";

export default function SigninForm() {
  return (
    <div className="flex flex-col gap-12 font-display min-h-screen justify-center items-center bg-[radial-gradient(circle_at_50%_2%,rgba(255,255,255,1)_0%,rgba(128,42,237,1)_33%,rgba(66,13,133,1)_66%,rgba(0,0,0,1)_100%)]">
      <div className="bg-[#161616] p-9 rounded-xl">
        <div className="form-header pb-8">
          <img className="pb-4" src="/assets/logo.svg" alt="logo" />
          <h1 className="text-2xl py-4 font-semibold text-white">
            Log In to your account
          </h1>
          <p className="text-white text-xs">
            <a
              href="#"
              className="inline-block text-transparent bg-clip-text bg-gradient-to-br from-[#7C55FF] to-[#9C2EF3]"
            >
              Create an account
            </a>{" "}
            If you don't have one.
          </p>
        </div>
        <div className="form-container">
          <form className="flex flex-col gap-4" action="">
            <div className="flex flex-col gap-1">
              <label className="text-[#919191]" htmlFor="email">
                Username/Email
              </label>
              <input
                className="outline-none border rounded-md px-3 py-2 border-[#404040] bg-transparent text-white text-sm"
                type="email"
                name="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[#919191]" htmlFor="password">
                Password
              </label>
              <input
                className="outline-none border rounded-md px-3 py-2 border-[#404040] bg-transparent text-white text-sm"
                type="password"
                name="password"
                id="password"
              />
            </div>
          </form>
        </div>
        <div className="form-Oauth pt-6 flex flex-col gap-2">
          <p className="text-[#919191] text-sm">Or Use:</p>
          <div className="flex items-center gap-6">
            <form action={doSocialLogin}>
              <button
                type="submit"
                name="action"
                value="google"
                className="bg-[#1A1A1A] rounded px-6 py-1"
              >
                <img src="/assets/googleLogo.svg" alt="Google Logo" />
              </button>
              <button
                type="submit"
                name="action"
                value="apple"
                className="bg-[#1A1A1A] rounded px-6 py-1"
              >
                <img src="/assets/appleLogo.svg" alt="Apple Logo" />
              </button>
              <button
                type="submit"
                name="action"
                value="facebook"
                className="bg-[#1A1A1A] rounded px-6 py-1"
              >
                <img src="/assets/facebookLogo.svg" alt="Facebook Logo" />
              </button>
            </form>
          </div>
        </div>
        <div className="form-footer pt-6">
          <p className="text-[#919191] text-[10px] text-center">
            WNE3 Live - Development Beta - D2C | V 0.1
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <div className="flex flex-col items-center gap-6 text-[#B7B7B7]">
      <div className="copyright flex flex-col items-center">
        <p className="text-xs">
          WNE3 Technologies Private Limited | All Rights Reserved* 2024
        </p>
        <p className="text-xs">Vishakapatnam, Andhra Pradesh, India</p>
      </div>
      <div className="contact">
        <p className="text-[10px]">
          For assistance and inquiries contact: support@wne3.live
        </p>
      </div>
    </div>
  );
}
