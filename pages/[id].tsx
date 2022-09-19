import { GetServerSideProps, GetStaticProps } from "next"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

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

const Product = ({ product }: Props) => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%] text-white">
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
      </div>
    </div>
  )
}
export default Product
