import React from "react";

function Community() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto mt-12 text-center dark:bg-slate-900">
      <h2 className="text-gray-800 font-semibold text-4xl dark:text-slate-300 ">
        Caring is the new marketing
      </h2>
      <p className="mt-3 text-gray-500 max-w-xl mx-auto dark:text-gray-200">
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div className="flex justify-between mt-4 flex-wrap lg:flex-nowrap ">
        <div className="relative lg:m-2 mx-auto mt-10 max-w-[18rem]">
          <img
            src="src/assets/Community/image 18.png "
            alt="Community 1"
            className="w-[18rem] h-auto rounded-t-lg"
          />
          <div className="absolute bottom-[-2em] left-2 right-2 h-1/2 flex flex-col justify-center items-center bg-slate-100  shadow-lg text-center text-gray-600 font-semibold p-6 rounded-lg text-[16px] max-w-[16rem ] mx-auto mt-2 dark:bg-slate-800 dark:text-slate-200">
            Creating Streamlined Safeguarding Processes with OneRen
            <br />
            <a className="text-lg text-green-500 mt-2" href="#">
              Read More &#8594;
            </a>
          </div>
        </div>

        <div className="relative lg:m-2 mx-auto mt-12 max-w-[18rem]">
          <img
            src="src/assets/Community/image 19.png "
            alt="Community 1"
            className="w-full h-auto rounded-t-lg"
          />
          <div className="absolute bottom-[-2em] left-2 right-2 h-1/2 flex flex-col justify-center items-center bg-slate-100  shadow-lg text-center text-gray-600 font-semibold p-6 rounded-lg text-[16px] max-w-[16rem ] mx-auto dark:bg-slate-800 dark:text-slate-200">
            What are your safeguarding responsibilities and how can you manage
            them?
            <br />
            <a className="text-lg text-green-500 mt-2" href="#">
              Read More &#8594;
            </a>
          </div>
        </div>
        <div className="relative lg:m-2 mx-auto mt-12 max-w-[18rem]">
          <img
            src="src/assets/Community/image 20.png "
            alt="Community 1"
            className="w-full h-auto rounded-t-lg"
          />
          <div className="absolute bottom-[-2em] left-2 right-2 h-1/2 flex flex-col justify-center items-center bg-slate-100  shadow-lg text-center text-gray-600 font-semibold p-6 rounded-lg text-[16px] max-w-[16rem ] mx-auto dark:bg-slate-800 dark:text-slate-200">
            Revamping the Membership Model with Triathlon Australia
            <br />
            <a className="text-lg text-green-500 mt-2" href="#">
              Read More &#8594;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Community;
