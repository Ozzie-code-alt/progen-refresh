import React from "react";

const BlogDescription = () => {
  return (
    <div className=" flex flex-col  w-full justify-center h-auto">
      <div className=" lg:mr-5 py-10">
        <div className="w-full px-20 pb-10 flex justify-center  items-center ">
          <img
            src="/BlogsAssets/GinoBlogsAssets/GinoHeader.png"
            className="w-[400px] sm:w-full rounded-2xl"
            alt="Gino Fanega Header Image"
          />
        </div>
        <div className="px-10 sm:px-20 ">
          <div className="flex flex-col gap-5 lg:gap-10">
            <p className="text-[#FFFFFF] sm:text-[28px] pb-5  sm:pb-10 font-ox">
              We often hear that creativity doesn&apos;t pay the bills and that
              pursuing creativity offers no real future. Despite these
              persistent remarks, when creativity calls, no one can help but
              answer. The challenge then becomes not just how to engage with our
              creativity but how to thrive in doing so amidst skepticism.{" "}
            </p>
            <h2 className="text-[#FFFFFF] text-[20px] sm:text-[35px] font-bold font-ox">
              A Creative Spark
            </h2>
            <p className="text-[#FFFFFF] sm:text-[28px] pb-10 font-ox">
              Gino Fanega&apos;s creative journey started at the University of
              the Philippines Visayas, where national marketing competitions
              ignited his passion for advertising. Despite initial detours into
              non-marketing roles early in his career, Gino&apos;s desire to
              shift towards the marketing agency path remained strong.
            </p>

            <h3 className="text-[#FFFFFF] text-[17px] sm:text-[30px] font-bold font-ox">
              The Turning Point
            </h3>
            <p className="text-[#FFFFFF] sm:text-[28px] pb-10  font-ox">
              The year 2020 proved pivotal for Gino. In fact, he would soon find
              himself engaged in production shoots with a marketing agency in
              Iloilo. His commitment and creativity quickly made him stand out,
              leading to involvement in more projects. “That was an opportunity
              I could not miss, and finally, I left my corporate job,” Gino
              said. This decision marked the beginning of his journey into the
              creative agency world. Soon, he found himself leading as the
              Executive Creative Director of Prometheus, the first full-service
              marketing agency in Western Visayas.
            </p>

            <h2 className="text-[#FFFFFF] text-[20px]  sm:text-[35px]   font-bold font-ox">
              Building a Creative Agency in Western Visayas
            </h2>
            <p className="text-[#FFFFFF] sm:text-[28px] font-ox pb-10">
              Establishing a creative team outside of Metro Manila presented
              unique challenges. Prometheus CEO, Lcid Fernandez,{" "}
              <a className="text-blue-500" href="https://www.prometheus.ph/beautyofthestruggle">
                {" "}
                shared that he initially faced skepticism when pitching the idea
                of a marketing agency in Iloilo.
              </a>{" "}
              For many local artists and writers in Iloilo, the concept of a
              marketing and advertising agency was foreign. “The idea of a
              creative career in marketing without relocating to Metro Manila
              was unheard of here,” Gino pointed out. He shared that the biggest
              challenge was to capture Iloilo&apos;s raw artistic talent into
              the so-called “commercial framework” of advertising. “We literally
              had to redefine what creativity means in the context of art and
              marketing. It wasn&apos;t just about artistic expression, but
              about crafting solutions that achieved our clients&apos; specific
              business goals,” Gino said.
            </p>

            <h2 className="text-[#FFFFFF] text-[20px]  sm:text-[35px]   font-bold font-ox">
              Charting New Paths in Marketing Agency
            </h2>
            <p className="text-[#FFFFFF] sm:text-[28px] pb-10 font-ox">
              Prometheus was founded upon recognizing the untapped potential of
              Western Visayas&apos; creative talent. This inspired Gino to
              envision a space where young and seasoned individuals in Iloilo
              could collaborate, innovate, and become a powerhouse of
              creativity. “Creativity has no borders,” Gino said. “We can
              compete on the national stage right here in Iloilo.” Gino said.
            </p>

            <h2 className="text-[#FFFFFF] text-[20px]  sm:text-[35px]    font-bold font-ox">
              Pushing the Boundaries
            </h2>

            <p className="text-[#FFFFFF] sm:text-[28px] font-ox">
              For Gino, the future is more than maintaining the status quo. He
              envisions Prometheus as a leader in marketing innovation,
              constantly exploring new creative territories. “Prometheus will
              always be a ship, striving to push past creative boundaries,” Gino
              said. His vision for the agency is clear: to continue building an
              exceptional team and bringing out the best ideas that not only
              highlight their clients but also steer the industry toward new
              standards of creative excellence. Gino&apos;s story exemplifies
              the creative potential within each of us. Just like we curate our
              personal style and prepare our meals, there&apos;s an artistic
              dimension to crafting our lives. Gino reminds us that creativity
              extends beyond painting and music. He found his own unique
              expression in the world of marketing, helping to build Prometheus
              — the creative and marketing leader in Western Visayas.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="w-full pb-5 sm:pb-10 pt-10  flex justify-center items-center  ">
            <img
              src="/BlogsAssets/GinoBlogsAssets/GinoPic.jpg"
              className="w-[700px] rounded-2xl"
              alt="Gino Fanega Image"
            />
          </div>

          <p className="text-[#FFFFFF] px-10 sm:px-20 sm:text-[15px]  font-ox">
            Connect with Gino on
            <a
              href="https://www.linkedin.com/in/ginofanega/"
              className="text-blue-500"
            >
              {" "}
              LinkedIn.
            </a>{" "}
          </p>

          <p className="text-[#FFFFFF] px-10 sm:px-20  sm:text-[15px]  font-ox">
            To learn more about Prometheus, follow its official pages on{" "}
            <a
              href="https://www.facebook.com/PrometheusPr"
              className="text-blue-500"
            >
              Facebook{" "}
            </a>
            and{" "}
            <a
              href="https://www.linkedin.com/company/prometheusph/"
              className="text-blue-500"
            >
              {" "}
              LinkedIn.
            </a>{" "}
          </p>
          <p className="text-[#FFFFFF] px-10 sm:px-20  sm:text-[15px]  font-ox">
            Reach Prometheus via email at{" "}
            <a href="mailto:marketing@prometheus.ph" className="text-blue-500">
              {" "}
              marketing@prometheus.ph.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDescription;
