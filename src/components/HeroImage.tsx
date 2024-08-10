import logo from "../../public/portfolioLogo.png";
import Image from "next/image"

const HeroImage = ()  => {



    return(
        <>
          <Image className="ml-auto max-sm:ml-0 max-sm:mt-10 max-sm:w-1/2 max-sm:h-1/2"
          src={logo}
          alt="logo"
          loading="eager"
          priority
          height={350}
          width={350}
        />
        </>
    )
}
export default HeroImage