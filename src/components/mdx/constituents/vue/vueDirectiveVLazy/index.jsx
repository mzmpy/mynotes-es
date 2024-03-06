import { defineComponent, withDirectives } from 'vue'
import styles from '@/components/mdx/constituents/vue/vueDirectiveVLazy/index.module.css'
import catGirlImg from '@/assets/images/catgirl.jpg'
import defaultImg from '@/assets/images/nopic.svg'

export default defineComponent({
  name: 'LazyPicture',
  setup() {
    const data = {
      'http://example.com/catgirl.jpg': catGirlImg
    }

    const VLazy = {
      beforeMount(el, binding) {
        el.dataset.src = el.src
        el.src = defaultImg
      },
      mounted(el, binding) {
        const lazy = binding.value

        if(lazy) {
          // 这里有个大坑。。。
          // IntersectionObserver的回调会在初始化的时候执行一次，
          // 所以务必做好对entry.intersectionRatio和entry.isIntersecting的判断
          let timer = null
          const observer = new IntersectionObserver(([entry]) => {
            if(entry.intersectionRatio > 0.0 && !timer) {
              // 模拟异步数据请求
              timer = setTimeout(() => {
                entry.target.src = data[entry.target.dataset.src]
                if(entry.isIntersecting) {
                  entry.target.removeAttribute('data-src')
                  observer.unobserve(entry.target)
                }
                timer = null
              }, 1000)
            }
          }, {
            rootMargin: '0px 0px 0px 0px',
            threshold: 0.0
          })

          observer.observe(el)
        }
      }
    }

    return () => {
      return <>
        <div class={ styles('content') }>
          {
            withDirectives(
              <img src="http://example.com/catgirl.jpg" class={ styles('cat-girl') }></img>,
              [[VLazy, true]]
            )
          }
        </div>
      </>
    }
  }
})