

const page = () => {
  return (
    <div
      className="min-h-screen [ p-4 md:p-6 lg:p-8 ] [ flex justify-center items-center ] bg-center bg-cover"
      style={{
        backgroundImage:
          "url(https://source.unsplash.com/jimGvAMRlWk/2400x1823)",
      }}
    >
      <form className="max-w-sm [ p-8 md:p-10 lg:p-10 ] bg-gradient-to-b from-black/80 to-black/40 text-[#fff] backdrop-blur-lg border-[1px] border-solid border-white border-opacity-10 rounded-2xl shadow-[0_0_20px_10px_rgba(0,0,0,0.75)]">
        <h3 className="text-md text-[#fff]/80 mb-1">Signup required!</h3>
        <h1 className="text-xl md:text-2xl lg:text-2xl mb-6 uppercase font-bold">
          Register for free
        </h1>
        <p className="mb-6 text-sm text-[#fff]/60 text-opacity-50">
          Enter a valid email email &amp; password in the fields below to get
          started.
        </p>

        <label className="relative text-[#fff]/50 focus-within:text-[#fff]/70 block mb-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
            fill="currentColor"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M12 1.95c-5.52 0-10 4.48-10 10s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10zm0 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z" />
          </svg>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full bg-[#fff]/10 text-white focus:bg-[#fff]/20  focus:shadow-sm focus:outline-none leading-none placeholder-gray-400 appearance-none block pl-12  rounded-lg "
          />
        </label>

        <label className="relative text-[#fff]/50 focus-within:text-[#fff]/70 block mb-4 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"
            fill="currentColor"
          >
            <g fill="none">
              <path d="M0 0h24v24H0V0z" />
              <path d="M0 0h24v24H0V0z" opacity=".87" />
            </g>
            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
          </svg>

          <input
            type="email"
            name="password"
            id="password"
            placeholder="Password"
            className="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full bg-[#fff]/10 text-white focus:bg-[#fff]/20 focus:shadow-sm focus:outline-none leading-none placeholder-gray-400 appearance-none block pl-12  rounded-lg "
          />
        </label>

        <button className="p-3 md:p-4 focus:outline-none lg:p-4 transition-colors duration-500 bg-[#f53b57]  hover:bg-[#ef5777] w-full rounded-lg font-bold text-white">
          Continue
        </button>

        <p className="mt-8 text-center text-xs">or Sign in with</p>

        <ul className="mt-4 flex justify-center">
          <li className="mx-1">
            <a
              href="#"
              className="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#DB4437] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-white"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 640 640"
              >
                <path d="M326.331 274.255v109.761h181.49c-7.37 47.115-54.886 138.002-181.49 138.002-109.242 0-198.369-90.485-198.369-202.006 0-111.509 89.127-201.995 198.369-201.995 62.127 0 103.761 26.516 127.525 49.359l86.883-83.635C484.99 31.512 412.741-.012 326.378-.012 149.494-.012 6.366 143.116 6.366 320c0 176.884 143.128 320.012 320.012 320.012 184.644 0 307.256-129.876 307.256-312.653 0-21-2.244-36.993-5.008-52.997l-302.248-.13-.047.024z" />
              </svg>
            </a>
          </li>
          <li className="mx-1">
            <a
              href="#"
              className="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#1DA1F2] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-white"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 640 640"
              >
                <path d="M640.012 121.513c-23.528 10.524-48.875 17.516-75.343 20.634 27.118-16.24 47.858-41.977 57.756-72.615-25.347 14.988-53.516 25.985-83.363 31.866-24-25.5-58.087-41.35-95.848-41.35-72.508 0-131.21 58.736-131.21 131.198 0 10.228 1.134 20.232 3.355 29.882-109.1-5.528-205.821-57.757-270.57-137.222a131.423 131.423 0 0 0-17.764 66c0 45.497 23.102 85.738 58.347 109.207-21.508-.638-41.74-6.638-59.505-16.359v1.642c0 63.627 45.225 116.718 105.32 128.718-11.008 2.988-22.63 4.642-34.606 4.642-8.48 0-16.654-.874-24.78-2.35 16.783 52.11 65.233 90.095 122.612 91.205-44.989 35.245-101.493 56.233-163.09 56.233-10.63 0-20.988-.65-31.334-1.89 58.229 37.359 127.206 58.997 201.31 58.997 241.42 0 373.552-200.069 373.552-373.54 0-5.764-.13-11.35-.366-16.996 25.642-18.343 47.87-41.493 65.469-67.844l.059-.059z" />
              </svg>
            </a>
          </li>
          <li className="mx-1">
            <a
              href="#"
              className="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#4267B2] rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 fill-white"
                shape-rendering="geometricPrecision"
                text-rendering="geometricPrecision"
                image-rendering="optimizeQuality"
                fill-rule="evenodd"
                clip-rule="evenodd"
                viewBox="0 0 640 640"
              >
                <path d="M380.001 120.001h99.993V0h-99.993c-77.186 0-139.986 62.8-139.986 139.986v60h-80.009V320h79.985v320h120.013V320h99.994l19.996-120.013h-119.99v-60.001c0-10.843 9.154-19.996 19.996-19.996v.012z" />
              </svg>
            </a>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default page;
