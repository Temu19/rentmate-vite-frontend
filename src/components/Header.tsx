import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [opened, setOpend] = useState(false);
  const [langopend, setLangopend] = useState(false);

  const dropdownhandlingopen = () => {
    setOpend(!opened);
    if (langopend) {
      setLangopend(false);
    }
  };
  const dropdownhandlinglang = () => {
    setLangopend(!langopend);
    if (opened) {
      setOpend(false);
    }
  };
  return (
    <nav className="flex items-center gap-5 justify-between py-3 pr-4 pl-12 bg-white shadow-sm max-md:flex-wrap max-md:pl-5">
      <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
        <Link to={"/"} className="flex items-center ">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/caf5b4022d88ded0ee6a948ec791fb98eb31f8c199d0652809c9a3a7005bc68e?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
            className="my-auto aspect-[2.94] fill-emerald-500 w-[88px]"
          />
        </Link>
        <form>
       
          <div className="relative">
            {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div> */}
            <input
              type="search"
              id="default-search"
              className="block w-full p-4  text-sm  gap-4 justify-between  bg-white border border-solid shadow-sm border-[color:var(--gray-200,#E5E7EB)] rounded-[1000px] max-md:pl-5"
              placeholder="Start your search"
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 rounded-full bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0a3da65c7993a2fda2bbb037f80a69d977e92fcfac92b1fe8c29f7b6a81a01b?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
              className="w-full aspect-square"
            />
            </button>
          </div>
        </form>
        <div className="flex gap-4 justify-between py-2 pr-2 pl-6 bg-white border border-solid shadow-sm border-[color:var(--gray-200,#E5E7EB)] rounded-[1000px] max-md:pl-5">
          <div className="grow my-auto text-sm tracking-wide leading-5 text-gray-700 whitespace-nowrap">
            Start your search
          </div>
          <div className="flex justify-center items-center px-1.5 w-8 h-8 bg-emerald-500 shadow-sm aspect-square rounded-[100px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0a3da65c7993a2fda2bbb037f80a69d977e92fcfac92b1fe8c29f7b6a81a01b?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
              className="w-full aspect-square"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-end items-center pl-20 max-md:flex-wrap max-md:max-w-full">
        <Link to={""} className="hover:bg-gray-100   rounded-3xl p-3 px-4 ">
          <div className="grow self-stretch my-auto text-sm font-medium leading-5 text-black whitespace-nowrap">
            Add property
          </div>
        </Link>

        <div>
          <button
            type="button"
            title="language"
            className="p-3 hover:bg-gray-100 rounded-3xl "
            onClick={() => dropdownhandlinglang()}
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e6875fa2cf4225b8651e5b60638488dbf76ca42a575a25b1180ad99cc07db86?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
              className="self-stretch my-auto w-6 aspect-square"
            />
          </button>

          <div className="flex  absolute items-center md:order-2 space-x-3 right-24 md:space-x-0 rtl:space-x-reverse">
            <div
              className={`z-50 ${
                langopend ? "show" : "hidden"
              }  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id="language-dropdown"
            >
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    English (US)
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Amharic
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Oromiffa
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Tigrinya
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- Dropdown --> */}
        <div>
          <button
            type="button"
            onClick={() => dropdownhandlingopen()}
            title="profile"
            className="flex justify-center items-center self-stretch py-2 pr-2 pl-4 bg-white  aspect-[1.17] border-[color:var(--gray-200,#E5E7EB)] rounded-[100px]"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ed48c3338dbb5f4e6bcbb5ce286791fa9737b4e27c598df457b8fc3ac01b432?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
              className="w-8 aspect-square"
            />
          </button>

          {/* dropdown */}
          <div className="flex  absolute items-center md:order-2 space-x-3 right-5 md:space-x-0 rtl:space-x-reverse">
            <div
              className={`z-50 ${
                opened ? "show" : "hidden"
              }  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
              id="user-dropdown"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">
                  Bealu Girma
                </span>
                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Settings
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;

// <div className="flex gap-5 justify-between py-3 pr-4 pl-12 w-full bg-white shadow-sm max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
//       <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/d014ede0e0bd4da9ea4eff945ba9ffa5701fe3757072efc8c06c312706390b91?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
//           className="my-auto aspect-[2.94] fill-emerald-500 w-[88px]"
//         />
//         <div className="flex gap-4 justify-between py-2 pr-2 pl-6 bg-white border border-solid shadow-sm border-[color:var(--gray-200,#E5E7EB)] rounded-[1000px] max-md:pl-5">
//           <div className="grow my-auto text-sm tracking-wide leading-5 text-gray-700 whitespace-nowrap">
//             Start your search
//           </div>
//           <div className="flex justify-center items-center px-1.5 w-8 h-8 bg-emerald-500 shadow-sm aspect-square rounded-[100px]">
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0a3da65c7993a2fda2bbb037f80a69d977e92fcfac92b1fe8c29f7b6a81a01b?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
//               className="w-full aspect-square"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="flex gap-4 justify-end items-center">
//         <div className="grow self-stretch my-auto text-sm font-medium leading-5 text-black whitespace-nowrap">
//           Add property
//         </div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/f25ddcc44127d827e55b5561d35ee977067b80542be8b58aa3ca49dc9a054c2d?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
//           className="self-stretch my-auto w-6 aspect-square"
//         />
//         <div className="flex justify-center items-center self-stretch py-2 pr-2 pl-4 bg-white border border-solid aspect-[1.17] border-[color:var(--gray-200,#E5E7EB)] rounded-[100px]">
//           <img
//             loading="lazy"
//             src="https://cdn.builder.io/api/v1/image/assets/TEMP/d575fd7d65f92f41e0cafb0ca0ae08f7aba76c5facdb7ce020fe2f9390f25123?apiKey=bbf1f0fa0d474c428ab2d93ca8b6573b&"
//             className="w-8 aspect-square"
//           />
//         </div>
//       </div>
//     </div>
