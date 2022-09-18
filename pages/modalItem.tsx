import { FC, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import css from "styled-jsx/css"
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace"

const { className, styles } = css.resolve`
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  .wrapper {
    position: absolute;
    top: 270px;
    left: 28%;
    width: 300px;
    height: 400px;
    border-radius: 8px;
    padding: 10px;
    background: #111123;
    z-index: 10;
    transform: translateX(-50%);
  }
  button {
    border: none;
    border-radius: 8px;
    width: 100px;
    height: 30px;
    background: #111123;
    color: white;
  }
`

type Props = {
  isVisible: boolean
  onClose: () => void
  children: ReactJSXElement
}

export const Modal: FC<Props> = ({ isVisible, onClose, children }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className={`${className} overlay`} onClick={onClose} />
          <div className={`${className} wrapper left-[50%]`}>{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <div className={`${className} wrapper bg-transparent`}>
        <motion.button
          whileTap={{ scale: 1.5 }}
          className={`${className} absolute max-md:right-[150px]`}
          onClick={() => setIsVisible(true)}
        >
          wallet
        </motion.button>
      </div>
      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}>
        <div className="text-white">wallet</div>
      </Modal>
      {styles}
    </>
  )
}
