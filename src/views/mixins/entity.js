export default {
    inject: ["babylon"],
    watch: {
        value: {
            handler: "applyPosition",
            deep: true
        }
    },
    data() {
        return {
            sceneElement: undefined
        };
    },
    props: {
        value: {
            type: Object, default: () => {
            }
        }
    },
    render: function (h) {
        return h();
    },
    mounted() {
        this.addToScene();
        this.applyPosition();
    },
    beforeDestroy() {
        this.removeFromScene();
    },
    methods: {
        addToScene() {
            console.warn(this.$options.name + "组件:未注册addToScene()方法");
        },
        removeFromScene() {
            if (!this.sceneElement) return;
            this.sceneElement.dispose();
        },
        applyPosition() {
            if (!this.sceneElement) return;
            if (this.value.position)this.sceneElement.position = new this.BABYLON.Vector3(...this.value.position)
        }
    }
};
