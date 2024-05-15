// components/About.tsx

const About: React.FC = () => {
  return (
    <div className="flex z-20 flex-col items-center p-8 border-none">
      <h2 className="text-3xl  font-bold text-gray-100 mb-6 text-center">
        Enhancing Agriculture, One Seed at a Time
      </h2>
      <p className="text-2xl font-light text-gray-100 mb-8 text-center">
        At Ago Input Store, we are dedicated to revolutionizing farming practices by providing
        high-quality fertilizers and seeds tailored to your needs. Our mission is to empower
        farmers with the tools they need to thrive in today&apos;s agricultural landscape.
      </p>
      <button className="hover:border-1 hover:bg-gray-500 text-white border-1 text-xl font-bold py-4 px-8 rounded">
        Let&apos;s get started!
      </button>
    </div>
  );
};

export default About;
