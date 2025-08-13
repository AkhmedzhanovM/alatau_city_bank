import { corners } from "@/data/corners"
import { ArrowDown, X, Zap } from "lucide-react"

interface QRProps{
  closeModal: () => void
}

export const QR:React.FC<QRProps> = ({ closeModal }) => {
    return(
        <div className="bg-gray-500/50 fixed inset-0">
            <X onClick={closeModal} className="bg-white text-black rounded-full size-8 p-1 absolute right-8 top-10 cursor-pointer" />
            <div className="flex flex-col items-center justify-center h-full text-center">
                <span className="">Place the QR-code<br />in the scanning frame</span>
                <ArrowDown className="text-neutral-400 my-1" />
                <div className="bg-transparent w-80 h-80 rounded-2xl my-5 relative" >
                    {corners.map((corner, i) => (
                        <div key={i} className={corner.style} />
                    ))}
                </div>
                <div className="flex justify-center items-center gap-x-2 border-2 border-white rounded-[10px] w-28 h-8 cursor-pointer">
                    <Zap className="text-black fill-black bg-white rounded-full p-1 size-4" />
                    <span className="">Flash</span>
                </div>
            </div>
        </div>
    );
}

// import { corners } from "@/data/corners";
// import { ArrowDown, X, Zap } from "lucide-react";

// export const QR = ({ closeModal }:any) => {
//   return (
//     <div className="fixed inset-0 z-50">
//       {/* Overlay that cuts a hole exactly over the frame */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div
//           className="absolute bg-gray-500/50 inset-0"
//           style={{
//             WebkitMask: `
//               linear-gradient(#000 0 0) content-box, 
//               linear-gradient(#000 0 0)
//             `,
//             WebkitMaskComposite: "xor",
//             maskComposite: "exclude",
//             padding: "0", // no auto-centering
//           }}
//         >
//           {/* The transparent square aligned with the frame */}
//           <div
//             className="absolute rounded-2xl"
//             style={{
//               top: "50%", // start from middle
//               left: "50%",
//               transform: "translate(-50%, -50%)", // center over frame
//               width: "20rem", // matches w-80
//               height: "20rem", // matches h-80
//               background: "transparent",
//             }}
//           />
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex flex-col items-center justify-center h-full text-center relative z-10">
//         <X
//           onClick={closeModal}
//           className="bg-white text-black rounded-full size-8 p-1 absolute right-8 top-10 cursor-pointer"
//         />
//         <span>Place the QR-code<br />in the scanning frame</span>
//         <ArrowDown className="text-neutral-400 my-1" />

//         <div className="relative w-80 h-80 rounded-2xl my-5">
//           {corners.map((corner, i) => (
//             <div key={i} className={corner.style} />
//           ))}
//         </div>

//         <div className="flex justify-center items-center gap-x-2 border-2 border-white rounded-[10px] w-28 h-8 cursor-pointer">
//           <Zap className="text-black fill-black bg-white rounded-full p-1 size-4" />
//           <span>Flash</span>
//         </div>
//       </div>
//     </div>
//   );
// };
