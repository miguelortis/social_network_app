import Image from "next/image";
import Form from "./components/form";
import "./styles/page.css";

export const metadata = {
  title: "Inicio de sesión",
  description: "asdasd",
};

export default function Login() {
  return (
    <div className="h-screen">
      <div className="c-login w-full flex">
        <div className="w-2/4 c-left justify-end flex">
          <div className="pt-20 h-full w-[45rem] overflow-hidden">
            <div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <span className="title">Only</span>
                <span className="title2">Voyer</span>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2 className="subtitle">
                  Registrate ya y disfruta del contenido.
                </h2>
              </div>
            </div>
            <div className="c-img">
              <Image
                src="/leaves.svg"
                alt="leaf"
                className="img"
                width="1000"
                height="1000"
              />
            </div>
          </div>
        </div>
        <div className="w-2/4 c-right justify-start flex">
          <div className="h-full w-[45rem] pt-20">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
}
