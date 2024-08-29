import Image from "next/image";
import Form from "./components/form";
import "./styles/page.css";

export const metadata = {
  title: "Inicio de sesión",
  description: "asdasd",
};

export default function Login() {
  return (
    <div>
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
            <Image
              src="/leaves.svg"
              alt="leaf"
              style={{
                width: "45rem",
                transform: "translate(-100px, -15px) rotate(25deg)",
                opacity: 0.3,
              }}
              width="100"
              height="100"
            />
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
