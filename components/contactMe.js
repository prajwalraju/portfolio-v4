import data from "../data/config.json";
import Link from "next/link";
import Image from "next/image";

function ContactMe() {

  return (
    <div className="pt-5 flex gap-10 items-center justify-center">
        {data.contactDetails.map(value => (
          <Link href={value.link} key={value.name}>
            <Image className="vectorIcon " alt="" height={30} width={30} src={value.logo} />
          </Link>
        ))}
    </div>
  )
}

export default ContactMe