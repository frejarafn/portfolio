import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between sm:p-4 sm:text-xl md:p-8">
      <div>
        <a href="/">
          <img
            src="/assets/png/logo_favicon.png"
            alt="A logo of Lærke Vinbech's portfolio website."
            width={50}
            height={50}
            className="m-2 sm:m-4 sm:h-12 sm:w-12"
          />
        </a>
      </div>
      <div className="flex justify-evenly">
        <button className="text-md m-1 hover:text-gray-400 sm:m-3 sm:p-1 sm:text-xl">
          <a href="/about" className="text-xs sm:text-xl">
            ABOUT
          </a>
        </button>
        <button className="text-md m-1 hover:text-gray-400 sm:m-3 sm:p-1 sm:text-xl">
          <a href="/cases" className="text-xs sm:text-xl">
            PROJECTS
          </a>
        </button>
        <button
          className="mx-2 flex items-center rounded-full bg-text px-2 text-background hover:text-gray-400 sm:m-3 sm:p-1 sm:px-4 sm:text-xl md:m-4 md:p-4"
          onClick={handleToggle}
        >
          {isOpen ? (
            <span className="text-xs md:text-xl">CONTACT</span>
          ) : (
            <span className="text-xs md:text-xl">CONTACT</span>
          )}

          {isOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 p-4 transition-all duration-500 ease-in-out">
              <div className="flex h-screen w-screen items-center justify-center rounded-lg bg-black p-4 text-white">
                <div>
                  
                  <div className="m-8 flex justify-center gap-6">
                    <a
                      href="mailto:laerkevinbech@gmail.com"
                      className="flex transform justify-center rounded-full bg-blue-400 p-4 hover:underline"
                    >
                      E-mail
                    </a>
                    <a
                      href="https://www.linkedin.com"
                      className="rounded-full bg-blue-400 p-4 hover:underline"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <button
                    className="absolute right-0 top-0 m-10 w-fit rounded-full bg-primary px-10 py-4 text-white hover:outline-double"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {isOpen ? "Close" : ""}
                  </button>
                </div>
              </div>
            </div>
          )}
        </button>
      </div>
    </nav>
  );
}
