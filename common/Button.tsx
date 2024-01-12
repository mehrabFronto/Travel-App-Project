import Image from "next/image";

type ButtonProps = {
   type: "button" | "submit";
   label: string;
   icon?: string;
   variant: string;
};

const Button = ({ type, label, icon, variant }: ButtonProps) => {
   return (
      <button
         type={type}
         className={`flexCenter gap-x-3 rounded-full border ${variant}`}>
         {icon && (
            <Image
               src={icon}
               alt={label}
               width={24}
               height={24}
            />
         )}
         <label className="bold-16 whitespace-nowrap">{label}</label>
      </button>
   );
};

export default Button;
