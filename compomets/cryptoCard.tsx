import transakSDK from "@transak/transak-sdk"
import { motion } from "framer-motion"

let transak = () =>
  new transakSDK({
    apiKey: process.env.NEXT_PUBLIC_API, // Your API Key (Required)
    environment: "STAGING", // STAGING/PRODUCTION (Required)
    walletAddress: openKeyValue, // Your customer wallet address
    themeColor: "000000", // App theme color in hex
    email: "", // Your customer email address (Optional)
    redirectURL: "/",
    widgetHeight: "550px",
    widgetWidth: "450px",
  }).init()

const openKeyValue = "0x7165662174c8b2A4e97d6321bb8caeBb3179940C"

const CryptCard = () => {
  return (
    <>
      <motion.div
        initial={{ y: 40,opacity: 0.2 }}
        animate={{ y: 0, opacity: 1 }}
        viewport={{ amount: "some" }}
        transition={{ duration: 0.3 }}
      >
        <h2 style={{ marginLeft: "22px" }} className="text-[30px] w-[100px]">
          Ethereum 🪙
        </h2>
        <div className="mx-2 exp__wrapper text-[rgb(51,51,51)]">
          <div
            style={{
              borderBlockStartColor: "rgb(117, 189, 255)",
              borderRadius: "6px",
              borderTopLeftRadius: "4px",
              borderTopRightRadius: "4px",
              borderTopWidth: "5px",
              paddingBottom: "24px",
              paddingLeft: "32px",
              paddingRight: "32px",
              paddingTop: "24px",
              marginRight: "24px",
              marginLeft: "24px",
              marginBottom: "8px",
              wordBreak: "break-word",
            }}
            className={"btn-radius rounded-[6px] card link-edit bg-white"}
          >
            <div
              style={{
                fontSize: "13.9px",
                lineHeight: "23.66px",
                textDecorationColor: "rgb(117, 189, 255)",
                WebkitTextFillColor: "rgb(117, 189, 255)",
              }}
              className="text-[rgb(117,189,255)]"
            >
              <span
                style={{
                  boxSizing: "border-box",
                  fontFamily: "Rubik, Noto Sans JP, sans-serif",
                }}
              >
                公開鍵
              </span>
              <div onClick={() => transak()} className="cursor-pointer">
                {openKeyValue}
              </div>
            </div>
            <div
              style={{
                fontSize: "19.2px",
                fontWeight: 700,
                lineHeight: "32.64px",
                marginBlock: "3.84px",
                marginTop: "3.84px",
              }}
            >
              0.18ETH
            </div>
            <div
              style={{
                color: "rgba(58, 60, 72, 0.45)",
                fontSize: "14.72px",
                lineHeight: "25px",
              }}
              className="exp__description"
            >
              <span className="">デリバティブ商品</span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
export default CryptCard
