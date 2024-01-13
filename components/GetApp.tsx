import Button from "@/common/Button";
import Image from "next/image";

const GetApp = () => {
   return (
      <section className="flexCenter flex-col w-full pb-[100px]">
         <div className="get-app">
            <div className="z-20 w-full flex flex-1 flex-col items-start justify-center gap-12">
               <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
                  Get for free now!
               </h2>
               <p className="regular-16 text-gray-10">
                  Available on iOS and Android
               </p>
               <div className="w-full flex flex-col gap-3 whitespace-nowrap xl:flex-row">
                  <Button
                     type="button"
                     label="App Store"
                     icon="/apple.svg"
                     variant="btn_white"
                     full
                  />
                  <Button
                     type="button"
                     label="Play Store"
                     icon="/android.svg"
                     variant="btn_dark_green_outline"
                     full
                  />
               </div>
            </div>

            <div className="flexEnd flex-1">
               <Image
                  src={"/phones.png"}
                  alt="phones"
                  width={550}
                  height={870}
               />
            </div>
         </div>
      </section>
   );
};

export default GetApp;
