import Link from "next/link";
import Image from "next/image";
import logoImg from "@/../public/images/Logo_500x250.png";

const Logo = () => {
   return (
      <Link href={'/'}>
         <Image src={logoImg} width={150} priority={true} alt="Логотип"/>
      </Link>
    );
}

export default Logo;