import { FaFolder } from "react-icons/fa"
import { FcBusinessman } from "react-icons/fc"
import { IoLogoIonic, IoSettings } from "react-icons/io5"

const Sidebar = () => {
  return (
    <section className="bg-[#223145] flex flex-col flex-shrink-0 gap-8 pt-8 h-screen w-[60px] items-center
       border-r-2 border-[rgba(127,126,126,0.55)] text-white hover:cursor-pointer
    ">
      <IoLogoIonic size={25} />

      <FaFolder size={25} />
      <FcBusinessman size={25} />
      <IoSettings size={25} />

    </section>
  )
}


export default Sidebar