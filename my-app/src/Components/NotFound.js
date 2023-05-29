import Notfound from "../img/notFound.png";
const NotFound = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="container">
          <div className="row min-vh-100">
            <div className="col text-light d-flex align-items-center justify-content-center flex-column notFound">
              <div className="img-notFound-wrapper">
                <img src={Notfound} alt="404" className="w-100" />
              </div>
              <h2>PAGE NOT FOUND</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
