function Car({manufacture, type, color}) {
    return {
        manufacture,
        type,
        color,
        unicode: `${+new Date()}-${manufacture}-${type}-${color}`,
    }
}