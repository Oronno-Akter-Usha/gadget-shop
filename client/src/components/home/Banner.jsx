const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          //   "url(https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-white-background_155003-3942.jpg?t=st=1731551970~exp=1731555570~hmac=cade0b706561034c2b37af01f1de52bc4d053e8a7c8b50bd63d7a79034724fbb&w=900)",
          "url(https://img.freepik.com/free-photo/workplace-business-modern-male-accessories-laptop-black-background_155003-3944.jpg?t=st=1731551843~exp=1731555443~hmac=bc3595530ec756729f16ba9594954563a83686df9e26de438ae776f9f86fb853&w=900)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
