import { GetServerSideProps, GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { ReactNode } from "react"

export const getStaticPaths = async () => {
  const API_URL = process.env.NEXT_PUBLIC_URL
  const req = await fetch(`${API_URL}/products.json`)
  const data = await req.json()

  const paths = data.map((product: any) => {
    return {
      params: { id: product },
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const API_URL = process.env.NEXT_PUBLIC_URL
  const req = await fetch(`${API_URL}/${params?.id}.json`)
  const data = await req.json()

  return { props: { product: data } }
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//     const API_URL = process.env.NEXT_PUBLIC_URL
//   const req = await fetch(`${API_URL}/${context.params?.id}.json`)
//     const data = await req.json()

//   return {
//     props: { product: data },
//   }
// }

type Props = {
  product: {
    id: string
    name: string
    url: string
  }
}

export const For = <T,>({v,children}:{
  v: [T, (v: T) => unknown, (v: T) =>T];
  children: (v: T, index: number) => ReactNode}) => {
  let index = 0
  const value: ReactNode[] = []
  for (let i = v[0]; v[1](i); i = v[2](i)) {
    value.push(children(i, index++))
  }
  return <>{value}</>
}

const Product = ({ product }: Props) => {
  const router = useRouter()
  const { id } = router.query
  const style = {
    square: `w-8 h-8`,
    HYPER: `bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500`,
    OCEANIC: `bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600`,
    COTTON_CANDY: `bg-gradient-to-tr from-pink-300 via-purple-300 to-indigo-400`,
    GOTHAM: `bg-gradient-to-tr from-gray-700 via-gray-900 to-black`,
  }


  return (
    <div>
      <div className="flex text-white">
        <div>
          <For v={[0, (i) => i < 8, (i) => i + 1]}>
            {(i, index) => (
              <button key={i}>
                {index + 1}番目は[{i}]
          <div className={`${style.square} ${style.HYPER}`}></div>
              </button>
            )}
          </For>

        </div>
      </div>
      <motion.div
        initial={{
          rotateX: 0,
          y: "-35%",
          x: "-50%",
          opacity: 0.2,
        }}
        animate={{ rotateY: 0, y: "-55%", x: "-50%", opacity: 1 }}
        viewport={{ amount: "some" }}
        transition={{
          duration: 1.8,
          ease: [0.6, 0.2, 0.25, 1],
          times: [0, 0.02, 0.88, 1],
          delay: 0.2,
        }}
        className="absolute top-[50%] left-[50%] text-white"
      >
        <Image
          className="rounded-[8px]"
          src={product.url}
          width="300"
          height="300"
        />
        <p>{product.name}</p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </motion.div>
    </div>
  )
}
export default Product
