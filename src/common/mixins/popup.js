const eventShow = 'show'
const eventHide = 'hide'
export default {
    data() {
        return {
            visible: false
        }
    },
    methods: {
        show() {
            this.visible = true
            this.$emit(eventShow)
        },
        hide() {
            this.visible = false
            this.$emit(eventHide)
        }
    }
}
