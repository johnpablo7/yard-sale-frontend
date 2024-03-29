import { useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logoYard from "../../../../assets/logos/logo_yard_sale.svg";

export const PasswordRecoveryOne = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(password, email);

    if ([email].includes("")) {
      toast.error("El email es obligatorio", {
        theme: "dark",
      });
      return;
    }

    // VERIFICAR QUE EL EMAIL EXISTA
    // ENVIAR EMAIL DE RECUPERACIÓN DE CONTRASEÑA
    console.log("Toda la funcionalidad de recuperar password");

    toast.success("Se han enviado las instrucciones a tu email", {
      theme: "dark",
    });
  };

  return (
    // Aqui va un p-5 que lo tiene el AuthLayout para todos los formularios o paginas.
    <div className="md:w-96 w-full">
      <img
        src={logoYard}
        alt="logo_yard_sale"
        className="mx-auto w-36 lg:hidden"
      />
      <h1 className="text-lg font-bold text-center mt-20">Password recovery</h1>
      <div className="flex items-center justify-items-center mx-auto md:w-[270px]">
        <p className="text-lg text-boulder leading-5 mt-2 text-center">
          Inform the email address used to create your account
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <label className="text-sm font-bold mb-1 mt-4">Email address</label>
        <div className="relative mb-6">
          <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            className="bg-alabaster w-full rounded-lg py-2 px-8 outline-none border border-gray-200"
            placeholder="camilayokoo@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button className="bg-primary text-white w-full rounded-lg py-4 mb-7 hover:bg-green-700 transition-colors font-bold">
            <Link to="/">Submit</Link>
          </button>
        </div>
        <div className="text-primary text-center text-sm">
          <Link to="/">Back to log in</Link>
        </div>
      </form>
    </div>
  );
};
