'use client';

import { services } from "@/data/services";
import { useModal } from "@/hooks/useModal";
import { QR } from "./QR";
import { transfers } from "@/data/transfers";

export const Services = () => {
  const { isModal, openModal, closeModal } = useModal()

  return(
    <div className="flex justify-center">
      <div className="text-white my-10 flex flex-col items-center w-fit">
        <div className="grid grid-cols-4 gap-4">
          {services.map((service, i) => (
            <button onClick={openModal} className="flex flex-col items-center cursor-pointer" key={i}>
              <service.icon className={service.color} />
              {service.name}
            </button>
          ))}

          {isModal && <QR closeModal={closeModal} />}
        </div>

        <div className="my-10 w-full">
          <div className="text-white flex justify-around">
            {transfers.map((transfer, i) => (
              <div className="flex justify-center border border-fuchsia-700 gap-2 w-40 py-1 rounded-2xl cursor-pointer" key={i}>
                <transfer.icon1 className={transfer.color} />
                  <h3 className="">{transfer.name}</h3>
                  <transfer.icon2 className={transfer.color} />
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}