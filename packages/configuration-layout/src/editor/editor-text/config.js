const LEFT = 'left'
const CENTER = 'center'
const RIGHT = 'right'

export const positionConfig = {
    [LEFT]: '靠左',
    [CENTER]: '居中',
    [RIGHT]: '靠右'
}

export const positionOptions = Object.keys(positionConfig).map(key => ({
    value: key,
    label: positionConfig[key]
}))

export const fontSizeOptions = ['12', '13', '14', '15', '16', '20']

export const defaultConfig = {
    data: {
        text: '编辑文字',
    },
    style: {
        textAlign: LEFT,
        height: 'auto',
        width: '100%',
        fontSize: '14',
    }
}