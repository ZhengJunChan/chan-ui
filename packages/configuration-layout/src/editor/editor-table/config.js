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

export const defaultConfig = {
    text: '',
    align: LEFT
}