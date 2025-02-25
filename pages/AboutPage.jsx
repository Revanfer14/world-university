import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="p-10 font-primary bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center mb-6 text-black">
            About WorldUniversity
          </h1>
          <p className="mb-6 text-black text-lg leading-relaxed">
            WorldUniversity is a comprehensive website where you can explore
            information and key details about countries from all around the
            world. Whether you're a student, traveler, or just curious about
            global diversity, WorldUniversity provides insights into each
            country's geography, culture, economy, and more. With a
            user-friendly interface, it makes discovering nations both engaging
            and informative.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-4 text-black">
            Vision
          </h2>
          <p className="mb-6 text-black text-lg leading-relaxed">
            To become a global education platform that provides access to
            high-quality knowledge for everyone, anytime and anywhere.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-4 text-black">
            Mission
          </h2>
          <ul className="list-disc list-inside space-y-3 text-black text-lg">
            <li>
              <strong>Enhancing Education Accessibility</strong> – Providing
              learning materials from various disciplines that can be accessed
              by anyone.
            </li>
            <li>
              <strong>Supporting Collaborative Learning</strong> – Building an
              interactive academic community that encourages knowledge exchange.
            </li>
            <li>
              <strong>Integrating Technology in Education</strong> – Utilizing
              cutting-edge technology such as AI and data analytics to improve
              learning effectiveness.
            </li>
            <li>
              <strong>Collaborating with Global Institutions</strong> –
              Partnering with universities and educational institutions to offer
              high-quality courses.
            </li>
            <li>
              <strong>
                Providing Internationally Recognized Certifications
              </strong>{" "}
              – Helping participants obtain globally acknowledged credentials.
            </li>
          </ul>

          <h2 className="text-3xl font-semibold mt-10 mb-4 text-black">
            Our Founder
          </h2>
          <p className="mb-6 text-black text-lg leading-relaxed">
            WorldUniversity is a website created by{" "}
            <strong>Revan Ferdinand</strong>, an undergraduate Computer Science
            student at Binus University. Designed as a simple yet informative
            platform, it provides key details about countries worldwide,
            covering aspects like geography, culture, and economy. Revan
            developed WorldUniversity with the goal of making global information
            easily accessible to students, travelers, and anyone interested in
            learning about different nations. Through a user-friendly design,
            the platform offers a convenient way to explore the world from
            anywhere.
          </p>

          <h2 className="text-3xl font-semibold mt-10 mb-4 text-black">
            Contact Us
          </h2>
          <p className="mb-2 text-black text-lg">
            If you have any questions, suggestions, or are interested in
            partnering with us, feel free to reach out:
          </p>
          <ul className="list-none space-y-2 text-black text-lg">
            <li>
              📧 <strong>Email:</strong> support@worlduniversity.com
            </li>
            <li>
              🌐 <strong>Website:</strong> www.worlduniversity.com
            </li>
            <li>
              📍 <strong>Address:</strong> WorldUniversity
            </li>
          </ul>
        </div>
      </div>
      <Footer background="bg-gray-100" />
    </>
  );
};

export default AboutPage;
