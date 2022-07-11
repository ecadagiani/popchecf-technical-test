import { FC } from 'react';
import { Outlet, Link } from 'react-router-dom';

const PageLayout: FC = () => {
  return (
    <div id="PageLayout">
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav className="border-gray-200 w-full max-w-container px-4 sm:px-6 lg:px-8 py-2.5 bg-gray-800">
        <div className="container flex flex-wrap justify-between items-center">
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link
                  className="block pr-4 text-white rounded md:bg-transparent md:p-0"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <hr />

      <div className="relative mx-auto mt-2 w-full max-w-container px-4 sm:px-6 lg:px-8">
        {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
        the child routes we defined above. */}
        <Outlet />
      </div>
    </div>
  );
};

export default PageLayout;
