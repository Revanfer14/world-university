const Footer = (props) => {
  const { background } = props;
  return (
    <footer className={`text-black py-1 ${background} w-full`}>
      <div className="container mx-auto px-4">
        <h1 className="text-center font-bold">
          © 2025 Revan. All rights reserved.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
