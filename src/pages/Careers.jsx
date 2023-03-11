import { motion } from "framer-motion"


const careersVariants = {
  hidden:{
    opacity: 0,
    x: '100vw'
  },
  visible:{
    opacity:1,
    x: 0,
    transition:{type:'spring', duration: 3, delay: 0.5}
  },
  exit:{
    y:'100vw',
    transition:{ease: 'easeInOut', duration: 3}
  }
}


const Careers = () => {
  return (
    <motion.div variants={careersVariants} initial='hidden' animate='visible' exit='exit'>Careers</motion.div>
  )
}

export default Careers