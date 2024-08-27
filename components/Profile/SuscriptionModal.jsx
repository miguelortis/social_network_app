import Modal from "../Modal/Modal";

const CheckIcon = (
  <svg
    className="h-5 w-5 text-blue-500"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {" "}
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const SuscriptionModal = ({ openModal, setOpenModal, userSelected }) => {
  return (
    <Modal open={openModal} onClose={() => setOpenModal(false)}>
      <div>
        <div className="h-card-container">
          <div>
            {/* card elements */}
            <div className="relative">
              <div className="s-m-user-cover-wrapper">
                <img src={userSelected?.coverPhoto} />
              </div>
              <div className="flex flex-col">
                <div className="flex w-full h-16">
                  <div className="h-avatar w-1/4">
                    <div className="s-m-img-wrapper">
                      <img src={userSelected?.profilePic} />
                    </div>
                  </div>
                  <div className="h-username ml-9">
                    <span>{userSelected?.nickname}</span>
                    <span className="h-user-name">{`@${userSelected?.userName}`}</span>
                  </div>
                </div>
                <div className="flex m-3 flex-col">
                  <div className="box-suscription">
                    SUSCRÍBETE Y OBTÉN ESTAS VENTAJAS:
                  </div>
                  <ul>
                    <li className="flex items-center text-sm">
                      {CheckIcon}Acceso total al contenido de este usuario
                    </li>
                    <li className="flex items-center text-sm">
                      {CheckIcon}Mensaje directo con este usuario
                    </li>
                    <li className="flex items-center text-sm">
                      {CheckIcon}Cancelar su suscripción en cualquier momento
                    </li>
                  </ul>
                  <div className="s-m-button">
                    <button> Por favor, agregue una tarjeta de pago </button>
                  </div>
                </div>
                <div className="footer">
                  <button onClick={() => setOpenModal(false)}> Cerrar </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default SuscriptionModal;
