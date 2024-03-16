import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <img
                src="https://yt3.ggpht.com/F8kNqrtltLAfCGes32Dh06YdTsJXM5E6pdwHKluBOH3x0aXoFlDcK_7R1esQOsl2GEd1Cc7deQ=s176-c-k-c0x00ffffff-no-rj"
                className="mr-3 h-16 bg-blend-color-burn rounded-lg"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <a
                    href="https://github.com/gouravg8"
                    className="hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2023 Gourav soni - All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link to="https://instagram.com/g4rawan" className="text-gray-500">
              <i className="w-4 h-4 fa-brands fa-instagram"></i>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="https://x.com/Gouravsoni88" className="text-gray-500">
              <i className="w-4 h-4 fa-brands fa-x-twitter"></i>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link to="https://github.com/gouravg8" className="text-gray-500">
              <i className="w-4 h-4 fa-brands fa-github"></i>
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
