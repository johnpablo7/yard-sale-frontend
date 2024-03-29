import { useState } from "react";
import { RiEyeLine, RiEyeOffLine, RiLockLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import logoYard from "../../../../assets/logos/logo_yard_sale.svg";

export const NewPassword = () => {
  const [showPasswordFirst, setShowPasswordFirst] = useState(false);
  const [showPasswordSecond, setShowPasswordSecond] = useState(false);
  const [passwordFirst, setPasswordFirst] = useState("");
  const [passwordSecond, setPasswordSecond] = useState("");

  const navigate = useNavigate();

  const { token } = useParams();
  // console.log(token);

  // Funcionalidad para validar token
  if (token !== "123456789") {
    navigate("/");
  }

  const handleShowPasswordFirst = () => {
    setShowPasswordFirst(!showPasswordFirst);
  };
  const handleShowPasswordSecond = () => {
    setShowPasswordSecond(!showPasswordSecond);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(passwordFirst,passwordSecond);

    if ([passwordFirst, passwordSecond].includes("")) {
      toast.error("Todos los campos son obligatorios", {
        theme: "dark",
      });
      return;
    }

    if (passwordFirst.length < 6 || passwordSecond.length < 6) {
      toast.warning("El password debe contener al menos 6 caracteres", {
        theme: "dark",
      });
      return;
    }

    if (passwordFirst !== passwordSecond) {
      toast.error("Los passwords no son iguales", {
        theme: "dark",
      });
      return;
    }

    toast.success("Tu password se cambio correctamente", {
      theme: "dark",
    });

    // VALIDAR QUE EL EMAIL NO EXISTA EN LA BASE DE DATOS

    // ENVIAR EMAIL DE VERIFICACION
    console.log("Toda la funcionalidad del restablecer password");
  };

  return (
    <div className="md:w-96 w-full">
      <img
        src={logoYard}
        alt="logo_yard_sale"
        className="mx-auto w-36 lg:hidden"
      />
      <h1 className="text-lg font-bold text-center mt-16">
        Create a new password
      </h1>
      <p className="text-lg text-boulder leading-5 mt-2 mb-10 text-center mx-auto">
        Enter a new password for your account
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-sm font-bold mb-1">Password</label>
        <div className="relative mb-6">
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPasswordFirst ? "text" : "password"}
            className="bg-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="************"
            value={passwordFirst}
            onChange={(e) => setPasswordFirst(e.target.value)}
          />

          {showPasswordFirst ? (
            <RiEyeOffLine
              onClick={handleShowPasswordFirst}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPasswordFirst}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>

        <label className="text-sm font-bold mb-1">Re-enter password</label>
        <div className="relative mb-6">
          <RiLockLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={showPasswordSecond ? "text" : "password"}
            className="bg-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="************"
            value={passwordSecond}
            onChange={(e) => setPasswordSecond(e.target.value)}
          />
          {showPasswordSecond ? (
            <RiEyeOffLine
              onClick={handleShowPasswordSecond}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeLine
              onClick={handleShowPasswordSecond}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        <div>
          <button className="bg-primary text-white w-full rounded-lg py-4 mt-2 hover:bg-green-800 transition-colors">
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};
