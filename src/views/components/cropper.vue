<template>
    <Modal v-model="visible"
                :width="showPreview?650:520"
                :closable="false"
                :mask-closable='false'
                class-name="cropper-center-modal">
        <div>
            <div class="copper-wrap">
                <img ref="image">
            </div>
            <input id="myCropper-input" type="file" accept="image/gif,image/jpeg,image/png,image/bmp" @change="change">
            <span class='ry-color' style="padding: 5px;margin-top: 10px; margin-left: -5px;display: inline-block;cursor: pointer;font-size: 14px;background:#fff" @click='chooseAgain'>重新上传</span>
        </div>
        <div style="flex:1" v-show='showPreview'>
            <div class="copper-img-preview"></div>
            <p style="line-height:50px;text-align: center;font-size: 14px;color:#999">头像预览</p>
        </div>
        <template slot="footer">
            <Button  type="success"
                       @click="upload">保存</Button >
            <Button  @click="cancel">取消</Button >
        </template>
    </Modal>
</template>
<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export default {
    name: 'cropper',
    model: {
        prop: 'file',
        event: 'input'
    },
    props: {
        showPreview:{
            type:Boolean,
            default: true
        },
        title: String,
        file: [File, Object],
        option: Object,
        output: {
            type: Object,
            default () {
                return {
                    width: 120,
                    height: 120,
                    imageSmoothingQuality: 'medium'
                }
            }
        }
    },
    data () {
        return {
            visible: false,
            loading: false,
            cropper: null
        }
    },
    watch: {
        file (val) {
            val ? this.readFile() : this.destroyCropper()
        },
        visible (val) {
            this.$emit(val ? 'open' : 'hide')
        }
    },
    methods: {
        destroyCropper () {
            this.cropper.destroy()
            this.cropper = null
        },
        readFile () {
            this.visible = true
            this.loading = true
            const reader = new FileReader()
            reader.onload = () => {
                const $img = this.$refs.image
                $img.src = reader.result
                if (this.cropper) this.destroyCropper()
                this.cropper = new Cropper($img, this.option)
                this.loading = false
            }
            this.$nextTick(() => {
                reader.readAsDataURL(this.file)
            })
        },
        upload () {
            this.visible = false
            this.$emit('beforeUpload')
            this.cropper.getCroppedCanvas(this.output).toBlob(file => {
                this.$emit('upload', file)
            })
        },
        cancel () {
            this.visible = false
            this.$emit('input', null)
        },
        chooseAgain () {
            // 模拟input点击选择文件
            document.getElementById('myCropper-input').click();
        },
        change(e) {
            // this.file = e.target.files[0]
            this.$emit('input',e.target.files[0])
            this.visible = true
            e.target.value = ''

        },
    }
}
</script>
<style lang='less'>
.cropper-center-modal{
    .ivu-modal-body{
        display: flex;
        padding: 30px;
        justify-content: center;
        padding-bottom: 0;
    }
    .copper-wrap {
        min-height: 200px;
        max-height: 350px;
        overflow: hidden;
        width: 400px;
    }
    .copper-img-preview{
        height: 100px;
        width: 100px;
        overflow: hidden;
        border-radius: 50px;
        border: 1px solid #ccc;
        margin: 50px 0 0 45px;
    }
    #myCropper-input{
        height: 0;
        width: 0;
        margin-left: 10px;
    }
}
</style>
