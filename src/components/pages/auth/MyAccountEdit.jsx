import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const MyAccountEdit = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(password, email);

    if ([password, name, email].includes("")) {
      toast.error("Todos los campos son obligatorios", {
        theme: "dark",
      });
      return;
    }

    if (password.length < 6) {
      toast.warning("El password debe contener al menos 6 caracteres", {
        theme: "dark",
      });
      return;
    }

    console.log("Toda la funcionalidad de mi cuenta editar");
  };

  return (
    // Aqui va un p-5 que lo tiene el AuthLayout para todos los formularios o paginas.
    <div className="md:w-96 w-full">
      <form onSubmit={handleSubmit} className="flex flex-col mt-20">
        <label className="text-lg font-bold">My account</label>
        <label className="text-sm font-bold mb-1 mt-12">Name</label>
        <div className="relative mb-6">
          <input
            type="text"
            className="bg-alabaster w-full rounded-lg py-2 px-2 outline-none border border-gray-200"
            placeholder="Camila Yokoo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <label className="text-sm font-bold mb-1">Email address</label>
        <div className="relative mb-6">
          <input
            type="email"
            className="bg-alabaster w-full rounded-lg py-2 px-2 outline-none border border-gray-200"
            placeholder="camilayokoo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <label className="text-sm font-bold mb-1">Password</label>
        <div className="relative mb-6">
          <input
            type={showPassword ? "text" : "password"}
            className="bg-alabaster w-full rounded-lg py-2 px-2 outline-none border border-gray-200"
            placeholder="************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <RiEyeOffLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <div>
          <button className="bg-primary text-white w-full rounded-lg py-4 mt-28 md:mt-6 hover:bg-green-700 transition-colors font-bold">
            <Link to="/registro">Edit</Link>
          </button>
        </div>
      </form>
    </div>
  );
};
