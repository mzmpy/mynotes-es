import { defineComponent } from 'vue'
import styles from '@/components/mdx/constituents/styles/utils-commonImg.module.css'

export default defineComponent({
  name: 'ComImg',
  props: {
    src: {
      type: String,
      default: () => ''
    },
    alt: {
      type: String,
      default: () => ''
    },
    width: {
      type: Number,
      default: () => 0
    },
    height: {
      type: Number,
      default: () => 0
    }
  },
  setup(props) {
    return () => {
      return <>
        <div class={ styles('img-container') }>
          {
            props.width && props.height
              ? <img alt={ props.alt } src={ props.src } width={ props.width } height={ props.height }></img>
              : props.width
                ? <img alt={ props.alt } src={ props.src } width={ props.width }></img>
                : props.height
                  ? <img alt={ props.alt } src={ props.src } height={ props.height }></img>
                  : <img alt={ props.alt } src={ props.src }></img>
          }
        </div>
      </>
    }
  }
})
