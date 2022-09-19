import type { GetServerSideProps, GetStaticProps, NextPage } from "next"
import Image from "next/image"
import CryptoCard from "../compomets/cryptoCard"
import { motion, useScroll } from "framer-motion"
import ModalItem from "../pages/modalItem"
import Link from "next/link"

const Home: NextPage<IndexPageProps> = ({ initialIconImageUrl }) => {
  const { scrollYProgress } = useScroll()
  const IconImage = initialIconImageUrl
  const iconName = 'eternaleight'

  return (
    <div className="flex flex-col items-center min-h-screen text-white min-w-screen">
        <Link href="/eternaleight">
      <h3 className="absolute text-[25px] text-center top-[435px]">
        <a className='absolute z-[20] cursor-pointer text-transparent'>{iconName}</a>
          <a>{iconName}</a>
      </h3>
        </Link>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
      <div className="">
        <div className="absolute left-[4vw] top-2 text-[30px] tracking-[-.015em]">
          Crypto Stand
        </div>
      </div>
      <div className="bg-[#111123] w-[100vw] h-[65px]"></div>
      <div className="profile-default-gradient w-screen h-[280px] mb-[230px]">
        <div className="w-[150px] relative h-[150px] rounded-full bg-[#111123] mx-auto mt-[205px]">
          <div className="absolute top-[5px] left-[5px] ">
            <Image
              width="140px"
              height="140px"
              className="rounded-full"
              src={IconImage}
            />
            {/* <CircularProgress /> */}
          </div>
          <div className="flex">
            <h1 className="absolute top-[-180px] ml-[-80px] lg:ml-[200px] xl:ml-[300px] w-[335px] break-words">
              <span className="">
                twitter &nbsp;&nbsp;&nbsp;&nbsp;@initialcommit0
              </span>
            </h1>
            <h1 className="absolute top-[-90px] ml-[-80px] lg:ml-[200px] xl:ml-[300px] w-[335px] break-words">
              youtube &nbsp;&nbsp;&nbsp;initial commit
            </h1>
            {/* <h1 className="absolute top-[10%] ml-[-80px] lg:ml-[220px] w-[350px] break-words"> */}
            {/*   福岡 &nbsp;&nbsp;&nbsp;initialcommit0@gmail.com */}
            {/* </h1> */}
          </div>
        </div>
      </div>
      <div className="relative top-[-180px] left-[350px] max-lg:left-[240px] max-md:left-[140px] h-[40px] md:h-[auto] w-[40px] md:w-[auto] btn-radius maru-button link-edit py-[10px] px-[22.5px] bg-white rounded-full z-[0] text-[rgb(51,51,51)] text-[14px] cursor-pointer opacity-[1] tracking-tight leading-[19.7px] xl:left-[450px]">
        <div className="relative md:text-[14px] text-xl top-[-4px] right-[10px] md:right-0 md:top-0">
          🍴
          <span className="invisible md:visible ">Crypto Standを編集</span>
        </div>
      </div>
      <div className="w-[85vw] flex flex-col items-center">
        <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-sm:w-[400px]">
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <CryptoCard />
          <div className="h-[10vh]"></div>
          <ModalItem />
        </div>
      </div>
    </div>
  )
}
type IndexPageProps = {
  initialIconImageUrl: string
}

export const getStaticProps: GetStaticProps<IndexPageProps> = async () => {
  const iconImage = "/eternaleight.jpg"
  return {
    props: {
      initialIconImageUrl: iconImage,
    },
  }
}

export default Home
