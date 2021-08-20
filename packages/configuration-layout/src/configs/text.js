export default {
    name: 'text',
    drag: {
        title: '文本框',
        suffixIcon: 'input',
    },
    drop: {
        tagName: 'chan-drop-text'
    },
    editor: {
        text: '文字',
        align: '位置'
    },
    configuration: {
        data: {
            text: '文字'
        },
        style: {
            // textAlign: LEFT,
            // height: 'auto',
            width: '100%',
            fontSize: '14',
        }
    }
}