<!--
 * @Author: pimzh
 * @Date: 2021-03-30 11:13:27
 * @LastEditTime: 2021-03-30 17:51:54
 * @LastEditors: pimzh
 * @Description:
-->
<script>
import Dragable from './DistDragable'

export default {
  name: 'Demo',
  comments: {
    Dragable
  },
  methods: {
    handleDragStart (e) {
      console.error(e)
    }
  },
  render (h) {
    return h('Dragable', {
      class: 'demo',
      on: {
        'on-drag-start': this.handleDragStart
      }
    }, [
      'hello'
      // baseComp
    ])
  }
}
</script>

<style scoped>
.demo {
  padding-right: 10px;
}
</style>
