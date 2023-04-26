import { Link } from "react-router-dom";

type User = {
  username: "string";
  email: "string";
};

const SignIn = () => {
  return (
      <div className="card md:max-w-xl bg-base-100 shadow-xl">
        <h3>Iniciar Sesión</h3>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>

  );
};

export default SignIn;
